import { FAQ } from '@/components/ui/faq-tabs';

const categories = {
  "offer": "Về Offer & Giá trị",
  "chat-luong": "Chất lượng & Cá nhân hóa",
  "chi-phi": "Chi phí & Thanh toán",
  "ky-thuat": "Kỹ thuật & Hỗ trợ"
};

const faqData = {
  "offer": [
    {
      question: "AI viết không có hồn — nội dung có bị nghe giả tạo không?",
      answer: "Nếu dùng ChatGPT gõ \"viết bài về marketing\" thì kết quả rất máy móc — đúng.\n\nNhưng **Trợ Lý Creator** bắt đầu bằng việc \"giải mã\" giọng văn của bạn qua **7 câu hỏi ADN** — tạo **Bản Đồ Thấu Cảm** + **Khung Việc Cần Làm** riêng. 6 trợ lý AI viết dựa trên bản sắc này, không phải câu lệnh chung chung.\n\nVà bạn **LUÔN duyệt bài trước khi đăng** — thêm \"hồn\", chỉnh chỗ chưa ưng.\n\n**98% khách hàng** nói rằng sau 1 tuần, AI viết **80-90% chính xác** giọng của họ."
    },
    {
      question: "Tôi không tin AI hiểu ngành của tôi",
      answer: "Lo lắng hoàn toàn hợp lý — mỗi ngành có thuật ngữ, góc nhìn riêng.\n\nĐó chính là lý do bộ **7 câu hỏi ADN** tồn tại: chúng tôi \"dạy\" AI hiểu ngành của bạn qua **Bản Đồ Thấu Cảm** (ai là khách hàng, họ đau gì) và **Khung Việc Cần Làm** (việc họ cần hoàn thành).\n\nHiện tại **50+ nhân hiệu** trải khắp: huấn luyện, y tế thẩm mỹ, tài chính, giáo dục, công nghệ.\n\nGói **Premium** còn tích hợp **NotebookLM** — AI đọc tài liệu chuyên ngành của bạn để viết có dẫn chứng."
    },
    {
      question: "Tôi đã thử tool AI rồi, không hiệu quả — sao lần này khác?",
      answer: "**90% người dùng công cụ AI rời bỏ sau 2 tuần** — chúng tôi hiểu.\n\nSự khác biệt:\n\n**ChatGPT, Jasper là CÔNG CỤ** — bạn vẫn tự nghĩ câu lệnh, tự tìm ý tưởng, tự tạo ảnh, tự lên lịch.\n\n**Trợ lý Creator là HỆ THỐNG trọn vẹn** — mọi thứ tự động từ ý tưởng đến ảnh đến lên lịch. Bạn chỉ duyệt.\n\nSo sánh: tự dùng ChatGPT tốn **2-3 giờ/ngày** → Trợ lý Creator chỉ **15-30 phút/ngày**."
    },
    {
      question: "Followers sẽ nhận ra tôi dùng AI chứ?",
      answer: "Người theo dõi nhận ra AI khi nội dung **chung chung, lặp lại, thiếu cá nhân**.\n\nTrợ lý Creator ngược lại — viết theo **ADN riêng** của bạn + bạn **duyệt và thêm dấu ấn** trước khi đăng.\n\nHỏi thành thật: người theo dõi có biết Nike, Apple dùng đội ngũ nội dung không? Không, vì nội dung **nhất quán và chất lượng**.\n\nKết quả của hệ thống là **\"bạn\"** — chỉ là có trợ lý giúp sản xuất **nhanh hơn 10 lần**."
    },
  ],
  "chat-luong": [
    {
      question: "Tôi thích tự viết — AI có thay thế sáng tạo của tôi không?",
      answer: "Hoàn toàn đồng ý — bạn là **người sáng tạo**, không gì thay thế được.\n\n**Trợ lý Creator KHÔNG thay thế sáng tạo của bạn.** Hệ thống làm phần \"sản xuất\" — tìm ý tưởng, viết bản nháp, tạo ảnh. Bạn làm phần \"chỉ đạo\" — duyệt, chỉnh, thêm hồn.\n\nGiống **đạo diễn có ekip sản xuất** — không phải đạo diễn bị thay bằng robot.\n\nKhách hàng nói: **\"AI gợi ý những góc nhìn tôi chưa nghĩ tới. Tôi bắt đầu từ 80% thay vì 0%.\"**"
    },
    {
      question: "Nội dung có mang phong cách riêng của tôi không?",
      answer: "Đúng vậy.\n\nTrợ lý Creator sử dụng phương pháp **Xác Định Phong Cách** — buổi 1-1 để \"giải mã\" giọng nói, phong cách viết, giá trị cốt lõi.\n\nMọi nội dung sau đó đều dựa trên **bản sắc thương hiệu** này, tạo sự nhất quán mà người theo dõi cảm nhận được.\n\n**Mỗi khách hàng có kết quả khác nhau** — không ai giống ai."
    },
    {
      question: "Mất bao lâu để bắt đầu?",
      answer: "Chỉ mất **48 giờ** từ lúc đăng ký đến khi bài đầu tiên sẵn sàng.\n\nTrong đó gồm:\n\n**• Tư vấn Xác Định Phong Cách** (30 phút)\n**• Thiết lập hệ thống**\n**• Tạo lô nội dung đầu tiên**\n\nNếu đăng ký trong 48 giờ: **Quà Tặng Hành Động Nhanh** cho phép thiết lập trong **24 giờ**."
    },
    {
      question: "Có bao nhiêu loại phong cách ảnh?",
      answer: "**7 phong cách:**\n\n**• Bộ Ảnh Nhiều Tấm** — layout chuyên nghiệp\n**• Ảnh Cơ Tự Nhiên** — phong cách tự nhiên, gần gũi\n**• Đồ Họa Thông Tin** — truyền tải dữ liệu trực quan\n**• So Sánh Đối Lập** — nhấn mạnh sự khác biệt\n**• Sáng Tạo Tự Do** — phá cách, độc đáo\n**• Phong Cách Điện Ảnh** — cinematic, ấn tượng\n**• Thẻ Trích Dẫn** — quotes nổi bật\n\nTất cả đều được **cá nhân hóa** theo phong cách riêng — nhận diện nhất quán trên mọi ảnh."
    },
  ],
  "chi-phi": [
    {
      question: "5 triệu/tháng vẫn đắt — tôi tự dùng ChatGPT rẻ hơn mà?",
      answer: "Nếu chỉ nhìn số tiền, ChatGPT 500 nghìn/tháng rẻ hơn.\n\nNhưng tính **tổng chi phí thực:**\n\n**• API AI:** 1.2-1.5 triệu\n**• ChatGPT cao cấp:** 500 nghìn\n**• Thời gian:** 2-3 giờ/ngày × 30 ngày = **60-90 giờ**\n**• Hình ảnh:** phải chỉnh sửa hàng giờ\n**• KHÔNG có** hệ thống quản lý\n\n**Tổng: 2-2.5 triệu + 60-90 giờ.**\n\nNếu thời gian đáng giá 100.000đ/giờ → 90 giờ = **9 triệu**. Bạn \"tiết kiệm\" ChatGPT nhưng \"trả\" 9 triệu bằng thời gian.\n\n**5 triệu/tháng = mua lại 90 giờ + hệ thống chuyên nghiệp.**"
    },
    {
      question: "Có chính sách hoàn tiền không?",
      answer: "**Bộ 3 Cam Kết:**\n\n**1. Hoàn tiền 100% trong 3 ngày** — không hỏi lý do.\n\n**2. Cam kết sản lượng:** nếu không giao đúng số bài (90-150 bài/tháng) — bù lại miễn phí + tặng thêm 1 tuần.\n\n**3. Sửa lỗi hệ thống không giới hạn** — miễn phí.\n\n**98% khách hàng** tiếp tục sau tháng đầu."
    },
    {
      question: "Tôi có thể đổi gói hoặc hủy bất cứ lúc nào không?",
      answer: "**Hoàn toàn có thể.**\n\nNâng/hạ gói hoặc hủy dịch vụ bất kỳ lúc nào. Thay đổi áp dụng từ **chu kỳ thanh toán tiếp theo**.\n\n**Không có hợp đồng dài hạn** hay phí hủy.\n\nBạn ở lại vì **giá trị**, không phải hợp đồng."
    },
    {
      question: "Nếu ngừng dùng dịch vụ thì content tôi ra sao?",
      answer: "**Toàn bộ nội dung thuộc về BẠN.**\n\nBao gồm:\n\n**• Bản Đồ Thấu Cảm** + Khung Việc Cần Làm\n**• Phong cách ảnh riêng**\n**• Tất cả bài viết, hình ảnh**\n**• 2 mẫu Notion** trị giá 1.250.000đ\n\nKhi ngừng, bạn giữ **100%** — không có hợp đồng dài hạn, không phí hủy.\n\n**Dữ liệu luôn thuộc về bạn** — cam kết bằng văn bản."
    },
  ],
  "ky-thuat": [
    {
      question: "Quy trình duyệt bài trên Notion hoạt động ra sao?",
      answer: "Mỗi bài viết xuất hiện như một **nhiệm vụ trên bảng Notion**.\n\nBạn có thể:\n\n**• Xem bản xem trước** (văn bản + hình ảnh)\n**• Chỉnh sửa trực tiếp**\n**• Để ghi chú** cho hệ thống\n**• Đổi trạng thái** sang \"Tạo Ảnh\" để hệ thống tạo ảnh\n\nBài được duyệt sẽ **tự động lên lịch** — bạn chỉ cần **15 phút/ngày**."
    },
    {
      question: "Nếu tôi muốn thay đổi phong cách giữa chừng?",
      answer: "**Hoàn toàn được.**\n\nYêu cầu cập nhật phong cách ảnh bất kỳ lúc nào — tuần đầu tiên có **3 lần tinh chỉnh miễn phí**.\n\nSau đó **500.000đ/lần**.\n\nHệ thống áp dụng phong cách mới cho **tất cả nội dung** từ thời điểm cập nhật."
    },
    {
      question: "Hỗ trợ kỹ thuật như thế nào?",
      answer: "**3 cấp độ hỗ trợ:**\n\n**• Gói Khởi Đầu:** hỗ trợ qua Email (phản hồi trong 24 giờ)\n**• Gói Tăng Trưởng:** hỗ trợ ưu tiên qua Zalo (phản hồi trong 2 giờ)\n**• Gói Cao Cấp:** quản lý tài khoản riêng, đường dây nóng trực tiếp\n\nMọi lỗi từ hệ thống được sửa **miễn phí — không giới hạn**."
    },
    {
      question: "Dữ liệu và nội dung của tôi có được bảo mật không?",
      answer: "**Tuyệt đối.**\n\nTất cả dữ liệu phong cách riêng, nội dung và hình ảnh đều thuộc **quyền sở hữu của bạn**.\n\nChúng tôi cam kết:\n\n**• Bảo mật tuyệt đối** — không chia sẻ với bên thứ ba\n**• Quyền xóa dữ liệu** — yêu cầu xóa toàn bộ khi ngừng dịch vụ\n**• Cam kết bằng văn bản** — bảo vệ quyền lợi của bạn"
    },
  ],
};

export default function FAQDemo() {
  return (
    <FAQ
      title="Câu hỏi thường gặp"
      subtitle="Giải đáp mọi thắc mắc — không lời hoa mỹ, chỉ sự thật"
      categories={categories}
      faqData={faqData}
    />
  );
}
