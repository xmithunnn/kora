import StatsRow from '@/components/StatsRow'
import KoraCard from '@/components/KoraCard'
import BriefCard from '@/components/BriefCard'
import FocusPanel from '@/components/FocusPanel'

export default function Dashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 22, maxWidth: 1400 }}>
      <div>
        <h1 style={{ fontSize: 36, fontWeight: 700, color: '#1B1D28', lineHeight: 1.1, letterSpacing: '-0.5px' }}>
          Hi <span style={{ color: '#6C63FF' }}>Vivid,</span>
        </h1>
        <p style={{ fontSize: 15, color: '#8B90A7', marginTop: 6 }}>
          It's looking like a productive day.
        </p>
      </div>
      <StatsRow />
      <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <KoraCard />
          <BriefCard />
        </div>
        <FocusPanel />
      </div>
    </div>
  )
}