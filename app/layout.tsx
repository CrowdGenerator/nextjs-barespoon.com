import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f59e0b',
};

export const metadata: Metadata = {
  title: "BareSpoon - Great Food with Things Bears Like",
  description: "Discover delicious recipes made with ingredients bears love: honey, berries, fish, and more. Fun bear-themed cooking for food enthusiasts!",
  keywords: ["bear food", "recipes", "honey", "berries", "fish", "bear themed", "cooking", "wild ingredients"],
  authors: [{ name: "BareSpoon" }],
  creator: "BareSpoon",
  publisher: "BareSpoon",
  metadataBase: new URL('https://barespoon.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://barespoon.com',
    siteName: 'BareSpoon',
    title: 'BareSpoon - Great Food with Things Bears Like',
    description: 'Delicious recipes using bear-favorite ingredients like honey, berries, and fish.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BareSpoon - Bear Food Recipes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BareSpoon - Great Food with Things Bears Like',
    description: 'Delicious recipes using bear-favorite ingredients like honey, berries, and fish.',
    images: ['/twitter-image.png'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://vitals.vercel-analytics.com" />
        <link rel="preconnect" href="https://vitals.vercel-speed-insights.com" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
