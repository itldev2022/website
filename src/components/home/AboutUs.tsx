import Link from 'next/link';

export default function AboutUs() {
  return (
    <div className='relative my-20 lg:my-0'>
      <div className='lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start lg:px-8 lg:mx-auto lg:max-w-7xl'>
        <div className='relative sm:py-16 lg:py-0'>
          <div className='relative px-4 mx-auto max-w-md sm:px-6 sm:max-w-3xl lg:px-0 lg:py-20 lg:max-w-none'>
            <div className='overflow-hidden relative pt-64 pb-10 shadow-xl lg:pt-96'>
              <img
                className='object-cover absolute inset-0 w-full h-full'
                src='/images/about-us.jpg'
                alt='Cargo container'
              />
            </div>
          </div>
        </div>
        <div className='relative px-4 mx-auto max-w-md sm:px-6 sm:max-w-3xl lg:px-0'>
          {/* Content area */}
          <div className='pt-12 sm:pt-16 lg:pt-20'>
            <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              About us
            </h2>
            <div className='mt-6 space-y-6 text-gray-500'>
              <p className='text-lg'>
                PT. Internasional Total Service & Logistics (ITL) was
                established in 2006 to serve the growing demand for shipping and
                transport services in Indonesia by providing main services such
                as shipping agency, cargo broking and forwarding.
              </p>
              <p className='text-base leading-7'>
                Within a year of establishment, ITL have expanded its network
                and branch offices all over Asia and is also a member of the
                Indonesian National Shipowner’s Association (INSA)
              </p>
              <Link passHref href='/about'>
                <button
                  type='button'
                  className='from-biruMuda to-biruTua inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-bl border border-transparent shadow-sm focus:ring-saphire-300 focus:ring-2 focus:ring-offset-2 focus:outline-none'
                >
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
