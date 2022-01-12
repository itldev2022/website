import * as React from 'react';

import Hero from '@/components/home/Hero';
import AboutUs from '@/components/home/AboutUs';
import Services from '@/components/home/Services';
import Perfomance from '@/components/home/Perfomance';
import Strength from '@/components/home/Strength';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Perfomance />
      <Strength />
    </>
  );
}
