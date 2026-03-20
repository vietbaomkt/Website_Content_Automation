import { Link } from 'react-router-dom';
import GradientMenu from '@/components/ui/gradient-menu';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030712] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* GradientMenu — Social Links */}
        <div className="flex justify-center mb-12">
          <GradientMenu />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src="/images/Avatar.png" alt="Trợ lý Creator" className="w-8 h-8 rounded-full object-cover" />
              <span className="text-white font-display font-bold text-xl">Trợ lý Creator</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Giải pháp tự động hóa nội dung đa kênh bằng AI, giúp bạn xây dựng nhân hiệu chuyên nghiệp mà không tốn nhiều thời gian và chi phí.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Sản phẩm</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Tính năng</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Bảng giá</Link></li>
              <li><Link to="/library" className="text-gray-400 hover:text-white transition-colors">Thư viện</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Công ty</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">Về chúng tôi</Link></li>
              <li><a href="mailto:Vietbao.official@gmail.com" className="text-gray-400 hover:text-white transition-colors">Liên hệ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Hỗ trợ</h4>
            <ul className="space-y-2">
              <li><Link to="/affiliate" className="text-gray-400 hover:text-white transition-colors">Chương trình Affiliate</Link></li>
              <li><Link to="/policy" className="text-gray-400 hover:text-white transition-colors">Chính sách & Điều khoản</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex items-center justify-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Trợ lý Creator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
