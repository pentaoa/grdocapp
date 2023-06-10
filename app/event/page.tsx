import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '特殊页面',
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-4xl my-4">特殊页面</h1>
      
      <div className="group my-6">
        <Link href="/event/mc"> 
          <img
            src="https://ihs-1317591693.cos.ap-guangzhou.myqcloud.com/grdoc/MCV-Trails-and-Tales-sak.webp"
            className="cursor-none h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:drop-shadow-2xl"
          />
        </Link>
          <div className="p-4">
            <div className="text-lg font-medium text-gray-900">
              Minecraft 服务器
            </div>
            <div className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              喝电子汽水，看赛博大海，过二进制夏天！欢迎来到我的 MC 私人服务器——PtaWorld，该服务器无需正版验证。是一个原版生存服务器，欢迎你的到来。
            </div>
          </div>
      </div>


      <div className="group my-6">
        <Link href="/blog/establish">
        <img
        alt="Reading"
        src="https://ihs-1317591693.cos.ap-guangzhou.myqcloud.com/public/small10.jpg"
        className="cursor-none h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:drop-shadow-2xl"
        />
        </Link>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">
            建站小记
          </h3>
          <div className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            在写这个网站的前一个网站的时候写的文章。时间大概在四月左右，我开始了建站的日程。
          </div>
        </div>
      </div>


      <div className="group my-6">
        <Link href="/event/jdyx"> 
          <img
            src="https://ihs-1317591693.cos.ap-guangzhou.myqcloud.com/grdoc/0385_gt.jpg"
            className="cursor-none h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:drop-shadow-2xl"
          />
        </Link>
          <div className="p-4">
            <div className="text-lg font-medium text-gray-900">
              员工
            </div>
            <div className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              近大远小。
            </div>
          </div>
      </div>

      <div className="group my-6">
        <a href="https://github.com/pentaoa/grdocapp/commit/main"> 
        <img
        alt="Macos"
        src="https://ihs-1317591693.cos.ap-guangzhou.myqcloud.com/public/big6.jpg"
        className="cursor-none h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:drop-shadow-2xl"
        />
        </a>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">
            更新日志
          </h3>
          <div className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            网站的各个时间节点
          </div>
        </div>
      </div>

    </section>
  );
}
