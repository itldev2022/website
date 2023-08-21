/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';

import { navigation } from '@/lib/constants';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navigation() {
  const router = useRouter();

  const [coloredNav, setColoredNav] = useState(false);
  const [isAboutOpen, setAboutOpen] = useState(false);

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
    <header className='font-black font-lato sticky top-0 z-50'>
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
                  alt='Internasional Total Service & Logistics'
                />
              </a>
            </Link>
            <span className='font-bold font-serif text-sm text-white w-full lg:text-[16px]'>
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
              {navigation.map((item) =>
                item.subMenu ? (
                  <Popover className='relative' key={item.name}>
                    {({ open }: { open: boolean }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ||
                              (item.href &&
                                router.asPath.search(item.href) === 0)
                              ? 'text-white'
                              : 'text-slate-400',
                            ' group inline-flex items-center rounded-md text-base hover:text-white focus:outline-none '
                          )}
                        >
                          <span className='font-black font-lato'>
                            {item.name}
                          </span>
                          <ChevronDownIcon
                            className={classNames(
                              open ||
                                (item.href &&
                                  router.asPath.search(item.href) === 0)
                                ? 'text-white'
                                : 'text-slate-400',
                              'h-5 ml-2 w-5 group-hover:text-white'
                            )}
                            aria-hidden='true'
                          />
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter='transition ease-out duration-200'
                          enterFrom='opacity-0 translate-y-1'
                          enterTo='opacity-100 translate-y-0'
                          leave='transition ease-in duration-150'
                          leaveFrom='opacity-100 translate-y-0'
                          leaveTo='opacity-0 translate-y-1'
                        >
                          <Popover.Panel className='-ml-4 absolute max-w-sm mt-3 px-2 transform w-screen z-10 sm:px-0 lg:-translate-x-1/2 lg:left-1/2 lg:ml-0'>
                            <div className='overflow-hidden ring-1 ring-black ring-opacity-5 rounded-lg shadow-lg'>
                              <div className='bg-white gap-6 grid px-2 py-6 relative sm:gap-8 sm:p-4'>
                                {item.subMenu.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className='-m-3 flex items-start p-3 rounded-lg hover:bg-gray-50'
                                  >
                                    <div className='ml-4'>
                                      <p className='text-base text-gray-900'>
                                        {item.name}
                                      </p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                ) : (
                  <Link key={item.name} href={item.href || ''}>
                    <a
                      className={`transition duration-500 hover:text-white text-base ${
                        router.asPath === item.href
                          ? 'text-white '
                          : 'text-slate-400'
                      }`}
                    >
                      {item.name}
                    </a>
                  </Link>
                )
              )}
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
                  {navigation.map((item) =>
                    item.subMenu ? (
                      <div
                        className={`flex flex-col gap-2 ${
                          item.href && router.asPath.search(item.href) === 0
                            ? 'text-white '
                            : 'text-slate-400'
                        } `}
                        key={item.name}
                      >
                        <span onClick={() => setAboutOpen(!isAboutOpen)}>
                          {item.name}
                        </span>
                        {isAboutOpen && (
                          <div className='flex flex-col gap-2'>
                            {item.subMenu.map((link) => (
                              <Link key={link.name} href={link.href || ''}>
                                <a
                                  className={` text-xs hover:text-slate-300 ${
                                    router.asPath === link.href
                                      ? 'text-white '
                                      : 'text-slate-400'
                                  }`}
                                >
                                  {link.name}
                                </a>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link key={item.name} href={item.href || ''}>
                        <a
                          className={` text-base hover:text-slate-300 ${
                            router.asPath === item.href
                              ? 'text-white '
                              : 'text-slate-400'
                          }`}
                        >
                          {item.name}
                        </a>
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
}
