import { useEffect, useState } from 'react'
import CIIReady from './CIIReady'

const SUPABASE_URL = 'https://vgughlmbcmxrmaarevri.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZndWdobG1iY214cm1hYXJldnJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwMDg0MjIsImV4cCI6MjA4NzU4NDQyMn0.KS6Rk8MHMDx7E_wPaeXFMqLSGntmBx2MMoKOw8DhVR0'

async function validateToken(token) {
  // Check beta_invites first
  const betaRes = await fetch(
    `${SUPABASE_URL}/rest/v1/beta_invites?token=eq.${token}&is_active=eq.true&select=token`,
    { headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` } }
  )
  const betaData = await betaRes.json()
  if (betaData.length > 0) return true

  // Check purchases table
  const purchaseRes = await fetch(
    `${SUPABASE_URL}/rest/v1/purchases?access_token=eq.${token}&select=access_token`,
    { headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` } }
  )
  const purchaseData = await purchaseRes.json()
  if (purchaseData.length > 0) return true

  return false
}

function App() {
  const [status, setStatus] = useState('loading') // loading | granted | denied | locked

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const token = params.get('token')

    if (token) {
      // New visit with token — validate it
      validateToken(token).then(valid => {
        if (valid) {
          localStorage.setItem('ciiready_access', 'granted')
          localStorage.setItem('ciiready_token', token)
          window.history.replaceState({}, '', window.location.pathname)
          setStatus('granted')
        } else {
          setStatus('denied')
        }
      }).catch(() => {
        setStatus('denied')
      })
    } else {
      // No token in URL — check localStorage
      const stored = localStorage.getItem('ciiready_access')
      const storedToken = localStorage.getItem('ciiready_token')
      if (stored === 'granted' && storedToken) {
        // Re-validate stored token to check it's still active
        validateToken(storedToken).then(valid => {
          setStatus(valid ? 'granted' : 'denied')
          if (!valid) {
            localStorage.removeItem('ciiready_access')
            localStorage.removeItem('ciiready_token')
          }
        }).catch(() => {
          // If network fails, trust localStorage (offline-friendly)
          setStatus('granted')
        })
      } else {
        setStatus('locked')
      }
    }
  }, [])

  // Loading state
  if (status === 'loading') {
    return (
      <div style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontFamily: "'Outfit', system-ui, sans-serif",
        background: '#f7f8fa',
      }}>
        <div style={{ color: '#4a5e78', fontSize: 14 }}>Checking access…</div>
      </div>
    )
  }

  // Invalid token
  if (status === 'denied') {
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
          <h1 style={{ fontSize: 24, marginBottom: 8, color: '#0a2b4e' }}>Invalid link</h1>
          <p style={{ color: '#4a5e78', marginBottom: 24, maxWidth: 400, lineHeight: 1.6 }}>
            This access link isn't valid or has been deactivated. If you think this is a mistake, get in touch.
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

  // No token, no localStorage
  if (status === 'locked') {
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
