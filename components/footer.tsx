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
        className="pr-2 w-1/4 object-contain"
      />
    </Link>
  );
}

export default function Footer() {
  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <div className="fixed mx-auto inset-x-0 lace-self-center shadow-lg shrink grid grid-flow-row-dense w-5/6 bg-stone-300 bg-opacity-50 backdrop-filter backdrop-blur-lg my-3 bottom-0 rounded-lg">
      <div>
        <LayoutGroup>
          <nav
            className="flex justify-center px-4 my-2 fade"
            id="nav"
          >
            <div className="flex justify-center overflow-x-auto flex-row w-full">
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
    </div>
  );
}
