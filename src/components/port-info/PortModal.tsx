import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';

import { Items } from '@/lib/portInfo';

export default function PortInfoModal({
  isOpen,
  onClose,
  data,
}: {
  isOpen: boolean;
  onClose: () => unknown;
  data?: Items;
}) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='overflow-y-auto fixed inset-0 z-10'
        onClose={onClose}
      >
        <div className='flex justify-center items-end px-4 pt-4 pb-20 min-h-screen text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden sm:inline-block sm:h-screen sm:align-middle'
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
            <div className='inline-block overflow-hidden px-4 pt-5 pb-4 text-left align-bottom bg-white shadow-xl transition-all transform sm:p-6 sm:my-8 sm:w-full sm:max-w-3xl sm:align-middle'>
              <div className='hidden absolute top-0 right-0 pt-4 pr-4 sm:block'>
                <button
                  type='button'
                  className='text-gray-400 bg-white hover:text-gray-500'
                  onClick={onClose}
                >
                  <span className='sr-only'>Close</span>
                  <XIcon className='w-6 h-6' aria-hidden='true' />
                </button>
              </div>
              <div className='flex items-start'>
                <div className='mt-0 text-left'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'
                  >
                    {data && data.title}
                  </Dialog.Title>
                  {data && (
                    <div
                      className='markdown mt-2'
                      dangerouslySetInnerHTML={{
                        __html: data.content,
                      }}
                    ></div>
                  )}
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
