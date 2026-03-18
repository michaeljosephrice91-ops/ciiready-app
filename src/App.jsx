import { useEffect, useState } from 'react'
import CIIReady from './CIIReady'

const SUPABASE_URL = 'https://vgughlmbcmxrmaarevri.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZndWdobG1iY214cm1hYXJldnJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwMDg0MjIsImV4cCI6MjA4NzU4NDQyMn0.KS6Rk8MHMDx7E_wPaeXFMqLSGntmBx2MMoKOw8DhVR0'
const LANDING_URL = 'https://r0ready.com/#buy'
const FULL_MODULES = ['r01', 'r02', 'r03', 'r04', 'r05']

function normaliseAccess(record) {
  if (!record) {
    return { tier: 'full-access', modulesAccess: FULL_MODULES }
  }

  const tier = record.access_tier || 'full-access'
  const modulesAccess = Array.isArray(record.modules_access)
    ? record.modules_access
    : tier === 'r01-only'
      ? ['r01']
      : FULL_MODULES

  return { tier, modulesAccess }
}

async function validateToken(token) {
  const headers = { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` }

  const betaRes = await fetch(
    `${SUPABASE_URL}/rest/v1/beta_invites?token=eq.${token}&is_active=eq.true&select=token`,
    { headers }
  )
  const betaData = await betaRes.json()
  if (Array.isArray(betaData) && betaData.length > 0) {
    return { valid: true, tier: 'full-access', modulesAccess: FULL_MODULES }
  }

  const purchaseRes = await fetch(
    `${SUPABASE_URL}/rest/v1/purchases?access_token=eq.${token}&select=access_token,access_tier,modules_access`,
    { headers }
  )
  const purchaseData = await purchaseRes.json()
  if (Array.isArray(purchaseData) && purchaseData.length > 0) {
    const access = normaliseAccess(purchaseData[0])
    return { valid: true, ...access }
  }

  return { valid: false, tier: null, modulesAccess: [] }
}

function App() {
  const [status, setStatus] = useState('loading')
  const [accessTier, setAccessTier] = useState('full-access')
  const [modulesAccess, setModulesAccess] = useState(FULL_MODULES)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const token = params.get('token')

    const storedTier = localStorage.getItem('ciiready_access_tier') || 'full-access'
    let storedModules = FULL_MODULES
    try {
      storedModules = JSON.parse(localStorage.getItem('ciiready_modules_access') || JSON.stringify(FULL_MODULES))
    } catch {
      storedModules = FULL_MODULES
    }

    if (token) {
      validateToken(token).then(result => {
        if (result.valid) {
          localStorage.setItem('ciiready_access', 'granted')
          localStorage.setItem('ciiready_token', token)
          localStorage.setItem('ciiready_access_tier', result.tier)
          localStorage.setItem('ciiready_modules_access', JSON.stringify(result.modulesAccess))
          window.history.replaceState({}, '', window.location.pathname)
          setAccessTier(result.tier)
          setModulesAccess(result.modulesAccess)
          setStatus('granted')
        } else {
          setStatus('denied')
        }
      }).catch(() => {
        setStatus('denied')
      })
    } else {
      const stored = localStorage.getItem('ciiready_access')
      const storedToken = localStorage.getItem('ciiready_token')
      if (stored === 'granted' && storedToken) {
        validateToken(storedToken).then(result => {
          if (result.valid) {
            setAccessTier(result.tier)
            setModulesAccess(result.modulesAccess)
            setStatus('granted')
          } else {
            setStatus('denied')
            localStorage.removeItem('ciiready_access')
            localStorage.removeItem('ciiready_token')
            localStorage.removeItem('ciiready_access_tier')
            localStorage.removeItem('ciiready_modules_access')
          }
        }).catch(() => {
          setAccessTier(storedTier)
          setModulesAccess(storedModules)
          setStatus('granted')
        })
      } else {
        setStatus('locked')
      }
    }
  }, [])

  if (status === 'loading') {
    return (
      <div style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontFamily: "'Outfit', system-ui, sans-serif",
        background: '#f7f8fa',
      }}>
        <div style={{ color: '#4a5e78', fontSize: 14 }}>Checking access...</div>
      </div>
    )
  }

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
          }}>R0</div>
          <h1 style={{ fontSize: 24, marginBottom: 8, color: '#0a2b4e' }}>Invalid link</h1>
          <p style={{ color: '#4a5e78', marginBottom: 24, maxWidth: 420, lineHeight: 1.6 }}>
            This access link is not valid or has been deactivated. If you think this is a mistake, get in touch.
          </p>
          <a
            href={LANDING_URL}
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
          }}>R0</div>
          <h1 style={{ fontSize: 24, marginBottom: 8, color: '#0a2b4e' }}>R0Ready</h1>
          <p style={{ color: '#4a5e78', marginBottom: 24, maxWidth: 420, lineHeight: 1.6 }}>
            Access this app via the link in your purchase confirmation email, or choose a plan on the landing page.
          </p>
          <a
            href={LANDING_URL}
            style={{
              background: '#309796', color: '#fff', padding: '12px 28px',
              borderRadius: 10, textDecoration: 'none', fontWeight: 600,
              fontSize: 14, display: 'inline-block',
            }}
          >Choose access →</a>
        </div>
      </div>
    )
  }

  return <CIIReady accessTier={accessTier} modulesAccess={modulesAccess} />
}

export default App
