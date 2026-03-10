'use client';

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" x2="12" y1="19" y2="22" />
      </svg>
    ),
    title: 'AI Transcription',
    description: 'Instantly transcribe audio from any YouTube or Instagram video with near-human accuracy using advanced speech models.',
    iconBg: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
    glowColor: 'rgba(124,58,237,0.35)',
    hoverBorder: 'rgba(124,58,237,0.5)',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'Smart Summaries',
    description: 'AI extracts the most impactful insights, key takeaways, and quotable moments from long-form video content.',
    iconBg: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
    glowColor: 'rgba(37,99,235,0.35)',
    hoverBorder: 'rgba(59,130,246,0.5)',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="9" rx="1" />
        <rect x="14" y="3" width="7" height="5" rx="1" />
        <rect x="14" y="12" width="7" height="9" rx="1" />
        <rect x="3" y="16" width="7" height="5" rx="1" />
      </svg>
    ),
    title: 'Carousel Script Generation',
    description: 'Auto-generate slide-by-slide carousel scripts optimized for LinkedIn, Instagram, and Twitter engagement.',
    iconBg: 'linear-gradient(135deg, #c026d3, #a21caf)',
    glowColor: 'rgba(192,38,211,0.35)',
    hoverBorder: 'rgba(168,85,247,0.5)',
  },
];

export default function Features() {
  return (
    <section
      id="features"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 24px',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        background: 'rgba(255,255,255,0.01)',
      }}
    >
      {/* Top divider glow */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(124,58,237,0.5), transparent)',
        pointerEvents: 'none',
      }} />

      {/* Inner container */}
      <div style={{ maxWidth: '1100px', width: '100%', margin: '0 auto' }}>

        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, color: '#a855f7', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '14px' }}>
            How it works
          </p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '16px' }}>
            Three steps to viral content
          </h2>
          <p style={{ fontSize: '17px', color: '#6b7280', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
            From raw video to publish-ready carousel — fully automated with AI.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          width: '100%',
        }}>
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                padding: '32px',
                position: 'relative',
                cursor: 'default',
                transition: 'transform 0.25s, box-shadow 0.25s, border-color 0.25s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = 'translateY(-4px) scale(1.02)';
                el.style.boxShadow = `0 0 40px ${f.glowColor}`;
                el.style.borderColor = f.hoverBorder;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = 'translateY(0) scale(1)';
                el.style.boxShadow = 'none';
                el.style.borderColor = 'rgba(255,255,255,0.08)';
              }}
            >
              {/* Step number watermark */}
              <div style={{ position: 'absolute', top: '20px', right: '24px', fontSize: '48px', fontWeight: 900, color: 'rgba(255,255,255,0.04)', userSelect: 'none' }}>
                {i + 1}
              </div>

              {/* Icon */}
              <div style={{
                width: '52px', height: '52px', borderRadius: '14px',
                background: f.iconBg,
                boxShadow: `0 4px 18px ${f.glowColor}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '20px',
                transition: 'transform 0.25s',
              }}>
                {f.icon}
              </div>

              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '10px', letterSpacing: '-0.02em' }}>
                {f.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.75 }}>
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
