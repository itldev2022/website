/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/outline';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Service(props: {
  title: string;
  description: string;
  services: string[];
  className?: string;
}) {
  return (
    <div className={props.className}>
      <div className='px-4 py-16 mx-auto max-w-7xl sm:px-6 sm:py-24 lg:px-8'>
        <div className='grid xl:grid-cols-2 xl:gap-x-8'>
          <div>
            <p className='text-3xl font-extrabold text-gray-900'>
              {props.title}
            </p>
            <p className='mt-4 text-lg text-gray-500'>
              {/* {props.description} */}
            </p>
          </div>
          <div className='mt-4 sm:mt-8 md:grid md:grid-cols-1 md:gap-x-8 md:mt-10 xl:col-span-1 xl:mt-0'>
            <ul role='list' className='divide-y divide-gray-200'>
              {props.services.map((feature, featureIdx) => (
                <li
                  key={feature}
                  className={classNames(
                    featureIdx === 0 ? 'md:py-0 md:pb-4' : '',
                    'text flex flex-row justify-start py-4'
                  )}
                >
                  <CheckIcon
                    className='flex-shrink-0 w-6 h-6 text-green-500'
                    aria-hidden='true'
                  />
                  <span className='ml-3 text-base text-gray-500'>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
