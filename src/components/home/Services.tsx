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
    <div className='overflow-hidden bg-gray-100'>
      <div className='relative px-4 py-12 mx-auto max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
        <svg
          className='absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:right-full lg:left-auto lg:translate-x-2/3 lg:translate-y-1/4'
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

        <div className='relative lg:grid lg:grid-cols-3 lg:gap-x-8'>
          <div className='lg:col-span-1'>
            <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              Our Services
            </h2>
          </div>
          <dl className='mt-10 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0'>
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className='from-biruMuda to-biruTua flex justify-center items-center w-12 h-12 text-white bg-gradient-to-bl'>
                    <feature.icon className='w-6 h-6' aria-hidden='true' />
                  </div>
                  <p className='mt-5 text-lg font-medium leading-6 text-gray-900'>
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
