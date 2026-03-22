import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Copy, Check, BookOpen, Image, FileText,
  GalleryHorizontal, Camera, PieChart, Scale, Palette, Film, Quote
} from 'lucide-react';
import { Hero } from '@/components/ui/hero-lamp';
import { useSEO } from '@/lib/useSEO';
import { useLanguage } from '@/src/lib/LanguageContext';

export default function LibraryPage() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const { t } = useLanguage();

  useSEO({
    title: t('libraryPage.seoTitle'),
    description: t('libraryPage.seoDesc'),
  });

  return (
    <>
      {/* Hero Lamp */}
      <Hero
        title={<>{t('libraryPage.title')}<span className="text-gradient">{t('libraryPage.titleHighlight')}</span></>}
        subtitle={t('libraryPage.subtitle')}
        subtitleClassName="text-lg md:text-xl max-w-[600px]"
      />

      {/* Tabs */}
      <section className="py-8 relative z-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-center gap-2 mb-12">
            {tabConfig.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  activeTab === i
                    ? 'bg-orange-500 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {/* Prompts Tab */}
            {activeTab === 0 && (
              <motion.div key="prompts" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {prompts.map((prompt, i) => (
                  <PromptCard key={i} title={prompt.title} content={prompt.content} tag={prompt.tag} />
                ))}
              </motion.div>
            )}

            {/* Images Tab */}
            {activeTab === 1 && (
              <motion.div key="images" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {sampleImages.map((img, i) => (
                  <ImageCard key={i} {...img} />
                ))}
              </motion.div>
            )}

            {/* Templates Tab */}
            {activeTab === 2 && (
              <motion.div key="templates" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                {templates.map((tpl, i) => (
                  <TemplateCard key={i} {...tpl} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}

/* ===== Components ===== */

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
        copied ? 'bg-green-500/10 text-green-400' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
      }`}
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
      {copied ? 'Đã copy!' : 'Copy'}
    </button>
  );
}

function PromptCard({ title, content, tag }: { title: string; content: string; tag: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold">{title}</h3>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">{tag}</span>
      </div>
      <pre className="text-gray-400 text-sm whitespace-pre-wrap font-sans flex-1 mb-4 leading-relaxed">{content}</pre>
      <CopyButton text={content} />
    </div>
  );
}

function ImageCard({ src, alt, style, icon, promptSnippet }: { src: string; alt: string; style: string; icon: React.ReactNode; promptSnippet: string }) {
  return (
    <div className="group relative rounded-xl overflow-hidden border border-white/10">
      <img src={src} alt={alt} loading="lazy" className="w-full aspect-square object-cover" />
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 p-4">
        <div className="flex items-center gap-2 text-sm font-medium">
          {icon}
          {style}
        </div>
        <CopyButton text={promptSnippet} />
      </div>
    </div>
  );
}

function TemplateCard({ title, tag, content }: { title: string; tag: string; content: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">{title}</h3>
        <span className="text-xs px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">{tag}</span>
      </div>
      <pre className="text-gray-400 text-sm whitespace-pre-wrap font-sans mb-4 leading-relaxed bg-white/[0.02] rounded-xl p-4 border border-white/5">{content}</pre>
      <CopyButton text={content} />
    </div>
  );
}

/* ===== Data ===== */

const tabConfig = [
  { label: 'Lời nhắc', icon: <BookOpen size={16} /> },
  { label: 'Hình ảnh mẫu', icon: <Image size={16} /> },
  { label: 'Template', icon: <FileText size={16} /> },
];

const prompts = [
  { title: 'Pain Mirror Prompt', tag: 'F1', content: 'Viết một bài post theo công thức Pain Mirror:\n\n1. Mở đầu bằng 1 câu hook — nỗi đau cụ thể mà target audience đang trải qua\n2. 3-4 đoạn mô tả tình huống quen thuộc "giật mình"\n3. Insight — bài học liên kết với giải pháp\n4. Soft CTA — hỏi ý kiến hoặc mời follow\n\nGiọng văn: Chân thành, gần gũi, empathy' },
  { title: 'Paradigm Shift Prompt', tag: 'F2', content: 'Viết bài thay đổi nhận thức:\n\n1. Mở đầu bằng một niềm tin phổ biến nhưng sai lầm\n2. Lật ngược bằng dữ kiện hoặc góc nhìn mới\n3. Dẫn chứng bằng ví dụ thực tế\n4. Kết: Nhận thức mới → Hành động mới\n\nGiọng văn: Trí tuệ, sâu sắc, provocative' },
  { title: 'Framework Prompt', tag: 'F3', content: 'Tạo infographic framework:\n\n1. Tiêu đề: [Số] bước/cách/sai lầm + [Kết quả]\n2. Chia thành 3-5 bước thực chiến\n3. Mỗi bước: Tên + Mô tả ngắn + Ví dụ\n4. Kết luận + CTA nhẹ\n\nFormat: Infographic hoặc Carousel' },
  { title: 'Story Prompt', tag: 'F4', content: 'Kể câu chuyện cá nhân:\n\n1. Setup: Bối cảnh trước khi thay đổi\n2. Conflict: Sự kiện/vấn đề phát sinh\n3. Turning point: Khoảnh khắc "aha"\n4. Resolution: Kết quả và bài học\n5. Connection: Liên hệ đến người đọc\n\nGiọng văn: Chân thực, vulnerable' },
];

const sampleImages = [
  { src: '/images/library/Library (1).webp', alt: 'Carousel Style', style: 'Carousel', icon: <GalleryHorizontal size={14} />, promptSnippet: 'Create a carousel slide with brand identity, clean layout, minimal text, premium feel' },
  { src: '/images/library/Library (2).webp', alt: 'Normal Style', style: 'Normal', icon: <Camera size={14} />, promptSnippet: 'Professional portrait photo, natural light, lifestyle setting, authentic expression' },
  { src: '/images/library/Library (3).webp', alt: 'Infographic Style', style: 'Infographic', icon: <PieChart size={14} />, promptSnippet: 'Clean infographic design, data visualization, modern chart, brand colors' },
  { src: '/images/library/Library (4).webp', alt: 'Comparison Style', style: 'Comparison', icon: <Scale size={14} />, promptSnippet: 'Split comparison layout, before/after, side by side, clear visual contrast' },
  { src: '/images/library/Library (5).webp', alt: 'Creative Style', style: 'Creative', icon: <Palette size={14} />, promptSnippet: 'Creative artistic portrait, bold colors, unique composition, editorial style' },
  { src: '/images/library/Library (6).webp', alt: 'Poster Film Style', style: 'Poster Film', icon: <Film size={14} />, promptSnippet: 'Cinematic poster style, moody lighting, film grain, dramatic composition' },
  { src: '/images/library/Library (7).webp', alt: 'Quote Card Style', style: 'Quote Card', icon: <Quote size={14} />, promptSnippet: 'Minimalist quote card, elegant typography, subtle background, brand accent' },
  { src: '/images/library/Library (8).webp', alt: 'Brand Visual', style: 'Brand Visual', icon: <Palette size={14} />, promptSnippet: 'Bold brand visual, consistent identity, signature style, high impact' },
];

const templates = [
  { title: 'F1 — Pain Mirror', tag: 'Normal Post', content: '[Hook — 1 câu đau nhất, ví dụ: "Bạn đang viết content mỗi ngày mà..."]\n\n[Đoạn 1 — Mô tả tình huống: ngồi cả buổi nghĩ caption...]\n[Đoạn 2 — Hậu quả: deadline dí, chất lượng giảm...]\n[Đoạn 3 — Cảm xúc: mệt mỏi, kiệt sức sáng tạo...]\n\n💡 Insight: [Bài học liên kết giải pháp]\n\n→ Bạn nghĩ sao? Comment cho mình biết nhé!' },
  { title: 'F3 — Framework', tag: 'Infographic', content: '📌 [SỐ] BƯỚC ĐỂ [KẾT QUẢ]\n\n✅ Bước 1: [Tên bước]\n→ [Mô tả ngắn gọn + ví dụ]\n\n✅ Bước 2: [Tên bước]\n→ [Mô tả ngắn gọn + ví dụ]\n\n✅ Bước 3: [Tên bước]\n→ [Mô tả ngắn gọn + ví dụ]\n\n🎯 Kết: [Tóm tắt + CTA nhẹ]' },
  { title: 'F5 — Paradigm Carousel', tag: 'Carousel', content: 'SLIDE 1 (Cover): [Tiêu đề gây tò mò]\nSLIDE 2: [Niềm tin cũ — "Mọi người vẫn nghĩ..."]\nSLIDE 3: [Lật ngược — "Thực tế là..."]\nSLIDE 4: [Dẫn chứng / Data]\nSLIDE 5: [Framework mới]\nSLIDE 6 (CTA): [Follow + Save để xem thêm]' },
  { title: 'F6 — Quote Card', tag: 'Quote', content: '"[Câu quote ấn tượng nhất từ bài viết — 15-25 từ]"\n\n— [Tên tác giả hoặc brand name]\n\n#quote #mindset #personalbranding' },
];
