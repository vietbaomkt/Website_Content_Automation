import { motion } from 'motion/react';
import { Bot, Calendar, CheckCircle2, Cpu, Image as ImageIcon, Layout, PenTool, Sparkles, Workflow } from 'lucide-react';

const features = [
  {
    title: "Quy trình 5 bước tự động",
    description: "Từ ý tưởng đến xuất bản, mọi thứ được vận hành trơn tru không cần can thiệp thủ công.",
    icon: <Workflow className="w-6 h-6 text-blue-400" />,
    colSpan: "md:col-span-2",
    content: (
      <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -z-10 hidden sm:block" />
        {[
          { step: 1, label: "Khai thác ADN" },
          { step: 2, label: "AI Viết bài" },
          { step: 3, label: "Lên lịch Notion" },
          { step: 4, label: "Duyệt nội dung" },
          { step: 5, label: "Tạo hình ảnh" }
        ].map((s) => (
          <div key={s.step} className="flex flex-col items-center gap-2 bg-[#030712] p-2 rounded-lg z-10">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center text-blue-400 font-bold">
              {s.step}
            </div>
            <span className="text-xs text-gray-400 text-center w-20">{s.label}</span>
          </div>
        ))}
      </div>
    )
  },
  {
    title: "6 AI Agents chuyên biệt",
    description: "Hệ thống F1-F6 đóng vai trò như một đội ngũ chuyên gia thực thụ.",
    icon: <Bot className="w-6 h-6 text-purple-400" />,
    colSpan: "md:col-span-1",
    content: (
      <div className="mt-6 grid grid-cols-2 gap-3">
        {['F1: Strategist', 'F2: Writer', 'F3: Editor', 'F4: Designer', 'F5: Scheduler', 'F6: Analyst'].map((agent, i) => (
          <div key={i} className="bg-white/5 rounded-lg p-2 text-xs text-gray-300 border border-white/5 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            {agent}
          </div>
        ))}
      </div>
    )
  },
  {
    title: "7 Phong cách hình ảnh",
    description: "Cá nhân hóa hình ảnh theo đúng định vị thương hiệu của bạn.",
    icon: <ImageIcon className="w-6 h-6 text-pink-400" />,
    colSpan: "md:col-span-1",
    content: (
      <div className="mt-6 flex flex-wrap gap-2">
        {['Minimalist', 'Cinematic', 'Corporate', 'Creative', 'Cyberpunk', 'Vintage', '3D Render'].map((style, i) => (
          <span key={i} className="px-3 py-1 rounded-full bg-pink-500/10 text-pink-300 text-xs border border-pink-500/20">
            {style}
          </span>
        ))}
      </div>
    )
  },
  {
    title: "Kiến trúc kỹ thuật mạnh mẽ",
    description: "Được xây dựng trên nền tảng công nghệ tiên tiến nhất hiện nay.",
    icon: <Cpu className="w-6 h-6 text-emerald-400" />,
    colSpan: "md:col-span-2",
    content: (
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { name: "n8n", role: "Automation Workflow" },
          { name: "Google Gemini", role: "Core AI Engine" },
          { name: "Midjourney", role: "Image Generation" },
          { name: "Notion", role: "Content Management" }
        ].map((tech, i) => (
          <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-emerald-500/30 transition-colors">
            <div className="font-semibold text-white mb-1">{tech.name}</div>
            <div className="text-xs text-gray-400">{tech.role}</div>
          </div>
        ))}
      </div>
    )
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Hệ thống vận hành <span className="text-gradient">toàn diện</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Mọi công cụ bạn cần để xây dựng nhân hiệu tự động, được tích hợp trong một nền tảng duy nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`glass-card p-8 group ${feature.colSpan}`}
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {feature.description}
              </p>
              {feature.content}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
