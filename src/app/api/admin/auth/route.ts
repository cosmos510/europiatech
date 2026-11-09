import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const adminPassword = process.env.ADMIN_PASSWORD;

    console.log('Password reçu:', password);
    console.log('Password attendu:', adminPassword);
    console.log('Match:', password === adminPassword);

    if (!adminPassword) {
      return NextResponse.json(
        { error: 'Admin password not configured' },
        { status: 500 }
      );
    }

    if (password === adminPassword) {
      // Retourner un token simple (la clé API articles)
      return NextResponse.json({
        success: true,
        token: process.env.ARTICLES_API_KEY,
      });
    }

    return NextResponse.json(
      { error: 'Invalid password' },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}
