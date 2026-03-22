import { motion } from 'motion/react';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Briefcase, CreditCard, BookOpen, UserCircle } from 'lucide-react';
import { useLanguage } from '@/src/lib/LanguageContext';
import LanguageSwitcher from '@/src/components/LanguageSwitcher';

interface NavDockItem {
  id: string;
  icon: React.ReactNode;
  labelKey: string;
  to: string;
}

const navItemsConfig: NavDockItem[] = [
  { id: 'services', icon: <Briefcase size={18} />, labelKey: 'nav.services', to: '/services' },
  { id: 'pricing', icon: <CreditCard size={18} />, labelKey: 'nav.pricing', to: '/pricing' },
  { id: 'library', icon: <BookOpen size={18} />, labelKey: 'nav.library', to: '/library' },
  { id: 'about', icon: <UserCircle size={18} />, labelKey: 'nav.about', to: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [navHovered, setNavHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setCollapsed(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Khi collapsed và không hover → thu nhỏ
  const isMinimized = collapsed && !navHovered;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0, scale: 1 }}
      animate={{ 
        y: 0, 
        opacity: 1, 
        scale: isMinimized ? 0.7 : 1 
      }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setNavHovered(true)}
      onMouseLeave={() => setNavHovered(false)}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-[width,max-width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled ? 'w-[90%] max-w-3xl' : 'w-[95%] max-w-5xl'
      }`}
    >
      <div className="glass rounded-full px-4 py-2.5 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/Avatar.webp" alt={t('nav.brandName')} className="w-8 h-8 rounded-full object-cover" />
          <span className="text-white font-display font-bold text-xl hidden sm:block">{t('nav.brandName')}</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItemsConfig.map((item) => {
            const isHovered = hoveredItem === item.id;
            const isActive = location.pathname === item.to;
            return (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  to={item.to}
                  className={`
                    relative flex items-center gap-2
                    px-3 py-2 rounded-lg
                    transition-all duration-300 ease-out
                    ${isActive 
                      ? 'bg-white/15 text-white' 
                      : isHovered 
                        ? 'bg-white/10 -translate-y-0.5 shadow-lg shadow-white/5' 
                        : 'hover:bg-white/5'
                    }
                  `}
                  style={{
                    transform: isHovered && !isActive ? 'translateY(-2px) scale(1.05)' : undefined,
                    transitionProperty: 'box-shadow, transform, background, border-color',
                  }}
                >
                  <div className={`
                    transition-all duration-300
                    ${isActive || isHovered ? 'text-white scale-110' : 'text-gray-300'}
                  `}>
                    {item.icon}
                  </div>
                  <span className={`
                    text-sm transition-all duration-300
                    ${isActive || isHovered ? 'text-white' : 'text-gray-300'}
                  `}>
                    {t(item.labelKey)}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Right side: Language Switcher + CTA + Mobile menu */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher />

          {/* Mobile menu button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2"
            aria-label={t('nav.menuLabel')}
            aria-expanded={menuOpen}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen 
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>

          {/* CTA */}
          <Link 
            to="/pricing" 
            className="hidden md:block bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition-all hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]"
          >
            {t('nav.cta')}
          </Link>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 glass rounded-2xl p-4 md:hidden"
        >
          <div className="space-y-1">
            {navItemsConfig.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.id}
                  to={item.to}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    isActive ? 'bg-white/15 text-white' : 'text-gray-300 hover:bg-white/5'
                  }`}
                >
                  {item.icon}
                  <span>{t(item.labelKey)}</span>
                </Link>
              );
            })}
            <Link
              to="/pricing"
              className="block mt-2 bg-orange-500 text-white px-4 py-3 rounded-xl text-center font-medium hover:bg-orange-600 transition-colors"
            >
              {t('nav.cta')}
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
