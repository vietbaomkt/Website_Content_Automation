import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Trước đây mình mất 3-4 tiếng mỗi ngày để viết content. Giờ hệ thống tự tạo 5 bài, mình chỉ cần duyệt và chỉnh. Tiết kiệm cực kỳ nhiều thời gian.",
    image: "/images/Avatar.png",
    name: "Chị Linh",
    role: "Chủ spa — Quận 7",
  },
  {
    text: "Mình thích nhất là ảnh AI tạo ra đúng style nhân hiệu. Trước thuê designer 10 triệu/tháng mà chưa chắc ưng, giờ hệ thống làm 7 kiểu ảnh luôn.",
    image: "/images/Avatar.png",
    name: "Anh Minh",
    role: "Founder thương hiệu thời trang",
  },
  {
    text: "Content rất 'có hồn', không bị AI slop. Hệ thống hiểu đúng giọng văn mình muốn nhờ bước Khai thác ADN ban đầu.",
    image: "/images/Avatar.png",
    name: "Chị Hương",
    role: "Coach dinh dưỡng",
  },
  {
    text: "Giá 5 triệu/tháng mà thay thế cả đội ngũ Content + Designer + PM. ROI quá tốt cho người mới xây dựng nhân hiệu.",
    image: "/images/Avatar.png",
    name: "Anh Đức",
    role: "Business Coach",
  },
  {
    text: "Notion calendar tự động lên lịch, mình chỉ cần kéo thả. Từ khi dùng hệ thống, mình đăng đều 5 bài/ngày mà không bị kiệt sức.",
    image: "/images/Avatar.png",
    name: "Chị Trang",
    role: "Chuyên gia Skincare",
  },
  {
    text: "Đội ngũ support rất tận tâm, hướng dẫn mình từ bước Visual DNA đến khi hệ thống chạy ổn định. Recommend cho ai làm nhân hiệu.",
    image: "/images/Avatar.png",
    name: "Anh Khoa",
    role: "Giảng viên Marketing",
  },
  {
    text: "Trước mình thuê freelancer viết content nhưng mỗi người một giọng. Giờ hệ thống giữ đúng tone xuyên suốt, follower nhận ra ngay.",
    image: "/images/Avatar.png",
    name: "Chị Mai",
    role: "Chủ phòng khám nha",
  },
  {
    text: "Hook của mỗi bài rất ấn tượng, engagement tăng 40% so với content tự viết. Hệ thống hiểu tâm lý audience cực kỳ tốt.",
    image: "/images/Avatar.png",
    name: "Anh Bảo",
    role: "Founder F&B",
  },
  {
    text: "Mình đăng ký gói Growth — 5 bài/ngày + 7 loại ảnh. Sau 2 tháng, page mình từ 5K lên 15K followers. Worth every dong!",
    image: "/images/Avatar.png",
    name: "Chị Vy",
    role: "KOL Lifestyle",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function TestimonialsColumnsDemo() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-white/20 py-1 px-4 rounded-lg text-sm text-gray-300">Đánh giá</div>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mt-5 text-white text-center">
            Khách hàng nói gì
          </h2>
          <p className="text-center mt-5 text-gray-400">
            Xem những chia sẻ thật từ nhân hiệu đã sử dụng hệ thống.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
