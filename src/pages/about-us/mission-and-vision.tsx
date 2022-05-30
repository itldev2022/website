import * as React from 'react';

import Seo from '@/components/Seo';

export default function AboutPage() {
  return (
    <>
      <Seo title='Our Mission & Vision | International Total Service & Logistics' />
      <div className='bg-[#f8f8f8]'>
        <div className='bg-[#f8f8f8] container max-w-4xl mx-auto p-4 pb-12'>
          <img src='/vision.png' alt='' />
        </div>
      </div>
    </>
  );
}
