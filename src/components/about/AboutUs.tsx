export default function AboutUs() {
  return (
    <div className='my-14 relative'>
      <div className='lg:gap-24 lg:grid lg:grid-cols-2 lg:items-start lg:max-w-7xl lg:mx-auto lg:px-8'>
        <div className='relative sm:py-16 lg:py-0'>
          <div className='max-w-md mx-auto px-4 relative sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20'>
            <div className='overflow-hidden pb-10 pt-64 relative shadow-xl lg:pt-96'>
              <img
                className='absolute h-full inset-0 object-cover w-full'
                src='/images/coal-ship.jpg'
                alt='Cargo container'
              />
            </div>
          </div>
        </div>
        <div className='max-w-md mx-auto px-4 relative sm:max-w-3xl sm:px-6 lg:px-0'>
          {/* Content area */}
          <div className='pt-12 sm:pt-16 lg:pt-20'>
            <h2 className='font-extrabold text-3xl text-gray-900 tracking-tight sm:text-4xl'>
              About us
            </h2>
            <div className='mt-6 space-y-6 text-gray-800'>
              <p className='text-lg'>
                PT. Internasional Total Service & Logistics (ITL) was
                established in 2006 to serve the growing demand for shipping and
                transport services in Indonesia by providing main services such
                as shipping agency, cargo broking and forwarding.
              </p>
              <p className='leading-7 text-base'>
                Within a year of establishment, ITL have expanded its network
                and branch offices all over Asia and is also a member of the
                Indonesian National Shipowner’s Association (INSA)
              </p>
              <p className='leading-7 text-base'>
                This additional knowledge has also helped us in providing an
                added service to shippers, traders and vessel owners whereby we
                can assist information in commodities sourcing and logistical
                solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
