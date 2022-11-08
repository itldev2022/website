import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';

import { Items } from '@/lib/portInfo';

export default function AllPortModal({
  isOpen,
  onClose,
  data,
}: {
  isOpen: boolean;
  onClose: () => unknown;

  data?: Items[];
}) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 overflow-y-auto z-[999]'
        onClose={onClose}
      >
        <div className='flex items-end justify-center min-h-screen pb-20 pt-4 px-4 text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='bg-gray-500 bg-opacity-75 fixed inset-0 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden sm:align-middle sm:h-screen sm:inline-block'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className='align-bottom bg-white inline-block overflow-hidden pb-4 pt-5 px-4 shadow-xl text-left transform transition-all sm:align-middle sm:max-w-3xl sm:my-8 sm:p-6 sm:w-full'>
              <div className='absolute hidden pr-4 pt-4 right-0 top-0 sm:block'>
                <button
                  type='button'
                  className='bg-white text-gray-400 hover:text-gray-500'
                  onClick={onClose}
                >
                  <span className='sr-only'>Close</span>
                  <XIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>
              <div className='flex items-start'>
                <div className='mt-0 text-left'>
                  <Dialog.Title
                    as='h3'
                    className='font-medium leading-6 text-gray-900 text-lg'
                  >
                    All Port
                  </Dialog.Title>
                  <div className='mt-2'>
                    {data?.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          onClose();
                        }}
                      >
                        <a
                          href={item.pdf?.url || '#'}
                          target='_blank'
                          rel='noreferrer'
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
