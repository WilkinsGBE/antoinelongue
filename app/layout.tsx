import './globals.css';
import type { Metadata } from 'next';
import Header from './(site)/components/Header';
import Footer from './(site)/components/Footer';

export const metadata: Metadata = {
  title: 'Antoine Longue – Cinematic Photography & Elite Graphic Design',
  description: 'Neo‑noir, filmic visuals for sports & brands. Member of the UEFA Media Pool. Montreal/Madrid — available worldwide.',
  openGraph: { title: 'Antoine Longue', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
