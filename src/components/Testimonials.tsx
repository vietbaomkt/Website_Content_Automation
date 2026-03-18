import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    content: "Từ khi dùng AutoBrand, tôi không còn phải đau đầu mỗi sáng nghĩ xem hôm nay đăng gì. Hệ thống tự động viết theo đúng văn phong của tôi, hình ảnh thì cực kỳ chuyên nghiệp.",
    author: "Nguyễn Văn A",
    role: "Chuyên gia Tài chính",
    avatar: "https://picsum.photos/seed/user1/100/100"
  },
  {
    content: "Tiết kiệm cho tôi ít nhất 30 triệu mỗi tháng tiền thuê nhân sự. Quan trọng nhất là chất lượng nội dung rất ổn định và đúng định hướng thương hiệu cá nhân.",
    author: "Trần Thị B",
    role: "CEO & Founder",
    avatar: "https://picsum.photos/seed/user2/100/100"
  },
  {
    content: "Quy trình duyệt qua Notion cực kỳ tiện lợi. Tôi chỉ mất 15 phút mỗi tuần để duyệt bài cho cả 7 ngày. Quá tuyệt vời!",
    author: "Lê Hoàng C",
    role: "Life Coach",
    avatar: "https://picsum.photos/seed/user3/100/100"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Được tin dùng bởi <span className="text-gradient">chuyên gia</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-blue-500/50 mb-6" />
                <p className="text-gray-300 leading-relaxed mb-8">
                  "{testimonial.content}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full border border-white/10"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="text-white font-medium">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
