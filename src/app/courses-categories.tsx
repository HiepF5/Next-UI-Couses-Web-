"use client";

import React from "react";
import { Button, Typography, Card, CardBody } from "@material-tailwind/react";

import {
  GlobeEuropeAfricaIcon,
  MicrophoneIcon,
  PuzzlePieceIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

import CategoryCard from "@/components/category-card";

const CATEGORIES = [
  {
    img: "/image/blogs/blog-3.png",
    icon: HeartIcon,
    title: "Frontend Web Development",
    desc: "300 Khóa học",
  },
  {
    img: "/image/blogs/blog-12.jpeg",
    icon: PuzzlePieceIcon,
    title: "Backend Web Development",
    desc: "200 Khóa học",
  },
  {
    img: "/image/blogs/blog-10.jpeg",
    icon: GlobeEuropeAfricaIcon,
    title: "Web Security & Performance",
    desc: "240 Khóa học",
  },
  {
    img: "/image/blogs/blog-13.png",
    icon: MicrophoneIcon,
    title: "Full-Stack Web Development",
    desc: "100 Khóa học",
  },
];

export function CoursesCategories() {
  return (
    <section className="container mx-auto px-8 py-36">
      <div className="mb-20 grid place-items-center text-center">
        <Typography variant="h2" color="blue-gray" className="my-3">
          Danh Mục Khóa Học
        </Typography>
        <Typography variant="lead" className="!text-gray-500 lg:w-6/12">
          Tuyển tập toàn diện các khóa học được thiết kế để trang bị cho bạn
          những kỹ năng cần thiết để phát triển trong thế giới phát triển web
          năng động.
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
          color="gray"
          className="relative grid h-full w-full place-items-center overflow-hidden text-center"
        >
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <CardBody className="relative w-full">
            <Typography color="white" className="text-xs font-bold opacity-50">
              HTML, CSS & Javascript
            </Typography>
            <Typography variant="h4" className="mt-9" color="white">
              Giới thiệu phát triển Web
            </Typography>
            <Typography
              color="white"
              className="mt-4 mb-14 font-normal opacity-50"
            >
              Sẵn sàng để bắt đầu hành trình phát triển web của bạn?
            </Typography>
            <Button size="sm" color="white">
              Đăng kí ngay
            </Button>
          </CardBody>
        </Card>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(0, 2).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(2, 4).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesCategories;
