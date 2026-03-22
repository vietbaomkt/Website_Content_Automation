import { motion } from 'motion/react';
import { useState } from 'react';

const ZALO_NUMBER = '0356433455';
const ZALO_URL = `https://zalo.me/${ZALO_NUMBER}`;

export default function ZaloWidget() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end gap-2"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
    >
      {hovered && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          className="hidden md:block bg-white text-gray-800 text-sm px-3 py-2 rounded-xl shadow-lg whitespace-nowrap font-medium"
        >
          💬 Chat với chúng tôi qua Zalo
        </motion.div>
      )}

      <a
        href={ZALO_URL}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-11 h-11 md:w-14 md:h-14 rounded-full flex items-center justify-center 
                   shadow-[0_4px_20px_rgba(0,150,255,0.4)] 
                   hover:shadow-[0_4px_30px_rgba(0,150,255,0.6)] 
                   hover:scale-110 transition-all duration-300"
        style={{ background: 'linear-gradient(135deg, #0068FF, #00AAFF)' }}
        aria-label="Chat Zalo với Trợ lý Creator"
      >
        {/* Zalo Icon SVG */}
        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[30px] md:h-[30px]">
          <circle cx="24" cy="24" r="20" fill="white" fillOpacity="0.2"/>
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" 
                fill="white" fontSize="14" fontWeight="bold" fontFamily="Arial">
            Zalo
          </text>
        </svg>
      </a>
    </motion.div>
  );
}

