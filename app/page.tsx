import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import {
  ArrowIcon,
  GitHubIcon,
  TwitterIcon,
  ViewsIcon,
} from 'components/icons';
import { name, about, bio, avatar } from 'lib/info';

export const revalidate = 60;

export default async function HomePage() {
  return (
    <section>

      <h1 className="font-bold text-5xl dark:text-neutral-200">{name}</h1>

      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>

      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          className="rounded-full grayscale"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          欢迎！
          很高兴认识你。
        </div>
      </div>


      <div className="rounded:lg shadow-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        
        <p className="p-3 text-2xl font-semibold italic ">
          盛夏新冒险，人生新旅程！
        </p>
        
      </div>

      <p className="my-5 text-2xl font-semibold italic text-slate-900">
      <span className="w-min absolute -inset-1 -skew-y-3 bg-pink-500">
          <span className="text-center relative text-white">船新版本</span>
      </span>        
        欢迎来到 Grdoc 的 V0.2 船新版本！
      </p>

      <ul className="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/pentaoa"
          >
            <ArrowIcon />
            <p className="px-2">在 Gtihub 上追踪我</p>
            <GitHubIcon />
          </a>
        </li>
      </ul>
    </section>
  );
}
