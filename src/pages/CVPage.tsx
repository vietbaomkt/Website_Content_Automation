import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "motion/react";
import {
  User,
  Briefcase,
  Rocket,
  BarChart3,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Globe,
  GraduationCap,
  ExternalLink,
  RefreshCw,
  FileText,
  UserCheck,
  Bot,
  Plane,
  Mic,
  MessageCircle,
  Dumbbell,
  BookOpen,
  UtensilsCrossed,
  Menu,
  Target,
  Megaphone,
  Calendar,
  Users,
  Palette,
  Cpu,
  X,
} from "lucide-react";

// ─── Constants ──────────────────────────────────────────────
const STYLE_ID = "cv-page-animations";

const CV_DATA = {
  name: "BÙI BẢO VIỆT",
  alias: "Brian Bui",
  title: "Marketing Manager",
  subtitle: "Brand · Event · Digital",
  tagline:
    "7+ năm xây dựng thương hiệu, quản lý chiến dịch và tổ chức sự kiện — kết hợp AI để tối ưu hiệu suất.",
  email: "vietbao.mkt@gmail.com",
  phone: "0356.433.455",
  location: "TP. Hồ Chí Minh",
  timezone: "GMT+7",
  facebook: "https://www.facebook.com/VietBaoSystem",
  portfolio: "https://www.bbaoviet.click/",
  university: "Đại học Tôn Đức Thắng (TDT University)",
};

const NAV_ITEMS = [
  { id: "hero", icon: <User size={18} />, label: "Giới thiệu" },
  { id: "experience", icon: <Briefcase size={18} />, label: "Kinh nghiệm" },
  { id: "projects", icon: <Rocket size={18} />, label: "Dự án" },
  { id: "skills", icon: <BarChart3 size={18} />, label: "Kỹ năng" },
  { id: "ai", icon: <Sparkles size={18} />, label: "AI & Tech" },
  { id: "contact", icon: <Mail size={18} />, label: "Liên hệ" },
];

const STATS = [
  { value: 7, suffix: "+", label: "Năm kinh nghiệm" },
  { value: 5, suffix: " Tỷ", label: "Budget sự kiện" },
  { value: 100, suffix: "+", label: "Workshops tổ chức" },
  { value: 10, suffix: "", label: "Nhân sự quản lý" },
];

const AI_SYSTEMS = [
  {
    icon: <RefreshCw size={22} className="text-indigo-400" />,
    name: "Auto-posting Pipeline",
    desc: "Lên lịch và đăng bài tự động đa nền tảng — Facebook, Website, Blog — không cần nhân lực.",
  },
  {
    icon: <FileText size={22} className="text-indigo-400" />,
    name: "AI Content Generator",
    desc: "Viết nội dung marketing theo đúng brand voice. Từ caption đến blog post, tất cả đều AI-powered.",
  },
  {
    icon: <UserCheck size={22} className="text-indigo-400" />,
    name: "AI CV Filter System",
    desc: "Tự động lọc và đánh giá hồ sơ ứng viên. Tiết kiệm 80% thời gian tuyển dụng cho team HR.",
  },
  {
    icon: <Bot size={22} className="text-indigo-400" />,
    name: "AI Trợ lý làm việc",
    desc: "Hỗ trợ team xử lý công việc lặp lại — từ tổng hợp báo cáo đến trả lời FAQ khách hàng.",
  },
];

const TECH_TOOLS = [
  "Antigravity AI", "ChatGPT", "Claude", "Gemini", "n8n",
  "Canva", "Adobe Photoshop", "Adobe Illustrator", "CapCut",
];

const EXPERIENCES = [
  {
    year: "2024 – Hiện tại",
    company: "iDOCTOR",
    position: "Marketing Manager",
    highlight: true,
    remote: false,
    initials: "iD",
    bullets: [
      "Quản lý và dẫn dắt team Marketing 10 người",
      'Dẫn dắt dự án tổ chức sự kiện "BORN TO SHINE" — ngân sách 5 tỷ đồng, phối hợp với ekip đạo diễn Trần Tú',
      "Phát triển thương hiệu IT Pharma với sản phẩm chủ lực Inbiotec Amber",
      "Tổ chức hơn 100 workshop lớn nhỏ cho khách hàng và nội bộ",
      "Tái định vị thương hiệu từ Sally Beauty → iDoctor",
      "Tổ chức sự kiện kỷ niệm 10 năm thành lập công ty",
      "Ứng dụng AI Agentic + n8n automation vào quy trình marketing",
    ],
  },
  {
    year: "2022 – 2024",
    company: "Bich Na Clinic",
    position: "Marketing Executive",
    highlight: false,
    remote: false,
    initials: "BN",
    bullets: [
      "Quản lý ngân sách Digital Marketing 150 triệu đồng/tháng",
      "Phối hợp trực tiếp với các agency bên ngoài",
      "Sản xuất nội dung: video Ads, TVC, ấn phẩm in ấn",
    ],
  },
  {
    year: "2021 – 2022",
    company: "Hb Medical",
    position: "Marketing Executive",
    highlight: false,
    remote: true,
    initials: "HB",
    bullets: [
      "Xây dựng chiến lược nội dung cho thương hiệu thiết bị y tế",
      "Lên ngân sách marketing và quản lý điều phối team",
      "Tổ chức workshop sản phẩm, phát triển nội dung đa kênh",
    ],
  },
  {
    year: "2019",
    company: "Minh Khuong Group",
    position: "Content Marketing",
    highlight: false,
    remote: false,
    initials: "MK",
    bullets: [
      "Phát triển chiến lược nội dung và quản lý kênh mạng xã hội",
    ],
  },
  {
    year: "2019",
    company: "CyberLogitec",
    position: "Service Desk",
    highlight: false,
    remote: false,
    initials: "CL",
    bullets: [
      "Vận hành phần mềm quản lý cảng biển — truy vấn SQL & xử lý database",
    ],
  },
];

const PROJECTS = [
  {
    name: "BORN TO SHINE",
    tag: "5 Tỷ VNĐ",
    company: "iDOCTOR",
    desc: "Sự kiện quy mô lớn phối hợp với đạo diễn Trần Tú, tạo tiếng vang toàn ngành làm đẹp.",
  },
  {
    name: "IT Pharma / Inbiotec Amber",
    tag: "Brand từ 0",
    company: "iDOCTOR",
    desc: "Xây dựng thương hiệu từ đầu đến cuối — chiến lược, go-to-market, truyền thông.",
  },
  {
    name: "Rebranding Sally Beauty → iDoctor",
    tag: "Tái định vị",
    company: "iDOCTOR",
    desc: "Lên kế hoạch và thực thi chiến lược tái định vị thương hiệu toàn diện.",
  },
  {
    name: "AI Marketing System",
    tag: "n8n + Agentic",
    company: "Dự án cá nhân",
    desc: "Hệ thống tự động hoá quy trình marketing bằng AI — auto-post, content gen, CV filter.",
  },
];

const SKILLS = [
  { name: "Brand Strategy", percent: 90, icon: <Target size={20} />, tags: ["Go-to-Market", "Positioning", "Rebranding"] },
  { name: "Digital Marketing", percent: 88, icon: <Megaphone size={20} />, tags: ["Ads", "Social Media", "SEO"] },
  { name: "Event Management", percent: 85, icon: <Calendar size={20} />, tags: ["5 Tỷ Budget", "Workshop", "Activation"] },
  { name: "Team Leadership", percent: 85, icon: <Users size={20} />, tags: ["10 Members", "Agency Mgmt", "KPI"] },
  { name: "Content & Creative", percent: 80, icon: <Palette size={20} />, tags: ["Video", "Copywriting", "Design"] },
  { name: "AI & Automation", percent: 80, icon: <Cpu size={20} />, tags: ["n8n", "AI Agent", "Workflow"] },
];

// ─── Hooks ──────────────────────────────────────────────────
function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function useActiveSection() {
  const [active, setActive] = useState("hero");
  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // pick the one with highest intersection ratio
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActive(visible[0].target.id);
        }
      },
      { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return active;
}

// ─── Sub-components ─────────────────────────────────────────
const OrbitalSVG = () => (
  <svg viewBox="0 0 120 120" className="h-20 w-20 opacity-60" aria-hidden>
    <circle cx="60" cy="60" r="46" fill="none" stroke="#f5f5f5" strokeWidth="1.4"
      className="motion-safe:animate-[cv-orbit_8.5s_linear_infinite]"
      style={{ strokeDasharray: "18 14" }} />
    <rect x="34" y="34" width="52" height="52" rx="14"
      fill="rgba(255,255,255,0.08)" stroke="#f5f5f5" strokeWidth="1.2"
      className="motion-safe:animate-[cv-grid_5.4s_ease-in-out_infinite]" />
    <circle cx="60" cy="60" r="7" fill="#f5f5f5" />
    <path d="M60 30v10M60 80v10M30 60h10M80 60h10" stroke="#f5f5f5" strokeWidth="1.4" strokeLinecap="round"
      className="motion-safe:animate-[cv-pulse_6s_ease-in-out_infinite]" />
  </svg>
);

const PillBadge: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <span className={`inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.35em] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 hover:shadow-[0_4px_12px_rgba(99,102,241,0.15)] cursor-default ${className}`}>
    {children}
  </span>
);

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">{children}</p>
);

const StatCard: React.FC<{ value: number; suffix: string; label: string; started: boolean }> = ({ value, suffix, label, started }) => {
  const count = useCountUp(value, 2000, started);
  return (
    <div className="group flex flex-col items-center px-6 py-5 sm:px-8 transition-all duration-300 hover:bg-white/[0.04] cursor-default">
      <span className="text-3xl font-bold tracking-tight text-white sm:text-4xl transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.4)]">
        {count}<span className="text-indigo-400">{suffix}</span>
      </span>
      <span className="mt-1 text-[11px] uppercase tracking-[0.3em] text-white/50 transition-colors duration-300 group-hover:text-white/70">{label}</span>
      <span className="mt-2 h-0.5 w-0 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-500 group-hover:w-12" />
    </div>
  );
};

// ─── CVNavbar (adapted from Navbar.tsx pattern) ─────────────
function CVNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [navHovered, setNavHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setCollapsed(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMinimized = collapsed && !navHovered;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setNavHovered(true)}
      onMouseLeave={() => setNavHovered(false)}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-[width,max-width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled ? "w-[95%] max-w-4xl" : "w-[95%] max-w-4xl"
      }`}
    >
      <div className="glass rounded-full px-4 py-2.5 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        {/* Logo */}
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
          <span className="text-sm font-bold tracking-widest uppercase">
            B<span className="text-indigo-400">B</span>V
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isHovered = hoveredItem === item.id;
            const isActive = activeSection === item.id;
            return (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`
                    relative flex items-center gap-2
                    px-3 py-2 rounded-lg
                    transition-all duration-300 ease-out
                    ${isActive
                      ? "bg-white/15 text-white"
                      : isHovered
                        ? "bg-white/10 -translate-y-0.5 shadow-lg shadow-white/5"
                        : "hover:bg-white/5"
                    }
                  `}
                  style={{
                    transform: isHovered && !isActive ? "translateY(-2px) scale(1.05)" : undefined,
                    transitionProperty: "box-shadow, transform, background, border-color",
                  }}
                >
                  <div className={`transition-all duration-300 ${isActive || isHovered ? "text-white scale-110" : "text-gray-300"}`}>
                    {item.icon}
                  </div>
                  <span className={`text-sm whitespace-nowrap transition-all duration-300 ${isActive || isHovered ? "text-white" : "text-gray-300"}`}>
                    {item.label}
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Right side: CTA + Mobile menu */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <a
            href={`mailto:${CV_DATA.email}`}
            className="hidden md:block whitespace-nowrap bg-indigo-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-400 transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
          >
            Liên hệ ngay
          </a>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 glass rounded-2xl p-4 md:hidden"
        >
          <div className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    isActive ? "bg-white/15 text-white" : "text-gray-300 hover:bg-white/5"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
            <a
              href={`mailto:${CV_DATA.email}`}
              className="block mt-2 bg-indigo-500 text-white px-4 py-3 rounded-xl text-center font-medium hover:bg-indigo-400 transition-colors"
            >
              Liên hệ ngay
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

// ─── Inject keyframe animations ─────────────────────────────
function useInjectStyles() {
  useEffect(() => {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.innerHTML = `
      @keyframes cv-intro {
        0% { opacity: 0; transform: translate3d(0, 64px, 0) scale(0.98); filter: blur(12px); }
        60% { filter: blur(0); }
        100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); filter: blur(0); }
      }
      @keyframes cv-card {
        0% { opacity: 0; transform: translate3d(0, 32px, 0) scale(0.95); }
        100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
      }
      @keyframes cv-orbit {
        0% { stroke-dashoffset: 0; transform-origin: center; transform: rotate(0deg); }
        100% { stroke-dashoffset: -64; transform-origin: center; transform: rotate(360deg); }
      }
      @keyframes cv-grid {
        0%, 100% { transform-origin: center; transform: rotate(-2deg); opacity: 0.7; }
        50% { transform-origin: center; transform: rotate(2deg); opacity: 1; }
      }
      @keyframes cv-pulse {
        0%, 100% { stroke-dasharray: 0 200; opacity: 0.2; }
        45%, 60% { stroke-dasharray: 200 0; opacity: 1; }
      }
      @keyframes cv-glow {
        0%, 100% { opacity: 0.3; transform: translate3d(0,0,0); }
        50% { opacity: 0.7; transform: translate3d(0,-8px,0); }
      }
      @keyframes cv-drift {
        0%, 100% { transform: translate3d(0,0,0) rotate(-3deg); }
        50% { transform: translate3d(0,-12px,0) rotate(3deg); }
      }
      @keyframes cv-btn-pulse {
        0%, 100% { box-shadow: 0 0 0 0 rgba(99,102,241,0.4); }
        50% { box-shadow: 0 0 20px 4px rgba(99,102,241,0.15); }
      }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);
}

// ─── Spotlight Hover Helper ─────────────────────────────────
function useSpotlight() {
  const onMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const t = e.currentTarget;
    const r = t.getBoundingClientRect();
    t.style.setProperty("--spot-x", `${e.clientX - r.left}px`);
    t.style.setProperty("--spot-y", `${e.clientY - r.top}px`);
  }, []);
  const onLeave = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.removeProperty("--spot-x");
    e.currentTarget.style.removeProperty("--spot-y");
  }, []);
  return { onMove, onLeave };
}

// ═══════════════════════════════════════════════════════════════
// MAIN PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════
export default function CVPage() {
  useInjectStyles();
  const spotlight = useSpotlight();

  const hero = useScrollReveal(0.1);
  const stats = useScrollReveal(0.3);
  const timeline = useScrollReveal(0.1);
  const projects = useScrollReveal(0.1);
  const skills = useScrollReveal(0.15);
  const ai = useScrollReveal(0.15);
  const about = useScrollReveal(0.15);
  const cta = useScrollReveal(0.2);

  return (
    <div className="relative isolate min-h-screen w-full bg-[#030712] text-white selection:bg-indigo-500/30">
      {/* ─── Global Background ─── */}
      <div className="pointer-events-none fixed inset-0 -z-30"
        style={{
          backgroundColor: "#030712",
          backgroundImage: [
            "radial-gradient(ellipse 80% 60% at 10% -10%, rgba(99,102,241,0.12), transparent 60%)",
            "radial-gradient(ellipse 90% 70% at 90% -20%, rgba(139,92,246,0.08), transparent 70%)",
          ].join(", "),
        }}
      />
      <div className="pointer-events-none fixed inset-0 -z-20 opacity-70"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 0.7px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />

      {/* ─── Floating Section Navbar ─── */}
      <CVNavbar />

      {/* ══════════════════════════════════════════════════════════ */}
      {/* SECTION 1: HERO                                           */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section
        id="hero"
        ref={hero.ref}
        className={`relative flex min-h-screen w-full flex-col justify-center gap-16 px-6 pt-28 pb-16 md:px-10 lg:px-16 xl:px-24 transition-opacity duration-700 ${
          hero.visible ? "motion-safe:animate-[cv-intro_1s_cubic-bezier(.22,.68,0,1)_forwards]" : "opacity-0"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 -z-10"
          style={{ background: "radial-gradient(60% 50% at 50% 30%, rgba(99,102,241,0.12), transparent 70%)", filter: "blur(40px)" }}
        />

        <header className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] lg:items-end">
          {/* Left */}
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-3">
              <PillBadge>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Sẵn sàng làm việc
              </PillBadge>
              <PillBadge>
                <Globe size={12} /> Remote-ready · {CV_DATA.timezone}
              </PillBadge>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                {CV_DATA.name}
                <span className="block text-xl font-normal text-white/50 mt-2 tracking-wide">({CV_DATA.alias})</span>
              </h1>
              <p className="text-lg font-medium text-indigo-400 md:text-xl">
                {CV_DATA.title} · {CV_DATA.subtitle}
              </p>
              <p className="max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
                {CV_DATA.tagline}
              </p>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-white/40">
              Marketing Manager với 7+ năm kinh nghiệm trong ngành Làm đẹp và Y tế — từ lên chiến lược thương hiệu, sản xuất nội dung đến quản lý ngân sách và tổ chức sự kiện quy mô lớn. Kết hợp công nghệ AI vào quy trình để tối ưu hiệu suất và tiết kiệm chi phí vận hành.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${CV_DATA.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-indigo-400 motion-safe:animate-[cv-btn-pulse_3s_ease-in-out_infinite]">
                <Mail size={16} /> Gửi Email
              </a>
              <a href={CV_DATA.portfolio} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/12">
                <ExternalLink size={16} /> Xem Case Study
              </a>
            </div>
          </div>

          {/* Right — Avatar Card */}
          <div
            className="relative flex flex-col items-center gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-[0_8px_30px_rgba(99,102,241,0.15)]"
            onMouseMove={(e) => {
              const card = e.currentTarget;
              const rect = card.getBoundingClientRect();
              const x = (e.clientX - rect.left) / rect.width - 0.5;
              const y = (e.clientY - rect.top) / rect.height - 0.5;
              card.style.transform = `perspective(600px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale3d(1.02,1.02,1.02)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = '';
            }}
            style={{ transition: 'transform 0.3s ease-out, border-color 0.3s, box-shadow 0.3s' }}
          >
            <div className="absolute -top-3 -right-3 opacity-40"><OrbitalSVG /></div>
            <div className="relative">
              <div className="h-32 w-32 overflow-hidden rounded-full border-2 border-indigo-500/40 bg-gradient-to-br from-indigo-600/30 to-violet-600/30">
                <img
                  src="/images/Avatar.webp"
                  alt="Bùi Bảo Việt"
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-2 border-[#030712] bg-emerald-400" />
            </div>
            <div className="space-y-3 text-center">
              <h2 className="text-lg font-semibold tracking-tight">{CV_DATA.name}</h2>
              <div className="flex flex-wrap justify-center gap-2">
                <PillBadge><MapPin size={12} /> {CV_DATA.location}</PillBadge>
                <PillBadge><Globe size={12} /> Remote</PillBadge>
              </div>
              <div className="space-y-1 text-sm text-white/50">
                <p className="flex items-center justify-center gap-1.5"><Mail size={13} /> {CV_DATA.email}</p>
                <p className="flex items-center justify-center gap-1.5"><Phone size={13} /> {CV_DATA.phone}</p>
              </div>
              <p className="flex items-center justify-center gap-1.5 text-xs text-white/30">
                <GraduationCap size={13} /> {CV_DATA.university}
              </p>
            </div>
          </div>
        </header>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* SECTION 2: STATS                                          */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section ref={stats.ref} className="relative px-6 py-16 md:px-10 lg:px-16 xl:px-24">
        <div className={`mx-auto flex max-w-4xl flex-wrap justify-center divide-x divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-700 ${
          stats.visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}>
          {STATS.map((s) => (
            <StatCard key={s.label} value={s.value} suffix={s.suffix} label={s.label} started={stats.visible} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* SECTION 3: EXPERIENCE TIMELINE                            */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section id="experience" ref={timeline.ref} className="relative px-6 py-20 md:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-4xl space-y-12">
          <SectionLabel>Hành trình nghề nghiệp</SectionLabel>

          <div className="relative">
            <div className={`absolute left-[18px] top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-white/10 to-transparent origin-top transition-transform duration-1000 ${
              timeline.visible ? "scale-y-100" : "scale-y-0"
            }`} />
            <div className="space-y-8">
              {EXPERIENCES.map((exp, i) => (
                <div key={exp.company}
                  className={`relative pl-12 transition-all duration-700 ${
                    timeline.visible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${i * 200}ms` }}
                >
                  <div className={`absolute left-[12px] top-2 h-3.5 w-3.5 rounded-full border-2 ${
                    exp.highlight
                      ? "border-indigo-500 bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.6)]"
                      : "border-white/30 bg-[#030712]"
                  }`} />
                  <div
                    onMouseMove={spotlight.onMove}
                    onMouseLeave={spotlight.onLeave}
                    className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 ${
                    exp.highlight ? "border-indigo-500/30 bg-indigo-500/[0.06]" : "border-white/10 bg-white/[0.03]"
                  }`}>
                    {/* Spotlight overlay */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(200px circle at var(--spot-x, 50%) var(--spot-y, 50%), ${
                          exp.highlight ? "rgba(99,102,241,0.15)" : "rgba(99,102,241,0.12)"
                        }, transparent 72%)`,
                      }}
                    />
                    <div className="flex flex-wrap items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl text-xs font-bold ${
                        exp.highlight ? "bg-indigo-500/20 text-indigo-400" : "bg-white/10 text-white/60"
                      }`}>{exp.initials}</div>
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold">
                          {exp.company} <span className="font-normal text-white/50">— {exp.position}</span>
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-white/40">{exp.year}</span>
                          {exp.remote && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-violet-500/20 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-violet-400">
                              <Plane size={10} /> Remote
                            </span>
                          )}
                          {exp.highlight && (
                            <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-indigo-400">
                              Hiện tại
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-1.5">
                      {exp.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-white/50">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-current" />{b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* SECTION 4: KEY PROJECTS                                   */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section id="projects" ref={projects.ref} className="relative px-6 py-20 md:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-6xl space-y-12">
          <SectionLabel>Dự án nổi bật</SectionLabel>

          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)_minmax(0,0.9fr)] xl:items-stretch">
            {/* LEFT */}
            <div className={`flex flex-col gap-5 transition-all duration-700 ${
              projects.visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`} style={{ transitionDelay: "0ms" }}>
              {PROJECTS.slice(0, 2).map((p) => (
                <div key={p.name} onMouseMove={spotlight.onMove} onMouseLeave={spotlight.onLeave}
                  className="group relative flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                    style={{ background: "radial-gradient(200px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(99,102,241,0.12), transparent 72%)" }} />
                  <div className="relative z-10 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.15em]">{p.name}</h3>
                      <PillBadge className="text-amber-400 border-amber-400/20 bg-amber-400/10">{p.tag}</PillBadge>
                    </div>
                    <p className="text-xs text-white/40">{p.company}</p>
                    <p className="text-sm leading-relaxed text-white/50">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CENTER — Featured */}
            <figure className={`order-first overflow-hidden rounded-[32px] border border-white/10 xl:order-none transition-all duration-700 ${
              projects.visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`} style={{ transitionDelay: "150ms" }}>
              <div className="relative w-full pb-[100%] sm:pb-[75%] lg:pb-[90%]">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-violet-900/30 to-[#030712] flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <Mic size={48} className="mx-auto text-white/40" />
                    <p className="text-xs uppercase tracking-[0.35em] text-white/40">BORN TO SHINE</p>
                    <p className="text-lg font-semibold text-white/70">Sự kiện 5 Tỷ VNĐ</p>
                  </div>
                </div>
                <span className="pointer-events-none absolute -left-16 top-16 h-40 w-40 rounded-full border border-indigo-500/15 opacity-70 motion-safe:animate-[cv-glow_9s_ease-in-out_infinite]" />
                <span className="pointer-events-none absolute -right-12 bottom-16 h-48 w-48 rounded-full border border-violet-500/10 opacity-40 motion-safe:animate-[cv-drift_12s_ease-in-out_infinite]" />
              </div>
              <figcaption className="flex items-center justify-between border-t border-white/10 px-6 py-4 text-[11px] uppercase tracking-[0.35em] text-white/40">
                <span>Dự án tiêu biểu</span>
                <span className="flex items-center gap-2"><span className="h-px w-6 bg-current" />iDOCTOR · 2024</span>
              </figcaption>
            </figure>

            {/* RIGHT */}
            <div className={`flex flex-col gap-5 transition-all duration-700 ${
              projects.visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`} style={{ transitionDelay: "300ms" }}>
              {PROJECTS.slice(2, 4).map((p) => (
                <div key={p.name} onMouseMove={spotlight.onMove} onMouseLeave={spotlight.onLeave}
                  className="group relative flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                    style={{ background: "radial-gradient(200px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(99,102,241,0.12), transparent 72%)" }} />
                  <div className="relative z-10 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.15em]">{p.name}</h3>
                      <PillBadge className="text-amber-400 border-amber-400/20 bg-amber-400/10">{p.tag}</PillBadge>
                    </div>
                    <p className="text-xs text-white/40">{p.company}</p>
                    <p className="text-sm leading-relaxed text-white/50">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* SECTION 5: SKILLS — Circular Progress Cards                */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section id="skills" ref={skills.ref} className="relative px-6 py-20 md:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-5xl space-y-12">
          <SectionLabel>Kỹ năng chuyên môn</SectionLabel>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((skill, i) => {
              const radius = 42;
              const circumference = 2 * Math.PI * radius;
              const strokeDashoffset = skills.visible
                ? circumference * (1 - skill.percent / 100)
                : circumference;
              return (
                <div
                  key={skill.name}
                  onMouseMove={spotlight.onMove}
                  onMouseLeave={spotlight.onLeave}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 ${
                    skills.visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {/* Spotlight overlay */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                    style={{ background: "radial-gradient(200px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(99,102,241,0.12), transparent 72%)" }}
                  />
                  <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                    {/* Circular Progress Ring */}
                    <div className="relative h-24 w-24">
                      <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
                        {/* Background track */}
                        <circle cx="50" cy="50" r={radius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
                        {/* Animated progress */}
                        <circle
                          cx="50" cy="50" r={radius}
                          fill="none"
                          stroke="url(#skill-gradient)"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeDasharray={circumference}
                          strokeDashoffset={strokeDashoffset}
                          className="transition-all duration-[1800ms] ease-out"
                          style={{ transitionDelay: `${i * 120 + 300}ms` }}
                        />
                        <defs>
                          <linearGradient id="skill-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#6366f1" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                          </linearGradient>
                        </defs>
                      </svg>
                      {/* Percentage text */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-bold tabular-nums">
                          {skills.visible ? skill.percent : 0}%
                        </span>
                      </div>
                    </div>

                    {/* Icon + Name */}
                    <div className="flex items-center gap-2 text-indigo-400">
                      {skill.icon}
                      <h3 className="text-sm font-semibold uppercase tracking-[0.12em]">{skill.name}</h3>
                    </div>

                    {/* Keyword Tags */}
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {skill.tags.map((tag: string) => (
                        <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] uppercase tracking-[0.15em] text-white/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* SECTION 6: AI & TECH (bonus section)                      */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section id="ai" ref={ai.ref} className="relative px-6 py-20 md:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="space-y-4">
            <SectionLabel>Công nghệ & Tối ưu hoá</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Tối ưu hoá quy trình bằng <span className="text-indigo-400">công nghệ</span>
            </h2>
            <p className="max-w-2xl text-base text-white/50">
              Ứng dụng AI để tự động hoá — giúp team tập trung vào chiến lược thay vì công việc thủ công. Mỗi hệ thống dưới đây đã được triển khai và đang vận hành thực tế.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {AI_SYSTEMS.map((sys, i) => (
              <div key={sys.name} onMouseMove={spotlight.onMove} onMouseLeave={spotlight.onLeave}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 ${
                  ai.visible ? "motion-safe:animate-[cv-card_0.6s_cubic-bezier(.22,.68,0,1)_forwards]" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                  style={{ background: "radial-gradient(200px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(99,102,241,0.12), transparent 72%)" }} />
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center gap-3">
                    {sys.icon}
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">{sys.name}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-white/50">{sys.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.3em] text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />Đã triển khai
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {TECH_TOOLS.map((tool) => (
              <PillBadge key={tool} className="text-white/70 hover:text-white hover:border-indigo-500/30">{tool}</PillBadge>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* SECTION 7: ABOUT / PHILOSOPHY                             */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section ref={about.ref} className="relative px-6 py-20 md:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] items-center">
            <figure className={`overflow-hidden rounded-[32px] border border-white/10 transition-all duration-700 ${
              about.visible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            }`}>
              <div className="relative w-full pb-[125%]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 h-full w-full object-cover"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%231e1b4b' stop-opacity='0.3'/%3E%3Cstop offset='50%25' stop-color='%230a0e1a'/%3E%3Cstop offset='100%25' stop-color='%234c1d95' stop-opacity='0.2'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g)' width='400' height='500'/%3E%3C/svg%3E"
                >
                  <source src="/videos/About-clip.webm" type="video/webm" />
                  <source src="/videos/About-clip.mp4" type="video/mp4" />
                </video>
                {/* Subtle overlay for text readability */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030712]/60 via-transparent to-transparent" />
                <span className="pointer-events-none absolute -left-12 top-12 h-32 w-32 rounded-full border border-indigo-500/10 motion-safe:animate-[cv-glow_9s_ease-in-out_infinite]" />
              </div>
            </figure>

            <div className={`space-y-6 transition-all duration-700 ${
              about.visible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`} style={{ transitionDelay: "200ms" }}>
              <SectionLabel>Về tôi</SectionLabel>
              <blockquote className="border-l-2 border-indigo-500/50 pl-6 text-lg italic leading-relaxed text-white/70">
                "Tôi bắt đầu từ Service Desk với SQL, học cách máy móc hoạt động. Giờ tôi dùng chính tư duy đó để xây hệ thống marketing — kết hợp công nghệ để team chạy hiệu quả hơn."
              </blockquote>
              <p className="text-sm leading-relaxed text-white/50">
                Đang tìm kiếm cơ hội marketing — đặc biệt là các vị trí Marketing Manager nơi tôi có thể phát huy kinh nghiệm brand strategy, event management và digital marketing cho doanh nghiệp.
              </p>
              <div className="flex flex-wrap gap-2">
                <PillBadge><MapPin size={12} /> {CV_DATA.location}</PillBadge>
                <PillBadge><GraduationCap size={12} /> TDT University</PillBadge>
                <PillBadge><Globe size={12} /> Remote · {CV_DATA.timezone}</PillBadge>
              </div>
              <div className="flex flex-wrap gap-2">
                <PillBadge className="text-white/50"><Dumbbell size={12} /> Gym</PillBadge>
                <PillBadge className="text-white/50"><Plane size={12} /> Du lịch</PillBadge>
                <PillBadge className="text-white/50"><BookOpen size={12} /> Đọc sách</PillBadge>
                <PillBadge className="text-white/50"><UtensilsCrossed size={12} /> Ẩm thực</PillBadge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* SECTION 8: CTA & CONTACT                                  */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section id="contact" ref={cta.ref} className="relative px-6 py-24 md:px-10 lg:px-16 xl:px-24">
        <div className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(60% 50% at 50% 50%, rgba(99,102,241,0.1), transparent 70%)", filter: "blur(40px)" }} />

        <div className={`relative mx-auto max-w-2xl text-center space-y-8 transition-all duration-700 ${
          cta.visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}>
          <SectionLabel>Hợp tác</SectionLabel>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Sẵn sàng <span className="text-indigo-400">hợp tác</span>?
          </h2>
          <p className="text-base leading-relaxed text-white/50">
            Nếu bạn cần một Marketing Manager giàu kinh nghiệm, biết quản lý team, tổ chức sự kiện và tối ưu quy trình bằng công nghệ — hãy liên hệ với tôi.
          </p>

          <div className="space-y-2 text-sm text-white/60">
            <p className="flex items-center justify-center gap-2"><Mail size={14} /> {CV_DATA.email}</p>
            <p className="flex items-center justify-center gap-2"><Phone size={14} /> {CV_DATA.phone}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a href={`mailto:${CV_DATA.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-indigo-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] motion-safe:animate-[cv-btn-pulse_3s_ease-in-out_infinite]">
              <Mail size={16} /> Gửi Email
            </a>
            <a href={CV_DATA.facebook} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white/10 hover:border-white/25 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]">
              <MessageCircle size={16} /> Facebook
            </a>
            <a href={CV_DATA.portfolio} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white/10 hover:border-white/25 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]">
              <ExternalLink size={16} /> Portfolio
            </a>
          </div>
        </div>

        <footer className="mt-20 text-center text-xs tracking-[0.3em] text-white/20 uppercase">
          © 2026 Bùi Bảo Việt · 0356433455 Marketing & AI
        </footer>
      </section>
    </div>
  );
}
