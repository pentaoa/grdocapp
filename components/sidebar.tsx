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
  '/about': {
    name: '关于',
  },
  '/blog': {
    name: 'Blog',
  },
  '/vlog':{
    name: 'Vlog',
  },
  '/jdyx': {
    name: '近大远小',
  },
};

function Logo() {
  return (
    <Link aria-label="Grada" href="/">
      <img
        src="/logo.svg"
        className="pr-2 w-1/2 object-contain"
      />
    </Link>
  );
}

export default function Sidebar() {
  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <aside className="md:w-[180px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-sans">
      <div className="lg:sticky lg:top-20">
        <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 flex flex-col items-start">
          <Logo />
        </div>
        <LayoutGroup>
          <nav
            className="flex flex-row md:flex-col items-start px-4 py-4 lg:h-screen md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            <div className="overflow-x-auto flex flex-row md:flex-col ml-2 pr-10 mb-2 mt-2 md:mt-0">
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
                      {
                        'text-neutral-500': !isActive,
                        'font-bold': isActive,
                        'text-xl':isActive,
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
    </aside>
  );
}
