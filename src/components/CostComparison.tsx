import { motion } from 'motion/react';
import { Users, Bot, TrendingDown } from 'lucide-react';
import { useLanguage } from '@/src/lib/LanguageContext';

export default function CostComparison() {
  const { t, lang } = useLanguage();

  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t('cost.title')}<span className="text-gradient">{t('cost.titleHighlight')}</span>{t('cost.titleEnd')}
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          {t('cost.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Nhân sự */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400">
                <Users size={20} />
              </div>
              <h3 className="text-xl font-semibold text-red-400">{t('cost.humanTitle')}</h3>
            </div>
            <div className="space-y-4">
              {lang.cost.humanCosts.map((item, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-gray-400 text-sm">{item.role}</span>
                  <span className="text-red-300 font-medium text-sm">{item.cost}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-4">
                <span className="font-semibold text-lg">{t('cost.total')}</span>
                <span className="text-2xl font-bold text-red-400">{t('cost.humanTotal')}</span>
              </div>
            </div>
          </motion.div>

          {/* AI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-green-500/20 bg-green-500/5 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400">
                <Bot size={20} />
              </div>
              <h3 className="text-xl font-semibold text-green-400">{t('cost.aiTitle')}</h3>
            </div>
            <div className="space-y-4">
              {lang.cost.aiFeatures.map((feature, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-gray-400 text-sm">{feature}</span>
                  <span className="text-green-400 font-medium text-sm">{t('cost.included')}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-4">
                <span className="font-semibold text-lg">{t('cost.total')}</span>
                <span className="text-2xl font-bold text-green-400">{t('cost.aiTotal')}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Saving highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto text-center rounded-2xl border border-orange-500/20 bg-orange-500/5 p-6"
        >
          <TrendingDown size={24} className="mx-auto mb-3 text-orange-400" />
          <p className="text-sm text-gray-400 mb-1">{t('cost.savingLabel')}</p>
          <p className="text-3xl font-bold text-orange-400">{t('cost.savingAmount')}</p>
          <p className="text-sm text-gray-400 mt-1">{t('cost.savingYearly')}</p>
        </motion.div>
      </div>
    </section>
  );
}
