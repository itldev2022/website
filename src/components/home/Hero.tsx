export default function Hero() {
  return (
    <div className='-mt-[100px]'>
      <div className='absolute bottom-0 h-screen inset-x-0' />
      <div className='mx-auto'>
        <div className='relative shadow-xl sm:overflow-hidden'>
          <div className='absolute inset-0'>
            <img
              className='animate-zoomInOut h-screen object-cover w-full zoom-in-out'
              src='/images/crane.jpeg'
              alt='Cargo ship'
            />
            <div className='absolute bg-biruTua/60 inset-0 mix-blend-multiply' />
          </div>
          <div className='flex h-screen items-center justify-center relative'>
            <h1 className='font-bold mx-auto text-4xl text-center tracking-tight sm:text-5xl lg:text-5xl'>
              <span className='animateText block text-white'>
                Your Reliable Integrated Logistic Partner
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
