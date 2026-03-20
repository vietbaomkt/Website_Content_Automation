import { useState } from 'react';
import { HeroSection5 } from '@/components/ui/hero-section-5';
import { GlowingEffectDemo } from '@/components/ui/glowing-effect-demo';
import { HeroSection } from '@/components/ui/feature-carousel';
import TestimonialsColumnsDemo from '@/components/ui/testimonials-columns-demo';
import RadialOrbitalTimelineDemo from '@/components/ui/radial-orbital-timeline-demo';
import CostComparison from '../components/CostComparison';
import LeadCaptureForm from '../components/LeadCaptureForm';
import { ShinyButton } from '@/components/ui/shiny-button';
import { ZoomBookingPopup } from '@/components/ui/zoom-booking-popup';
import { motion } from 'motion/react';
import {
  ArrowRight, AlertTriangle, Sparkles, CheckCircle2,
  Heart, Brain, Palette, Clock,
  ShieldCheck, Zap, Lock, Timer,
  Users, TrendingUp, Award, BookOpen, Gift,
  ImageOff, Radio, FolderX, CalendarCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '@/lib/useSEO';

export default function HomePage() {
  const [showZoomPopup, setShowZoomPopup] = useState(false);

  useSEO({
    title: 'Tự động hóa nội dung AI cho Nhân Hiệu Cá Nhân',
    description: '3 ngày không cần nghĩ bài đăng. AI viết nội dung chuẩn giọng văn, tạo hình ảnh, lên lịch tự động. Tiết kiệm 25-35 triệu/tháng so với thuê nhân sự.',
  });

  return (
    <>
      {/* ═══════════════════════════════════════════════════
          §1: HERO — Video BG + Tagline + CTA
      ═══════════════════════════════════════════════════ */}
      <HeroSection5 />

      {/* ═══════════════════════════════════════════════════
          §2: SOCIAL PROOF COUNTER
      ═══════════════════════════════════════════════════ */}
      <section className="py-8 relative z-10 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          §3: PAIN POINTS — 3 nỗi đau (GlowingEffectDemo)
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bạn đang <span className="text-red-400">mệt mỏi</span> vì content?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              80% nhân hiệu cá nhân từ bỏ sau 3 tháng vì những vấn đề này.
            </p>
          </motion.div>
          <GlowingEffectDemo />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          §4: DREAM OUTCOME — Trước vs Sau
          (Chuyển từ PricingPage §3)
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 relative z-10 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Tưởng tượng <span className="text-gradient">ngày mai</span> của bạn
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* TRƯỚC */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8"
            >
              <div className="flex items-center gap-2 mb-6">
                <AlertTriangle size={18} className="text-red-400" />
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Trước</span>
              </div>
              <ul className="space-y-4">
                {beforeItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                    <span className="text-red-400/60 mt-0.5">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* SAU */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8"
            >
              <div className="flex items-center gap-2 mb-6">
                <Sparkles size={18} className="text-emerald-400" />
                <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">Sau — Với Trợ Lý Creator</span>
              </div>
              <ul className="space-y-4">
                {afterItems.map((item, i) => (
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

      {/* ═══════════════════════════════════════════════════
          §5: USP — "Hỗ trợ, không thay thế"
          (Chuyển từ PricingPage §4)
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 relative z-10">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              <span className="text-gradient">Hỗ trợ</span>, không thay thế
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Trợ lý Creator không thay thế sáng tạo của bạn — mà giúp bạn tìm ý tưởng, triển khai thành bài viết, và tập trung vào chuyên môn.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {uspPillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-xl ${pillar.bg} flex items-center justify-center ${pillar.color} mb-4`}>
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{pillar.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          §6: QUY TRÌNH 5 BƯỚC (RadialOrbitalTimeline)
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 relative z-10 bg-[#030712]">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quy trình <span className="text-gradient">5 bước</span> hoàn toàn tự động
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Từ ADN nhân hiệu đến bài đăng hoàn chỉnh — bạn chỉ cần duyệt và đăng. Click vào từng bước để xem chi tiết.
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
              Xem chi tiết quy trình <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          §7: SO SÁNH CHI PHÍ (CostComparison)
      ═══════════════════════════════════════════════════ */}
      <CostComparison />

      {/* ═══════════════════════════════════════════════════
          §8: VALUE STACK — Tất cả gì bạn nhận
          (Chuyển từ PricingPage §6)
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 relative z-10">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Tất cả những gì bạn nhận được — <span className="text-gradient">trong 1 gói duy nhất</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Không chỉ là dịch vụ tạo nội dung. Đây là hệ thống xây dựng nhân hiệu hoàn chỉnh kèm tất cả quà tặng bạn cần.
            </p>
          </motion.div>

          <div className="space-y-4">
            {valueStack.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-4 border ${item.highlight ? 'border-orange-500/30 bg-orange-500/5' : 'border-white/10 bg-white/5'}`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.highlight ? 'bg-orange-500/20 text-orange-400' : 'bg-indigo-500/20 text-indigo-400'}`}>
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-base">{item.name}</h3>
                  <p className="text-gray-400 text-sm mt-0.5">{item.desc}</p>
                </div>
                <div className="sm:text-right shrink-0">
                  <span className="text-gray-500 line-through text-sm">{item.value}</span>
                  <span className="text-emerald-400 font-semibold text-sm ml-2">Bao gồm</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tổng Value */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 via-transparent to-violet-500/10 p-8 text-center"
          >
            <p className="text-gray-400 text-sm mb-2">Tổng giá trị bạn nhận được</p>
            <p className="text-3xl md:text-4xl font-display font-bold text-white line-through decoration-gray-500/50 mb-1">18.250.000đ+</p>
            <p className="text-xl text-gray-400 mb-4">Bạn chỉ trả từ</p>
            <p className="text-5xl font-display font-bold text-gradient mb-2">5.000.000đ/tháng</p>
            <p className="text-emerald-400 text-sm font-medium">Giá trị gấp 3.6x — mỗi tháng tiết kiệm 30 triệu+</p>
          </motion.div>

          <div className="text-center mt-8">
            <Link to="/pricing" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">
              Xem chi tiết từng gói <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          §9: ALBUM ẢNH AI SHOWCASE (Feature Carousel)
      ═══════════════════════════════════════════════════ */}
      <HeroSection
        title={<>Hệ thống tự tạo <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500">hình ảnh AI</span> cho nhân hiệu</>}
        subtitle="7 phong cách ảnh AI — từ Poster Film đến Infographic — đều mang nhận diện thương hiệu riêng."
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

      {/* ═══════════════════════════════════════════════════
          §10: TESTIMONIALS
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 relative z-10">
        <TestimonialsColumnsDemo />
      </section>

      {/* ═══════════════════════════════════════════════════
          §11: SOCIAL PROOF STATS — 4 con số lớn
          (Chuyển từ PricingPage §9)
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 relative z-10">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/5 via-transparent to-violet-500/5 p-10 md:p-14"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {socialProofStats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          §12: BỘ 3 CAM KẾT (Guarantee)
          (Chuyển từ PricingPage §10)
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Bộ 3 <span className="text-gradient">Cam Kết</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Chúng tôi đặt tiền của mình đối diện với cam kết. Nếu hệ thống không hoạt động — bạn không mất gì.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guarantees.map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-7 text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mx-auto mb-4">
                  {g.icon}
                </div>
                <h3 className="font-semibold text-white mb-2">{g.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{g.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          §13: SCARCITY + FAST-ACTION BONUS
          (Chuyển từ PricingPage §11)
      ═══════════════════════════════════════════════════ */}
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
                Tháng này chỉ nhận thêm 5 khách hàng mới
              </h3>
              <p className="text-gray-400 text-sm max-w-lg mx-auto">
                Mỗi khách hàng cần buổi Xác Định Phong Cách 1-1 cùng Brian — không thể nhận quá 5 KH/tháng mà vẫn đảm bảo chất lượng.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {scarcityReasons.map((reason, i) => (
                <div key={i} className="rounded-xl border border-amber-500/10 bg-amber-500/5 p-4 text-center">
                  <p className="text-amber-400 font-medium text-sm mb-1">{reason.title}</p>
                  <p className="text-gray-400 text-xs">{reason.desc}</p>
                </div>
              ))}
            </div>

            {/* Quà tặng Hành Động Nhanh */}
            <div className="mt-8 rounded-xl border border-orange-500/30 bg-orange-500/5 p-6 text-center">
              <p className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-2">
                🔥 Quà Tặng Hành Động Nhanh — Đăng ký trong 48 giờ
              </p>
              <p className="text-white font-medium mb-1">Gói Khởi Động Nhanh (trị giá 1.500.000đ) — MIỄN PHÍ</p>
              <p className="text-gray-400 text-xs">
                Bài đầu tiên lên sóng trong 24 giờ • 3 lần tinh chỉnh phong cách ảnh miễn phí • 1 mẫu ảnh bổ sung
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          §14: CTA — Lead Capture + Benefit Pill
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-gray-500 text-sm mb-3">Tổng giá trị 18.250.000đ+ → Bạn chỉ trả từ 5.000.000đ/tháng</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Sẵn sàng giải phóng <span className="text-gradient">120 giờ/tháng</span>?
          </h2>
          <p className="text-gray-400 mb-4 max-w-md mx-auto">
            Tư vấn miễn phí 30 phút — không cam kết. Chúng tôi sẽ phân tích nhân hiệu và đề xuất gói phù hợp nhất.
          </p>
          {/* Benefit tư vấn 1:1 */}
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-5 py-2.5 mb-8">
            <Gift size={16} className="text-indigo-400" />
            <span className="text-indigo-300 text-sm font-medium">Đặt lịch tư vấn → Nhận miễn phí 2 tài liệu phân tích Bản Đồ Thấu Cảm & Khung Việc Cần Làm</span>
          </div>
          <div>
            <ShinyButton onClick={() => setShowZoomPopup(true)}>Đặt lịch tư vấn miễn phí</ShinyButton>
          </div>
          <p className="text-gray-600 text-xs mt-4">Hoàn tiền 100% trong 3 ngày nếu không hài lòng</p>
          <ZoomBookingPopup isOpen={showZoomPopup} onClose={() => setShowZoomPopup(false)} />
        </motion.div>
      </section>
    </>
  );
}

// ═══════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════

const stats = [
  { value: '50+', label: 'Nhân hiệu tin dùng' },
  { value: '10.000+', label: 'Bài viết đã tạo' },
  { value: '7', label: 'Phong cách ảnh AI' },
  { value: '85%', label: 'Tiết kiệm thời gian' },
];

const beforeItems = [
  'Mỗi sáng mở Facebook, đầu trống rỗng — không biết đăng gì',
  'Tốn 2-3 giờ/ngày viết bài + tìm ảnh + lên lịch',
  'Feed rời rạc, followers không nhận ra bạn',
  'Cuối tháng cảm thấy tệ vì bỏ lỡ hàng chục ngày không đăng bài',
  'Muốn thuê người nhưng 30 triệu/tháng — chưa sẵn sàng',
];

const afterItems = [
  'Thức dậy, mở Notion — 5 bài đã sẵn sàng, chỉ cần duyệt 15 phút',
  'Feed nhất quán, hình ảnh theo gu riêng — followers nhận ra ngay',
  'Trung bình tiết kiệm 120+ giờ/tháng cho công việc chuyên môn',
  'Không bao giờ bỏ lỡ 1 ngày — hệ thống tự động vận hành 24/7',
  'Chi phí chỉ 5 triệu/tháng — tiết kiệm 25-35 triệu so với thuê đội ngũ',
];

const uspPillars = [
  {
    icon: <Heart size={20} />,
    title: 'Hỗ trợ ý tưởng',
    desc: '6 AI Agent gợi ý góc nhìn bạn chưa nghĩ tới. Bạn bắt đầu từ 80% thay vì 0% — sáng tạo nhanh hơn, không áp lực.',
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
  },
  {
    icon: <Brain size={20} />,
    title: 'Cá nhân hóa nội dung',
    desc: 'Bộ 7 câu hỏi ADN khai thác giọng văn, giá trị, đối tượng riêng. Mỗi khách hàng ra nội dung hoàn toàn khác nhau.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
  },
  {
    icon: <Palette size={20} />,
    title: 'Cá nhân hóa hình ảnh',
    desc: 'Buổi xác định phong cách 1-1 tìm ra gu riêng. 7 phong cách ảnh — tất cả mang nhận diện thương hiệu của bạn.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
  },
  {
    icon: <Clock size={20} />,
    title: 'Giải phóng thời gian',
    desc: 'Từ 2-3 giờ/ngày còn 15 phút/ngày. Bạn tập trung vào chuyên môn — hệ thống lo phần sản xuất nội dung.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
];

const valueStack = [
  {
    icon: <Sparkles size={20} />,
    name: 'Hệ thống Tự Động Hóa Nội Dung (Cốt lõi)',
    desc: '5 bài/ngày, 6 trợ lý AI, lên lịch tự động — vận hành 24/7',
    value: '5.000.000đ/tháng',
    highlight: false,
  },
  {
    icon: <Palette size={20} />,
    name: 'Quà tặng #1: Buổi Xác Định Phong Cách 1-1',
    desc: 'Buổi xác định phong cách thời trang, bối cảnh, tông màu riêng — dùng mãi mãi',
    value: '2.000.000đ',
    highlight: false,
  },
  {
    icon: <BookOpen size={20} />,
    name: 'Quà tặng #2: 2 Mẫu Notion Cao Cấp (trị giá 1.250.000đ)',
    desc: 'Quản lý Nội dung Đa kênh + Kho Kiến thức Cá nhân — quản lý đa kênh chuyên nghiệp',
    value: '1.250.000đ',
    highlight: false,
  },
  {
    icon: <TrendingUp size={20} />,
    name: 'Quà tặng #3: Nghiên Cứu Xu Hướng & Chiến Lược',
    desc: 'Đội ngũ cập nhật xu hướng hàng tuần, 6 trợ lý AI tích hợp xu hướng vào bài viết',
    value: '3.000.000đ',
    highlight: false,
  },
  {
    icon: <Palette size={20} />,
    name: 'Quà tặng #4: 7 Bộ Phong Cách Ảnh AI',
    desc: 'Carousels, Normal, Infographic, Comparisons, Creative, Poster Film, Quote Card',
    value: '3.500.000đ',
    highlight: false,
  },
  {
    icon: <Brain size={20} />,
    name: 'Quà tặng #5: Bộ ADN Nhân Hiệu (Bản Đồ Thấu Cảm + Khung Việc Cần Làm)',
    desc: '7 câu hỏi khai thác sâu — AI hiểu bạn viết, nghĩ, nói với ai. Khác hoàn toàn ChatGPT',
    value: '2.000.000đ',
    highlight: false,
  },
  {
    icon: <Zap size={20} />,
    name: '🔥 Hành Động Nhanh: Gói Khởi Động Nhanh (48 giờ)',
    desc: 'Thiết lập trong 24 giờ, 3 lần tinh chỉnh phong cách ảnh miễn phí, 1 mẫu ảnh bổ sung',
    value: '1.500.000đ',
    highlight: true,
  },
];

const socialProofStats = [
  { value: '50+', label: 'Nhân hiệu đang sử dụng', icon: <Users size={20} className="text-indigo-400" /> },
  { value: '15,000+', label: 'Bài viết đã tạo', icon: <TrendingUp size={20} className="text-violet-400" /> },
  { value: '120+', label: 'Giờ tiết kiệm/tháng', icon: <Clock size={20} className="text-emerald-400" /> },
  { value: '98%', label: 'Khách hàng hài lòng', icon: <Award size={20} className="text-amber-400" /> },
];

const guarantees = [
  {
    icon: <ShieldCheck size={24} />,
    title: 'Hoàn tiền 100% trong 3 ngày',
    desc: 'Dùng thử 3 ngày. Không hài lòng vì bất kỳ lý do nào — hoàn tiền 100%. Không hỏi, không thắc mắc.',
  },
  {
    icon: <Zap size={24} />,
    title: 'Cam kết sản lượng 30 ngày',
    desc: 'Nếu không giao đúng số bài cam kết (90-150 bài/tháng) — bù lại miễn phí + tặng thêm 1 tuần.',
  },
  {
    icon: <Lock size={24} />,
    title: 'Sửa lỗi không giới hạn',
    desc: 'Mọi lỗi từ hệ thống (ảnh sai, bài lặp, lên lịch sai) — sửa miễn phí, không giới hạn. Lỗi từ chúng tôi, chúng tôi chịu.',
  },
];

const scarcityReasons = [
  {
    title: 'Buổi Xác Định Phong Cách 1-1',
    desc: 'Mỗi khách hàng cần buổi cá nhân hóa riêng',
  },
  {
    title: 'Tài nguyên riêng',
    desc: 'Chi phí 1.5 triệu/khách hàng — mỗi khách hàng = 1 dự án riêng',
  },
  {
    title: 'Chất lượng',
    desc: 'Không hy sinh chất lượng vì số lượng',
  },
];
