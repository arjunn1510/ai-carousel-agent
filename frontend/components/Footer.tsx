'use client';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(255,255,255,0.015)',
        padding: '40px 24px',
      }}
    >
      <div style={{
        maxWidth: '1100px',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '28px', height: '28px', borderRadius: '8px',
            background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="5" height="10" rx="1" />
              <rect x="9.5" y="4" width="5" height="16" rx="1" />
              <rect x="17" y="7" width="5" height="10" rx="1" />
            </svg>
          </div>
          <span style={{ color: '#6b7280', fontSize: '14px', fontWeight: 600 }}>Carousel Agent</span>
        </div>

        {/* Copyright */}
        <p style={{ color: '#4b5563', fontSize: '13px' }}>
          © 2026 Carousel Agent. All rights reserved.
        </p>

        {/* Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          {['Privacy', 'Terms', 'Contact'].map(link => (
            <a key={link} href="#"
              style={{ color: '#4b5563', fontSize: '13px', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#a855f7')}
              onMouseLeave={e => (e.currentTarget.style.color = '#4b5563')}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
