export const menuItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Services',
    url: '/services',
    submenu: [
      {
        title: 'Researches',
        url: 'researches',
        submenu:[
          {
            title: 'Imoveis',
            url: 'researches/imoveis',
          },
          {
            title: 'Estacionamentos',
            url: 'researches/estabelecimentos',
          }
        ]
      },
      {
        title: 'Consulting',
        url: 'consulting',
        submenu: [
          {
            title: 'Financial',
            url: 'financial',
          },
          {
            title: 'Expansion',
            url: 'expansion',
          },
        ],
      },
      {
        title: 'SEO',
        url: 'seo',
      },
    ],
  },
];
