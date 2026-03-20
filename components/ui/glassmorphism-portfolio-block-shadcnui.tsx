import { useState } from "react";
import { motion, type Variants } from "motion/react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Facebook,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import { ZoomBookingPopup } from "@/components/ui/zoom-booking-popup";

type Highlight = {
  title: string;
  description: string;
};

type SocialLink = {
  label: string;
  handle: string;
  href: string;
  icon: LucideIcon;
};

const highlights: Highlight[] = [
  {
    title: "Khách hàng",
    description:
      "50+ nhân hiệu cá nhân ngành làm đẹp, thẩm mỹ, sức khỏe — 10.000+ bài viết tự động.",
  },
  {
    title: "Sản phẩm",
    description:
      "Trợ lý Creator Content Automation — hệ thống AI tạo nội dung tự động theo ADN nhân hiệu.",
  },
  {
    title: "Sẵn sàng hợp tác",
    description:
      "Nhận tư vấn setup hệ thống content automation cho nhân hiệu cá nhân & doanh nghiệp.",
  },
];

const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    handle: "VietBao System",
    href: "https://www.facebook.com/VietBaoSystem/",
    icon: Facebook,
  },
  {
    label: "Zalo",
    handle: "0356.433.455",
    href: "https://zalo.me/0356433455",
    icon: MessageCircle,
  },
  {
    label: "Email",
    handle: "Vietbao.official@gmail.com",
    href: "mailto:Vietbao.official@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    handle: "Bùi Bảo Việt",
    href: "https://linkedin.com/in/buibaoviet",
    icon: Linkedin,
  },
];

const listVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
    },
  },
};

export function GlassmorphismPortfolioBlock() {
  const [showZoomPopup, setShowZoomPopup] = useState(false);

  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl md:p-12"
        >
          {/* Glass gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.08] via-transparent to-violet-500/[0.04] pointer-events-none" />

          <div className="relative grid gap-12 lg:grid-cols-2">
            {/* Left column - Main content */}
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-indigo-400 backdrop-blur">
                Founder · Trợ lý Creator
              </span>

              <div className="space-y-4">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-2xl font-semibold tracking-tight md:text-3xl"
                >
                  Bùi Bảo Việt,{" "}
                  <span className="text-gradient">Brand Manager & Content Strategist</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="max-w-xl text-base leading-relaxed text-gray-400 md:text-md"
                >
                  7 năm kinh nghiệm Marketing ngành làm đẹp — từ Content Writer
                  đến Brand Manager. Xây dựng hệ thống Content Automation AI đầu
                  tiên cho nhân hiệu cá nhân Việt Nam.
                </motion.p>
              </div>

              {/* Highlights grid */}
              <div className="grid gap-4 sm:grid-cols-1">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    whileHover={{ y: -4 }}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-all hover:border-white/20 hover:shadow-lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />
                    <div className="relative space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400/70">
                        {item.title}
                      </p>
                      <p className="text-sm leading-relaxed text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="grid grid-cols-1 gap-4"
              >
                <button
                  onClick={() => setShowZoomPopup(true)}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-8 text-sm font-semibold uppercase tracking-[0.25em] text-white transition-all hover:shadow-lg hover:shadow-indigo-500/25 sm:w-auto cursor-pointer"
                >
                  Đặt lịch tư vấn
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <ZoomBookingPopup isOpen={showZoomPopup} onClose={() => setShowZoomPopup(false)} />
              </motion.div>
            </div>

            {/* Right column - Profile card */}
            <div className="relative">
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-indigo-500/15 via-transparent to-transparent blur-3xl" />
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
                <div className="flex flex-col items-center text-center">
                  {/* Avatar with glow */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-6"
                  >
                    <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-2xl" />
                    <img
                      src="/images/Avatar.png"
                      alt="Bùi Bảo Việt"
                      className="relative h-32 w-32 rounded-full border border-white/20 object-cover shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-1"
                  >
                    <h3 className="text-2xl font-semibold tracking-tight">
                      Bùi Bảo Việt
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
                      Brand Manager · Content Strategist
                    </p>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400"
                  >
                    Giúp nhân hiệu cá nhân tự động hóa nội dung — viết đúng
                    giọng, tạo đúng ảnh, lên lịch tự động.
                  </motion.p>
                </div>

                {/* Social links */}
                <motion.div
                  variants={listVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className="mt-8 flex flex-col gap-3"
                >
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        variants={itemVariants}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-left transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-md"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.985 }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-gray-400 shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                            <Icon className="h-4 w-4" />
                          </span>
                          <div>
                            <p className="text-sm font-semibold">
                              {social.label}
                            </p>
                            <p className="text-xs text-gray-500">
                              {social.handle}
                            </p>
                          </div>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-gray-600 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gray-400" />
                      </motion.a>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
