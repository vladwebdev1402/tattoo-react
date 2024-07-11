const root = '/tattoo-react';

export const ROUTER_PATHS = {
  main: root,
  promocodes: root + '/promo',
  contacts: root + '/contacts',
  catalog: root + '/catalog',
  catalogByCategory: root + '/catalog/:type',
  item: root + '/catalog/:type/:id',
  brand: root + '/brands',
  profile: root + '/profile',
  basket: root + '/catalog/basket',
  services: root + '/catalog/basket/services',
  notFound: root + '/*',
};
