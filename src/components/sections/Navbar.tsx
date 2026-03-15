'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Coffee, Sun, Moon, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useTranslation } from '@/contexts/TranslationContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold text-foreground hover:opacity-70 transition-opacity"
          >
            <Coffee className="h-5 w-5" />
            <span className="hidden sm:inline">Café Universe</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('nav.home')}
            </Link>
            <Link
              href="/explore"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('nav.explore')}
            </Link>
            <a
              href="#map"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('nav.map')}
            </a>
            
            <div className="flex items-center gap-3 pl-4 border-l border-border">
              {/* Language Switcher */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setIsLangOpen(!isLangOpen)}
                >
                  <Globe className="h-4 w-4" />
                </Button>
                
                {isLangOpen && (
                  <div className="absolute right-0 top-full mt-2 py-1.5 bg-card border border-border rounded-lg shadow-lg min-w-[140px] animate-in fade-in zoom-in-95 duration-200">
                    <button
                      onClick={() => { setLocale('en'); setIsLangOpen(false); }}
                      className={cn(
                        'w-full px-3 py-1.5 text-left text-xs flex items-center gap-2 hover:bg-accent transition-colors',
                        locale === 'en' ? 'font-medium' : 'text-muted-foreground'
                      )}
                    >
                      <span>🇺🇸</span> English
                    </button>
                    <button
                      onClick={() => { setLocale('id'); setIsLangOpen(false); }}
                      className={cn(
                        'w-full px-3 py-1.5 text-left text-xs flex items-center gap-2 hover:bg-accent transition-colors',
                        locale === 'id' ? 'font-medium' : 'text-muted-foreground'
                      )}
                    >
                      <span>🇮🇩</span> Indonesia
                    </button>
                  </div>
                )}
              </div>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={toggleTheme}
              >
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={toggleTheme}
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 space-y-4">
            <Link
              href="/"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link
              href="/explore"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.explore')}
            </Link>
            <a
              href="#map"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.map')}
            </a>
            
            {/* Mobile Language Switcher */}
            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground mb-3">Language</p>
              <div className="flex gap-2">
                <Button
                  variant={locale === 'en' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => { setLocale('en'); setIsMobileMenuOpen(false); }}
                  className="flex-1 h-9"
                >
                  🇺🇸 EN
                </Button>
                <Button
                  variant={locale === 'id' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => { setLocale('id'); setIsMobileMenuOpen(false); }}
                  className="flex-1 h-9"
                >
                  🇮🇩 ID
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
