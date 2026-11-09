import { NextResponse } from 'next/server';
import { marked } from 'marked';

// Configure marked for safe HTML output
marked.setOptions({
  gfm: true,
  breaks: true,
});

interface NewArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  tag: string;
  tagColor: 'violet' | 'pink' | 'cyan' | 'orange' | 'lime';
  readTime: string;
  author?: string;
  featured?: boolean;
  wide?: boolean;
}

export async function POST(request: Request) {
  try {
    // Vérifier l'API key
    const authHeader = request.headers.get('authorization');
    const apiKey = process.env.ARTICLES_API_KEY;

    if (!apiKey || authHeader !== `Bearer ${apiKey}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const article: NewArticle = await request.json();

    // Validation
    if (!article.slug || !article.title || !article.content || !article.excerpt || !article.tag) {
      return NextResponse.json(
        { error: 'Missing required fields: slug, title, content, excerpt, tag' },
        { status: 400 }
      );
    }

    // Générer la date actuelle
    const now = new Date();
    const date = now.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    // Construire l'objet article complet
    // Convertir le Markdown en HTML si nécessaire
    let htmlContent = article.content;
    if (article.content.includes('##') || article.content.includes('**') || article.content.includes('- ')) {
      htmlContent = await marked.parse(article.content);
    }

    const newArticle = {
      slug: article.slug,
      title: article.title,
      excerpt: article.excerpt,
      tag: article.tag,
      tagColor: article.tagColor || 'violet',
      date,
      readTime: article.readTime || '5 min',
      author: article.author || 'Maxime Martin',
      featured: article.featured || false,
      wide: article.wide || false,
      content: htmlContent,
    };

    // GitHub API pour récupérer le fichier actuel
    const githubToken = process.env.GITHUB_TOKEN;
    const repoOwner = process.env.GITHUB_REPO_OWNER || 'cosmos510';
    const repoName = process.env.GITHUB_REPO_NAME || 'blog-tech';
    const branch = process.env.GITHUB_BRANCH || 'main';
    const filePath = 'src/lib/articles.ts';

    if (!githubToken) {
      return NextResponse.json(
        { error: 'GitHub token not configured' },
        { status: 500 }
      );
    }

    // 1. Récupérer le fichier actuel
    const getFileResponse = await fetch(
      `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}?ref=${branch}`,
      {
        headers: {
          'Authorization': `Bearer ${githubToken}`,
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    );

    if (!getFileResponse.ok) {
      const error = await getFileResponse.json();
      return NextResponse.json(
        { error: 'Failed to fetch current articles file', details: error },
        { status: 500 }
      );
    }

    const fileData = await getFileResponse.json();
    const currentContent = Buffer.from(fileData.content, 'base64').toString('utf-8');

    // 2. Insérer le nouvel article dans le tableau
    // Fonction pour nettoyer les strings (enlever retours à la ligne, échapper quotes)
    const cleanString = (str: string) => str
      .replace(/\r?\n/g, ' ')  // Remplacer retours à la ligne par espaces
      .replace(/\s+/g, ' ')     // Normaliser les espaces multiples
      .replace(/'/g, "\\'")     // Échapper les quotes simples
      .trim();

    const newArticleString = `  {
    slug: '${cleanString(newArticle.slug)}',
    title: '${cleanString(newArticle.title)}',
    excerpt: '${cleanString(newArticle.excerpt)}',
    tag: '${cleanString(newArticle.tag)}',
    tagColor: '${newArticle.tagColor}',
    date: '${newArticle.date}',
    readTime: '${newArticle.readTime}',
    author: '${newArticle.author}',${newArticle.featured ? '\n    featured: true,' : ''}${newArticle.wide ? '\n    wide: true,' : ''}
    content: \`
${newArticle.content}
    \`,
  },`;

    // Trouver où insérer (après "export const articles: Article[] = [")
    const searchString = 'export const articles: Article[] = [';
    const insertPoint = currentContent.indexOf(searchString);
    if (insertPoint === -1) {
      return NextResponse.json(
        { error: 'Could not find articles array in file' },
        { status: 500 }
      );
    }

    const arrayStart = insertPoint + searchString.length;
    const updatedContent = 
      currentContent.slice(0, arrayStart) + 
      '\n' + newArticleString + 
      currentContent.slice(arrayStart);

    // 3. Commit le fichier mis à jour
    const commitResponse = await fetch(
      `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${githubToken}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `feat: add article "${newArticle.title}"`,
          content: Buffer.from(updatedContent).toString('base64'),
          sha: fileData.sha,
          branch,
        }),
      }
    );

    if (!commitResponse.ok) {
      const error = await commitResponse.json();
      return NextResponse.json(
        { error: 'Failed to commit new article', details: error },
        { status: 500 }
      );
    }

    const commitData = await commitResponse.json();

    return NextResponse.json({
      success: true,
      article: {
        slug: newArticle.slug,
        title: newArticle.title,
        date: newArticle.date,
        url: `/articles/${newArticle.slug}`,
      },
      commit: {
        sha: commitData.commit.sha,
        url: commitData.commit.html_url,
      },
    });

  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create article', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// GET pour lister les articles (utile pour debug)
export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization');
  const apiKey = process.env.ARTICLES_API_KEY;

  if (!apiKey || authHeader !== `Bearer ${apiKey}`) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  // Import dynamique pour éviter les problèmes de build
  const { articles } = await import('@/lib/articles');
  
  return NextResponse.json({
    count: articles.length,
    articles: articles.map(a => ({
      slug: a.slug,
      title: a.title,
      date: a.date,
      tag: a.tag,
    })),
  });
}

// DELETE pour supprimer un article par slug
export async function DELETE(request: Request) {
  try {
    // Vérifier l'API key
    const authHeader = request.headers.get('authorization');
    const apiKey = process.env.ARTICLES_API_KEY;

    if (!apiKey || authHeader !== `Bearer ${apiKey}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { slug } = await request.json();

    if (!slug) {
      return NextResponse.json(
        { error: 'Missing required field: slug' },
        { status: 400 }
      );
    }

    // GitHub API config
    const githubToken = process.env.GITHUB_TOKEN;
    const repoOwner = process.env.GITHUB_REPO_OWNER || 'cosmos510';
    const repoName = process.env.GITHUB_REPO_NAME || 'blog-tech';
    const branch = process.env.GITHUB_BRANCH || 'main';
    const filePath = 'src/lib/articles.ts';

    if (!githubToken) {
      return NextResponse.json(
        { error: 'GitHub token not configured' },
        { status: 500 }
      );
    }

    // 1. Récupérer le fichier actuel
    const getFileResponse = await fetch(
      `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}?ref=${branch}`,
      {
        headers: {
          'Authorization': `Bearer ${githubToken}`,
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    );

    if (!getFileResponse.ok) {
      const error = await getFileResponse.json();
      return NextResponse.json(
        { error: 'Failed to fetch current articles file', details: error },
        { status: 500 }
      );
    }

    const fileData = await getFileResponse.json();
    const currentContent = Buffer.from(fileData.content, 'base64').toString('utf-8');

    // 2. Trouver et supprimer l'article
    // Pattern pour matcher un article complet par son slug
    const articlePattern = new RegExp(
      `\\s*\\{\\s*slug:\\s*['"\`]${slug}['"\`][^}]*content:\\s*\`[^\`]*\`\\s*,?\\s*\\},?`,
      's'
    );

    if (!articlePattern.test(currentContent)) {
      return NextResponse.json(
        { error: `Article with slug "${slug}" not found` },
        { status: 404 }
      );
    }

    const updatedContent = currentContent.replace(articlePattern, '');

    // 3. Commit le fichier mis à jour
    const commitResponse = await fetch(
      `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${githubToken}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `feat: delete article "${slug}"`,
          content: Buffer.from(updatedContent).toString('base64'),
          sha: fileData.sha,
          branch,
        }),
      }
    );

    if (!commitResponse.ok) {
      const error = await commitResponse.json();
      return NextResponse.json(
        { error: 'Failed to commit article deletion', details: error },
        { status: 500 }
      );
    }

    const commitData = await commitResponse.json();

    return NextResponse.json({
      success: true,
      deleted: slug,
      commit: {
        sha: commitData.commit.sha,
        url: commitData.commit.html_url,
      },
    });

  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete article', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
