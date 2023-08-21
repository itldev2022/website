export default function List({
  newsletters,
}: {
  newsletters: { id: string; imagePath: string; pdfPath: string }[];
}) {
  return (
    <div className='bg-gray-50 pb-20 pt-16 px-4 relative sm:px-6 lg:pb-28 lg:pt-24 lg:px-8'>
      <div className='max-w-7xl mx-auto relative'>
        <div className='text-center'>
          <h2 className='font-extrabold text-3xl text-gray-900 tracking-tight sm:text-4xl'>
            Our Newsletter
          </h2>
          <p className='max-w-2xl mt-3 mx-auto text-gray-500 text-xl sm:mt-4'>
            Get the latest information about Internasional Total Service &
            Logistics
          </p>
        </div>
        <div className='gap-5 grid max-w-lg mt-12 mx-auto lg:grid-cols-4 lg:max-w-none'>
          {newsletters.map((newsletter) => (
            <div
              key={newsletter.id}
              className='flex flex-col overflow-hidden shadow-lg'
            >
              <a href={newsletter.pdfPath} target='_blank' rel='noreferrer'>
                <div className='flex-shrink-0'>
                  <img
                    className='h-full object-cover w-full'
                    src={newsletter.imagePath}
                    alt={newsletter.id}
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
