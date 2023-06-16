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
import Billboard from '../components/billboard';

export const revalidate = 60;

export default async function HomePage() {
  return (
    <section>
      <h1 className="font-bold text-4xl dark:text-neutral-200">{name} - 个人网站</h1>

      <div className="my-2 text-zinc-400">
        118°10'48" E  25°04'12" N
      </div>

      <div className="my-3">
        <Image
          alt={name}
          className="rounded-full grayscale"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
      </div>
      

      <div className=" my-14">
        <div className="p-3 rounded-lg text-2xl font-semibold italic shadow-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
          盛夏新冒险，人生新旅程！
        </div>
        <div className="my-5 text-2xl font-semibold italic text-slate-900">
          欢迎来到 Grdoc 的 V0.2 船新版本！
        </div>
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
