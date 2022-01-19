import { MinusIcon } from '@heroicons/react/solid';

const fleetFeatures = [
  { title: 'Call Sign', value: 'YHYY' },
  { title: 'Flag', value: 'Indonesia' },
  { title: 'Classification', value: 'BKI' },
  { title: 'Built Year/Where', value: '2003/Samarinda' },
  { title: 'LOA', value: '51m' },
  { title: 'Beam', value: '9m' },
  { title: 'Load Draft', value: '2.0625m' },
  { title: 'DWT/GRT', value: 'Tons/316 Tons [Net. 95 Tons]' },
  { title: 'Speed', value: '10 Knots' },
  { title: 'Main Engine', value: 'Nissan, RE 10 2x370hp, 2.200RPM' },
];

export default function Fleet() {
  return (
    <div className='overflow-hidden py-16 bg-gray-50 lg:py-24'>
      <div className='relative px-4 mx-auto max-w-xl sm:px-6 lg:px-8 lg:max-w-7xl'>
        <div className='relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center'>
          <div className='relative -mx-4 mb-10 lg:mb-0' aria-hidden='true'>
            <img
              className='relative mx-auto'
              height={225}
              src='/images/lct.jpg'
              alt='lct'
            />
          </div>
          <div className='relative'>
            <h2 className='text-primary text-base font-semibold tracking-wider uppercase'>
              ITL Fleet
            </h2>
            <h3 className='text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl'>
              LCT Mutiara Mahakam 02
            </h3>

            <dl className='mt-10 space-y-10 sm:grid sm:grid-cols-2 sm:grid-rows-5 sm:grid-flow-col sm:gap-y-4 sm:gap-x-6 sm:space-y-0 lg:gap-x-8'>
              {fleetFeatures.map((item, index) => (
                <div key={index} className='relative'>
                  <dt>
                    <MinusIcon
                      className='text-primary absolute w-3 h-6'
                      aria-hidden='true'
                    />
                    <p className='text-saphire-400 ml-6 text-lg font-normal leading-6'>
                      {item.title}
                    </p>
                    <p className='ml-6 text-lg font-medium leading-6 text-gray-900'>
                      {item.value}
                    </p>
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
