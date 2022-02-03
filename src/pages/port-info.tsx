import { LocationMarkerIcon } from '@heroicons/react/solid';
import { InferGetStaticPropsType } from 'next';
import * as React from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

import { getPortInfo, Items } from '@/lib/portInfo';

import AllPortModal from '@/components/port-info/AllPortModal';
import PortInfoModal from '@/components/port-info/PortModal';
import Seo from '@/components/Seo';

const Map = ReactMapboxGl({
  accessToken: process.env.NEXT_PUBLIC_MAPBOX_KEY,
});

export default function PortInfo({
  allPortInfo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [modal, setModal] = React.useState<
    | {
        isOpen: false;
      }
    | { isOpen: true; data: Items }
  >({ isOpen: false });

  const [allPortModal, setAllPortModal] = React.useState<boolean>(false);

  return (
    <>
      <Seo title='Port Info | International Total Service & Logistics' />
      <div className='absolute z-10 p-4'>
        <button
          onClick={() => setAllPortModal(true)}
          className='text-primary p-4 font-bold bg-white'
        >
          View All Port
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
          {allPortInfo.map((item, index) => {
            return (
              <Marker
                key={index}
                coordinates={[
                  parseFloat(item.longitude),
                  parseFloat(item.latitude),
                ]}
              >
                <LocationMarkerIcon
                  className='text-primary w-6 h-6 cursor-pointer'
                  aria-hidden='true'
                  onClick={() => setModal({ isOpen: true, data: item })}
                />
              </Marker>
            );
          })}
        </>
      </Map>
      <PortInfoModal
        isOpen={modal.isOpen}
        onClose={() => setModal({ isOpen: false })}
        data={modal.isOpen ? modal.data : undefined}
      />
      <AllPortModal
        isOpen={allPortModal}
        onClose={() => setAllPortModal(false)}
        onPortClick={setModal}
        data={allPortInfo}
      />
    </>
  );
}
export async function getStaticProps() {
  const { allPortInfo } = await getPortInfo();

  return {
    props: {
      allPortInfo,
    },
  };
}
