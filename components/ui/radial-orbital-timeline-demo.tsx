"use client";

import { Fingerprint, PenTool, CalendarCheck, UserCheck, ImagePlus } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Khai thác ADN",
    date: "Bước 1",
    content: "Bộ 7 câu hỏi chuẩn → tạo Empathy Map + JTBD. Làm 1 lần, dùng mãi mãi cho mọi nội dung.",
    category: "Setup",
    icon: Fingerprint,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "AI tạo nội dung",
    date: "Bước 2",
    content: "6 agent AI chạy song song — từ Pain Mirror đến Quote Card, mỗi bài có Hook + Content + Tags.",
    category: "Content",
    icon: PenTool,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 3,
    title: "Lên lịch Notion",
    date: "Bước 3",
    content: "5 bài/ngày tự động điền vào Publishing Calendar. AI quét ngày trống và thêm vào Notion.",
    category: "Schedule",
    icon: CalendarCheck,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 80,
  },
  {
    id: 4,
    title: "Human Review",
    date: "Bước 4",
    content: "Bạn chỉ cần đọc, chỉnh văn phong, thêm \"hồn\" cá nhân. Đổi status để kích hoạt tạo ảnh.",
    category: "Review",
    icon: UserCheck,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 50,
  },
  {
    id: 5,
    title: "Tạo hình ảnh AI",
    date: "Bước 5",
    content: "Khi status = \"Gen Image\", hệ thống tự tạo ảnh phù hợp 7 phong cách nhân hiệu của bạn.",
    category: "Image",
    icon: ImagePlus,
    relatedIds: [4],
    status: "pending" as const,
    energy: 30,
  },
];

export function RadialOrbitalTimelineDemo() {
  return <RadialOrbitalTimeline timelineData={timelineData} />;
}

export default RadialOrbitalTimelineDemo;
