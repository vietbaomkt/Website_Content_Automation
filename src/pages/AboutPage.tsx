import { motion } from 'motion/react';
import { Briefcase, Brain, Wrench, Globe } from 'lucide-react';
import { GlassmorphismPortfolioBlock } from '@/components/ui/glassmorphism-portfolio-block-shadcnui';
import { Timeline } from '@/components/ui/timeline';
import { useSEO } from '@/lib/useSEO';

const imgShadow = "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";

const timelineData = [
  {
    title: "2024–2026",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          <span className="font-semibold text-white">Brand Manager — iDOCTOR</span>
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Quản lý chiến lược thương hiệu cho hệ sinh thái y tế. Xây dựng quy trình content marketing tự động hóa, tạo nền tảng cho Trợ lý Creator.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=500&fit=crop"
            alt="Làm việc tại văn phòng"
            className={imgShadow}
          />
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=500&fit=crop"
            alt="Digital marketing dashboard"
            className={imgShadow}
          />
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=500&fit=crop"
            alt="Chiến lược marketing"
            className={imgShadow}
          />
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=500&fit=crop"
            alt="Họp team"
            className={imgShadow}
          />
        </div>
      </div>
    ),
  },
  {
    title: "2021–2022",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          <span className="font-semibold text-white">Marketing Executive</span>
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Trải nghiệm tại nhiều ngành khác nhau — từ y tế đến thẩm mỹ — giúp hiểu sâu nhu cầu content đa dạng của nhân hiệu cá nhân.
        </p>
        <div className="mb-8">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Content Marketing — Minh Khuong Group
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Marketing Executive — Hb Medical
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Marketing Executive — Bich Na Clinic
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=500&fit=crop"
            alt="Marketing team"
            className={imgShadow}
          />
          <img
            src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500&h=500&fit=crop"
            alt="Content creation"
            className={imgShadow}
          />
        </div>
      </div>
    ),
  },
  {
    title: "2019–2020",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          <span className="font-semibold text-white">Khởi đầu sự nghiệp</span>
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Tốt nghiệp Đại học Tôn Đức Thắng, bắt đầu sự nghiệp tại CyberLogitec với vai trò Service Desk — nơi tôi học cách hệ thống hóa quy trình.
        </p>
        <div className="mb-8">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            🎓 Tốt nghiệp Đại học Tôn Đức Thắng
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            💼 Service Desk — CyberLogitec
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c476?w=500&h=500&fit=crop"
            alt="Tốt nghiệp đại học"
            className={imgShadow}
          />
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=500&fit=crop"
            alt="Bắt đầu sự nghiệp"
            className={imgShadow}
          />
        </div>
      </div>
    ),
  },
  {
    title: "2026",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          <span className="font-semibold text-white">Founder — Trợ lý Creator</span>
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Ra mắt hệ thống tự động hóa nội dung AI đầu tiên cho nhân hiệu cá nhân Việt Nam — từ ý tưởng đến bài đăng chỉ trong vài phút.
        </p>
        <div className="mb-8">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            🚀 Trợ lý Creator Content Automation System
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ 50+ nhân hiệu cá nhân sử dụng
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ 10.000+ bài viết được tạo tự động
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ AI hiểu ADN nhân hiệu — viết đúng giọng
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=500&fit=crop"
            alt="AI technology"
            className={imgShadow}
          />
          <img
            src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&h=500&fit=crop"
            alt="Automation system"
            className={imgShadow}
          />
          <img
            src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&h=500&fit=crop"
            alt="Social media content"
            className={imgShadow}
          />
          <img
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=500&fit=crop"
            alt="Startup launch"
            className={imgShadow}
          />
        </div>
      </div>
    ),
  },
];

export default function AboutPage() {
  useSEO({
    title: 'Về chúng tôi - Trợ lý Creator Content Automation',
    description: 'Trợ lý Creator là hệ thống tự động hóa nội dung AI đầu tiên cho nhân hiệu cá nhân Việt Nam. Giúp 50+ nhân hiệu tạo 10.000+ bài viết tự động.',
  });

  return (
    <>
      {/* Portfolio Profile Card */}
      <GlassmorphismPortfolioBlock />

      {/* Timeline - Hành trình (ẩn tạm) */}
      {/* <Timeline data={timelineData} /> */}

      {/* Skills */}
      <section className="py-16 relative z-10 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Kỹ năng
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400">
                    {group.icon}
                  </div>
                  <h3 className="font-semibold">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, j) => (
                    <span key={j} className="text-xs px-3 py-1.5 rounded-full bg-white/10 text-gray-300">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trợ lý Creator */}
      <section className="py-24 relative z-10">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12"
          >
            <h2 className="text-2xl font-bold mb-6">Tại sao tôi xây dựng Trợ lý Creator?</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Sau 7 năm làm marketing, tôi thấy một vấn đề lặp đi lặp lại: <span className="text-white">những nhân hiệu cá nhân tuyệt vời bị "chết dần" vì hết ý tưởng content.</span>
              </p>
              <p>
                Họ biết nội dung quan trọng. Họ biết cần phải đăng đều. Nhưng mỗi ngày phải nghĩ 5 bài, viết caption, thiết kế ảnh, lên lịch... 
                <span className="text-white"> đơn giản là không đủ thời gian.</span>
              </p>
              <p>
                Thuê đội ngũ? 30-40 triệu/tháng. Outsource? Mất "hồn" nhân hiệu. Tự làm? Kiệt sức sau 3 tháng.
              </p>
              <p className="text-white font-medium">
                Vì vậy tôi xây dựng hệ thống AI hiểu đúng ADN nhân hiệu — viết đúng giọng, tạo đúng ảnh, lên lịch tự động — để bạn chỉ cần duyệt và đăng.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

    </>
  );
}

const skills = [
  { icon: <Briefcase size={16} />, category: 'Chuyên môn', items: ['Lập kế hoạch', 'Content Writing', 'Thiết kế', 'Chiến lược tổng thể'] },
  { icon: <Brain size={16} />, category: 'Tư duy & Quản lý', items: ['Chiến lược', 'Lãnh đạo', 'Quản lý ngân sách', 'Digital Marketing', 'Phân tích dữ liệu'] },
  { icon: <Wrench size={16} />, category: 'Phần mềm', items: ['Photoshop', 'Illustrator', 'Canva', 'CapCut', 'n8n', 'Notion', 'ChatGPT'] },
  { icon: <Globe size={16} />, category: 'Ngoại ngữ', items: ['Tiếng Anh — Nói 5/10', 'Tiếng Anh — Viết 7/10'] },
];


