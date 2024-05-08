import { Typography, Button, Input } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Công ty",
    items: ["Về Chúng Tôi", "Nghề Nghiệp", "Công Cụ Premium", "Blog"],
  },
  {
    title: "Trang",
    items: ["Đăng Nhập", "Đăng Ký", "Thêm Danh Sách", "Liên Hệ"],
  },
  {
    title: "Pháp lý",
    items: ["Điều khoản", "Quyền Riêng Tư", "Nhóm", "Về Chúng Tôi"],
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 pt-24 pb-8">
      <div className="container max-w-6xl flex flex-col mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 !w-full ">
          <div className="flex col-span-2 items-center gap-10 mb-10 lg:mb-0 md:gap-36">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography variant="h6" color="blue-gray" className="mb-4">
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      className="py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="">
            <Typography variant="h6" className="mb-3 text-left">
              Đặt mua
            </Typography>
            <Typography className="!text-gray-500 font-normal mb-4 text-base">
              Nhận quyền truy cập vào các ưu đãi dành riêng cho người đăng ký và
              là người đầu tiên nhận được thông báo về doanh số bán hàng mới.
            </Typography>
            <Typography variant="small" className="font-medium mb-2 text-left">
              Email của bạn
            </Typography>
            <div className="flex mb-3 flex-col lg:flex-row items-start gap-4">
              <div className="w-full">
                {/* @ts-ignore */}
                <Input label="Email" color="gray" />
                <Typography className="font-medium mt-3 !text-sm !text-gray-500 text-left">
                  Tôi đồng ý{" "}
                  <a
                    href="#"
                    className="font-bold underline hover:text-gray-900 transition-colors"
                  >
                    Các điều khoản và điều kiện{" "}
                  </a>
                </Typography>
              </div>
              <Button color="gray" className="w-full lg:w-fit" size="md">
                button
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
