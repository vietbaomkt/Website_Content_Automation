import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './lib/LanguageContext';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import LibraryPage from './pages/LibraryPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import PolicyPage from './pages/PolicyPage';
import AffiliatePage from './pages/AffiliatePage';
import CVPage from './pages/CVPage';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* Hidden CV page — no Navbar/Footer */}
            <Route path="/CV" element={<CVPage />} />
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/library" element={<LibraryPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/policy" element={<PolicyPage />} />
              <Route path="/affiliate" element={<AffiliatePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ErrorBoundary>
    <Analytics />
    <SpeedInsights />
  </StrictMode>,
);
