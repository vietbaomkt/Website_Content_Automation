import React from 'react';
import { Facebook, Mail, MessageCircle } from 'lucide-react';

interface MenuItem {
  title: string;
  icon: React.ReactNode;
  href: string;
  external?: boolean;
  gradientFrom: string;
  gradientTo: string;
}

const menuItems: MenuItem[] = [
  {
    title: 'Facebook',
    icon: <Facebook className="w-5 h-5" />,
    href: 'https://www.facebook.com/VietBaoSystem/',
    external: true,
    gradientFrom: '#4267B2',
    gradientTo: '#7B5EFF',
  },
  {
    title: 'Email',
    icon: <Mail className="w-5 h-5" />,
    href: 'mailto:Vietbao.official@gmail.com',
    external: false,
    gradientFrom: '#a955ff',
    gradientTo: '#ea51ff',
  },
  {
    title: 'Zalo',
    icon: <MessageCircle className="w-5 h-5" />,
    href: 'https://zalo.me/0356433455',
    external: true,
    gradientFrom: '#0068FF',
    gradientTo: '#00AAFF',
  },
];

export default function GradientMenu() {
  return (
    <div className="flex justify-center items-center">
      <ul className="flex gap-6">
        {menuItems.map(({ title, icon, href, external, gradientFrom, gradientTo }, idx) => (
          <li
            key={idx}
            style={{ '--gradient-from': gradientFrom, '--gradient-to': gradientTo } as React.CSSProperties}
            className="relative w-[60px] h-[60px] bg-white shadow-lg rounded-full flex items-center justify-center transition-all duration-500 hover:w-[180px] hover:shadow-none group cursor-pointer"
          >
            <a
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="absolute inset-0 z-20 flex items-center justify-center"
              aria-label={title}
            />
            {/* Gradient background on hover */}
            <span className="absolute inset-0 rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-all duration-500 group-hover:opacity-100" />
            {/* Blur glow */}
            <span className="absolute top-[10px] inset-x-0 h-full rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] blur-[15px] opacity-0 -z-10 transition-all duration-500 group-hover:opacity-50" />

            {/* Icon */}
            <span className="relative z-10 transition-all duration-500 group-hover:scale-0 delay-0">
              <span className="text-gray-500">{icon}</span>
            </span>

            {/* Title */}
            <span className="absolute z-10 text-white uppercase tracking-wide text-sm font-medium transition-all duration-500 scale-0 group-hover:scale-100 delay-150">
              {title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
