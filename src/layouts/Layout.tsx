import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FlickeringFooter } from '@/components/ui/flickering-footer';
import ZaloWidget from '../components/ZaloWidget';
import { useEffect } from 'react';

export default function Layout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans selection:bg-indigo-500/30">
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <FlickeringFooter />
      <ZaloWidget />
    </div>
  );
}
