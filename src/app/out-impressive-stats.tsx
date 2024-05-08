"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  DocumentTextIcon,
  PlayCircleIcon,
  PencilSquareIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/solid";

import StatsCard from "@/components/stats-card";

const STATS = [
  {
    icon: DocumentTextIcon,
    count: "10,200+",
    title: "Học sinh",
  },
  {
    icon: PlayCircleIcon,
    count: "50+",
    title: "Giảng viên",
  },
  {
    icon: PencilSquareIcon,
    count: "10+",
    title: "Khóa học",
  },
  {
    icon: PhoneArrowDownLeftIcon,
    count: "24/7",
    title: "Hỗ trợ",
  },
];

export function OutImpressiveStats() {
  return (
    <section className="px-8 pt-60">
      <div className="container mx-auto text-center lg:text-left">
        <div className="grid place-items-center text-center">
          <Typography variant="h2" color="blue-gray" className="mb-2 text-4xl">
            Khám phá số liệu thống kê ấn tượng của chúng tôi
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 w-full !text-gray-500 lg:w-5/12"
          >
            Chúng tôi tự hào về cam kết hướng tới sự xuất sắc và sự cống hiến
            của chúng tôi cho sự thành công của bạn.
          </Typography>
        </div>
        <div className="grid gap-y-16 gap-x-10 md:grid-cols-2 lg:grid-cols-4">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default OutImpressiveStats;
