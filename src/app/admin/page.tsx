'use client';

import { useState, useEffect } from 'react';

interface Article {
  slug: string;
  title: string;
  date: string;
  tag: string;
}

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [token, setToken] = useState<string | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // Vérifier si déjà connecté (token en sessionStorage)
  useEffect(() => {
    const savedToken = sessionStorage.getItem('admin_token');
    if (savedToken) {
      setToken(savedToken);
      fetchArticles(savedToken);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok && data.token) {
        setToken(data.token);
        sessionStorage.setItem('admin_token', data.token);
        fetchArticles(data.token);
      } else {
        setError(data.error || 'Login failed');
      }
    } catch {
      setError('Connection error');
    } finally {
      setLoading(false);
    }
  };

  const fetchArticles = async (authToken: string) => {
    try {
      const res = await fetch('/api/articles', {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      const data = await res.json();
      if (res.ok) {
        setArticles(data.articles || []);
      }
    } catch {
      setError('Failed to fetch articles');
    }
  };

  const handleDelete = async (slug: string, title: string) => {
    if (!confirm(`Supprimer l'article "${title}" ?`)) return;

    setLoading(true);
    setMessage('');
    setError('');

    try {
      const res = await fetch('/api/articles', {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ slug }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(`Article "${title}" supprimé !`);
        setArticles(articles.filter((a) => a.slug !== slug));
      } else {
        setError(data.error || 'Delete failed');
      }
    } catch {
      setError('Connection error');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setToken(null);
    sessionStorage.removeItem('admin_token');
    setArticles([]);
  };

  // Page de login
  if (!token) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">
            🔐 Admin EuropiaTech
          </h1>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-zinc-400 text-sm mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-violet-500"
                placeholder="••••••••"
                required
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-lg transition disabled:opacity-50"
            >
              {loading ? 'Connexion...' : 'Se connecter'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Dashboard admin
  return (
    <div className="min-h-screen bg-zinc-950 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">📝 Gestion des articles</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-zinc-400 hover:text-white transition"
          >
            Déconnexion
          </button>
        </div>

        {message && (
          <div className="mb-4 p-4 bg-green-900/30 border border-green-700 rounded-lg text-green-400">
            {message}
          </div>
        )}

        {error && (
          <div className="mb-4 p-4 bg-red-900/30 border border-red-700 rounded-lg text-red-400">
            {error}
          </div>
        )}

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
          <div className="p-4 border-b border-zinc-800">
            <p className="text-zinc-400">{articles.length} articles</p>
          </div>

          <div className="divide-y divide-zinc-800">
            {articles.map((article) => (
              <div
                key={article.slug}
                className="p-4 flex items-center justify-between hover:bg-zinc-800/50 transition"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-medium truncate">
                    {article.title}
                  </h3>
                  <div className="flex gap-3 mt-1">
                    <span className="text-zinc-500 text-sm">{article.date}</span>
                    <span className="text-violet-400 text-sm">{article.tag}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleDelete(article.slug, article.title)}
                  disabled={loading}
                  className="ml-4 px-4 py-2 bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white rounded-lg transition disabled:opacity-50"
                >
                  Supprimer
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
