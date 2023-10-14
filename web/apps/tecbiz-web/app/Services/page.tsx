import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ServicesPage: React.FC = () => {
  return (
    <div>
      <Header />
      <div>
        <h1>Our Services</h1>
        <ul>
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
