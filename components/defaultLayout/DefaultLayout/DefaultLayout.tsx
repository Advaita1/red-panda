import React, { FC, ReactNode } from 'react';
import { Nav } from '@components/defaultLayout';

interface DefaultLayoutProps {
  children: ReactNode
} 

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <>{children}</>
      <Nav/>
    </>
  );
};

export default DefaultLayout;