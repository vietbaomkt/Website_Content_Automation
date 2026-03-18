import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "3.500.000đ",
    period: "/tháng",
    description: "Dành cho người mới bắt đầu xây dựng nhân hiệu.",
    features: [
      "3 bài đăng/ngày",
      "5 loại phong cách ảnh",
      "Quy trình duyệt Notion cơ bản",
      "Hỗ trợ qua Email"
    ],
    highlight: false
  },
  {
    name: "Growth",
    price: "5.000.000đ",
    period: "/tháng",
    description: "Gói khuyên dùng cho sự phát triển mạnh mẽ.",
    features: [
      "5 bài đăng/ngày",
      "7 loại phong cách ảnh",
      "Visual DNA session 1-1",
      "Tối ưu hóa đa nền tảng",
      "Hỗ trợ ưu tiên qua Zalo"
    ],
    highlight: true,
    badge: "Khuyên dùng ⭐"
  },
  {
    name: "Premium",
    price: "8.000.000đ",
    period: "/tháng",
    description: "Dành cho chuyên gia cần sự hoàn hảo tuyệt đối.",
    features: [
      "7 bài đăng/ngày",
      "Không giới hạn phong cách ảnh",
      "Monthly strategy call",
      "Ưu tiên xử lý (Priority Queue)",
      "Quản lý tài khoản riêng"
    ],
    highlight: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-display font-bold text-white/[0.02] select-none pointer-events-none whitespace-nowrap z-0">
        Pricing
      </div>

      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Đầu tư thông minh, <span className="text-gradient">tiết kiệm khổng lồ</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Thay vì trả 30-40 triệu/tháng cho một đội ngũ 3 người (Content + Designer + PM), hãy để AI làm điều đó với chi phí chỉ bằng 1/10.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-8 rounded-[2rem] backdrop-blur-xl transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-white/10 border-2 border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.2)] md:-translate-y-4 z-10' 
                  : 'bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.07]'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                  {plan.badge}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-400 h-10">{plan.description}</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.highlight ? 'text-blue-400' : 'text-gray-400'}`} />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                plan.highlight
                  ? 'bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}>
                Chọn gói {plan.name}
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
          <h3 className="text-2xl font-display font-bold text-white mb-8">So sánh chi phí hàng tháng</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-gray-400 mb-2">Đội ngũ truyền thống</div>
              <div className="text-3xl font-bold text-red-400 line-through decoration-red-500/50">35.000.000đ</div>
              <div className="text-sm text-gray-500 mt-2">Content + Designer + PM</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/10" />
            <div className="text-center">
              <div className="text-blue-400 font-medium mb-2">AutoBrand (Gói Growth)</div>
              <div className="text-5xl font-display font-bold text-white text-gradient">5.000.000đ</div>
              <div className="text-sm text-emerald-400 mt-2 font-medium">Tiết kiệm 30.000.000đ/tháng</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
