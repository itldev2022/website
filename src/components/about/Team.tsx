const people = [
  {
    name: 'Mr. Harry Pandawa',
    role: 'Marketing Head',
    location: 'Jakarta Office',
    team: 'Agency Coal Team',
    phone: '+628119856059',
    email: 'harry@itlid.com',
  },
  {
    name: 'Ms. Lindawati',
    role: 'Marketing Head',
    location: 'Jakarta Office',
    team: 'Agency Coal Team',
    phone: '+628119885517',
    email: 'linda@itlid.com',
  },
  {
    name: 'Mr. Edwin',
    role: 'Operation Head',
    location: 'Jakarta Office',
    team: 'Agency Coal Team',
    phone: '+628118243517',
    email: 'edwin@itlid.com',
  },
  {
    name: 'Mr. Ade KP',
    role: 'Operation',
    location: 'Jakarta Office',
    team: 'Agency Coal Team',
    phone: '+6282122523335',
    email: 'ade@itlid.com',
  },
  {
    name: 'Mr. Pabian Kim',
    role: 'Operation & Marketing',
    location: 'Jakarta Office',
    team: 'Agency Coal Team',
    phone: '+628119985517',
    email: 'pabian.kim@itlid.com',
  },
  {
    name: 'Ms. Julie Lee',
    role: 'Operation & Marketing',
    location: 'Jakarta Office',
    team: 'Agency Coal Team',
    phone: '+628118241517',
    email: 'julie.lee@itlid.com',
  },
  {
    name: 'Mr. Aditya',
    role: 'Operation',
    location: 'Taboneo Branch',
    team: 'Agency Coal Team',
    phone: '+6282158304799',
    email: 'aditya@itlid.com',
  },
  {
    name: 'Mr. Faried',
    role: 'Operation',
    location: 'Samarinda Branch',
    team: 'Agency Coal Team',
    phone: '+6282165065188',
    email: 'faried@itlid.com',
  },

  {
    name: 'Mr. Herry Liao',
    role: 'Marketing Leader',
    location: 'Jakarta Office',
    team: 'Agency General Cargo Team',
    phone: '+62811192312',
    email: 'herryliao@itlid.com',
  },
  {
    name: 'Ms. Sonnia Prayoga',
    role: 'Marketing',
    location: 'Jakarta Office',
    team: 'Agency General Cargo Team',
    phone: '+6281510400339',
    email: 'sonnia@itlid.com',
  },
  {
    name: 'Ms. Erni',
    role: 'Accounting Head',
    location: 'Jakarta Office',
    team: 'Accounting Team',
    phone: '+6285264245737',
    email: 'acc.fin@itlid.com',
  },
];

export default function Team() {
  return (
    <>
      <div className='bg-slate-50'>
        <div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
          <div className='space-y-8 sm:space-y-12'>
            <div className='grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8'>
              <div className='space-y-5 sm:space-y-4'>
                <h2 className='text-2xl font-bold tracking-tight sm:text-3xl'>
                  Agency Coal Team
                </h2>
              </div>
              <div className='lg:col-span-2'>
                <ul
                  role='list'
                  className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8'
                >
                  {people
                    .filter(
                      (item) => item.team.search('Agency Coal Team') !== -1
                    )
                    .map((person) => (
                      <li key={person.name}>
                        <div className='space-y-4'>
                          <div className='space-y-2'>
                            <div className='text-lg font-medium leading-6'>
                              <p className='text-saphire-400 font-normal'>
                                {person.location}
                              </p>
                              <h3 className='font-bold'>{person.name}</h3>
                              <p className='text-primary'>{person.role}</p>

                              <a
                                href={`mailto:${person.email}`}
                                className='text-saphire-500 text-sm'
                              >
                                {person.email}
                              </a>
                              <p className='text-saphire-400 text-sm'>
                                {person.phone.replace(/(.{3})/g, '$1 ')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white'>
        <div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
          <div className='space-y-8 sm:space-y-12'>
            <div className='grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8'>
              <div className='space-y-5 sm:space-y-4'>
                <h2 className='text-2xl font-bold tracking-tight sm:text-3xl'>
                  Agency General Cargo Team
                </h2>
              </div>
              <div className='lg:col-span-2'>
                <ul
                  role='list'
                  className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8'
                >
                  {people
                    .filter(
                      (item) =>
                        item.team.search('Agency General Cargo Team') !== -1
                    )
                    .map((person) => (
                      <li key={person.name}>
                        <div className='space-y-4'>
                          <div className='space-y-2'>
                            <div className='text-lg font-medium leading-6'>
                              <p className='text-saphire-400 font-normal'>
                                {person.location}
                              </p>
                              <h3 className='font-bold'>{person.name}</h3>
                              <p className='text-primary'>{person.role}</p>

                              <a
                                href={`mailto:${person.email}`}
                                className='text-saphire-500 text-sm'
                              >
                                {person.email}
                              </a>
                              <p className='text-saphire-400 text-sm'>
                                {person.phone.replace(/(.{3})/g, '$1 ')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-slate-50'>
        <div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
          <div className='space-y-8 sm:space-y-12'>
            <div className='grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8'>
              <div className='space-y-5 sm:space-y-4'>
                <h2 className='text-2xl font-bold tracking-tight sm:text-3xl'>
                  Accounting Team
                </h2>
              </div>
              <div className='lg:col-span-2'>
                <ul
                  role='list'
                  className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8'
                >
                  {people
                    .filter(
                      (item) => item.team.search('Accounting Team') !== -1
                    )
                    .map((person) => (
                      <li key={person.name}>
                        <div className='space-y-4'>
                          <div className='space-y-2'>
                            <div className='text-lg font-medium leading-6'>
                              <p className='text-saphire-400 font-normal'>
                                {person.location}
                              </p>
                              <h3 className='font-bold'>{person.name}</h3>
                              <p className='text-primary'>{person.role}</p>

                              <a
                                href={`mailto:${person.email}`}
                                className='text-saphire-500 text-sm'
                              >
                                {person.email}
                              </a>
                              <p className='text-saphire-400 text-sm'>
                                {person.phone.replace(/(.{3})/g, '$1 ')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
