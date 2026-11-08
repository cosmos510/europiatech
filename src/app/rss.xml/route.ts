import { getAllArticles } from '@/lib/articles';

export async function GET() {
  const articles = getAllArticles();
  const siteUrl = 'https://europiatech.eu';

  const rssItems = articles
    .map((article) => {
      return `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${siteUrl}/articles/${article.slug}</link>
      <guid isPermaLink="true">${siteUrl}/articles/${article.slug}</guid>
      <description><![CDATA[${article.excerpt}]]></description>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
      <author>contact@europiatech.eu (${article.author})</author>
      <category>${article.tag}</category>
    </item>`;
    })
    .join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>EuropiaTech — European AI &amp; Deep Tech Analysis</title>
    <link>${siteUrl}</link>
    <description>Independent technical analysis of European AI, sovereign infrastructure and deep tech innovation. For decision-makers, investors and researchers.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${siteUrl}/favicon.svg</url>
      <title>EuropiaTech</title>
      <link>${siteUrl}</link>
    </image>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
