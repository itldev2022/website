import { InferGetStaticPropsType } from 'next';
import * as React from 'react';

import { getLogo } from '@/lib/logo';

import LogoClouds from '@/components/clients/LogoClouds';
import Seo from '@/components/Seo';

export default function Customers({
  allLogo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Seo title='Customers | Internasional Total Service & Logistics' />
      <LogoClouds title='Buyers' images={allLogo.buyers} />
      <LogoClouds title='Carriers' images={allLogo.carriers} />
      <LogoClouds title='Suppliers' images={allLogo.suppliers} />
    </>
  );
}

export async function getStaticProps() {
  const allLogo = getLogo();
  return {
    props: {
      allLogo,
    },
  };
}
