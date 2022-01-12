export default function Hero() {
  return (
    <main>
      <div>
        {/* Hero card */}
        <div className='relative'>
          <div className='absolute bg-ujuuuuuuuiiiiiiiiiiiiiiiiiiijjjjjjjjj7-100 bottom-0 h-1/2 inset-x-0' />
          <div className='mx-auto'>
            <div className='relative shadow-xl sm:overflow-hidden'>
              <div className='absolute inset-0'>
                <img
                  className='h-full object-cover w-full'
                  src='/images/hero.jpg'
                  alt='Cargo ship'
                />
                <div className='absolute bg-slate-500 inset-0 mix-blend-multiply' />
              </div>
              <div className='px-4 py-16 relative sm:px-6 sm:py-24 lg:px-8 lg:py-32'>
                <h1 className='font-extrabold text-4xl text-center tracking-tight sm:text-5xl lg:text-6xl'>
                  <span className='block text-white'>
                    Your Reliable Integrated Logistic Partner
                  </span>
                </h1>
                <p className='max-w-lg mt-6 mx-auto text-center text-slate-50 text-xl sm:max-w-3xl'>
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className='flex justify-center max-w-none mt-10 mx-auto'>
                  <div className='space-y-4 sm:gap-5 sm:grid-cols-1 sm:inline-grid sm:mx-auto sm:space-y-0'>
                    <a
                      href='/contact-us'
                      className='bg-white border border-transparent flex font-medium items-center justify-center px-4 py-3 shadow-sm text-base text-primary sm:px-8 hover:bg-saphire-50'
                    >
                      Contact us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
