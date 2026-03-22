import { FAQ1 } from '@/components/ui/faq-monochrome';
import { ShinyButton } from '@/components/ui/shiny-button';
import { motion } from 'motion/react';
import { Hero } from '@/components/ui/hero-lamp';
import { FileText } from 'lucide-react';
import { useSEO } from '@/lib/useSEO';
import { useLanguage } from '@/src/lib/LanguageContext';

// ═══════════════════════════════════════════════════
// Categories & FAQ Data — Policy
// ═══════════════════════════════════════════════════

const policyCategories = {
  "thanh-toan": "Thanh toán",
  "hoan-tien": "Hoàn tiền",
  "bao-mat": "Bảo mật",
  "dieu-khoan": "Điều khoản",
  "visual-identity": "Visual Identity",
};

const policyFaqs = [
  // — Thanh toán
  {
    category: "thanh-toan",
    meta: "Thanh toán",
    question: "Chu kỳ thanh toán như thế nào?",
    answer: "Trợ lý Creator áp dụng thanh toán trước theo **chu kỳ hàng tháng**.\n\nSau khi xác nhận thanh toán, hệ thống sẽ **kích hoạt gói dịch vụ trong vòng 24 giờ**.\n\nChu kỳ tính từ ngày kích hoạt thành công.",
  },
  {
    category: "thanh-toan",
    meta: "Thanh toán",
    question: "Chấp nhận những phương thức thanh toán nào?",
    answer: "Chúng tôi chấp nhận:\n\n**• Chuyển khoản ngân hàng** (Vietcombank, Techcombank)\n**• Ví điện tử** MoMo, ZaloPay\n**• VNPay**\n\nSau khi chuyển khoản, gửi biên lai qua **Zalo** để xác nhận nhanh nhất.",
  },
  {
    category: "thanh-toan",
    meta: "Thanh toán",
    question: "Có xuất hóa đơn VAT không?",
    answer: "**Có.**\n\nTrợ lý Creator xuất hóa đơn VAT theo yêu cầu.\n\nVui lòng cung cấp thông tin công ty (**tên, MST, địa chỉ**) trước ngày **20 hàng tháng** để nhận hóa đơn đúng kỳ.",
  },
  {
    category: "thanh-toan",
    meta: "Thanh toán",
    question: "Nếu thanh toán chậm thì sao?",
    answer: "Hệ thống sẽ **tạm ngưng tạo nội dung** sau **3 ngày quá hạn** thanh toán.\n\nDữ liệu và cấu hình Visual DNA của bạn vẫn được **lưu trữ trong 30 ngày** để kích hoạt lại bất cứ lúc nào.",
  },
  // — Hoàn tiền
  {
    category: "hoan-tien",
    meta: "Hoàn tiền",
    question: "Điều kiện hoàn tiền là gì?",
    answer: "Bạn được **hoàn tiền 100%** trong **7 ngày đầu tiên** kể từ ngày kích hoạt gói dịch vụ, nếu chưa hài lòng với chất lượng nội dung.\n\n**Không cần giải thích lý do** — chỉ cần gửi yêu cầu qua Zalo hoặc Email.",
  },
  {
    category: "hoan-tien",
    meta: "Hoàn tiền",
    question: "Quy trình hoàn tiền diễn ra như thế nào?",
    answer: "**Bước 1:** Gửi yêu cầu hoàn tiền qua Email hoặc Zalo.\n\n**Bước 2:** Xác nhận trong **24 giờ**.\n\n**Bước 3:** Hoàn tiền về tài khoản gốc trong **3–5 ngày làm việc**.\n\nPhí chuyển khoản (nếu có) do **Trợ lý Creator chịu**.",
  },
  {
    category: "hoan-tien",
    meta: "Hoàn tiền",
    question: "Sau 7 ngày có được hoàn tiền không?",
    answer: "Sau 7 ngày, chúng tôi **không hỗ trợ hoàn tiền**.\n\nTuy nhiên, bạn có thể:\n\n**• Chuyển đổi** sang gói khác (nâng/hạ cấp)\n**• Tạm dừng** dịch vụ\n\nPhần chênh lệch sẽ được **bù trừ vào tháng tiếp theo**.",
  },
  {
    category: "hoan-tien",
    meta: "Hoàn tiền",
    question: "Trường hợp ngoại lệ nào được xem xét?",
    answer: "Nếu xảy ra **sự cố kỹ thuật từ phía Trợ lý Creator** (hệ thống ngưng hoạt động >48h liên tục), chúng tôi sẽ bồi thường bằng cách **gia hạn miễn phí** tương ứng số ngày bị ảnh hưởng.",
  },
  // — Bảo mật
  {
    category: "bao-mat",
    meta: "Bảo mật",
    question: "Trợ lý Creator thu thập những thông tin gì?",
    answer: "Chúng tôi thu thập:\n\n**• Họ tên, Email, Số điện thoại** (khi đăng ký tư vấn)\n**• Nội dung Visual DNA session** (phong cách, giọng văn, hình ảnh đại diện)\n\nTất cả phục vụ **duy nhất** cho việc tạo nội dung cá nhân hóa.",
  },
  {
    category: "bao-mat",
    meta: "Bảo mật",
    question: "Dữ liệu có được chia sẻ cho bên thứ 3 không?",
    answer: "**Không.**\n\nTrợ lý Creator cam kết **không bán, chia sẻ hoặc cho phép bên thứ ba** truy cập dữ liệu cá nhân của bạn.\n\nCác dịch vụ AI (Gemini, Midjourney) được sử dụng qua API và **không lưu trữ dữ liệu** người dùng.",
  },
  {
    category: "bao-mat",
    meta: "Bảo mật",
    question: "Tôi có quyền yêu cầu xóa dữ liệu không?",
    answer: "**Có.** Bạn có toàn quyền yêu cầu xóa tất cả dữ liệu cá nhân và nội dung đã tạo **bất cứ lúc nào**.\n\nGửi yêu cầu qua Email và chúng tôi sẽ xử lý trong **7 ngày làm việc**.\n\nSau khi xóa, dữ liệu **không thể khôi phục**.",
  },
  {
    category: "bao-mat",
    meta: "Bảo mật",
    question: "Nội dung tạo ra có được bảo mật không?",
    answer: "Toàn bộ nội dung (bài viết, hình ảnh, lịch đăng) được lưu trên **workspace Notion riêng** của bạn.\n\nTrợ lý Creator **không truy cập, sao chép hoặc sử dụng** nội dung của bạn cho bất kỳ mục đích nào khác.",
  },
  // — Điều khoản
  {
    category: "dieu-khoan",
    meta: "Điều khoản",
    question: "Quyền sở hữu nội dung thuộc về ai?",
    answer: "**100% nội dung** (bài viết, hình ảnh, concept) được tạo trong quá trình sử dụng dịch vụ thuộc **quyền sở hữu hoàn toàn của bạn**.\n\nTrợ lý Creator **không giữ bản quyền** hay hạn chế sử dụng đối với bất kỳ nội dung nào.",
  },
  {
    category: "dieu-khoan",
    meta: "Điều khoản",
    question: "Trợ lý Creator có được sử dụng nội dung của tôi làm showcase?",
    answer: "**Chỉ khi có sự đồng ý bằng văn bản.**\n\nChúng tôi có thể xin phép sử dụng một số mẫu nội dung làm case study hoặc showcase trên website.\n\nBạn hoàn toàn có quyền **từ chối** mà không ảnh hưởng đến dịch vụ.",
  },
  {
    category: "dieu-khoan",
    meta: "Điều khoản",
    question: "Giới hạn trách nhiệm của Trợ lý Creator?",
    answer: "Trợ lý Creator cung cấp **công cụ và hệ thống tự động hóa**.\n\nChúng tôi **không chịu trách nhiệm** về hiệu quả kinh doanh, tương tác mạng xã hội, hoặc bất kỳ quyết định kinh doanh nào dựa trên nội dung được tạo.\n\nNội dung luôn cần được **bạn duyệt trước khi đăng**.",
  },
  {
    category: "dieu-khoan",
    meta: "Điều khoản",
    question: "Chính sách thay đổi/nâng cấp gói dịch vụ?",
    answer: "Bạn có thể **nâng cấp gói bất cứ lúc nào** — phần chênh lệch sẽ được tính **pro-rata** cho thời gian còn lại.\n\n**Hạ gói** sẽ áp dụng từ chu kỳ tiếp theo.\n\nLiên hệ **Zalo** để được hỗ trợ chuyển đổi trong ngày.",
  },
  // — Visual Identity
  {
    category: "visual-identity",
    meta: "Visual",
    question: "Visual Identity session hoạt động thế nào?",
    answer: "**Lần đầu tiên (miễn phí):** Chúng tôi tổ chức session 1-1 (**30–60 phút** qua Zoom) để tìm hiểu phong cách, giọng văn, bảng màu và hình ảnh đại diện cho nhân hiệu của bạn.\n\nKết quả là bộ **Visual DNA** dùng xuyên suốt.",
  },
  {
    category: "visual-identity",
    meta: "Visual",
    question: "Điều chỉnh Visual Identity có mất phí không?",
    answer: "**2 lần đầu** điều chỉnh hoàn toàn **miễn phí** (bao gồm trong gói).\n\nTừ lần thứ 3 trở đi: **500.000đ/lần**.\n\nĐiều chỉnh bao gồm thay đổi bảng màu, phong cách ảnh, giọng văn hoặc các yếu tố nhận diện khác.",
  },
  {
    category: "visual-identity",
    meta: "Visual",
    question: "Muốn thêm concept ảnh ngoài 7 loại có sẵn thì sao?",
    answer: "Bạn có thể đặt thêm concept hình ảnh mới với giá **500.000đ/concept**.\n\nMỗi concept bao gồm:\n\n**• Miêu tả phong cách**\n**• Bảng màu tham chiếu**\n**• 3 ảnh mẫu** để calibrate\n**• Prompt template** tùy chỉnh cho hệ thống AI",
  },
  {
    category: "visual-identity",
    meta: "Visual",
    question: "Nếu tôi hủy dịch vụ, Visual DNA có bị mất không?",
    answer: "**Không.**\n\nBộ Visual DNA của bạn được **lưu trữ trong 90 ngày** sau khi hủy dịch vụ.\n\nNếu quay lại trong thời gian này, bạn **không cần làm lại session**.\n\nSau 90 ngày, dữ liệu sẽ bị **xóa vĩnh viễn**.",
  },
];

export default function PolicyPage() {
  useSEO({
    title: 'Chính sách & Điều khoản',
    description: 'Chính sách thanh toán, hoàn tiền, bảo mật và điều khoản sử dụng dịch vụ Trợ lý Creator — cam kết minh bạch, rõ ràng.',
  });

  return (
    <>
      {/* Hero Lamp */}
      <Hero
        title={<>Chính sách <span className="text-gradient">&amp; Điều khoản</span></>}
        subtitle="Mọi thông tin về thanh toán, hoàn tiền, bảo mật và quyền sở hữu nội dung — rõ ràng, dễ hiểu, không &quot;chữ nhỏ&quot; ẩn giấu."
        subtitleClassName="text-lg md:text-xl max-w-[600px]"
      />

      {/* Policy FAQ Monochrome */}
      <FAQ1
        title="Tất cả chính sách"
        subtitle="Chọn mục bạn quan tâm để xem chi tiết"
        items={policyFaqs}
        categories={policyCategories}
      />

      {/* CTA */}
      <section className="py-24 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <FileText size={32} className="text-indigo-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Có câu hỏi về chính sách?</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Liên hệ ngay để được giải đáp — không phí, không cam kết.
          </p>
          <a href="mailto:vietbao.mkt@gmail.com">
            <ShinyButton>Liên hệ qua Email</ShinyButton>
          </a>
        </motion.div>
      </section>
    </>
  );
}
