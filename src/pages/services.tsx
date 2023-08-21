import * as React from 'react';

import Seo from '@/components/Seo';
import Hero from '@/components/services/Hero';
import Service from '@/components/services/Service';

const agencyServices = {
  title: 'Agency Services',
  description:
    'Duis nulla sapien, rutrum sit amet libero sit amet, lacinia bibendum est. Nam ornare sit amet lacus in interdum. Curabitur convallis non sem quis commodo. In imperdiet suscipit sapien a venenatis. Nam suscipit feugiat ligula. Cras id turpis mollis, pellentesque lorem et, fringilla nulla.',
  services: [
    'Agent for cargo operations',
    'Protective agent for ship owners/charterers',
    'Husbandry services',
    'Bunkering arrangements',
    'Spares and provisions supply arrangements',
    'Stevedoring arrangements',
  ],
  className: 'bg-white',
};

const stevedoring = {
  title: 'Stevedoring & Trucking',
  description:
    'Duis nulla sapien, rutrum sit amet libero sit amet, lacinia bibendum est. Nam ornare sit amet lacus in interdum. Curabitur convallis non sem quis commodo. In imperdiet suscipit sapien a venenatis. Nam suscipit feugiat ligula. Cras id turpis mollis',
  services: [
    'Operation integrated slab yard',
    'Transportation and trucking services on site',
    'Stevedoring for loading and discharging',
  ],
  className: 'bg-saphire-50',
};

const containersForwarding = {
  title: 'Containers & Forwarding Services',
  description:
    'Duis nulla sapien, rutrum sit amet libero sit amet, lacinia bibendum est. Nam ornare sit amet lacus in interdum. Curabitur convallis non sem quis commodo. In imperdiet suscipit sapien a venenatis. Nam suscipit feugiat ligula. Pellentesque lorem et, fringilla nulla.',
  services: [
    'Containers transportation',
    'Custom clearance (EMKL)',
    'Warehouse',
    'Inland Trucking',
    'Feedering',
  ],
  className: 'bg-white',
};

const broking = {
  title: 'Broking Services',
  description:
    'Duis nulla sapien, rutrum sit amet libero sit amet, lacinia bibendum est. Nam ornare sit amet lacus in interdum. In imperdiet suscipit sapien a venenatis. Nam suscipit feugiat ligula. Pellentesque lorem et, fringilla nulla.',
  services: [
    'Floating crane and barge arrangements',
    'Grab arrangements',
    'Cargo Broking',
    'Vessel Broking',
  ],
  className: 'bg-saphire-50',
};

export default function ServicesPage() {
  return (
    <>
      <Seo title='Services | Internasional Total Service & Logistics' />
      <Hero />
      <Service {...agencyServices} />
      <Service {...stevedoring} />
      <Service {...containersForwarding} />
      <Service {...broking} />
    </>
  );
}
