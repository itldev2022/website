const metrics = [
  {
    id: 1,
    stat: '1.3K+',
    emphasis: 'Vessels',
    rest: 'assisted as load port and discharge port from all over Indonesia',
  },
  {
    id: 2,
    stat: '92M+ metric tons',
    emphasis: 'Coal cargoes',
    rest: 'we have handled',
  },
  {
    id: 3,
    stat: '8+',
    emphasis: 'Countries',
    rest: 'coal destination all over the world',
  },
  {
    id: 4,
    stat: '36',
    emphasis: 'Service area',
    rest: 'all over Indonesia',
  },
];

export default function Perfomance() {
  return (
    <div className='bg-gray-900 relative'>
      <div className='absolute bottom-0 h-80 w-full xl:h-full xl:inset-0'>
        <div className='h-full w-full xl:grid xl:grid-cols-2'>
          <div className='h-full xl:col-start-2 xl:relative'>
            <img
              className='h-full object-cover opacity-25 w-full xl:absolute xl:inset-0'
              src='/images/perfomance.jpg'
              alt='people looking at container'
            />
            <div
              aria-hidden='true'
              className='absolute bg-gradient-to-b from-gray-900 h-32 inset-x-0 top-0 xl:bg-gradient-to-r xl:h-full xl:inset-y-0 xl:left-0 xl:w-32'
            />
          </div>
        </div>
      </div>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:gap-x-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense'>
        <div className='pb-64 pt-12 relative sm:pb-64 sm:pt-24 xl:col-start-1 xl:pb-24'>
          <h2 className='font-semibold text-saphire-300 text-sm tracking-wide uppercase'>
            Perfomance
          </h2>
          <p className='font-extrabold mt-3 text-3xl text-white'>
            Our Perfomance in 2021
          </p>
          <p className='mt-5 text-gray-300 text-lg'>
            In 2021 thanks to our strategic cooperation with shippers, buyers
            and ship owners we have achieved many succesfull assisted as load
            port and discharge port from all over Indonesia.
          </p>
          <div className='gap-x-6 gap-y-12 grid grid-cols-1 mt-12 sm:grid-cols-2'>
            {metrics.map((item) => (
              <p key={item.id}>
                <span className='block font-bold text-2xl text-white'>
                  {item.stat}
                </span>
                <span className='block mt-1 text-base text-gray-300'>
                  <span className='font-medium text-white'>
                    {item.emphasis}
                  </span>{' '}
                  {item.rest}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
