import { ImageResponse } from 'next/og'
import { personal } from '@/contents/personal'
import { palette } from '@/lib/theme'

// Imagem que aparece ao compartilhar o link do site (LinkedIn, WhatsApp, X). Gerada a partir de
// personal.ts, na cor escolhida em `color`.
export const alt = `${personal.name} • ${personal.role}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 24,
          padding: 80,
          background: `linear-gradient(135deg, #0f172a 0%, ${palette[950]} 100%)`,
          color: 'white',
        }}
      >
        <div style={{ fontSize: 40, color: palette[300] }}>{personal.role}</div>
        <div style={{ fontSize: 96, fontWeight: 800, lineHeight: 1.05 }}>{personal.name}</div>
        <div style={{ fontSize: 32, opacity: 0.8, maxWidth: 1000 }}>{personal.summary}</div>
      </div>
    ),
    size,
  )
}
