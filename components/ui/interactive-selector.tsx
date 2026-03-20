import React, { useState, useEffect } from 'react';
import {
  FaImages, FaCamera, FaChartPie, FaBalanceScale,
  FaPaintBrush, FaFilm, FaQuoteRight
} from 'react-icons/fa';

interface Option {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const options: Option[] = [
  {
    title: "Carousels",
    description: "Slides đa trang, chia nhỏ insight",
    image: "/images/styles/Carousels.webp",
    icon: <FaImages size={22} color="white" />
  },
  {
    title: "Normal",
    description: "Ảnh chân dung, chụp tự nhiên",
    image: "/images/styles/Normal.webp",
    icon: <FaCamera size={22} color="white" />
  },
  {
    title: "Infographic",
    description: "Biểu đồ, số liệu, data visual",
    image: "/images/styles/Inforgraphic.webp",
    icon: <FaChartPie size={22} color="white" />
  },
  {
    title: "Comparisons",
    description: "So sánh trước/sau, đối chiếu A vs B",
    image: "/images/styles/Comparisons.webp",
    icon: <FaBalanceScale size={22} color="white" />
  },
  {
    title: "Creative",
    description: "Nghệ thuật sáng tạo, màu sắc mạnh",
    image: "/images/styles/Creative.webp",
    icon: <FaPaintBrush size={22} color="white" />
  },
  {
    title: "Poster Film",
    description: "Phong cách điện ảnh, cinematic",
    image: "/images/styles/Poster%20Film.webp",
    icon: <FaFilm size={22} color="white" />
  },
  {
    title: "Quote Card",
    description: "Quote truyền cảm hứng trên nền đẹp",
    image: "/images/styles/Quote%20Card.webp",
    icon: <FaQuoteRight size={22} color="white" />
  }
];

const InteractiveSelector: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <>
      {/* Options Container — aspect ratio adjusted for square images */}
      <div
        className="flex w-full max-w-[1100px] mx-auto items-stretch overflow-hidden relative rounded-2xl"
        style={{ height: '540px' }}
      >
        {options.map((option, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-end overflow-hidden cursor-pointer"
            style={{
              backgroundImage: `url('${option.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
              backfaceVisibility: 'hidden',
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-60px)',
              minWidth: '48px',
              minHeight: '100px',
              margin: 0,
              borderRadius: 0,
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: activeIndex === index ? 'rgba(129,140,248,0.6)' : 'rgba(41,41,41,1)',
              backgroundColor: '#18181b',
              boxShadow: activeIndex === index
                ? '0 20px 60px rgba(0,0,0,0.50)'
                : '0 10px 30px rgba(0,0,0,0.30)',
              flex: activeIndex === index ? '7 1 0%' : '1 1 0%',
              zIndex: activeIndex === index ? 10 : 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              position: 'relative',
              overflow: 'hidden',
              willChange: 'flex-grow, box-shadow, background-size, background-position',
              transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onClick={() => handleOptionClick(index)}
          >
            {/* Shadow overlay */}
            <div
              className="absolute left-0 right-0 pointer-events-none"
              style={{
                bottom: activeIndex === index ? '0' : '-40px',
                height: '140px',
                boxShadow: activeIndex === index
                  ? 'inset 0 -140px 120px -100px #000, inset 0 -140px 120px -60px #000'
                  : 'inset 0 -140px 0px -140px #000, inset 0 -140px 0px -100px #000',
                transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />

            {/* Label with icon and info */}
            <div className="absolute left-0 right-0 bottom-4 flex items-center justify-start h-12 z-[2] pointer-events-none px-4 gap-3 w-full">
              <div
                className="flex-shrink-0 flex-grow-0"
                style={{
                  minWidth: '40px',
                  maxWidth: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  background: 'rgba(32,32,32,0.85)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.18)',
                  border: '2px solid #444',
                }}
              >
                {option.icon}
              </div>
              <div className="text-white whitespace-pre relative">
                <div
                  className="font-bold text-base"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)',
                    transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  {option.title}
                </div>
                <div
                  className="text-sm text-gray-300"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)',
                    transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  {option.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes selectorSlideFadeIn {
          0% { opacity: 0; transform: translateX(-60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
};

export default InteractiveSelector;
