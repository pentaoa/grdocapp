import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import {
  ArrowIcon,
  GitHubIcon,
  TwitterIcon,
  ViewsIcon,
} from 'components/icons';
import Billboard from '../components/billboard';

export const revalidate = 60;

export default async function HomePage() {
  return (
    <section>
      <h1 className="font-bold text-4xl dark:text-neutral-200">Grada - 个人网站</h1>

      <div className="my-2 text-zinc-400">
        118°10'48" E  25°04'12" N
      </div>

      <div className="my-3">
        <img
          className="rounded-full w-1/6"
          src="cangshu.jpg"
        />
      </div>
      
      <div className="my-14">
        <div className="p-3 rounded-lg text-2xl font-semibold italic shadow-xl bg-gradient-to-r from-red-400 to-rose-200">
          高考成绩已出
        </div>
        <p className="my-5">
          将在7月初填报志愿。
        </p>
        <p className=" my-5 text-2xl font-semibold italic text-slate-900">
          感谢大家的关心和持续的支持！
        </p>
      </div>

      <div className="my-14">
        <div className="p-3 rounded-lg text-2xl font-semibold italic shadow-xl bg-gradient-to-r from-rose-200 via-purple-500 to-red-500">
          泉州之旅
        </div>
        <p className="my-5">
          6月17日到19日，一场小小的毕业旅行。
        </p>
        <Link href="/blog/2023-06-21">
          <p className="underline my-5 text-2xl italic text-slate-900">
            查看照片墙
          </p>
        </Link>
      </div>

      <div className=" my-14">
        <div className="p-3 rounded-lg text-2xl font-semibold italic shadow-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
          盛夏新冒险，人生新旅程！
        </div>
        <div className="my-5 text-2xl font-semibold italic text-slate-900">
          欢迎来到 Grdoc 的 V0.2 船新版本！
        </div>
        自主开发设计（有一定缺陷）！使用电脑访问，效果更佳。
      </div>

      <div className="my-14 ">
        <div className="p-3 rounded-lg text-2xl font-semibold italic shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          高考季
        </div>
        <div className="my-5 text-2xl font-semibold italic text-slate-900">
          6月7日，一起加油！ 
        </div>
      </div>
    
    </section>
  );
}
