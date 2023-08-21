import { LocationMarkerIcon } from '@heroicons/react/solid';
import { InferGetStaticPropsType } from 'next';
import * as React from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

import { fetchAPI } from '@/lib/datocms';
import { Items } from '@/lib/portInfo';
import { PORT_INFO_COAL_QUERY } from '@/lib/queries';

import AllPortModal from '@/components/port-info/AllPortModal';
import PortInfoCoal from '@/components/port-info/PortCoalModal';
import Seo from '@/components/Seo';

const Map = ReactMapboxGl({
  accessToken: process.env.NEXT_PUBLIC_MAPBOX_KEY,
});

export default function PortInfo({
  data: props,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [modal, setModal] = React.useState<
    | {
        isOpen: false;
      }
    | { isOpen: true; data: Items }
  >({ isOpen: false });

  const [allPortModal, setAllPortModal] = React.useState<boolean>(false);
  const data = props.allPortCoals;
  return (
    <>
      <Seo title='Port Info | Internasional Total Service & Logistics' />
      <div className='absolute p-4 z-10'>
        <button
          onClick={() => setAllPortModal(true)}
          className='bg-white font-bold p-4 text-primary'
        >
          View All
        </button>
      </div>
      <Map
        containerStyle={{
          height: '100vh',
          width: '100%',
        }}
        style='mapbox://styles/mapbox/streets-v11'
        center={[115.4670567, -2.5059066]}
        zoom={[4.5]}
      >
        <>
          {data.map((item: any) => {
            return (
              <Marker
                key={item.id}
                coordinates={[
                  parseFloat(item.coordinate.longitude),
                  parseFloat(item.coordinate.latitude),
                ]}
              >
                <LocationMarkerIcon
                  className='cursor-pointer h-6 text-primary w-6'
                  aria-hidden='true'
                  onClick={() =>
                    item.pdf?.url && window.open(item.pdf.url, '_blank')
                  }
                />
              </Marker>
            );
          })}
        </>
      </Map>
      <PortInfoCoal
        isOpen={modal.isOpen}
        onClose={() => setModal({ isOpen: false })}
        data={modal.isOpen ? modal.data : undefined}
      />
      <AllPortModal
        isOpen={allPortModal}
        onClose={() => setAllPortModal(false)}
        data={data}
      />
    </>
  );
}

export async function getStaticProps() {
  const data = await fetchAPI(PORT_INFO_COAL_QUERY);
  return {
    props: { data },
  };
}
