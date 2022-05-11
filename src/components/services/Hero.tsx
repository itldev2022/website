export default function Hero() {
  return (
    <div className='bg-biruTua relative'>
      <div className='absolute bottom-0 h-80 w-full xl:h-full xl:inset-0'>
        <div className='h-full w-full xl:grid xl:grid-cols-2'>
          <div className='h-full xl:col-start-2 xl:relative'>
            <img
              className='h-full object-cover opacity-25 w-full xl:absolute xl:inset-0'
              src='/images/services.jpg'
              alt='cargo ship'
            />
            <div
              aria-hidden='true'
              className='absolute bg-gradient-to-b from-biruTua h-32 inset-x-0 top-0 xl:bg-gradient-to-r xl:h-full xl:inset-y-0 xl:left-0 xl:w-32'
            />
          </div>
        </div>
      </div>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:gap-x-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense'>
        <div className='pb-64 pt-12 relative sm:pb-64 sm:pt-24 xl:col-start-1 xl:pb-24'>
          <h2 className='font-extrabold text-4xl text-white sm:text-5xl sm:tracking-tight lg:text-6xl'>
            Our services
          </h2>
          <p className='mt-5 text-slate-200 text-xl'>
            {/* Praesent eu mi volutpat, cursus ex vel, dignissim ex. Pellentesque
            arcu neque, tincidunt vel pellentesque a, tristique semper mi. */}
          </p>
        </div>
      </div>
    </div>
  );
}
