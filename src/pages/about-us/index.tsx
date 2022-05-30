import * as React from 'react';

import AboutUs from '@/components/about/AboutUs';
import Seo from '@/components/Seo';

export default function AboutPage() {
  return (
    <>
      <Seo title='About Us | International Total Service & Logistics' />

      <AboutUs />
    </>
  );
}
