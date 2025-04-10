import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import '@/styles/project-detail.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MZ 포트폴리오',
  description: '웹 개발자 박상훈의 포트폴리오 사이트입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <div className="cursor"></div>
        {children}
      </body>
    </html>
  );
}
