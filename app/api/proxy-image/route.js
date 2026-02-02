// API route to proxy external images (bypasses hotlink protection)

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const imageUrl = searchParams.get('url');

  if (!imageUrl) {
    return new Response('Missing url parameter', { status: 400 });
  }

  // Only allow specific domains for security
  const allowedDomains = [
    'static.wikia.nocookie.net',
    'vignette.wikia.nocookie.net',
  ];

  try {
    const url = new URL(imageUrl);
    if (!allowedDomains.some(domain => url.hostname.includes(domain))) {
      return new Response('Domain not allowed', { status: 403 });
    }

    // Fetch the image without Referer header
    const response = await fetch(imageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });

    if (!response.ok) {
      return new Response('Failed to fetch image', { status: response.status });
    }

    const contentType = response.headers.get('content-type') || 'image/png';
    const buffer = await response.arrayBuffer();

    return new Response(buffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400, s-maxage=86400', // Cache for 24 hours
      },
    });
  } catch (error) {
    return new Response('Error fetching image', { status: 500 });
  }
}
