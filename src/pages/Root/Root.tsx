import { Outlet } from 'react-router-dom';

import { Footer, HeadAndNav } from '@/components';

const Root = () => {
  return (
    <>
      <HeadAndNav />
      <Outlet />
      <Footer />
    </>
  );
};

export { Root };
