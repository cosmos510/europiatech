import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const apiKey = process.env.MAILERLITE_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Newsletter service not configured' },
        { status: 500 }
      );
    }

    // Try the NEW MailerLite API first (api.mailerlite.com with Bearer token)
    // This is for accounts created after 2022
    let response = await fetch(
      'https://connect.mailerlite.com/api/subscribers',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          email: email,
          status: 'active',
          groups: ['183935344868066788'], // subscribers group
        }),
      }
    );

    // If new API fails with 401, try the Classic API
    if (response.status === 401) {
      response = await fetch(
        'https://api.mailerlite.com/api/v2/subscribers',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-MailerLite-ApiKey': apiKey,
          },
          body: JSON.stringify({
            email: email,
            resubscribe: true,
            autoresponders: true,
          }),
        }
      );
    }

    const responseData = await response.json().catch(() => ({}));

    if (!response.ok) {
      // Check if subscriber already exists (not an error for user)
      if (
        response.status === 400 || 
        response.status === 409 ||
        responseData?.message?.includes('already') ||
        responseData?.error?.message?.includes('already')
      ) {
        return NextResponse.json({ 
          success: true, 
          message: 'Already subscribed' 
        });
      }
      
      return NextResponse.json(
        { error: 'Subscription failed. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
    
  } catch {
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}
