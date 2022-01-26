import { navigation } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className='bg-primary'>
      <div className='overflow-hidden px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <nav
          className='flex flex-wrap justify-center -mx-5 -my-2'
          aria-label='Footer'
        >
          {navigation.map((item) => (
            <div key={item.name} className='px-5 py-2'>
              <a
                href={item.href}
                className='text-base text-white hover:text-slate-300'
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>

        <p className='text-slate-300 mt-8 text-base text-center'>
          &copy; 2022 PT. Internasional Total Service & Logistics. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
