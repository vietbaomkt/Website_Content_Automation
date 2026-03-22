import React, { useEffect, useMemo, useState, useRef } from "react";

const INTRO_STYLE_ID = "faq1-animations";

// ═══════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════

export interface FAQItem {
  question: string;
  answer: string;
  meta?: string;
  category?: string;
}

export interface FAQ1Props {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  /** Category tabs — keys = category ID, values = label (string or ReactNode) */
  categories?: Record<string, React.ReactNode>;
}

// ═══════════════════════════════════════════════════
// PALETTE — Dark only
// ═══════════════════════════════════════════════════

const palette = {
  surface: "bg-transparent text-neutral-100",
  panel: "bg-neutral-900/50",
  border: "border-white/10",
  heading: "text-white",
  muted: "text-neutral-400",
  iconRing: "border-white/20",
  iconSurface: "bg-white/5",
  icon: "text-white",
  glow: "rgba(255, 255, 255, 0.08)",
  shadow: "shadow-[0_36px_140px_-60px_rgba(10,10,10,0.95)]",
  overlay:
    "linear-gradient(180deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.7) 45%, rgba(10,10,10,0.92) 100%)",
  gridColor: "rgba(255, 255, 255, 0.06)",
};

// ═══════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════

function FAQ1({ items, title, subtitle, categories }: FAQ1Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasEntered, setHasEntered] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Inject animations
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById(INTRO_STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = INTRO_STYLE_ID;
    style.innerHTML = `
      @keyframes faq1-fade-up {
        0% { transform: translate3d(0, 20px, 0); opacity: 0; filter: blur(6px); }
        60% { filter: blur(0); }
        100% { transform: translate3d(0, 0, 0); opacity: 1; filter: blur(0); }
      }
      .faq1-fade {
        opacity: 0;
        transform: translate3d(0, 24px, 0);
        filter: blur(12px);
        transition: opacity 700ms ease, transform 700ms ease, filter 700ms ease;
      }
      .faq1-fade--ready {
        animation: faq1-fade-up 860ms cubic-bezier(0.22, 0.68, 0, 1) forwards;
      }
    `;
    document.head.appendChild(style);
    return () => {
      if (style.parentNode) style.remove();
    };
  }, []);

  // Intersection observer for entrance animation
  useEffect(() => {
    if (!sectionRef.current || typeof window === "undefined") return;
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasEntered(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Reset active index when category changes
  useEffect(() => {
    setActiveIndex(-1);
  }, [activeCategory]);

  // Filter items by category
  const filteredItems = useMemo(() => {
    if (!activeCategory || !categories) return items;
    return items.filter((item) => item.category === activeCategory);
  }, [items, activeCategory, categories]);

  // Category keys for tabs
  const categoryKeys = categories ? Object.keys(categories) : [];

  const toggleQuestion = (index: number) =>
    setActiveIndex((prev) => (prev === index ? -1 : index));

  const setCardGlow = (event: React.MouseEvent) => {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--faq-x", `${event.clientX - rect.left}px`);
    target.style.setProperty("--faq-y", `${event.clientY - rect.top}px`);
  };

  const clearCardGlow = (event: React.MouseEvent) => {
    const target = event.currentTarget as HTMLElement;
    target.style.removeProperty("--faq-x");
    target.style.removeProperty("--faq-y");
  };

  // Render answer with basic markdown (bold)
  const renderAnswer = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, i) => {
      if (line.trim() === "") return <br key={i} />;
      // Replace **text** with <strong>
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      const rendered = parts.map((part, j) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={j} className="text-white/90 font-semibold">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });
      return (
        <span key={i}>
          {rendered}
          {i < lines.length - 1 ? "\n" : ""}
        </span>
      );
    });
  };

  return (
    <div
      className={`relative w-full overflow-hidden ${palette.surface}`}
      style={
        {
          "--faq-grid-color": palette.gridColor,
        } as React.CSSProperties
      }
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--faq-grid-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--faq-grid-color) 1px, transparent 1px)
          `,
          backgroundSize: "22px 22px",
          maskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in" as string,
        }}
      />
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{ background: palette.overlay }}
      />

      <section
        ref={sectionRef}
        className={`relative z-10 mx-auto flex max-w-4xl flex-col gap-10 px-6 py-20 lg:max-w-5xl lg:px-12 ${
          hasEntered ? "faq1-fade--ready" : "faq1-fade"
        }`}
      >
        {/* Header */}
        {(title || subtitle) && (
          <header className="flex flex-col gap-4 text-center">
            {title && (
              <h2
                className={`text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl ${palette.heading}`}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={`max-w-xl mx-auto text-sm sm:text-base md:text-lg ${palette.muted}`}
              >
                {subtitle}
              </p>
            )}
          </header>
        )}

        {/* Category tabs */}
        {categories && categoryKeys.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory(null)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition-all duration-300 ${
                activeCategory === null
                  ? "border-white/30 bg-white/10 text-white"
                  : "border-white/10 bg-white/5 text-neutral-400 hover:border-white/20 hover:text-white"
              }`}
            >
              Tất cả
            </button>
            {categoryKeys.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveCategory(key)}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.15em] transition-all duration-300 ${
                  activeCategory === key
                    ? "border-white/30 bg-white/10 text-white"
                    : "border-white/10 bg-white/5 text-neutral-400 hover:border-white/20 hover:text-white"
                }`}
              >
                {categories[key]}
              </button>
            ))}
          </div>
        )}

        {/* FAQ cards */}
        <ul className="space-y-4">
          {filteredItems.map((item, index) => {
            const open = activeIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-trigger-${index}`;

            return (
              <li
                key={`${item.question}-${index}`}
                className={`group relative overflow-hidden rounded-3xl border backdrop-blur-xl transition-all duration-500 hover:-translate-y-0.5 focus-within:-translate-y-0.5 ${palette.border} ${palette.panel} ${palette.shadow}`}
                onMouseMove={setCardGlow}
                onMouseLeave={clearCardGlow}
              >
                {/* Hover glow */}
                <div
                  className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
                    open
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                  style={{
                    background: `radial-gradient(240px circle at var(--faq-x, 50%) var(--faq-y, 50%), ${palette.glow}, transparent 70%)`,
                  }}
                />

                <button
                  type="button"
                  id={buttonId}
                  aria-controls={panelId}
                  aria-expanded={open}
                  onClick={() => toggleQuestion(index)}
                  className="relative flex w-full items-start gap-6 px-8 py-7 text-left transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[rgba(255,255,255,0.35)]"
                >
                  {/* Icon */}
                  <span
                    className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-500 group-hover:scale-105 ${palette.iconRing} ${palette.iconSurface}`}
                  >
                    <span
                      className={`pointer-events-none absolute inset-0 rounded-full border opacity-30 ${
                        palette.iconRing
                      } ${open ? "animate-ping" : ""}`}
                    />
                    <svg
                      className={`relative h-5 w-5 transition-transform duration-500 ${palette.icon} ${
                        open ? "rotate-45" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 5v14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M5 12h14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>

                  {/* Content */}
                  <div className="flex flex-1 flex-col gap-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                      <h3
                        className={`text-lg font-medium leading-tight sm:text-xl ${palette.heading}`}
                      >
                        {item.question}
                      </h3>
                      {item.meta && (
                        <span
                          className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.35em] transition-opacity duration-300 sm:ml-auto ${palette.border} ${palette.muted}`}
                        >
                          {item.meta}
                        </span>
                      )}
                    </div>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`overflow-hidden text-sm leading-relaxed whitespace-pre-line transition-[max-height] duration-500 ease-out ${
                        open ? "max-h-[600px]" : "max-h-0"
                      } ${palette.muted}`}
                    >
                      <p className="pr-2 pb-2">{renderAnswer(item.answer)}</p>
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default FAQ1;
export { FAQ1 };
