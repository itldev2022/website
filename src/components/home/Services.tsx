/* This example requires Tailwind CSS v2.0+ */
import {
  CubeTransparentIcon,
  GlobeIcon,
  PaperAirplaneIcon,
  TruckIcon,
} from '@heroicons/react/outline';

const features = [
  {
    name: 'Agency Services',
    description:
      'Consequuntur omnis dicta cumque, inventore atque ab dolores aspernatur tempora ab doloremque.',
    icon: GlobeIcon,
  },
  {
    name: 'Stevedoring & Trucking',
    description:
      'Corporis quisquam nostrum nulla veniam recusandae temporibus aperiam officia incidunt at distinctio ratione.',
    icon: TruckIcon,
  },
  {
    name: 'Containers & Fowarding Services',
    description:
      'Omnis, illo delectus? Libero, possimus nulla nemo tenetur adipisci repellat dolore eligendi velit doloribus mollitia.',
    icon: PaperAirplaneIcon,
  },
  {
    name: 'Broking Services',
    description:
      'Veniam necessitatibus reiciendis fugit explicabo dolorem nihil et omnis assumenda odit? Quisquam unde accusantium.',
    icon: CubeTransparentIcon,
  },
];

export default function Services() {
  return (
    <div className='bg-gray-100 overflow-hidden'>
      <div className='max-w-3xl mx-auto px-4 py-12 relative sm:px-6 lg:max-w-7xl lg:px-8'>
        <svg
          className='-translate-x-1/2 -translate-y-3/4 absolute left-full top-0 transform lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4'
          width={404}
          height={784}
          fill='none'
          viewBox='0 0 404 784'
          aria-hidden='true'
        >
          <defs>
            <pattern
              id='8b1b5f72-e944-4457-af67-0c6d15a99f38'
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits='userSpaceOnUse'
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className='text-gray-200'
                fill='currentColor'
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill='url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)'
          />
        </svg>

        <div className='relative lg:gap-x-8 lg:grid lg:grid-cols-3'>
          <div className='lg:col-span-1'>
            <h2 className='font-extrabold text-3xl text-gray-900 tracking-tight sm:text-4xl'>
              Our Services
            </h2>
          </div>
          <dl className='mt-10 space-y-10 sm:gap-x-8 sm:gap-y-10 sm:grid sm:grid-cols-2 sm:space-y-0 lg:col-span-2 lg:mt-0'>
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className='bg-gradient-to-bl flex from-biruMuda h-12 items-center justify-center text-white to-biruTua w-12'>
                    <feature.icon className='h-6 w-6' aria-hidden='true' />
                  </div>
                  <p className='font-black font-lato leading-6 mt-5 text-gray-900 text-lg'>
                    {feature.name}
                  </p>
                </dt>
                <dd className='mt-2 text-base text-gray-500'>
                  {/* {feature.description} */}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
