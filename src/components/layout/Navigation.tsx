/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';

import { navigation } from '@/lib/constants';

export default function Navigation() {
  const router = useRouter();

  const [coloredNav, setColoredNav] = useState(false);

  const handleScroll = () => {
    if (router.pathname === '/') {
      if (window.scrollY > 450) {
        setColoredNav(true);
      } else {
        setColoredNav(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className='sticky top-0 z-50'>
      <Popover
        className={`relative ${
          router.pathname !== '/'
            ? 'bg-gradient-to-bl from-biruMuda to-biruTua'
            : coloredNav
            ? 'bg-gradient-to-bl from-biruMuda to-biruTua'
            : 'bg-black bg-opacity-40'
        }`}
      >
        <div className='flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10'>
          <div className='flex flex-row items-center'>
            <Link href='/'>
              <a className='flex w-[100px]'>
                <span className='sr-only'>
                  Internasional Total Service & Logistics
                </span>
                <img
                  className='h-8'
                  src='/itlCircle.png'
                  alt='International Total Service & Logistics'
                />
              </a>
            </Link>
            <span className='font-bold font-serif text-sm text-white w-full lg:text-md'>
              Internasional Total Service & Logistics
            </span>
          </div>
          <div className='-mr-2 -my-2 md:hidden'>
            <Popover.Button className='inline-flex items-center justify-center p-2 rounded-md hover:bg-saphire-800 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500'>
              <span className='sr-only'>Open menu</span>
              <MenuIcon className='h-6 text-white w-6' aria-hidden='true' />
            </Popover.Button>
          </div>
          <div className='hidden md:flex md:flex-1 md:items-center md:justify-end'>
            <Popover.Group as='nav' className='hidden space-x-10 md:flex'>
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a
                    className={`transition duration-500 hover:text-white text-base ${
                      router.asPath === item.href
                        ? 'text-white font-semi'
                        : 'text-slate-400'
                    }`}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </Popover.Group>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter='duration-200 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel
            focus
            className='absolute inset-x-0 origin-top-right p-2 top-0 transform transition z-30 md:hidden'
          >
            <div className='bg-gradient-to-bl from-biruMuda ring-1 ring-black ring-opacity-5 shadow-lg to-biruTua'>
              <div className='pb-6 pt-5 px-5'>
                <div className='flex items-center justify-between'>
                  <div>
                    <img
                      className='h-8 w-auto'
                      src='/itlCircle.png'
                      alt='Internasional Total Service & Logistics'
                    />
                  </div>
                  <div className='-mr-2'>
                    <Popover.Button className='inline-flex items-center justify-center p-2 rounded-md hover:bg-saphire-800 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500'>
                      <span className='sr-only'>Close menu</span>
                      <XIcon
                        className='h-6 text-white w-6'
                        aria-hidden='true'
                      />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className='pt-0 px-5 py-6'>
                <div className='gap-4 grid grid-cols-2'>
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a
                        className={`font-medium text-base hover:text-slate-300 ${
                          router.asPath === item.href
                            ? 'text-white font-semi'
                            : 'text-slate-400'
                        }`}
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
}
