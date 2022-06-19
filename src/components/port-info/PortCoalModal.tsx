import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';

import { Items } from '@/lib/portInfo';

export default function PortInfoCoal({
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
        className='fixed inset-0 overflow-y-auto z-10'
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
            <div className='align-bottom bg-white inline-block overflow-hidden pb-4 pt-0 px-0 shadow-xl text-left transform transition-all sm:align-middle sm:max-w-xl sm:my-8 sm:p-6 sm:pt-0 sm:px-0 sm:w-full'>
              <div className='absolute hidden pr-4 pt-4 right-0 top-0 sm:block'>
                <button
                  type='button'
                  className='text-gray-400 hover:text-gray-500'
                  onClick={onClose}
                >
                  <span className='sr-only'>Close</span>
                  <XIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>
              <div className=''>
                <Dialog.Title
                  as='h3'
                  className='bg-gradient-to-bl font-bold from-biruMuda leading-6 mb-4 px-4 py-5 text-lg text-white to-biruTua'
                >
                  {data && data.name}
                </Dialog.Title>
                <div className='mt-0 text-left'>
                  {data && (
                    <div className='flex flex-col'>
                      <div className='border-b-2 flex flex-row gap-2 items-center justify-between py-2 text-lg'>
                        <span className='font-semibold pl-4'>Location</span>
                        <span className='pr-4 text-right'>
                          {data.location || '-'}
                        </span>
                      </div>
                      <div className='border-b-2 flex flex-row gap-2 items-center justify-between py-2 text-lg'>
                        <span className='font-semibold pl-4'>Climate</span>
                        <span className='pr-4 text-right'>
                          {data.climate || '-'}
                        </span>
                      </div>
                      <div className='border-b-2 flex flex-row gap-2 items-center justify-between py-2 text-lg'>
                        <span className='font-semibold pl-4'>Loading at</span>
                        <span className='pr-4 text-right'>
                          {data.loadingAt || '-'}
                        </span>
                      </div>
                      <div className='border-b-2 flex flex-row gap-2 items-center justify-between py-2 text-lg'>
                        <span className='font-semibold pl-4'>Loading by</span>
                        <span className='pr-4 text-right'>
                          {data.loadingBy || '-'}
                        </span>
                      </div>
                      <div className='border-b-2 flex flex-row gap-2 items-center justify-between py-2 text-lg'>
                        <span className='font-semibold pl-4'>FLF/FC List</span>
                        <span className='pr-4 text-right'>
                          {data.flfFcList || '-'}
                        </span>
                      </div>
                      <div className='border-b-2 flex flex-row gap-2 items-center justify-between py-2 text-lg'>
                        <span className='font-semibold pl-4'>
                          Main Shippers
                        </span>
                        <span className='pr-4 text-right'>
                          {data.mainShippers || '-'}
                        </span>
                      </div>
                      <div className='border-b-2 flex flex-row gap-2 items-center justify-between py-2 text-lg'>
                        <span className='font-semibold pl-4'>
                          EST. Port DA(GRT 40,000)
                        </span>
                        <span className='pr-4 text-right'>
                          {data.estPortDa || '-'}
                        </span>
                      </div>
                      <div className='border-b-2 flex flex-row gap-2 items-center justify-between py-2 text-lg'>
                        <span className='font-semibold pl-4'>
                          NOR Tender to Commence Loading
                        </span>
                        <span className='pr-4 text-right'>
                          {data.norTenderToCommenceLoading || '-'}
                        </span>
                      </div>
                    </div>
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
