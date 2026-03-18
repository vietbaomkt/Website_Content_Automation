import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? 'w-[90%] max-w-3xl' : 'w-[95%] max-w-5xl'
      }`}
    >
      <div className="glass rounded-full px-6 py-3 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center">
            <span className="text-white font-display font-bold text-lg">A</span>
          </div>
          <span className="text-white font-display font-bold text-xl hidden sm:block">AutoBrand</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">Tính năng</a>
          <a href="#agents" className="text-sm text-gray-300 hover:text-white transition-colors">Hệ thống AI</a>
          <a href="#pricing" className="text-sm text-gray-300 hover:text-white transition-colors">Bảng giá</a>
        </div>

        <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
          Đăng nhập
        </button>
      </div>
    </motion.nav>
  );
}
