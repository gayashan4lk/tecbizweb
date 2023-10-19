import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import VissionMission from '../components/VissionMission';
import Founders from '../components/Founders';
import Team from '../components/Team';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="content-container md:text-center"> 
        <HeroSection />
        <FeaturesSection />
        <VissionMission />
        <Founders />
        <Team />
      </div>
    </div>
  );
};

export default HomePage;
