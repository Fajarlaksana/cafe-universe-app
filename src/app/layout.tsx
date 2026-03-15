import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { TranslationProvider } from '@/contexts/TranslationContext';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cafeuniverse.com'),
  title: {
    default: 'Café Universe – Bandung Café Discovery',
    template: '%s – Café Universe',
  },
  description: 'AI-powered café discovery for work, chill, photos, and coffee lovers. Find the best cafés in Bandung with mood-based recommendations.',
  keywords: ['café', 'bandung', 'coffee', 'recommendation', 'AI', 'discover', 'work', 'chill', 'cafe bandung', 'rekomendasi cafe'],
  authors: [{ name: 'Café Universe' }],
  creator: 'Café Universe',
  openGraph: {
    type: 'website',
    locale: 'en_ID',
    url: 'https://cafeuniverse.com',
    title: 'Café Universe – Bandung Café Discovery',
    description: 'AI-powered café discovery for work, chill, photos, and coffee lovers.',
    siteName: 'Café Universe',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Café Universe',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Café Universe – Bandung Café Discovery',
    description: 'AI-powered café discovery for work, chill, photos, and coffee lovers.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://cafeuniverse.com',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <ThemeProvider>
          <TranslationProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
