import { useState } from 'react';
import Pricing from '../components/Pricing';
import FAQDemo from '@/components/ui/faq-tabs-demo';
import { ShinyButton } from '@/components/ui/shiny-button';
import { ZoomBookingPopup } from '@/components/ui/zoom-booking-popup';
import { Hero } from '@/components/ui/hero-lamp';
import { motion } from 'motion/react';
import { Gift } from 'lucide-react';
import { useSEO } from '@/lib/useSEO';

export default function PricingPage() {
  const [showZoomPopup, setShowZoomPopup] = useState(false);

  useSEO({
    title: 'Bảng giá - Chọn gói phù hợp với bạn',
    description: 'Gói Starter 3.5 triệu, Growth 5 triệu, Premium 8 triệu/tháng. So sánh tính năng và chọn gói phù hợp nhất cho nhân hiệu của bạn.',
  });

  return (
    <>
      {/* ═══════════════════════════════════════════════════
          §1: HERO ĐƠN GIẢN
      ═══════════════════════════════════════════════════ */}
      <Hero
        title={<>Chọn gói <span className="text-gradient">phù hợp</span> với bạn</>}
        subtitle="3 gói dịch vụ được thiết kế cho từng giai đoạn phát triển nhân hiệu. Tất cả đều bao gồm hệ thống tự động hóa nội dung AI + hình ảnh + quản lý qua Notion."
        subtitleClassName="text-lg md:text-xl max-w-[640px]"
        actions={[{ label: 'So sánh các gói ↓', href: '#pricing' }]}
      />

      {/* ═══════════════════════════════════════════════════
          §2: PRICING CARDS — 3 gói + Cost Comparison
      ═══════════════════════════════════════════════════ */}
      <Pricing />

      {/* ═══════════════════════════════════════════════════
          §3: FAQ — Câu hỏi về gói & thanh toán
      ═══════════════════════════════════════════════════ */}
      <FAQDemo />

      {/* ═══════════════════════════════════════════════════
          §4: CTA CUỐI — Đặt lịch tư vấn
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Chưa chắc nên chọn gói nào?
          </h2>
          <p className="text-gray-400 mb-4 max-w-md mx-auto">
            Tư vấn miễn phí 30 phút — chúng tôi sẽ phân tích nhân hiệu và đề xuất gói phù hợp nhất cho bạn.
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
