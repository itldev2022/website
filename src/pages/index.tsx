import * as React from 'react';

import AboutUs from '@/components/home/AboutUs';
import Hero from '@/components/home/Hero';
import Perfomance from '@/components/home/Perfomance';
import Services from '@/components/home/Services';
import Strength from '@/components/home/Strength';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <>
      <Seo />
      <Hero />
      <AboutUs />
      <Services />
      <Perfomance />
      <Strength />
    </>
  );
}
