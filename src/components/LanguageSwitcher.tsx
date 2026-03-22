import { useLanguage } from '@/src/lib/LanguageContext';
import type { Language } from '@/src/i18n';

const flags: Record<Language, string> = {
  vi: '🇻🇳',
  en: '🇬🇧',
};

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'vi' ? 'en' : 'vi');
  };

  const nextLang: Language = language === 'vi' ? 'en' : 'vi';

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm font-medium text-gray-300 hover:text-white cursor-pointer"
      aria-label={`Switch to ${nextLang === 'vi' ? 'Vietnamese' : 'English'}`}
      title={`Switch to ${nextLang === 'vi' ? 'Tiếng Việt' : 'English'}`}
    >
      <span className="text-base leading-none">{flags[language]}</span>
      <span className="text-xs uppercase tracking-wider">{language.toUpperCase()}</span>
    </button>
  );
}
