import './global.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Billboard from '../components/billboard';
import Footer from 'components/footer';
import { Suspense } from 'react';
import Loading from './loading';

export const metadata: Metadata = {
  title: {
    default: 'Grada - 个人网站',
    template: '%s | Grada - 个人网站',
  },
  description: '我的个人网站',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="text-black bg-white dark:text-white dark:bg-[#111010]"
    >
      <body className="antialiased mx-3 mb-20 flex flex-col md:flex-row mt-5 md:mt-20 lg:mt-32 lg:mx-auto">

        <Suspense fallback={<Loading />}>
        <main className="flex-auto mx-auto min-w-0 max-w-3xl mt-6 md:mt-0 flex flex-col px-2 md:px-0">
          {children}
        </main>
        </Suspense>

      </body>
      <Footer />
    </html>
  );
}

