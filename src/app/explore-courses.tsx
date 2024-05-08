"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";

const COURSES = [
  {
    img: "/image/blogs/blog4.svg",
    tag: "Mới bắt đầu • 25 Bài học • 200 Học viên",
    title: "Mở khóa Nền tảng Web",
    label: "từ $99",
    desc: "Đào sâu vào HTML để cấu trúc nội dung của bạn và CSS để thiết kế. Đến cuối khóa học, bạn sẽ tạo ra các trang web đẹp từ đầu.",
  },
  {
    img: "/image/blogs/blog3.svg",
    tag: "Trung bình • 10 Bài học • 150 Học viên",
    title: "Tạo Ra Các Trang Web Linh Hoạt",
    label: "từ $199",
    desc: "Khóa học Thiết kế Responsive của chúng tôi dạy bạn nghệ thuật tạo ra các trang web mà tự động thích nghi với các thiết bị và kích thước màn hình khác nhau.",
  },
  {
    img: "/image/blogs/blog2.svg",
    tag: "Trung bình • 23 Bài học • 590 Học viên",
    title: "Thống Trị Sức Mạnh của React",
    label: "từ $499",
    desc: "Đưa phát triển frontend của bạn lên một tầm cao mới với khóa học Phát triển React của chúng tôi. Học cách xây dựng các ứng dụng web tương tác, động.",
  },
  {
    img: "/image/blogs/blog5.svg",
    tag: "Mới bắt đầu • 35 Bài học • 400 Học viên",
    title: "Khóa Học Cần Thiết cho Frontend",
    label: "từ $49",
    desc: "Đối với các nhà phát triển web khao khát, khóa học Frontend Essentials là một điều bắt buộc. Đào sâu vào các công nghệ cốt lõi - HTML, CSS và JavaScript.",
  },
  {
    img: "/image/blogs/blog6.svg",
    tag: "Trung bình • 10 Bài học • 150 Học viên",
    title: "Tối Ưu Hóa Luồng Làm Việc CSS của Bạn",
    label: "từ $99",
    desc: "Khóa học Giới thiệu Tailwind CSS của chúng tôi dạy bạn cách sử dụng framework CSS này dựa trên tiện ích để tối ưu hóa luồng làm việc của bạn, tiết kiệm thời gian cho bạn.",
  },
  {
    img: "/image/blogs/blog4.svg",
    tag: "Trung bình • 33 Bài học • 690 Học viên",
    title: "Thống Trị Phát Triển Backend",
    label: "từ $299",
    desc: "Mơ ước trở thành một nhà phát triển backend? Khóa học Node.js chuyên sâu trong một tháng của chúng tôi sẽ giúp bạn nhanh chóng đạt được mục tiêu đó.",
  },
];

export function ExploreCourses() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-24 text-center">
        <Typography variant="h2" color="blue-gray">
          Khám phá các khóa học
        </Typography>
        <Typography
          variant="lead"
          className="mt-2 mx-auto w-full px-4 !text-gray-500 lg:w-6/12 lg:px-8"
        >
          Duyệt qua hơn 1.000 khóa học phát triển web và tìm khóa học phù hợp
          với nhu cầu của bạn.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
        {COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default ExploreCourses;
