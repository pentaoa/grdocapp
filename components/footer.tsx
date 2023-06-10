'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutGroup, motion } from 'framer-motion';
import { name, about, bio, avatar } from 'lib/info';

const navItems = {
  '/': {
    name: '主页',
  },
  '/event': {
    name: '特殊页面',
  },
  '/blog': {
    name: 'Blog',
  },
  '/vlog':{
    name: 'Vlog',
  },
};


export default function Footer() {
  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <div className="fixed justify-between flex mx-auto inset-x-0 shadow-lg shrink w-5/6 bg-stone-300 bg-opacity-70 backdrop-filter backdrop-blur-lg my-3 bottom-0 rounded-lg">
      <div className="w-8 my-2 ml-4 hidden sm:block">
        <img src="logo.svg" className=""></img>
      </div>
      <div className="mx-auto">
        <LayoutGroup>
          <nav
            className="px-4 my-2 fade w-full"
            id="nav"
          >
            <div className="flex flex-row">
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
                      {
                        'text-neutral-600': !isActive,
                        'font-bold': isActive,
                        
                      }
                    )}
                  >
                    <span className="relative py-[5px] px-[10px]">
                      {name}
                      {path === pathname ? (
                        <motion.div
                          className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"
                          layoutId="sidebar"
                          transition={{
                            type: 'spring',
                            stiffness: 444,
                            damping: 20,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
      <div className="w-8 my-auto mr-4 hidden sm:block">
        <div className="loader h-4 w-4 border-2 animate-spin border-gray-600 border-dashed rounded-full"></div>
      </div>
    </div>
  );
}
