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
    name: 'Mr. Faried',
    role: 'Operation',
    location: 'Samarinda Branch',
    team: 'Agency Coal Team',
    phone: '+6282165065188',
    email: 'faried@itlid.com',
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
    name: 'Ms. Julie Lee',
    role: 'Operation & Marketing',
    location: 'Jakarta Office',
    team: 'Agency Coal Team',
    phone: '+628118241517',
    email: 'julie.lee@itlid.com',
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
    <div className='bg-slate-50'>
      <div className='px-4 py-12 mx-auto max-w-7xl text-center sm:px-6 lg:px-8 lg:py-24'>
        <div className='space-y-8 sm:space-y-12'>
          <div className='space-y-5 sm:mx-auto sm:space-y-4 sm:max-w-xl lg:max-w-5xl'>
            <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
              Our Amazing Team
            </h2>
          </div>
          <ul
            role='list'
            className='grid grid-cols-2 gap-x-4 gap-y-8 mx-auto sm:grid-cols-4 md:gap-x-6 lg:gap-x-8 lg:gap-y-12 lg:max-w-5xl xl:grid-cols-4'
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className='space-y-4'>
                  <div className='space-y-2'>
                    <div className='font-medium'>
                      <p className='text-primary text-xs font-normal'>
                        {person.team}
                      </p>
                      <p className='text-saphire-400 text-xs font-normal'>
                        {person.location}
                      </p>
                      <h3 className='font-bold'>{person.name}</h3>
                      <p className='text-primary'>{person.role}</p>
                      <a
                        href={`mailto:${person.email}`}
                        className='text-saphire-500 text-xs'
                      >
                        {person.email}
                      </a>
                      <p className='text-saphire-400 text-xs'>
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
  );
}
