export default function Leadership() {
  const people = {
    leadership: [
      {
        name: 'Mr. Choi, Tae Rip',
        role: 'CEO',
        email: 'trchoi@itlid.com',
      },
      {
        name: 'Mr. Seong, Dong Beom',
        role: 'Director',
        email: 'dbseong@itlid.com',
      },
      {
        name: 'Mr. Goki Parulian',
        role: 'Director Coal & General Cargo',
        email: 'goki@itlid.com',
      },
    ],
  };

  return (
    <div className='bg-slate-50'>
      <div className='max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-24'>
        <div className='gap-12 grid grid-cols-1 lg:gap-8 lg:grid-cols-3'>
          <div className='space-y-5 sm:space-y-4'>
            <h2 className='font-extrabold text-3xl tracking-tight sm:text-4xl'>
              Meet Our Leadership
            </h2>
          </div>
          <div className='lg:col-span-2'>
            <ul
              role='list'
              className='space-y-12 sm:gap-12 sm:grid sm:grid-cols-2 sm:space-y-0 lg:gap-x-8'
            >
              {people.leadership.map((person) => (
                <li key={person.name}>
                  <div className='flex items-center space-x-4 lg:space-x-6'>
                    <div className='font-medium leading-6 space-y-1 text-lg'>
                      <h3 className='font-bold'>{person.name}</h3>
                      <p className='text-primary'>{person.role}</p>
                      <a
                        href={`mailto:${person.email}`}
                        className='text-saphire-500 text-sm'
                      >
                        {person.email}
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
