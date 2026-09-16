import { ImageResponse } from 'next/og'

export const alt =
  'Ncmaz - Blog, News, Magazine Next.js & Tailwind CSS template'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Drawn rather than photographed: a screenshot of the page would be unreadable
// at the size a social card actually renders.
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        backgroundImage:
          'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
        backgroundSize: '100px 100px',
        padding: '72px 80px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div
          style={{
            display: 'flex',
            width: 44,
            height: 44,
            borderRadius: 12,
            backgroundColor: '#4f46e5',
          }}
        />
        <div
          style={{
            fontSize: 30,
            fontWeight: 600,
            color: '#0f172a',
            letterSpacing: -0.5,
          }}
        >
          Ncmaz
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            fontSize: 72,
            fontWeight: 600,
            color: '#0f172a',
            letterSpacing: -2.5,
            lineHeight: 1.1,
          }}
        >
          Next.js template for
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            fontSize: 72,
            fontWeight: 600,
            color: '#4f46e5',
            letterSpacing: -2.5,
            lineHeight: 1.1,
            marginTop: 4,
          }}
        >
          blog, news &amp; magazine
        </div>
        <div
          style={{
            display: 'flex',
            width: 712,
            height: 10,
            borderRadius: 5,
            backgroundColor: '#c7d2fe',
            marginTop: 12,
          }}
        />
        <div
          style={{
            display: 'flex',
            fontSize: 30,
            color: '#334155',
            lineHeight: 1.45,
            marginTop: 34,
          }}
        >
          Five pre-built home pages, a submission editor, and RTL support.
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          fontSize: 26,
          color: '#475569',
        }}
      >
        <div style={{ display: 'flex' }}>Next.js 16</div>
        <div style={{ display: 'flex', color: '#cbd5e1' }}>/</div>
        <div style={{ display: 'flex' }}>TypeScript 5</div>
        <div style={{ display: 'flex', color: '#cbd5e1' }}>/</div>
        <div style={{ display: 'flex' }}>Tailwind CSS 4</div>
        <div style={{ display: 'flex', color: '#cbd5e1' }}>/</div>
        <div style={{ display: 'flex' }}>Headless UI</div>
      </div>
    </div>,
    size,
  )
}
