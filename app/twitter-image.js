import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Clashofclan Layout - Best Base Layouts for Clash of Clans';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0c1222 0%, #1a1f35 50%, #0c1222 100%)',
          position: 'relative',
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '40px',
          }}
        >
          {/* Logo text */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: '#f59e0b',
              marginBottom: 20,
              textShadow: '0 4px 12px rgba(245, 158, 11, 0.3)',
            }}
          >
            Clashofclan Layout
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 36,
              color: '#ffffff',
              marginBottom: 30,
              opacity: 0.9,
            }}
          >
            Best Base Layouts for Clash of Clans
          </div>

          {/* Features */}
          <div
            style={{
              display: 'flex',
              gap: 40,
              marginTop: 20,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px 30px',
                background: 'rgba(245, 158, 11, 0.1)',
                borderRadius: 12,
                border: '1px solid rgba(245, 158, 11, 0.3)',
              }}
            >
              <div style={{ fontSize: 32, fontWeight: 'bold', color: '#f59e0b' }}>TH3-TH18</div>
              <div style={{ fontSize: 18, color: '#9ca3af' }}>All Levels</div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px 30px',
                background: 'rgba(245, 158, 11, 0.1)',
                borderRadius: 12,
                border: '1px solid rgba(245, 158, 11, 0.3)',
              }}
            >
              <div style={{ fontSize: 32, fontWeight: 'bold', color: '#f59e0b' }}>1000+</div>
              <div style={{ fontSize: 18, color: '#9ca3af' }}>Base Layouts</div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px 30px',
                background: 'rgba(245, 158, 11, 0.1)',
                borderRadius: 12,
                border: '1px solid rgba(245, 158, 11, 0.3)',
              }}
            >
              <div style={{ fontSize: 32, fontWeight: 'bold', color: '#f59e0b' }}>1-Click</div>
              <div style={{ fontSize: 18, color: '#9ca3af' }}>Copy Links</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 8,
            background: 'linear-gradient(90deg, #f59e0b, #fbbf24, #f59e0b)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
