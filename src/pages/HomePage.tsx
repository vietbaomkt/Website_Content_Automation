import { useState } from 'react';
import { HeroSection5 } from '@/components/ui/hero-section-5';
import { GlowingEffectDemo } from '@/components/ui/glowing-effect-demo';
import { HeroSection } from '@/components/ui/feature-carousel';
import TestimonialsColumnsDemo from '@/components/ui/testimonials-columns-demo';
import RadialOrbitalTimelineDemo from '@/components/ui/radial-orbital-timeline-demo';
import { Bento3Section } from '@/components/ui/bento-monochrome-1';
import CostComparison from '../components/CostComparison';
import LeadCaptureForm from '../components/LeadCaptureForm';
import { ShinyButton } from '@/components/ui/shiny-button';
import { ZoomBookingPopup } from '@/components/ui/zoom-booking-popup';
import { motion } from 'motion/react';
import {
  ArrowRight, AlertTriangle, Sparkles, CheckCircle2,
  ShieldCheck, Zap, Lock, Timer,
  Users, TrendingUp, Award, BookOpen, Gift, Palette, Brain, Clock,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '@/lib/useSEO';
import { useLanguage } from '@/src/lib/LanguageContext';

const valueIcons = [
  <Sparkles size={20} />,
  <Palette size={20} />,
  <BookOpen size={20} />,
  <TrendingUp size={20} />,
  <Palette size={20} />,
  <Brain size={20} />,
  <Zap size={20} />,
];

const guaranteeIcons = [
  <ShieldCheck size={24} />,
  <Zap size={24} />,
  <Lock size={24} />,
];

const socialIcons = [
  <Users size={20} className="text-indigo-400" />,
  <TrendingUp size={20} className="text-violet-400" />,
  <Clock size={20} className="text-emerald-400" />,
  <Award size={20} className="text-amber-400" />,
];

export default function HomePage() {
  const [showZoomPopup, setShowZoomPopup] = useState(false);
  const { t, lang } = useLanguage();

  useSEO({
    title: t('home.seoTitle'),
    description: t('home.seoDesc'),
  });

  return (
    <>
      {/* §1: HERO */}
      <HeroSection5 />

      {/* §2: PAIN POINTS */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {t('home.painTitle')}<span className="text-red-400">{t('home.painTitleHighlight')}</span>{t('home.painTitleEnd')}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              {t('home.painSubtitle')}
            </p>
          </motion.div>
          <GlowingEffectDemo />
        </div>
      </section>

      {/* §4: DREAM OUTCOME — Before vs After */}
      <section className="py-20 relative z-10 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              {t('home.dreamTitle')}<span className="text-gradient">{t('home.dreamTitleHighlight')}</span>{t('home.dreamTitleEnd')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* BEFORE */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8"
            >
              <div className="flex items-center gap-2 mb-6">
                <AlertTriangle size={18} className="text-red-400" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">{t('home.beforeLabel')}</span>
              </div>
              <ul className="space-y-4">
                {lang.home.beforeItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                    <span className="text-red-400/60 mt-0.5">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* AFTER */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8"
            >
              <div className="flex items-center gap-2 mb-6">
                <Sparkles size={18} className="text-emerald-400" />
                <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">{t('home.afterLabel')}</span>
              </div>
              <ul className="space-y-4">
                {lang.home.afterItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* §5: USP — Bento Monochrome */}
      <Bento3Section />

      {/* §6: 5-STEP PROCESS */}
      <section className="py-24 relative z-10 bg-[#030712]">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('home.stepsTitle')}<span className="text-gradient">{t('home.stepsTitleHighlight')}</span>{t('home.stepsTitleEnd')}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t('home.stepsSubtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <RadialOrbitalTimelineDemo />
          </motion.div>

          <div className="text-center mt-8">
            <Link to="/services" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">
              {t('home.stepsLink')} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* §7: COST COMPARISON */}
      <CostComparison />

      {/* §8: VALUE STACK */}
      <section className="py-20 relative z-10">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              {t('home.valueTitle')}<span className="text-gradient">{t('home.valueTitleHighlight')}</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t('home.valueSubtitle')}
            </p>
          </motion.div>

          <div className="space-y-4">
            {lang.home.valueStack.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-4 border card-hover-premium ${i === 6 ? 'border-orange-500/30 bg-orange-500/5 hover:border-orange-500/50' : 'border-white/10 bg-white/5 hover:border-white/20'}`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${i === 6 ? 'bg-orange-500/20 text-orange-400' : 'bg-indigo-500/20 text-indigo-400'}`}>
                  {valueIcons[i]}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-base">{item.name}</h3>
                  <p className="text-gray-400 text-sm mt-0.5">{item.desc}</p>
                </div>
                <div className="sm:text-right shrink-0">
                  <span className="text-gray-500 line-through text-sm">{item.value}</span>
                  <span className="text-emerald-400 font-semibold text-sm ml-2">{t('home.valueIncluded')}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Total Value */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 via-transparent to-violet-500/10 p-8 text-center"
          >
            <p className="text-gray-400 text-sm mb-2">{t('home.valueTotalLabel')}</p>
            <p className="text-3xl md:text-4xl font-display font-bold text-white line-through decoration-gray-500/50 mb-1">{t('home.valueTotalOld')}</p>
            <p className="text-xl text-gray-400 mb-4">{t('home.valuePayFrom')}</p>
            <p className="text-5xl font-display font-bold text-gradient mb-2">{t('home.valuePrice')}</p>
            <p className="text-emerald-400 text-sm font-medium">{t('home.valueSaving')}</p>
          </motion.div>

          <div className="text-center mt-8">
            <Link to="/pricing" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">
              {t('home.valueSeePackages')} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* §9: AI IMAGE SHOWCASE */}
      <HeroSection
        title={<>{t('home.showcaseTitle')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500">{t('home.showcaseTitleHighlight')}</span>{t('home.showcaseTitleEnd')}</>}
        subtitle={t('home.showcaseSubtitle')}
        images={[
          { src: '/images/library/Library (1).webp', alt: 'AI Content - Poster Film' },
          { src: '/images/library/Library (2).webp', alt: 'AI Content - Portrait' },
          { src: '/images/library/Library (3).webp', alt: 'AI Content - Quote Card' },
          { src: '/images/library/Library (4).webp', alt: 'AI Content - Infographic' },
          { src: '/images/library/Library (5).webp', alt: 'AI Content - Carousel' },
          { src: '/images/library/Library (6).webp', alt: 'AI Content - Pain Mirror' },
          { src: '/images/library/Library (7).webp', alt: 'AI Content - Storytelling' },
          { src: '/images/library/Library (8).webp', alt: 'AI Content - Brand Visual 1' },
          { src: '/images/library/Library (9).webp', alt: 'AI Content - Brand Visual 2' },
          { src: '/images/library/Library (10).webp', alt: 'AI Content - Brand Visual 3' },
          { src: '/images/library/Library (11).webp', alt: 'AI Content - Brand Visual 4' },
          { src: '/images/library/Library (12).webp', alt: 'AI Content - Brand Visual 5' },
          { src: '/images/library/Library (13).webp', alt: 'AI Content - Brand Visual 6' },
          { src: '/images/library/Library (14).webp', alt: 'AI Content - Brand Visual 7' },
          { src: '/images/library/Library (15).webp', alt: 'AI Content - Brand Visual 8' },
          { src: '/images/library/Library (16).webp', alt: 'AI Content - Brand Visual 9' },
          { src: '/images/library/Library (17).webp', alt: 'AI Content - Brand Visual 10' },
          { src: '/images/library/Library (18).webp', alt: 'AI Content - Brand Visual 11' },
          { src: '/images/library/Library (19).webp', alt: 'AI Content - Brand Visual 12' },
        ]}
      />

      {/* §10: TESTIMONIALS */}
      <section className="py-16 relative z-10">
        <TestimonialsColumnsDemo />
      </section>

      {/* §11: SOCIAL PROOF STATS */}
      <section className="py-16 relative z-10">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/5 via-transparent to-violet-500/5 p-10 md:p-14"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {lang.home.socialProof.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="flex justify-center mb-2">{socialIcons[i]}</div>
                  <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* §12: GUARANTEES */}
      <section className="py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              {t('home.guaranteeTitle')}<span className="text-gradient">{t('home.guaranteeTitleHighlight')}</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              {t('home.guaranteeSubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {lang.home.guarantees.map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-7 text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mx-auto mb-4">
                  {guaranteeIcons[i]}
                </div>
                <h3 className="font-semibold text-white mb-2">{g.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{g.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* §13: SCARCITY + FAST-ACTION BONUS */}
      <section className="py-16 relative z-10">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5 p-8 md:p-10"
          >
            <div className="text-center mb-8">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-400 mx-auto mb-4">
                <Timer size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                {t('home.scarcityTitle')}
              </h3>
              <p className="text-gray-400 text-sm max-w-lg mx-auto">
                {t('home.scarcityDesc')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {lang.home.scarcityReasons.map((reason, i) => (
                <div key={i} className="rounded-xl border border-amber-500/10 bg-amber-500/5 p-4 text-center">
                  <p className="text-amber-400 font-medium text-sm mb-1">{reason.title}</p>
                  <p className="text-gray-400 text-xs">{reason.desc}</p>
                </div>
              ))}
            </div>

            {/* Fast Action Bonus */}
            <div className="mt-8 rounded-xl border border-orange-500/30 bg-orange-500/5 p-6 text-center">
              <p className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-2">
                {t('home.fastActionLabel')}
              </p>
              <p className="text-white font-medium mb-1">{t('home.fastActionTitle')}</p>
              <p className="text-gray-400 text-xs">
                {t('home.fastActionDesc')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* §14: CTA */}
      <section className="py-24 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-gray-500 text-sm mb-3">{t('home.ctaTotalValue')}</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            {t('home.ctaTitle')}<span className="text-gradient">{t('home.ctaTitleHighlight')}</span>{t('home.ctaTitleEnd')}
          </h2>
          <p className="text-gray-400 mb-4 max-w-md mx-auto">
            {t('home.ctaDesc')}
          </p>
          {/* Benefit */}
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-5 py-2.5 mb-8">
            <Gift size={16} className="text-indigo-400" />
            <span className="text-indigo-300 text-sm font-medium">{t('home.ctaBenefitPill')}</span>
          </div>
          <div>
            <ShinyButton onClick={() => setShowZoomPopup(true)}>{t('home.ctaButton')}</ShinyButton>
          </div>
          <p className="text-gray-600 text-xs mt-4">{t('home.ctaRefund')}</p>
          <ZoomBookingPopup isOpen={showZoomPopup} onClose={() => setShowZoomPopup(false)} />
        </motion.div>
      </section>
    </>
  );
}
