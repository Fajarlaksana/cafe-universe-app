'use client';

import { Coffee, MapPin, Mail, Instagram, Twitter, Facebook } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/contexts/TranslationContext';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
              <Coffee className="h-5 w-5" />
              <span>Café Universe</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium mb-3 text-sm">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/explore" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('nav.explore')}
                </Link>
              </li>
              <li>
                <a href="#map" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('nav.map')}
                </a>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-medium mb-3 text-sm">{t('footer.features')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{t('footer.feature1')}</li>
              <li>{t('footer.feature2')}</li>
              <li>{t('footer.feature3')}</li>
              <li>{t('footer.feature4')}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium mb-3 text-sm">{t('footer.contact')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>{t('footer.location')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@cafeuniverse.com" className="hover:text-foreground transition-colors">
                  {t('footer.email')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Café Universe. {t('footer.copyright')}
            </p>
            <div className="flex items-center gap-2">
              <a href="#" className="p-2 rounded-full hover:bg-accent transition-colors">
                <Instagram className="h-4 w-4 text-muted-foreground" />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-accent transition-colors">
                <Twitter className="h-4 w-4 text-muted-foreground" />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-accent transition-colors">
                <Facebook className="h-4 w-4 text-muted-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
