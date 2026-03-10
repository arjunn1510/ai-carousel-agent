'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      height: '72px',
      background: 'rgba(11,11,15,0.88)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 40px',
    }}>
      {/* Inner max-width wrapper */}
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div style={{
            width: '42px', height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
            boxShadow: '0 0 22px rgba(124,58,237,0.55)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="5" height="10" rx="1" />
              <rect x="9.5" y="4" width="5" height="16" rx="1" />
              <rect x="17" y="7" width="5" height="10" rx="1" />
            </svg>
          </div>
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: '17px', letterSpacing: '-0.3px', lineHeight: 1.2 }}>
              Carousel Agent
            </div>
            <div style={{ color: '#6b7280', fontSize: '11px', fontWeight: 500, letterSpacing: '0.3px' }}>
              AI Content Generator
            </div>
          </div>
        </Link>

        {/* Nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
          {['Features', 'How it works', 'Pricing'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              style={{ color: '#9ca3af', fontSize: '14px', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href="#generate"
          style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            padding: '11px 24px',
            background: 'linear-gradient(135deg, #7c3aed, #9333ea)',
            borderRadius: '12px',
            color: '#fff', fontWeight: 700, fontSize: '14px',
            textDecoration: 'none',
            boxShadow: '0 0 20px rgba(124,58,237,0.45)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 0 36px rgba(124,58,237,0.75)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(124,58,237,0.45)';
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>
          Generate Free
        </a>
      </div>
    </nav>
  );
}
