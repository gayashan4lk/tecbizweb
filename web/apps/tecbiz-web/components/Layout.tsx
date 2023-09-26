// components/Layout.tsx
import React from 'react';
import Navbar from '../components/Navbar';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
