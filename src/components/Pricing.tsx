import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, X, Sparkles } from 'lucide-react';
import { ZoomBookingPopup } from '@/components/ui/zoom-booking-popup';
import { useLanguage } from '@/src/lib/LanguageContext';

export default function Pricing() {
  const [showZoomPopup, setShowZoomPopup] = useState(false);
  const { t, lang } = useLanguage();

  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-display font-bold text-white/[0.02] select-none pointer-events-none whitespace-nowrap z-0">
        {t('pricing.bgText')}
      </div>

      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-violet-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            {t('pricing.title')}<span className="text-gradient">{t('pricing.titleHighlight')}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {lang.pricing.plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-8 rounded-[2rem] backdrop-blur-xl transition-all duration-300 flex flex-col card-hover-premium ${
                index === 1 
                  ? 'bg-white/10 border-2 border-indigo-500/50 shadow-[0_0_40px_rgba(99,102,241,0.2)] md:-translate-y-4 z-10' 
                  : 'bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.07]'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-violet-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg flex items-center gap-1.5">
                  <Sparkles size={14} />
                  {plan.badge}
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-display font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-400">{plan.description}</p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{t('pricing.period')}</span>
                </div>
                {plan.savingNote && (
                  <p className="text-xs text-indigo-400 mt-2 font-medium">{plan.savingNote}</p>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className={`w-5 h-5 shrink-0 mt-0.5 ${index === 1 ? 'text-indigo-400' : 'text-emerald-400'}`} />
                    ) : (
                      <X className="w-5 h-5 shrink-0 mt-0.5 text-gray-600" />
                    )}
                    <span className={`text-sm ${feature.included ? 'text-gray-300' : 'text-gray-500'}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setShowZoomPopup(true)}
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${
                index === 1
                  ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-[0_0_20px_rgba(249,115,22,0.3)]'
                  : 'bg-white/10 text-white hover:bg-orange-500/80 hover:shadow-[0_0_16px_rgba(249,115,22,0.2)] border border-white/10 hover:border-orange-500/50'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Comparison Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 glass-card p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl font-display font-bold text-white mb-8">{t('pricing.compTitle')}</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
            <div className="text-center flex-1">
              <div className="text-gray-400 mb-2 text-sm">{t('pricing.compTraditional')}</div>
              <div className="text-3xl font-bold text-red-400 line-through decoration-red-500/50">{t('pricing.compTraditionalCost')}</div>
              <div className="text-xs text-gray-500 mt-2">{t('pricing.compTraditionalDetail')}</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/10" />
            <div className="text-center flex-1">
              <div className="text-gray-400 mb-2 text-sm">{t('pricing.compSelf')}</div>
              <div className="text-2xl font-bold text-amber-400">{t('pricing.compSelfCost')}</div>
              <div className="text-xs text-gray-500 mt-2">{t('pricing.compSelfDetail')}</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/10" />
            <div className="text-center flex-1">
              <div className="text-indigo-400 font-medium mb-2 text-sm">{t('pricing.compUs')}</div>
              <div className="text-4xl font-display font-bold text-white text-gradient">{t('pricing.compUsCost')}</div>
              <div className="text-xs text-green-400 mt-2 font-medium">{t('pricing.compUsSaving')}</div>
            </div>
          </div>
        </motion.div>
      </div>

      <ZoomBookingPopup isOpen={showZoomPopup} onClose={() => setShowZoomPopup(false)} />
    </section>
  );
}
