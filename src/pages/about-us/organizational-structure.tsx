import * as React from 'react';

import Seo from '@/components/Seo';

export default function AboutPage() {
  return (
    <>
      <Seo title='Organizational Structure | International Total Service & Logistics' />

      <div className='container max-w-4xl mb-20 mt-10 mx-auto px-5'>
        <h2 className='font-bold mb-10 text-2xl text-center'>
          Organizational Structure
        </h2>
        <img src='/management.jpeg' alt='' />
      </div>
    </>
  );
}
