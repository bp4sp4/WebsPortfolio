import type { Metadata } from "next";
import "@/app/globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/SmoothScroll";
import Script from "next/script";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  metadataBase: new URL("https://webs-portfolio.vercel.app"),
  title: "박상훈 | 프론트엔드 개발자 포트폴리오",
  description: "React · Next.js · TypeScript 프론트엔드 개발자 박상훈. 사내 ERP, 취업 플랫폼, LMS 등 실서비스를 설계부터 운영까지 맡고 있습니다.",
  openGraph: {
    title: "박상훈 | 프론트엔드 개발자 포트폴리오",
    description: "React · Next.js · TypeScript로 사내 ERP, 취업 플랫폼, LMS 등 실서비스를 만들고 운영합니다.",
    url: "/",
    siteName: "박상훈 포트폴리오",
    locale: "ko_KR",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "박상훈 프론트엔드 개발자 포트폴리오" }],
  },
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
        {/* 방문자가 어디를 누르는지 · 어디서 막히는지 기록 (직접 만든 Stuckpoint). 운영 배포에서만 켠다 */}
        {process.env.VERCEL_ENV === "production" && (
          <Script src="https://stuckpoint.vercel.app/stuckpoint.global.js" data-key="portfolio" data-clicks="true" strategy="afterInteractive" />
        )}
      </body>
    </html>
  );
}
