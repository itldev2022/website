import * as React from 'react';

import AboutUs from '@/components/about/AboutUs';
import Leadership from '@/components/about/Leadership';
import Team from '@/components/about/Team';
import Seo from '@/components/Seo';

export default function AboutPage() {
  return (
    <>
      <Seo title='About us | International Total Service & Logistics' />
      <AboutUs />
      <Leadership />
      <Team />
    </>
  );
}
