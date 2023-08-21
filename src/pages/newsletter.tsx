import { InferGetStaticPropsType } from 'next';
import * as React from 'react';

import { getNewsletter } from '@/lib/newsletter';

import List from '@/components/newsletter/List';
import Seo from '@/components/Seo';

export default function Newsletter({
  newsletters,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Seo title='Newsletter | Internasional Total Service & Logistics' />
      <List newsletters={newsletters} />
    </>
  );
}

export async function getStaticProps() {
  const { newsletters } = getNewsletter();
  return {
    props: {
      newsletters,
    },
  };
}
