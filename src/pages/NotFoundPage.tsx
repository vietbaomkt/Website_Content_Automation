import TetrisLoading from '@/components/ui/tetris-loader';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center relative z-10 px-4">
      <div className="mb-8">
        <TetrisLoading size="sm" speed="slow" />
      </div>
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-gray-400 text-lg mb-8">Trang bạn tìm không tồn tại.</p>
      <Link
        to="/"
        className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors"
      >
        ← Về trang chủ
      </Link>
    </section>
  );
}
