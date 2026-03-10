'use client';

import UrlInput from './UrlInput';

export default function CtaSection() {
  return (
    <section
      id="generate"
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '100px 24px',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '700px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(124,58,237,0.14) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '820px', width: '100%', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <p style={{ fontSize: '12px', fontWeight: 700, color: '#a855f7', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '14px' }}>
          Try it now — It&apos;s free
        </p>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '16px' }}>
          Ready to go viral?
        </h2>
        <p style={{ fontSize: '17px', color: '#6b7280', maxWidth: '500px', margin: '0 auto 48px', lineHeight: 1.7 }}>
          Drop your URL below and get your carousel script in under 30 seconds.
        </p>
        <UrlInput />
      </div>
    </section>
  );
}
