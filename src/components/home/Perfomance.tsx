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
    <div className='bg-biruTua relative'>
      <div className='absolute bottom-0 w-full h-80 xl:inset-0 xl:h-full'>
        <div className='w-full h-full xl:grid xl:grid-cols-2'>
          <div className='h-full xl:relative xl:col-start-2'>
            <img
              className='object-cover w-full h-full opacity-25 xl:absolute xl:inset-0'
              src='/images/perfomance.jpg'
              alt='people looking at container'
            />
            <div
              aria-hidden='true'
              className='from-biruTua absolute inset-x-0 top-0 h-32 bg-gradient-to-b xl:inset-y-0 xl:left-0 xl:w-32 xl:h-full xl:bg-gradient-to-r'
            />
          </div>
        </div>
      </div>
      <div className='px-4 mx-auto max-w-4xl sm:px-6 lg:px-8 lg:max-w-7xl xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8'>
        <div className='relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24'>
          <h2 className='text-saphire-300 text-sm font-semibold tracking-wide uppercase'>
            Perfomance
          </h2>
          <p className='mt-3 text-3xl font-extrabold text-white'>
            Our Perfomance in 2021
          </p>
          <p className='mt-5 text-lg text-gray-300'>
            In 2021 thanks to our strategic cooperation with shippers, buyers
            and ship owners we have achieved many succesfull assisted as load
            port and discharge port from all over Indonesia.
          </p>
          <div className='grid grid-cols-1 gap-x-6 gap-y-12 mt-12 sm:grid-cols-2'>
            {metrics.map((item) => (
              <p key={item.id}>
                <span className='block text-2xl font-bold text-white'>
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
