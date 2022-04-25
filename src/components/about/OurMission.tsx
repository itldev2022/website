export default function OurMission() {
  return (
    <div className='bg-saphire-800 relative'>
      <div className='absolute inset-0'>
        <img
          className='h-full object-cover w-full'
          src='/images/mission.jpg'
          alt=''
        />
        <div
          className='absolute bg-gradient-to-bl from-biruMuda inset-0 mix-blend-multiply to-biruTua'
          aria-hidden='true'
        />
      </div>
      <div className='max-w-7xl mx-auto px-4 py-24 relative sm:px-6 sm:py-32 lg:px-8'>
        <h1 className='font-extrabold text-4xl text-white tracking-tight sm:text-5xl lg:text-6xl'>
          Our mission
        </h1>
        <p className='max-w-3xl mt-6 text-indigo-100 text-xl'>
          {/* Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque
          lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut
          consectetur. Sit justo viverra non adipisicing elit. */}
        </p>
      </div>
    </div>
  );
}
