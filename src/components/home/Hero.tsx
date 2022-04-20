export default function Hero() {
  return (
    <div className='-mt-[100px]'>
      <div className='absolute bg-gray-100 bottom-0 h-1/2 inset-x-0' />
      <div className='mx-auto'>
        <div className='relative shadow-xl sm:overflow-hidden'>
          <div className='absolute inset-0'>
            <img
              className='h-full object-cover w-full'
              src='/images/crane.jpeg'
              alt='Cargo ship'
            />
            <div className='absolute bg-biruTua/60 inset-0 mix-blend-multiply' />
          </div>
          <div className='px-4 py-52 relative'>
            <h1 className='font-bold text-4xl text-center tracking-tight sm:text-5xl lg:text-5xl'>
              <span className='block text-white'>
                Your Reliable Integrated Logistic Partner
              </span>
            </h1>
            <p className='max-w-lg mt-6 mx-auto text-center text-slate-50 text-xl sm:max-w-3xl'>
              {/* Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua. */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
