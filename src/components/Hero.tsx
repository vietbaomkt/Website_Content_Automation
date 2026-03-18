import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const Stars = () => {
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    const generateStars = () => {
      return Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      }));
    };
    setStars(generateStars());
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      <Stars />
      
      {/* Portal Background Effects */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 blur-[120px] rounded-t-full pointer-events-none" />
      
      {/* Glowing Rings */}
      <div className="absolute bottom-[-300px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] border border-blue-500/30 rounded-full pointer-events-none" />
      <div className="absolute bottom-[-400px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] border-2 border-indigo-500/20 rounded-full pointer-events-none" />
      <div className="absolute bottom-[-450px] left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] border border-purple-500/10 rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-sm text-gray-300">Hệ thống tự động hóa nội dung #1</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight"
        >
          7 ngày không phải nghĩ bài đăng,<br />
          <span className="text-gradient">AI viết, bạn duyệt.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Hệ thống lo phần còn lại. Tiết kiệm 25-35 triệu/tháng so với việc thuê đội ngũ nhân sự truyền thống 3 người.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="bg-liquid text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300 flex items-center gap-2 group">
            Bắt đầu miễn phí
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <button className="glass text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
            Xem Demo
          </button>
        </motion.div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030712] to-transparent z-20" />
    </section>
  );
}
