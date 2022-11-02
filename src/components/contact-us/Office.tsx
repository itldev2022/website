const branches = [
  {
    title: 'ITL Cilegon - Indonesia',
    building: 'Sunrise Building 1st Floor',
    address: 'Jl. Gn. Ceremai No. 3, Komplek Damkar 42434',
    phone: '+62 254 773 4599 / +62 254 773 4600',
    pic: 'Mr. Goki Parulian  (+62 815 1159 7467)',
    email: 'goki@itlid.com / agency2@itlid.com / itl-cilegon@itlid.com',
  },
  {
    title: 'ITL Thailand Co Ltd - Thailand',
    address:
      '3366/30, 4th Floor Rama 4 Klongton Klongtoey Bangkok 10110 - Thailand',
    phone: '+66 22 402 0923',
    fax: '+66 22 402 0923',
    pic: 'Mr. Koh Dae Woo (+66 81 560 8090)',
    email: 'dwkoh@itlthai.com / MSNL: dwkoh@hotmail.com',
  },
  {
    title: 'PT. Krakatau Agro Logistic - Indonesia',
    building: 'Krakatau Posco Side Office',
    address:
      'Jl. Afrika No. 2 Kawasan Krakatau Posco Kel. Samangraya, Citangkil, Cilegon - Banten 42443',
    phone: '+62 254 383 339',
    pic: 'Capt. Waryanto (+62 818 0445 9405)',
    email: 'waryanto@krakatau-agrologistics.com',
  },
  {
    title: 'ITL Samarinda - Indonesia',
    address:
      'PM Noor Perum Bumi Sempaja Blok CF No. 08 Samarinda 75118 - Kalimantan Timur',
    pic: 'faried@itlid.com (+62 821 650 651 88)',
    email: 'agency@itlid.com',
  },
  {
    title: 'ITL Kotabaru - Indonesia',
    address:
      'Jl. Brigjend H. Hasan Basri, Perumnas II Blok E RT. 13 RW. 02 Desa Semayap Kotabaru Kotabaru 72117 - Kalimantan Selatan',
    pic: 'kotabaru@itlid.com / aditya@itlid.com (+62 821 5830 4799)',
    email: 'agency@itlid.com',
  },
  {
    title: 'ITL Global Trans - Indonesia',
    address:
      'Jl. Gading Kirana Utara Blok F-10 No. 6 Kelapa Gading Barat, Jakarta Utara - Indonesia',
    phone: '+62 21 4584 4580',
    fax: '+62 21 4587 7272',
    mobile: '+62 811 850 544',
    email: 'sea_ex@itlgt.com / sea_im@itlgt.com',
  },
  {
    title: 'ITL Sangkulirang - Indonesia',
    address:
      'Jl. Panglima Batur RT 11 No. 14 Desa Benua Baru Ulu Sangkulirang - Kutai Timur - Kalimantan Timur',
    pic: 'akhmaditlkutim@gmail.com (+62 823 5100 7788)',
    email: 'agency@itlid.com',
  },
  {
    title: 'ITL Malaysia Sdn Bhd - Malaysia',
    address:
      'No. 20A, 1st Floor Jl. Bantai Laut Taman Intan 41300 Selangor Darul Ehsan - Malaysia',
    phone: '+60 3 3344 2110',
    fax: '+60 3 3344 2109',
    pic: ' Mr. H.S. Yoon (+60 1 2287 5130)',
    email: 'hsyoon@itlm.com.my',
  },
  {
    title: 'ITL Morowali - Indonesia',
    address:
      'Jl.Trans Sulawesi (Samping Kiri Travel Kurnia) Desa Sampeantaba, Kec. WitaPanda KAB. Morowali, Indonesia',
    email: 'agency2@itlid.com',
  },
  {
    title: 'ITL Bontang - Indonesia',
    address:
      'Jl. Kerikil gang kerikil 4 RT13 No.51 BTN PKT Bontang RT 27 Kel. Bontang Kuala, Kec Btg utara Samarinda - Kalimantan Timur',
    pic: 'erwin.sulistiyono@itlid.com (+62 853 4681 8355)',
    email: 'agency2@itlid.com',
  },
  {
    title: 'ITL Dubai Co Ltd - Dubai',
    building: 'Room 402, Al Khor Mashreq Bank Building ',
    address: '(Next to HSBC Bank Bur Dubai Main Branch) Bur Dubai 121881 U.E.A',
    pic: 'Mr. Adrian (Ho Young) Kim (+971 56 216 9510)',
    email: 'dubaiitlid@gmail.com / adrian@gslogistics.ae',
  },
  {
    title: 'ITL Shanghai - China',
    address:
      'Room 104, No. 99-2 Ziteng Road Minghang District Shanghai - China',
    phone: '+86 21 3431 4156',
    fax: '+86 21 3431 6513',
    pic: 'Mr. Lee Hyun Ho (+86 133 8629 2892)',
    email: 'agency@itlid.com / MSNL: urgentsel@hotmail.com',
  },
  {
    title: 'ITL Banjarmasin - Indonesia',
    address:
      'Jl. Martapura Lama KM. 8 Komplek Bimaland No. 21 RT 12B Kel. Sungai Lulut Kec. Sungai Tabuk Kab. Banjar - Kalimantan Selatan',
    pic: 'aditya@itlid.com (+62 8215 8304 799)',
    email: 'agency@itlid.com',
  },
  {
    title: 'ITL Global Partner - Netherlands',
    address: 'Debussystraat 2, 3161 WD Rhoon, The Netherlands',
    pic: 'Mr. Michel De Kok (+31 6 52189479)',
    email: 'michel@itlid.com',
  },
];

export default function Office() {
  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24'>
        <div className='divide-gray-200 divide-y-2'>
          <div className='lg:gap-8 lg:grid lg:grid-cols-3'>
            <h2 className='font-extrabold text-2xl text-gray-900 sm:text-3xl'>
              Head Office
            </h2>
            <div className='gap-12 grid grid-cols-1 mt-8 sm:gap-x-8 sm:gap-y-12 sm:grid-cols-1 lg:col-span-2 lg:mt-0'>
              <div>
                <h3 className='font-black font-lato leading-6 text-gray-900 text-lg'>
                  ITL Jakarta - Indonesia
                </h3>
                <dl className='font-lato font-light mt-2 text-base text-gray-500'>
                  <div>
                    <dd>
                      Prosperity Tower, 11th Floor Unit A&J District 8 SCBD Lot
                      28,
                    </dd>
                    <dd>
                      Jl. Jend. Sudirman Kav. 52-53, RT.005/RW.003, Senayan,
                      Kebayoran Baru, South Jakarta 12190
                    </dd>
                  </div>
                  <div className='mt-1'>
                    <dd className='flex flex-row'>
                      <div className='w-24'>
                        <span>Phone</span>
                      </div>
                      <span>:</span>
                      <span className='ml-2'>+62 215 011 2120</span>
                    </dd>
                    <dd className='flex flex-row'>
                      <div className='w-24'>
                        <span>Email</span>
                      </div>
                      <span>:</span>
                      <span className='ml-2'>
                        agency@itlid.com / agency2@itlid.com
                      </span>
                    </dd>
                    <dd className='flex flex-row mt-2'>
                      <div className='w-32'>
                        <span> Emergency Call </span>
                      </div>
                    </dd>
                    <dd className='flex flex-row mt-1'>
                      <div className='w-24'>
                        <span>Coal</span>
                      </div>
                      <span>:</span>
                      <span className='ml-2'>Galdrin (+62 812-2176-1079)</span>
                    </dd>
                    <dd className='flex flex-row'>
                      <div className='w-24'>
                        <span> Non coal </span>
                      </div>
                      <span>:</span>
                      <span className='ml-2'>
                        Herry Liao (+62 811-1923-512)
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className='gap-12 grid grid-cols-1 mt-16 pt-16 sm:gap-x-8 sm:gap-y-12 lg:gap-8 lg:grid lg:grid-cols-2'>
            <h2 className='font-extrabold text-2xl text-gray-900 sm:text-3xl'>
              Branches
            </h2>
            {branches.map((item, index) => (
              <div key={index}>
                <h3 className='font-black font-lato leading-6 text-gray-900 text-lg'>
                  {item.title}
                </h3>
                <div className='font-lato font-light mt-2 text-base text-gray-500'>
                  {item.building && <p>{item.building}</p>}
                  {item.address && <p className='mt-1'>{item.address}</p>}
                </div>
                <div className='font-lato font-light mt-1 text-base text-gray-500'>
                  {item.phone && (
                    <dd className='flex flex-row'>
                      <div className='w-16'>
                        <span>Phone</span>
                      </div>
                      <span>:</span>
                      <span className='ml-2'>{item.phone}</span>
                    </dd>
                  )}
                  {item.fax && (
                    <dd className='flex flex-row'>
                      <div className='w-16'>
                        <span>Fax</span>
                      </div>
                      <span>:</span>
                      <span className='ml-2'>{item.fax}</span>
                    </dd>
                  )}
                  {item.mobile && (
                    <dd className='flex flex-row'>
                      <div className='w-16'>
                        <span>Mobile</span>
                      </div>
                      <span>:</span>
                      <span className='ml-2'>{item.mobile}</span>
                    </dd>
                  )}
                  {item.pic && (
                    <dd className='flex flex-row'>
                      <div className='w-16'>
                        <span>PIC</span>
                      </div>
                      <span>:</span>
                      <span className='ml-2'>{item.pic}</span>
                    </dd>
                  )}
                  {item.email && (
                    <dd className='flex flex-row'>
                      <div className='w-16'>
                        <span>Email</span>
                      </div>
                      <span>:</span>
                      <span className='ml-2'>{item.email}</span>
                    </dd>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
