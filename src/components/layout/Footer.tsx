import { navigation } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className='bg-gradient-to-bl from-biruMuda to-biruTua'>
      <div className='max-w-7xl mx-auto overflow-hidden px-4 py-12 sm:px-6 lg:px-8'>
        <nav
          className='-mx-5 -my-2 flex flex-wrap justify-center'
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

        <p className='mt-8 text-base text-center text-slate-300'>
          &copy; {new Date().getFullYear()} PT. Internasional Total Service &
          Logistics. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
