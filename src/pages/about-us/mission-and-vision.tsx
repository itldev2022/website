import * as React from 'react';

import Seo from '@/components/Seo';

export default function AboutPage() {
  return (
    <>
      <Seo title='Our Mission & Vision | Internasional Total Service & Logistics' />
      <div className='bg-[#f8f8f8]'>
        <div className='bg-[#f8f8f8] container max-w-4xl mx-auto pb-20 pt-10'>
          <h2 className='font-bold mb-5 text-2xl text-center'>
            Our Mission and Vision
          </h2>
          <img src='/vision.png' alt='' />
        </div>
      </div>
    </>
  );
}
