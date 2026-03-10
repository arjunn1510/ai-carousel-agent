import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Carousel Agent — Turn Videos Into Viral Carousels',
  description:
    'Paste a YouTube or Instagram URL and let AI generate ready-to-post carousel scripts instantly.',
  keywords: ['carousel generator', 'AI content', 'YouTube', 'Instagram', 'viral content'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-[#0B0B0F] text-white">
        {children}
      </body>
    </html>
  );
}
