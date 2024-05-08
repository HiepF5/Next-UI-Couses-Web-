"use client";

import React from "react";
import {
  Typography,
  Card,
  CardBody,
  CardHeader,
  Button,
} from "@material-tailwind/react";
import EventCard from "@/components/event-card";

const EVENTS = [
  {
    img: "/image/blogs/blog-1.svg",
    title: "Tương lai của Phát triển Web: Xu hướng và Đổi mới",
    desc: "Khám phá những xu hướng và đổi mới mới nhất đang hình thành tương lai của phát triển web.",
    buttonLabel: "đăng ký miễn phí",
  },
  {
    img: "/image/blogs/blog2.svg",
    title: "WebDev Pro Code-a-Thon: Xây dựng một Website Responsive",
    desc: "Người tham gia sẽ có 48 giờ để tạo ra một trang web responsive từ đầu bằng HTML, CSS và JavaScript.",
    buttonLabel: "đăng ký miễn phí",
  },
  {
    img: "/image/blogs/blog3.svg",
    title: "Hỏi các Chuyên gia: Phát triển Web Frontend",
    desc: "Tham gia phiên hỏi và đáp trực tiếp với các giảng viên giàu kinh nghiệm của chúng tôi. Nhận câu trả lời cho câu hỏi của bạn, những thông tin chi tiết về các phương pháp tốt nhất.",
    buttonLabel: "mua vé",
  },
  {
    img: "/image/blogs/blog4.svg",
    title: "Tiếp Cận Web: Xây dựng các trang web bao gồm",
    desc: "Các chuyên gia ngành sẽ thảo luận về sự quan trọng của thiết kế bao gồm và chia sẻ các chiến lược để tạo ra các trang web.",
    buttonLabel: "mua vé",
  },
];

export function Events() {
  return (
    <section className="py-20 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Sự Kiện Sắp Tới
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Tham gia các sự kiện phát triển web của chúng tôi được thiết kế để
          chia sẻ thông tin chuyên sâu, xu hướng và trải nghiệm thực tế.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {EVENTS.map((props, idx) => (
          <EventCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Events;
