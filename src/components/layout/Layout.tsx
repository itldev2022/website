import * as React from 'react';

import Footer from './Footer';
import Navigation from './Navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
