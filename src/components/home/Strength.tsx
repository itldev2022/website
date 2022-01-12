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
    <div className='bg-white py-16 relative sm:py-24 lg:py-20'>
      <div className='max-w-md mx-auto px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='font-semibold text-base text-primary tracking-wider uppercase'>
          Strength
        </h2>
        <p className='font-extrabold mt-2 text-3xl text-gray-900 tracking-tight sm:text-4xl'>
          Our Remarkable Strength
        </p>
        <p className='max-w-prose mt-5 mx-auto text-gray-500 text-xl'>
          Why people choose us
        </p>
        <div className='mt-12'>
          <div className='gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            {features.map((feature) => (
              <div key={feature.name} className='pt-6'>
                <div className='bg-saphire-100 flow-root pb-8 px-6'>
                  <div className='-mt-6'>
                    <div>
                      <span className='bg-primary inline-flex items-center justify-center p-3 shadow-lg'>
                        <feature.icon
                          className='h-6 text-white w-6'
                          aria-hidden='true'
                        />
                      </span>
                    </div>
                    <h3 className='font-medium mt-8 text-gray-900 text-lg tracking-tight'>
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
