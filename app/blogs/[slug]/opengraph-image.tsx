import { ImageResponse } from 'next/og'
import { getBlogBySlug } from '@/lib/blogs'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const blog = await getBlogBySlug(slug)

  const title = blog?.title ?? 'Blog Post'
  const category = blog?.category ?? 'Article'

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
            fontSize: '20px',
            color: '#8e9b42',
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}
        >
          {category}
        </div>
        <div
          style={{
            fontSize: '60px',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-1px',
            lineHeight: 1.15,
            marginBottom: '48px',
            maxWidth: '900px',
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: '24px',
            color: '#555555',
          }}
        >
          John David Gayagoy • jdgayagoy.is-a.dev
        </div>
      </div>
    ),
    { ...size }
  )
}
