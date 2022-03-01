import Link from 'next/link';

export default function Hero() {
  return (
    <main>
      <div>
        {/* Hero card */}
        <div className='relative'>
          <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gray-100' />
          <div className='mx-auto'>
            <div className='relative shadow-xl sm:overflow-hidden'>
              <div className='absolute inset-0'>
                <img
                  className='object-cover w-full h-full'
                  src='/images/coal-ship.jpg'
                  alt='Cargo ship'
                />
                <div className='bg-biruTua/60 absolute inset-0 mix-blend-multiply' />
              </div>
              <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32'>
                <h1 className='text-4xl font-extrabold tracking-tight text-center sm:text-5xl lg:text-6xl'>
                  <span className='block text-white'>
                    Your Reliable Integrated Logistic Partner
                  </span>
                </h1>
                <p className='text-slate-50 mx-auto mt-6 max-w-lg text-xl text-center sm:max-w-3xl'>
                  {/* Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua. */}
                </p>
                <div className='flex justify-center mx-auto mt-10 max-w-none'>
                  <div className='space-y-4 sm:inline-grid sm:grid-cols-1 sm:gap-5 sm:mx-auto sm:space-y-0'>
                    <Link href='/contact-us'>
                      <a className='text-primary flex justify-center items-center px-4 py-3 text-base font-medium bg-white border border-transparent shadow-sm sm:px-8 hover:bg-saphire-50'>
                        Contact us
                      </a>
                    </Link>
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
