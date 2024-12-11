import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: " اسنپ فود | سفارش آنلاین غذا از تمامی رستوران ها و فست فودها",
  description: "سفارش غذا با تخفیف از رستوران ها و فست فود های ایران. ارسال اکسپرس در سریع ترین زمان ممکن. خرید غذا با امکان مقایسه رستوران ها",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        {children}
      </body>
    </html>
  );
}
