import { motion } from 'motion/react';
import { Gift, Percent, Users, CreditCard, Repeat, Zap, ShieldCheck, Clock, DollarSign, MessageCircle, Mail } from 'lucide-react';
import { ShinyButton } from '@/components/ui/shiny-button';
import { Hero } from '@/components/ui/hero-lamp';
import { FAQ1 } from '@/components/ui/faq-monochrome';
import { useSEO } from '@/lib/useSEO';
import { useLanguage } from '@/src/lib/LanguageContext';

const steps = [
  {
    icon: Users,
    title: 'Chia sẻ link giới thiệu',
    description: 'Giới thiệu Trợ lý Creator cho bạn bè, đồng nghiệp hoặc khách hàng tiềm năng qua link tracking cá nhân.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
  },
  {
    icon: CreditCard,
    title: 'Khách hàng đăng ký gói',
    description: 'Khi người được giới thiệu đăng ký và thanh toán bất kỳ gói dịch vụ nào, hệ thống tự động ghi nhận.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
  },
  {
    icon: DollarSign,
    title: 'Nhận hoa hồng tự động',
    description: 'Hoa hồng được tính ngay lập tức và chi trả vào đầu mỗi tháng. Không giới hạn số lượng giới thiệu.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
  },
];

const incomeExamples = [
  { plan: 'Starter', price: '3.500.000đ', first: '1.050.000đ', recurring: '350.000đ' },
  { plan: 'Growth', price: '5.000.000đ', first: '1.500.000đ', recurring: '500.000đ' },
  { plan: 'Premium', price: '8.000.000đ', first: '2.400.000đ', recurring: '800.000đ' },
];

const affiliateFaqs = [
  {
    question: 'Ai có thể tham gia chương trình Affiliate?',
    answer: 'Bất kỳ ai — không cần là khách hàng hiện tại của Trợ lý Creator. Bạn chỉ cần đăng ký nhận link giới thiệu và chia sẻ cho người cần.',
    meta: 'Tham gia',
  },
  {
    question: 'Hoa hồng recurring được trả trong bao lâu?',
    answer: 'Bạn nhận 10% hoa hồng hàng tháng trong suốt thời gian khách hàng được giới thiệu còn sử dụng dịch vụ. **Không giới hạn thời gian.**',
    meta: 'Hoa hồng',
  },
  {
    question: 'Phương thức chi trả hoa hồng như thế nào?',
    answer: 'Hoa hồng được chuyển khoản ngân hàng vào **đầu mỗi tháng** (trước ngày 5). Tối thiểu **500.000đ** mới thực hiện chi trả. Nếu chưa đủ sẽ cộng dồn sang tháng sau.',
    meta: 'Chi trả',
  },
  {
    question: 'Có giới hạn số người giới thiệu không?',
    answer: '**Không giới hạn!** Bạn giới thiệu càng nhiều, thu nhập càng cao. Một số đối tác đang kiếm **5–10 triệu/tháng** chỉ từ hoa hồng referral.',
    meta: 'Giới hạn',
  },
  {
    question: 'Nếu khách hàng nâng cấp gói thì hoa hồng có tăng không?',
    answer: '**Có!** Hoa hồng recurring tính trên giá gói hiện tại. Nếu khách nâng cấp từ Starter lên Premium, hoa hồng của bạn **tự động tăng theo**.',
    meta: 'Nâng cấp',
  },
  {
    question: 'Làm sao theo dõi lượt giới thiệu và hoa hồng?',
    answer: 'Bạn sẽ được cấp **dashboard riêng qua Notion** để theo dõi: số lượt giới thiệu, trạng thái chuyển đổi, và tổng hoa hồng đã/sẽ nhận.',
    meta: 'Tracking',
  },
];

const benefits = [
  { icon: Repeat, text: 'Thu nhập thụ động hàng tháng', color: 'text-green-400' },
  { icon: Clock, text: 'Không giới hạn thời gian', color: 'text-blue-400' },
  { icon: Zap, text: 'Không cần vốn hay kỹ năng', color: 'text-yellow-400' },
  { icon: ShieldCheck, text: 'Tracking minh bạch qua Notion', color: 'text-violet-400' },
];

export default function AffiliatePage() {
  useSEO({
    title: 'Chương trình Affiliate — Kiếm tiền cùng Trợ lý Creator',
    description: 'Giới thiệu khách hàng và nhận hoa hồng 30% lần đầu + 10% recurring mỗi tháng. Thu nhập thụ động không giới hạn.',
  });

  return (
    <>
      {/* Hero Lamp */}
      <Hero
        title={<>Kiếm tiền cùng <span className="text-gradient">Trợ lý Creator</span></>}
        subtitle="Giới thiệu Trợ lý Creator cho bạn bè, đồng nghiệp và nhận hoa hồng recurring hàng tháng. Không cần vốn, không giới hạn thu nhập."
        subtitleClassName="text-lg md:text-xl max-w-[600px]"
      />

      {/* Benefits badges */}
      <section className="pb-12 relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
            >
              <b.icon size={14} className={b.color} />
              <span className="text-sm text-gray-300">{b.text}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Commission Rates */}
      <section className="py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mức hoa hồng <span className="text-gradient">hấp dẫn</span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              Nhận ngay từ lần giới thiệu đầu tiên, và tiếp tục nhận mỗi tháng.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 via-yellow-500/5 to-transparent p-8 text-center overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl" />
              <Percent size={28} className="text-yellow-400 mx-auto mb-3" />
              <p className="text-5xl font-bold text-yellow-400 mb-2">30%</p>
              <p className="text-white font-semibold text-lg mb-1">Hoa hồng lần đầu</p>
              <p className="text-gray-400 text-sm">Nhận ngay khi khách hàng thanh toán gói dịch vụ lần đầu tiên</p>
              <div className="mt-4 pt-4 border-t border-yellow-500/20">
                <p className="text-gray-400 text-xs">Ví dụ: Gói Growth = <span className="text-yellow-400 font-medium">1.500.000đ</span></p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 via-indigo-500/5 to-transparent p-8 text-center overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl" />
              <Repeat size={28} className="text-indigo-400 mx-auto mb-3" />
              <p className="text-5xl font-bold text-indigo-400 mb-2">10%</p>
              <p className="text-white font-semibold text-lg mb-1">Recurring mỗi tháng</p>
              <p className="text-gray-400 text-sm">Thu nhập thụ động — nhận đều mỗi tháng khi khách còn sử dụng dịch vụ</p>
              <div className="mt-4 pt-4 border-t border-indigo-500/20">
                <p className="text-gray-400 text-xs">Ví dụ: Gói Growth = <span className="text-indigo-400 font-medium">500.000đ/tháng</span></p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 relative z-10">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cách thức <span className="text-gradient">hoạt động</span>
            </h2>
            <p className="text-gray-400">Chỉ 3 bước đơn giản để bắt đầu kiếm thu nhập thụ động.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="relative"
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 right-0 w-full h-[1px] bg-gradient-to-r from-white/10 via-white/5 to-transparent translate-x-1/2 z-0" />
                )}
                <div className={`relative z-10 rounded-2xl border ${step.border} bg-white/5 p-6 h-full`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl ${step.bg} flex items-center justify-center ${step.color}`}>
                      <step.icon size={20} />
                    </div>
                    <span className="text-xs text-gray-400 font-medium uppercase tracking-widest">Bước {i + 1}</span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Income Examples */}
      <section className="py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ví dụ <span className="text-gradient">thu nhập</span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              Giới thiệu chỉ 3 khách hàng — bạn đã có thu nhập thụ động đáng kể mỗi tháng.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
          >
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 p-4 bg-white/5 text-sm font-semibold text-gray-300 border-b border-white/10">
              <div>Gói dịch vụ</div>
              <div className="text-center">Giá gói</div>
              <div className="text-center">Hoa hồng lần đầu</div>
              <div className="text-center">Recurring/tháng</div>
            </div>

            {/* Table Body */}
            {incomeExamples.map((row, i) => (
              <div key={i} className={`grid grid-cols-4 gap-4 p-4 items-center text-sm ${i !== incomeExamples.length - 1 ? 'border-b border-white/5' : ''}`}>
                <div className="font-medium text-white">{row.plan}</div>
                <div className="text-center text-gray-400">{row.price}</div>
                <div className="text-center text-yellow-400 font-semibold">{row.first}</div>
                <div className="text-center text-indigo-400 font-semibold">{row.recurring}</div>
              </div>
            ))}

            {/* Summary */}
            <div className="p-4 bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-purple-500/10 border-t border-white/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-gray-300 text-sm">
                  💡 <strong>Ví dụ:</strong> Giới thiệu 5 khách gói Growth
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400">Lần đầu: <span className="text-yellow-400 font-bold">7.500.000đ</span></span>
                  <span className="text-sm text-gray-400">Mỗi tháng: <span className="text-indigo-400 font-bold">2.500.000đ</span></span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ — Monochrome */}
      <FAQ1
        title="Câu hỏi thường gặp"
        subtitle="Mọi thắc mắc về chương trình Affiliate"
        items={affiliateFaqs}
      />

      {/* CTA */}
      <section className="py-24 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto px-4"
        >
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-white/5 to-violet-500/10 p-12">
            <Gift size={36} className="text-yellow-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Sẵn sàng kiếm thu nhập thụ động?</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Đăng ký ngay hôm nay — nhận link giới thiệu cá nhân và bắt đầu kiếm hoa hồng từ lượt giới thiệu đầu tiên.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://zalo.me/0356433455" target="_blank" rel="noopener noreferrer">
                <ShinyButton>
                  <MessageCircle size={16} className="inline mr-2" />
                  Đăng ký qua Zalo
                </ShinyButton>
              </a>
              <a href="mailto:vietbao.mkt@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-colors">
                <Mail size={16} />
                Email đăng ký
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
