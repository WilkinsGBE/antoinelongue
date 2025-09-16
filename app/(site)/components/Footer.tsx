import Link from 'next/link';
import { getSite } from '@/lib/data';

export default function Footer(){
  const site = getSite();
  return (
    <footer className="section border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 md:px-8 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="h2">Let&apos;s build your story.</h3>
          <p className="p mt-2">{site.bio.availability} — {site.locations.join(' / ')}</p>
          <p className="p mt-1 text-white/60">{site.bio.clients}</p>
        </div>
        <div>
          <p className="p font-medium">{site.bio.title}</p>
          <p className="p mt-1">{site.bio.credentials}</p>
          {site.uefa && (
            <div className="mt-3 flex items-center gap-2">
              <img src="/logos/uefa.svg" alt="UEFA" className="h-8 opacity-70"/>
              <span className="text-xs text-white/60">UEFA Media Pool</span>
            </div>
          )}
        </div>
        <div className="md:text-right">
          <div className="flex flex-col gap-3">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="link flex items-center gap-2 justify-end">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              Instagram
            </a>
            <a href={`mailto:${site.email}`} className="link flex items-center gap-2 justify-end">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              {site.email}
            </a>
          </div>
          <div className="mt-6 text-xs text-white/60">
            © {new Date().getFullYear()} {site.name}
          </div>
        </div>
      </div>
    </footer>
  );
}
