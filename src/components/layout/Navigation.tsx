/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, PhoneIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

import { navigation, phoneNumber } from '@/lib/constants';

export default function Navigation() {
  const router = useRouter();

  return (
    <header>
      <Popover className='bg-primary relative'>
        <div className='flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10'>
          <div>
            <Link href='/'>
              <a className='flex'>
                <span className='sr-only'>
                  International Total Service & Logistics
                </span>
                <img
                  className='w-auto h-8 sm:h-6'
                  src='/itl.png'
                  alt='International Total Service & Logistics'
                />
              </a>
            </Link>
          </div>
          <div className='-my-2 -mr-2 md:hidden'>
            <Popover.Button className='inline-flex justify-center items-center p-2 rounded-md hover:bg-saphire-800 hover:text-gray-500 focus:ring-slate-500 focus:ring-2 focus:ring-inset focus:outline-none'>
              <span className='sr-only'>Open menu</span>
              <MenuIcon className='w-6 h-6 text-white' aria-hidden='true' />
            </Popover.Button>
          </div>
          <div className='hidden md:flex md:flex-1 md:justify-between md:items-center'>
            <Popover.Group as='nav' className='hidden space-x-10 md:flex'>
              {navigation
                .filter((item) => item.name !== 'Home')
                .map((item) => (
                  <Link key={item.name} href={item.href}>
                    <a
                      className={`font-medium text-base ${
                        router.asPath === item.href
                          ? 'text-white'
                          : 'text-slate-300'
                      } hover:text-slate-400`}
                    >
                      {item.name}
                    </a>
                  </Link>
                ))}
            </Popover.Group>
            <div className='flex items-center md:ml-12'>
              <PhoneIcon className='text-slate-200 w-4 h-4 hover:text-slate-300' />
              <p className='text-slate-200 ml-2 text-base font-medium hover:text-slate-300'>
                {phoneNumber}
              </p>
            </div>
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
            className='absolute inset-x-0 top-0 z-30 p-2 transition transform origin-top-right md:hidden'
          >
            <div className='bg-primary divide-slate-400 rounded-lg divide-y-2 ring-1 ring-black ring-opacity-5 shadow-lg'>
              <div className='px-5 pt-5 pb-6'>
                <div className='flex justify-between items-center'>
                  <div>
                    <Image
                      layout='fill'
                      className='w-auto h-8'
                      src='/itl.png'
                      alt='International Total Service & Logistics'
                    />
                  </div>
                  <div className='-mr-2'>
                    <Popover.Button className='inline-flex justify-center items-center p-2 rounded-md hover:bg-saphire-800 hover:text-gray-500 focus:ring-slate-500 focus:ring-2 focus:ring-inset focus:outline-none'>
                      <span className='sr-only'>Close menu</span>
                      <XIcon
                        className='w-6 h-6 text-white'
                        aria-hidden='true'
                      />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className='px-5 py-6'>
                <div className='grid grid-cols-2 gap-4'>
                  {navigation
                    .filter((item) => item.name !== 'Home')
                    .map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a className='text-base font-medium text-white hover:text-slate-300'>
                          {item.name}
                        </a>
                      </Link>
                    ))}
                </div>
                <div className='flex items-center mt-6'>
                  <PhoneIcon className='text-slate-200 w-4 h-4 hover:text-slate-300' />
                  <p className='text-slate-200 ml-2 text-base font-medium hover:text-slate-300'>
                    {phoneNumber}
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
}
