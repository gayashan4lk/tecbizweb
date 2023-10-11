import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import VissionMission from '../components/VissionMission';
import Founders from '../components/Founders';
import Team from '../components/Team';

import Footer from '../components/Footer';


const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <VissionMission />
      <Founders />
      <Team/>
      <Footer />
    </div>
  
  );
};

export default HomePage;
