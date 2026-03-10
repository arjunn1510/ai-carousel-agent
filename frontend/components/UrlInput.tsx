'use client';

import { useState } from 'react';

const API_URL = "https://ai-carousel-agent.onrender.com";

export default function UrlInput() {

  const [url, setUrl] = useState('');
  const [focused, setFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [jobId, setJobId] = useState<string | null>(null);

  const handleGenerate = async () => {

    if (!url.trim()) return;

    try {

      setLoading(true);
      setJobId(null);

      const res = await fetch(`${API_URL}/generate-carousel`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      setJobId(data.job_id);

    } catch (error) {

      console.error('Error generating carousel:', error);

    } finally {

      setLoading(false);

    }
  };

  const handleDownload = (type: string) => {

    if (!jobId) return;

    if (type === 'txt') {
      window.open(`${API_URL}/download/txt/${jobId}`, "_blank");
    }

    if (type === 'zip') {
      window.open(`${API_URL}/download/zip/${jobId}`, "_blank");
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '760px', margin: '0 auto' }}>

      {/* Input container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          padding: '10px',
          borderRadius: '20px',
          background: 'rgba(255,255,255,0.05)',
          border: `1.5px solid ${focused ? 'rgba(124,58,237,0.65)' : 'rgba(255,255,255,0.1)'
            }`,
        }}
      >

        <div style={{ display: 'flex', alignItems: 'center', padding: '4px 10px' }}>

          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
            placeholder="Paste YouTube or Instagram URL..."
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#fff',
              fontSize: '17px',
              caretColor: '#a855f7',
            }}
          />

        </div>

        <button
          onClick={handleGenerate}
          disabled={loading}
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '14px',
            border: 'none',
            cursor: loading ? 'not-allowed' : 'pointer',
            background: 'linear-gradient(135deg, #7c3aed, #9333ea)',
            color: '#fff',
            fontSize: '17px',
            fontWeight: 700,
          }}
        >
          {loading ? 'Generating...' : 'Generate Carousel'}
        </button>

      </div>

      {/* Caption */}
      <p
        style={{
          textAlign: 'center',
          marginTop: '14px',
          fontSize: '13px',
          color: '#4b5563',
        }}
      >
        ✦ Supports YouTube & Instagram Reels · Free to try · No sign-up needed
      </p>

      {/* Success message */}
      {jobId && (
        <p
          style={{
            marginTop: '30px',
            textAlign: 'center',
            color: '#a855f7',
            fontWeight: 600,
            fontSize: '16px',
          }}
        >
          ✔ Carousel generated successfully
        </p>
      )}

      {/* Download buttons */}
      {jobId && (
        <div
          style={{
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >

          <button
            onClick={() => handleDownload('txt')}
            style={{
              padding: '14px 22px',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              background: 'linear-gradient(135deg, #7c3aed, #9333ea)',
              color: '#fff',
              fontSize: '16px',
              fontWeight: 600,
            }}
          >
            ⬇ Download Slides Text
          </button>

          <button
            onClick={() => handleDownload('zip')}
            style={{
              padding: '14px 22px',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.2)',
              cursor: 'pointer',
              background: 'transparent',
              color: '#fff',
              fontSize: '16px',
              fontWeight: 600,
            }}
          >
            ⬇ Download ZIP
          </button>

        </div>
      )}

    </div>
  );
}