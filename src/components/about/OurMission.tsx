export default function OurMission() {
  return (
    <div className='bg-saphire-800 relative'>
      <div className='absolute inset-0'>
        <img
          className='object-cover w-full h-full'
          src='/images/mission.jpg'
          alt=''
        />
        <div
          className='bg-saphire-500 absolute inset-0 mix-blend-multiply'
          aria-hidden='true'
        />
      </div>
      <div className='relative px-4 py-24 mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8'>
        <h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl'>
          Our mission
        </h1>
        <p className='mt-6 max-w-3xl text-xl text-indigo-100'>
          Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque
          lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut
          consectetur. Sit justo viverra non adipisicing elit distinctio.
        </p>
      </div>
    </div>
  );
}
