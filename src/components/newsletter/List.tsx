export default function List({
  newsletters,
}: {
  newsletters: { id: string; imagePath: string; pdfPath: string }[];
}) {
  return (
    <div className='relative px-4 pt-16 pb-20 bg-gray-50 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28'>
      <div className='relative mx-auto max-w-7xl'>
        <div className='text-center'>
          <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            Our Newsletter
          </h2>
          <p className='mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4'>
            Get the latest information about International Total Service &
            Logistics
          </p>
        </div>
        <div className='grid gap-5 mx-auto mt-12 max-w-lg lg:grid-cols-4 lg:max-w-none'>
          {newsletters.map((newsletter) => (
            <div
              key={newsletter.id}
              className='flex overflow-hidden flex-col shadow-lg'
            >
              <a href={newsletter.pdfPath} target='_blank' rel='noreferrer'>
                <div className='flex-shrink-0'>
                  <img
                    className='object-cover w-full h-full'
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
