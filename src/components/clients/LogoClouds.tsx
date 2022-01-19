export default function LogoClouds({
  title,
  images,
}: {
  title: string;
  images: { id: string; fullPath: string }[];
}) {
  return (
    <div className='bg-white'>
      <div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-16'>
        <p className='text-primary text-base font-semibold tracking-wider text-center uppercase'>
          {title}
        </p>
        <div className='grid grid-cols-2 gap-0.5 mt-6 md:grid-cols-6 lg:mt-8'>
          {images.map((item) => (
            <div
              key={item.id}
              className='flex col-span-1 justify-center px-8 py-8'
            >
              <img className='max-h-12' src={item.fullPath} alt={item.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
