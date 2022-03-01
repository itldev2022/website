import { CashIcon, ClockIcon, TranslateIcon } from '@heroicons/react/outline';

const features = [
  {
    name: '24/7 Customer Support',
    icon: ClockIcon,
    description:
      'We understand that time is valuable especially when it comes to assuring that your cargo is loaded and dispatched effectively. Through our dedicated and professional staff we ensure your vessel make your entrance and exit swiftly where our team pays particular attention to meticulous and speedy communications in handling overall disbursement control.',
  },
  {
    name: 'Time & Cost Efficiency',
    icon: CashIcon,
    description:
      'Through the years ITL has established and maintained a solid relationship with our regional partners in order to provide a prompt turnaround for vessels in any urgent situation. Our experience in operating conditions and especially strong ties with all government and industry bodies safe guards that your best interests are always prioritized and maintained.',
  },
  {
    name: 'In Depth Local Knowledge',
    icon: TranslateIcon,
    description:
      'With a combination of almost a decade of experience in the local market and the diverse experiences of our ITL team from directly handling cargo during operations, in the mining site or even on board vessels, this background has helped effectively build a strong foundation between our company with local shippers and local port authority',
  },
];

export default function Strength() {
  return (
    <div className='relative py-16 bg-white sm:py-24 lg:py-20'>
      <div className='px-4 mx-auto max-w-md text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl'>
        <h2 className='text-primary text-base font-semibold tracking-wider uppercase'>
          Strength
        </h2>
        <p className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          Our Remarkable Strength
        </p>
        <p className='mx-auto mt-5 max-w-prose text-xl text-gray-500'>
          Why people choose us
        </p>
        <div className='mt-12'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {features.map((feature) => (
              <div key={feature.name} className='pt-6'>
                <div className='bg-saphire-100 flow-root px-6 pb-8'>
                  <div className='-mt-6'>
                    <div>
                      <span className='from-biruMuda to-biruTua inline-flex justify-center items-center p-3 bg-gradient-to-bl shadow-lg'>
                        <feature.icon
                          className='w-6 h-6 text-white'
                          aria-hidden='true'
                        />
                      </span>
                    </div>
                    <h3 className='mt-8 text-lg font-medium tracking-tight text-gray-900'>
                      {feature.name}
                    </h3>
                    <p className='mt-5 text-base text-gray-500'>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
