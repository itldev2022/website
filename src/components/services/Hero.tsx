import Image from 'next/image';

export default function Hero() {
  return (
    <div className='relative bg-gray-900'>
      <div className='absolute bottom-0 w-full h-80 xl:inset-0 xl:h-full'>
        <div className='w-full h-full xl:grid xl:grid-cols-2'>
          <div className='h-full xl:relative xl:col-start-2'>
            <Image
              layout='fill'
              className='object-cover w-full h-full opacity-25 xl:absolute xl:inset-0'
              src='/images/services.jpg'
              alt='cargo ship'
            />
            <div
              aria-hidden='true'
              className='absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:w-32 xl:h-full xl:bg-gradient-to-r'
            />
          </div>
        </div>
      </div>
      <div className='px-4 mx-auto max-w-4xl sm:px-6 lg:px-8 lg:max-w-7xl xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8'>
        <div className='relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24'>
          <h2 className='text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl'>
            Our services
          </h2>
          <p className='text-slate-200 mt-5 text-xl'>
            Praesent eu mi volutpat, cursus ex vel, dignissim ex. Pellentesque
            arcu neque, tincidunt vel pellentesque a, tristique semper mi.
          </p>
        </div>
      </div>
    </div>
  );
}
