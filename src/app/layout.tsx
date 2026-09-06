import type { Metadata } from "next";
import "@/app/globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/SmoothScroll";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "SangHun Park | Web Developer",
  description: "QA로 시작해 풀스택까지, 사용자가 겪을 일을 먼저 겪어보는 웹 개발자 박상훈의 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={cn("font-sans", geist.variable)}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
