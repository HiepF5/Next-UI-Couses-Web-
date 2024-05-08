"use client";
import React from "react";
import FeedbackCard from "@/components/feedback-card";
import { Typography } from "@material-tailwind/react";

const FEEDBACKS = [
  {
    feedback:
      "Các giảng viên là những chuyên gia hàng đầu, và phương pháp học thực hành là vô cùng hiệu quả.",
    client: "Jessica Devis",
    title: "Phát triển Web @ MARKETING DIGITAL LTD.",
    img: "/image/avt1.jpg",
  },
  {
    feedback:
      "Tôi từng không biết gì về phát triển web nhưng sau đó đã có được công việc mơ ước của mình làm phát triển frontend.",
    client: "Linde Michel",
    title: "Phát triển Web @ APPLE INC.",
    img: "/image/avt2.png",
  },
  {
    feedback:
      "Các khóa học được cấu trúc rất tốt, và các dự án đã giúp tôi xây dựng một hồ sơ cá nhân mạnh mẽ.",
    client: "Misha Stam",
    title: "Phát triển Web @ APPLE INC.",
    img: "/image/avt3.jpg",
  },
];

export function StudentsFeedback() {
  return (
    <section className="px-8 py-36">
      <div className="container mx-auto">
        <div className="mb-16 flex flex-col items-center w-full">
          <Typography variant="h2" color="blue-gray" className="mb-2">
            Học sinh của chúng tôi đang nói gì
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 max-w-3xl lg:text-center !text-gray-500"
          >
            Sứ mệnh của chúng tôi là trao quyền cho các cá nhân kiến thức và kỹ
            năng họ cần để thành công trong thế giới phát triển web. Nhưng đừng
            chỉ tin lời chúng tôi.
          </Typography>
        </div>
        <div className="grid gap-x-8 gap-y-12 lg:px-32 grid-cols-1 md:grid-cols-3">
          {FEEDBACKS.map((props, key) => (
            <FeedbackCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudentsFeedback;
