import type { Metadata } from "next";
import "@/app/globals.css";


export const metadata: Metadata = {
  title: "SangHun Park | Creative Web Developer",
  description: "크리에이티브 웹 개발자 박상훈의 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        <div className="cursor"></div>
        {children}
      </body>
    </html>
  );
}
