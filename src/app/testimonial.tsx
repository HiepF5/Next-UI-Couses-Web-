"use client";

import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

function TESTIMONIAL() {
  return (
    <section className="px-8 py-40">
      <div className="container mx-auto">
        <Card color="transparent" shadow={false} className="">
          <CardBody className="col-span-full gap-10 place-items-center overflow-visible grid grid-cols-1 lg:grid-cols-4">
            <div className="w-full xl:w-[600px] flex items-center overflow-hidden rounded-xl justify-center col-span-2 h-full">
              <Image
                width={768}
                height={768}
                src="/image/blogs/blog6.svg"
                alt="testimonial image"
                className="w-full h-full scale-110 object-cover"
              />
            </div>
            <div className="col-span-2 w-full">
              <Typography variant="h6" color="blue" className="mb-4">
                Khóa Học Online
              </Typography>
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold"
              >
                Full-Stack Web Development
              </Typography>
              <Typography className="mb-1 w-full font-normal !text-gray-500">
                Trở thành một nhà phát triển đa năng bằng cách kết hợp các kỹ
                năng frontend và backend. Xây dựng các ứng dụng web hoàn chỉnh
                từ đầu đến cuối.
              </Typography>
              <div className="grid mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-gray-500 rounded-full" />
                  <Typography className="w-full font-normal !text-gray-500">
                    Bộ sưu tập khóa học quốc tế bằng 10 ngôn ngữ
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-gray-500 rounded-full" />
                  <Typography className="w-full font-normal !text-gray-500">
                    Được chứng nhận bao gồm
                  </Typography>
                </div>
              </div>
              <div className="flex items-center mt-8 gap-4">
                <Avatar
                  variant="circular"
                  src="/image/avatar3.jpg"
                  alt="spotify"
                  size="md"
                />
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-0.5">
                    F5FIRE
                  </Typography>
                  <Typography
                    variant="small"
                    className="font-normal !text-gray-500"
                  >
                    Senior Designer @company.com
                  </Typography>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default TESTIMONIAL;
