import { motion } from 'motion/react';
import { Users, Bot, TrendingDown } from 'lucide-react';

export default function CostComparison() {
  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Thay thế đội nhân sự <span className="text-gradient">30–40 triệu</span>/tháng
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Hệ thống AI làm tất cả — viết bài, tạo ảnh, lên lịch — với chi phí chỉ bằng 1/6.
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
              <h3 className="text-xl font-semibold text-red-400">Thuê đội nhân sự</h3>
            </div>
            <div className="space-y-4">
              {humanCosts.map((item, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-gray-400 text-sm">{item.role}</span>
                  <span className="text-red-300 font-medium text-sm">{item.cost}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-4">
                <span className="font-semibold text-lg">TỔNG</span>
                <span className="text-2xl font-bold text-red-400">30–40 triệu</span>
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
              <h3 className="text-xl font-semibold text-green-400">Hệ thống AI</h3>
            </div>
            <div className="space-y-4">
              {aiFeatures.map((item, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-gray-400 text-sm">{item.feature}</span>
                  <span className="text-green-400 font-medium text-sm">✓ Bao gồm</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-4">
                <span className="font-semibold text-lg">TỔNG</span>
                <span className="text-2xl font-bold text-green-400">5 triệu</span>
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
          <p className="text-sm text-gray-400 mb-1">Tiết kiệm mỗi tháng</p>
          <p className="text-3xl font-bold text-orange-400">25–35 triệu đồng</p>
          <p className="text-sm text-gray-400 mt-1">= 300–420 triệu/năm</p>
        </motion.div>
      </div>
    </section>
  );
}

const humanCosts = [
  { role: 'Content Writer (kinh nghiệm)', cost: '8–10 triệu' },
  { role: 'Designer (concept + edit)', cost: '10–12 triệu' },
  { role: 'PM phối hợp Content + Design', cost: '8–10 triệu' },
  { role: 'Chụp hình studio', cost: '2–5 triệu/lần' },
];

const aiFeatures = [
  { feature: 'Toàn bộ nội dung 5 bài/ngày' },
  { feature: '7 loại hình ảnh AI' },
  { feature: 'Lên lịch tự động Notion' },
  { feature: 'Ảnh có nhận diện thương hiệu' },
];
