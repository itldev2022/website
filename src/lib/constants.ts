export const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'About Us',
    href: '/about-us',
    subMenu: [
      { name: 'Overview', href: '/about-us' },
      { name: 'Our Mission & Vision', href: '/about-us/mission-and-vision' },
      {
        name: 'Organizational Structure',
        href: '/about-us/organizational-structure',
      },
    ],
  },
  { name: 'Services', href: '/services' },
  {
    name: 'Port Info',
    subMenu: [
      { name: 'General Cargo', href: '/port-cargo' },
      { name: 'Coal', href: '/port-coal' },
    ],
  },
  { name: 'Newsletter', href: '/newsletter' },
  // { name: 'Customers', href: '/customers' },

  { name: 'Contact us', href: '/contact-us' },
];

export const phoneNumber = '+62 215 011 2120';
