/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, PhoneIcon, XIcon } from '@heroicons/react/outline';
import { navigation, phoneNumber } from '@/lib/constants';
import { useRouter } from 'next/router';

export default function Navigation() {
  const router = useRouter();

  return (
    <header>
      <Popover className='bg-primary relative'>
        <div className='flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10'>
          <div>
            <a href='/' className='flex'>
              <span className='sr-only'>
                International Total Service & Logistics
              </span>
              <img
                className='h-8 w-auto sm:h-6'
                src='/itl.png'
                alt='International Total Service & Logistics'
              />
            </a>
          </div>
          <div className='-mr-2 -my-2 md:hidden'>
            <Popover.Button className='inline-flex items-center justify-center p-2 rounded-md hover:bg-saphire-800 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500'>
              <span className='sr-only'>Open menu</span>
              <MenuIcon className='h-6 text-white w-6' aria-hidden='true' />
            </Popover.Button>
          </div>
          <div className='hidden md:flex md:flex-1 md:items-center md:justify-between'>
            <Popover.Group as='nav' className='hidden space-x-10 md:flex'>
              {navigation
                .filter((item) => item.name !== 'Home')
                .map((item) => (
                  <a
                    href={item.href}
                    className={`font-medium text-base ${
                      router.asPath === item.href
                        ? 'text-white'
                        : 'text-slate-300'
                    } hover:text-slate-400`}
                  >
                    {item.name}
                  </a>
                ))}
            </Popover.Group>
            <div className='flex items-center md:ml-12'>
              <PhoneIcon className='h-4 text-slate-200 w-4 hover:text-slate-300' />
              <p className='font-medium ml-2 text-base text-slate-200 hover:text-slate-300'>
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
            className='absolute inset-x-0 origin-top-right p-2 top-0 transform transition z-30 md:hidden'
          >
            <div className='bg-primary divide-slate-400 divide-y-2 ring-1 ring-black ring-opacity-5 rounded-lg shadow-lg'>
              <div className='pb-6 pt-5 px-5'>
                <div className='flex items-center justify-between'>
                  <div>
                    <img
                      className='h-8 w-auto'
                      src='/itl.png'
                      alt='International Total Service & Logistics'
                    />
                  </div>
                  <div className='-mr-2'>
                    <Popover.Button className='inline-flex items-center justify-center p-2 rounded-md hover:bg-saphire-800 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500'>
                      <span className='sr-only'>Close menu</span>
                      <XIcon
                        className='h-6 text-white w-6'
                        aria-hidden='true'
                      />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className='px-5 py-6'>
                <div className='gap-4 grid grid-cols-2'>
                  {navigation
                    .filter((item) => item.name !== 'Home')
                    .map((item) => (
                      <a
                        href={item.href}
                        className='font-medium text-base text-white hover:text-slate-300'
                      >
                        {item.name}
                      </a>
                    ))}
                </div>
                <div className='flex items-center mt-6'>
                  <PhoneIcon className='h-4 text-slate-200 w-4 hover:text-slate-300' />
                  <p className='font-medium ml-2 text-base text-slate-200 hover:text-slate-300'>
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
