import * as React from 'react';

import AboutUs from '@/components/about/AboutUs';
import Seo from '@/components/Seo';

export default function AboutPage() {
  return (
    <>
      <Seo title='About us | International Total Service & Logistics' />
      <div className=''>
        <img src='/vision.png' alt='' />
      </div>
      <AboutUs />
      <div className='container mx-auto p-4 pb-12'>
        <img src='/management.jpeg' alt='' />
      </div>
    </>
  );
}
