import { ShinyButton } from '@/components/ui/shiny-button';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Hero } from '@/components/ui/hero-lamp';
import {
  Heart, RefreshCw, BarChart3, Clapperboard, GalleryHorizontal, MessageSquareQuote,
  Fingerprint, PenTool, CalendarCheck,
  UserCheck, ImagePlus, ArrowRight, ArrowDown, NotebookPen, Radio, BarChart2, CalendarDays,
  Lightbulb, FileCheck, Image, Rocket, CheckCircle2
} from 'lucide-react';
import { useSEO } from '@/lib/useSEO';
import DisplayCards from '@/components/ui/display-cards';
import InteractiveSelector from '@/components/ui/interactive-selector';

export default function ServicesPage() {
  useSEO({
    title: 'Dịch vụ Content Automation - 5 bước tự động hoàn toàn',
    description: 'Hệ thống 5 bước từ ADN nhân hiệu đến bài đăng hoàn chỉnh. 6 AI Agent song song, 7 phong cách hình ảnh, quản lý qua Notion.',
  });

  return (
    <>
      {/* Hero Lamp */}
      <Hero
        title={<>Từ <span className="text-gradient">ADN nhân hiệu</span> đến bài đăng hoàn chỉnh</>}
        subtitle="Hệ thống 5 bước biến nhân hiệu của bạn thành cỗ máy nội dung tự động — AI viết, bạn duyệt, hệ thống lo phần còn lại."
        subtitleClassName="text-lg md:text-xl max-w-[600px]"
        actions={[{ label: 'Xem bảng giá →', href: '/pricing' }]}
      />

      {/* 5 Phases — Detailed */}
      <section className="py-24 relative z-10 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quy trình 5 bước</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Mỗi bước được thiết kế để tối đa hiệu quả — bạn chỉ cần tham gia ở Phase 1 và Phase 4.</p>
          </motion.div>
          <div className="space-y-4">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className={`rounded-2xl border p-6 md:p-8 transition-all ${phase.you ? 'border-orange-500/30 bg-orange-500/5' : 'border-white/10 bg-white/5'}`}>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0 flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${phase.you ? 'bg-orange-500/20 text-orange-400' : 'bg-indigo-500/20 text-indigo-400'}`}>
                        {phase.icon}
                      </div>
                      <div className="md:hidden">
                        <span className="text-xs font-mono text-gray-400">PHASE {i + 1}</span>
                        {phase.badge && <span className={`ml-2 text-[10px] px-2 py-0.5 rounded-full ${phase.you ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'}`}>{phase.badge}</span>}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="hidden md:flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-gray-400">PHASE {i + 1}</span>
                        {phase.badge && <span className={`text-[10px] px-2 py-0.5 rounded-full ${phase.you ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'}`}>{phase.badge}</span>}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                      <p className="text-gray-400 text-sm mb-3">{phase.desc}</p>
                      {phase.value && (
                        <div className={`rounded-xl p-3 mb-3 flex gap-2.5 items-start ${phase.you ? 'bg-orange-500/5 border border-orange-500/10' : 'bg-indigo-500/5 border border-indigo-500/10'}`}>
                          <Lightbulb size={14} className={`flex-shrink-0 mt-0.5 ${phase.you ? 'text-orange-400' : 'text-indigo-400'}`} />
                          <div>
                            <p className="text-xs leading-relaxed text-gray-300">{phase.value}</p>
                            {phase.details && (
                              <div className="flex flex-wrap gap-1.5 mt-2">
                                {phase.details.map((d: string, j: number) => (
                                  <span key={j} className={`text-[10px] px-2 py-0.5 rounded-full ${phase.you ? 'bg-orange-500/10 text-orange-300/80 border border-orange-500/15' : 'bg-indigo-500/10 text-indigo-300/80 border border-indigo-500/15'}`}>{d}</span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-400">Input: {phase.input}</span>
                        <span className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-400">Output: {phase.output}</span>
                      </div>
                    </div>
                  </div>
                </div>
                {i < phases.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ArrowDown size={16} className="text-gray-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 AI Agents */}
      <section className="py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">6 AI Agent tạo nội dung</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-12">Mỗi agent chuyên biệt một loại bài — chạy song song, tạo nội dung đa dạng.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-white/20 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center mb-3 text-indigo-400 group-hover:scale-110 transition-transform">
                  {agent.icon}
                </div>
                <h3 className="font-semibold text-lg mb-1">{agent.name}</h3>
                <p className="text-sm text-indigo-400 mb-2">{agent.pillar}</p>
                <p className="text-gray-400 text-sm mb-3">{agent.desc}</p>
                <span className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-400">{agent.format}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notion Workflow — DisplayCards */}
      <section className="py-24 relative z-10 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quản lý qua <span className="text-gradient">Notion</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto">Không cần kỹ thuật — tất cả kiểm soát qua Notion với 4 module và vòng đời bài viết rõ ràng.</p>
          </motion.div>

          {/* DisplayCards + Module list layout */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            {/* DisplayCards visual — hidden on mobile/tablet */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 hidden lg:flex justify-center"
            >
              <DisplayCards cards={notionDisplayCards} />
            </motion.div>

            {/* Module details list */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-4"
            >
              {notionModules.map((mod, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 p-5 flex gap-4 items-start hover:border-indigo-500/30 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 flex-shrink-0">
                    {mod.icon}
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{mod.name}</h4>
                    <p className="text-gray-400 text-sm">{mod.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Status Flow */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-xl font-semibold text-center mb-8">Vòng đời bài viết</h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {statusFlow.map((status, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`px-4 py-2 rounded-xl text-sm font-medium border ${status.color}`}>
                    {status.icon}
                    <span className="ml-2">{status.name}</span>
                  </div>
                  {i < statusFlow.length - 1 && <ArrowRight size={14} className="text-gray-600" />}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7 Visual Styles — InteractiveSelector */}
      <section className="py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">7 phong cách hình ảnh</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Mỗi khách hàng có Visual Identity riêng — không ai giống ai.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <InteractiveSelector />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-4">Bắt đầu tự động hóa nội dung ngay hôm nay</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">Chọn gói phù hợp và để hệ thống làm việc cho bạn.</p>
          <Link to="/pricing">
            <ShinyButton>Xem bảng giá →</ShinyButton>
          </Link>
        </motion.div>
      </section>
    </>
  );
}

const phases = [
  {
    icon: <Fingerprint size={20} />,
    title: 'Khai thác ADN Nhân Hiệu',
    desc: 'Bộ 7 câu hỏi chuẩn → tạo Empathy Map + JTBD. Hai file này là core DNA dùng mãi mãi để AI hiểu đúng giọng văn.',
    value: 'Đây là bước quan trọng nhất — nó tạo ra "bộ não" cho AI. 7 câu hỏi khai thác sâu vào bản sắc của bạn, giúp AI nắm rõ cách bạn nói, nghĩ và truyền cảm hứng.',
    details: ['Giọng văn & phong cách', 'Giá trị cốt lõi', 'Đối tượng mục tiêu', 'Nỗi đau khách hàng', 'Câu chuyện thương hiệu', 'Triết lý nghề nghiệp', 'Mục tiêu nội dung'],
    input: '7 câu hỏi', output: 'Empathy Map + JTBD', badge: 'Làm 1 lần', you: true,
  },
  {
    icon: <PenTool size={20} />,
    title: 'AI tạo 6 loại nội dung',
    desc: '6 agent chạy song song — mỗi bài có Hook + Content + Tags. Output dạng JSON.',
    value: '6 agent chuyên biệt, mỗi agent viết một dạng nội dung khác nhau để feed của bạn luôn đa dạng và không bao giờ nhàm chán.',
    details: ['Pain Mirror — chạm nỗi đau', 'Paradigm Shift — đổi góc nhìn', 'Framework — hướng dẫn thực chiến', 'Proof & Story — kể chuyện', 'Carousel — slides chia insight', 'Quote & Script — viral dễ share'],
    input: 'ADN + Công thức cảm xúc', output: '5 bài/ngày', badge: 'Tự động', you: false,
  },
  {
    icon: <CalendarCheck size={20} />,
    title: 'Tự động lên lịch Notion',
    desc: 'AI quét lịch Notion hiện có → tìm ngày chưa đủ 5 bài → thêm vào. Status mặc định: Planned.',
    value: 'Bạn không cần lo "hôm nay đăng gì". Hệ thống tự động điền lịch trống, đảm bảo mỗi ngày đều có đủ nội dung chờ duyệt — không bao giờ bỏ lỡ cơ hội tiếp cận.',
    input: 'Content JSON', output: 'Notion Calendar', badge: 'Tự động', you: false,
  },
  {
    icon: <UserCheck size={20} />,
    title: 'Human-in-the-loop Review',
    desc: 'Đọc bài AI viết → chỉnh văn phong → thêm "hồn" cá nhân → đổi status sang "Gen Image".',
    value: 'Đây là điểm khác biệt với content "100% AI": bạn giữ quyền kiểm soát cuối cùng. Chỉ cần 15 phút/ngày để duyệt và thêm dấu ấn cá nhân — đủ để nội dung trở nên chân thực.',
    input: 'Bài status Planned', output: 'Bài status Gen Image', badge: 'Bạn kiểm soát', you: true,
  },
  {
    icon: <ImagePlus size={20} />,
    title: 'Tự động tạo hình ảnh',
    desc: 'Khi status = "Gen Image", hệ thống tự tạo ảnh phù hợp phong cách nhân hiệu. 7 phong cách khác nhau.',
    value: 'Mỗi nhân hiệu có Visual Identity riêng — 7 phong cách đảm bảo ảnh luôn nhất quán, giúp followers nhận ra bạn ngay khi lướt feed.',
    details: ['Cinematic — điện ảnh', 'Minimalist — tối giản', 'Bold Typography — chữ nổi bật', 'Watercolor — màu nước', 'Collage — ghép ảnh', 'Flat Design — phẳng', 'Photorealistic — siêu thực'],
    input: 'Status Gen Image', output: 'Ảnh + Link trong Notion', badge: 'Tự động', you: false,
  },
];

const agents = [
  { icon: <Heart size={20} />, name: 'F1 — Pain Mirror', pillar: 'Nỗi đau & Nhận diện', desc: 'Chân thành, gần gũi — vẽ ra nỗi đau mà người đọc "giật mình".', format: 'Normal post' },
  { icon: <RefreshCw size={20} />, name: 'F2 — Paradigm Shift', pillar: 'Thay đổi nhận thức', desc: 'Trí tuệ, sâu sắc — phá vỡ lối mòn suy nghĩ.', format: 'Normal post' },
  { icon: <BarChart3 size={20} />, name: 'F3 — Framework', pillar: 'Hướng dẫn thực chiến', desc: 'Thực tiễn — biến kiến thức thành hệ thống hành động.', format: 'Infographic / Carousel' },
  { icon: <Clapperboard size={20} />, name: 'F4 — Proof & Story', pillar: 'Hành trình & Bằng chứng', desc: 'Chân thực — kể câu chuyện tạo niềm tin.', format: 'Story post' },
  { icon: <GalleryHorizontal size={20} />, name: 'F5 — Paradigm Carousel', pillar: 'Thay đổi nhận thức', desc: 'Slides format — chia nhỏ insight thành từng trang.', format: 'Carousel slides' },
  { icon: <MessageSquareQuote size={20} />, name: 'F6 — Quote / Script', pillar: 'Đa kênh', desc: 'Quote card + TikTok script — dễ share, dễ viral.', format: 'Quote card / TikTok' },
];

const notionModules = [
  { icon: <NotebookPen size={18} />, name: 'Ghi Chú Idea', desc: 'Ghi ý tưởng lóe lên ngay lập tức — bộ nhớ tạm cho nhân hiệu.' },
  { icon: <Radio size={18} />, name: 'Channels', desc: 'Quản lý tất cả kênh truyền thông (Facebook, TikTok, YouTube, v.v.).' },
  { icon: <BarChart2 size={18} />, name: 'Recent Content', desc: 'Xem trạng thái bài viết theo 4 chế độ hiển thị.' },
  { icon: <CalendarDays size={18} />, name: 'Publishing Calendar', desc: 'Kéo thả bài viết theo dạng lịch — quản lý content cả tuần.' },
];

const notionDisplayCards = [
  {
    icon: <NotebookPen className="size-4 text-indigo-300" />,
    title: "Ghi Chú Idea",
    description: "Bắt ý tưởng lóe lên ngay lập tức",
    date: "Bộ nhớ tạm",
    iconClassName: "text-indigo-500",
    titleClassName: "text-indigo-400",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <BarChart2 className="size-4 text-violet-300" />,
    title: "Content Hub",
    description: "4 chế độ xem trạng thái bài viết",
    date: "Real-time",
    iconClassName: "text-violet-500",
    titleClassName: "text-violet-400",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <CalendarDays className="size-4 text-blue-300" />,
    title: "Publishing Calendar",
    description: "Kéo thả — quản lý content cả tuần",
    date: "Tự động lên lịch",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-400",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
];

const statusFlow = [
  { name: 'Idea', icon: <Lightbulb size={14} className="inline" />, color: 'border-gray-500/30 bg-gray-500/5 text-gray-400' },
  { name: 'Planned', icon: <FileCheck size={14} className="inline" />, color: 'border-blue-500/30 bg-blue-500/5 text-blue-400' },
  { name: 'Gen Image', icon: <Image size={14} className="inline" />, color: 'border-purple-500/30 bg-purple-500/5 text-purple-400' },
  { name: 'Ready', icon: <Rocket size={14} className="inline" />, color: 'border-yellow-500/30 bg-yellow-500/5 text-yellow-400' },
  { name: 'Completed', icon: <CheckCircle2 size={14} className="inline" />, color: 'border-green-500/30 bg-green-500/5 text-green-400' },
];

