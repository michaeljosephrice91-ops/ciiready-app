import { useEffect, useState } from 'react'
import CIIReady from './CIIReady'

function App() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const token = params.get('token')
    if (token) {
      localStorage.setItem('ciiready_access', 'granted')
      localStorage.setItem('ciiready_token', token)
      window.history.replaceState({}, '', window.location.pathname)
    }
    setReady(true)
  }, [])

  if (!ready) return null

  const hasAccess = localStorage.getItem('ciiready_access') === 'granted'

  if (!hasAccess) {
    return (
      <div style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontFamily: "'Outfit', system-ui, sans-serif",
        padding: 24, textAlign: 'center', background: '#f7f8fa',
      }}>
        <div>
          <div style={{
            display: 'inline-block', background: '#0a2b4e', color: '#309796',
            fontWeight: 700, fontSize: 13, padding: '6px 12px', borderRadius: 8,
            marginBottom: 16,
          }}>CR</div>
          <h1 style={{ fontSize: 24, marginBottom: 8, color: '#0a2b4e' }}>CIIReady R01</h1>
          <p style={{ color: '#4a5e78', marginBottom: 24, maxWidth: 400, lineHeight: 1.6 }}>
            Access this app via the link in your purchase confirmation email.
          </p>
          <a
            href="https://ciiready.com"
            style={{
              background: '#309796', color: '#fff', padding: '12px 28px',
              borderRadius: 10, textDecoration: 'none', fontWeight: 600,
              fontSize: 14, display: 'inline-block',
            }}
          >Get access →</a>
        </div>
      </div>
    )
  }

  return <CIIReady />
}

export default App
