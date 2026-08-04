import { ImageResponse } from 'next/og'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0f0f0f',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontSize: '72px',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-2px',
            lineHeight: 1.1,
            marginBottom: '24px',
          }}
        >
          John David Gayagoy
        </div>
        <div
          style={{
            fontSize: '32px',
            color: '#888888',
            fontWeight: 400,
            marginBottom: '48px',
          }}
        >
          FullStack Developer • Automation Practitioner • Robotics Enthusiast
        </div>
        <div
          style={{
            fontSize: '24px',
            color: '#555555',
          }}
        >
          jdgayagoy.is-a.dev
        </div>
      </div>
    ),
    { ...size }
  )
}
