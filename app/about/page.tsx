import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '关于',
  description: '网站信息',
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-4xl my-4">关于</h1>
      <p className="my-4 text-neutral-800 dark:text-neutral-200">
          回看天际下中流，岩上无心云相逐。
      </p>
      
      <article className="group my-4">
      <Link href="/blog/establish"> 
        <img
        alt="Reading"
        src="https://ihs-1317591693.cos.ap-guangzhou.myqcloud.com/public/small10.jpg"
        className="cursor-none h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:drop-shadow-2xl"
        />

      <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">
            建站小记
          </h3>
        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
        在写这个网站的前一个网站的时候写的文章。时间大概在四月左右，我开始了建站的日程。
        </p>
      </div>
      </Link>
      </article>

      <article className="group my-4">
      <a href="https://github.com/pentaoa/grdocapp/commit/main"> 
        <img
        alt="Reading"
        src="https://ihs-1317591693.cos.ap-guangzhou.myqcloud.com/public/big6.jpg"
        className="cursor-none h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:drop-shadow-2xl"
        />

      <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">
            更新日志
          </h3>
        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
        网站的各个时间节点
        </p>
      </div>
      </a>
      </article>

    </section>
  );
}
