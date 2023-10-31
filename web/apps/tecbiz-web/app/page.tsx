"use client"
import React from 'react';


import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import VissionMission from '../components/VissionMission';
import Founders from '../components/Founders';
import Team from '../components/Team';

const RootLayout: React.FC = () => {
  return (
    <div className="bg-black">
      <div className="" >
        <HeroSection />
        <FeaturesSection />
        <VissionMission />
        <Founders />
        <Team />
      </div>
      
    </div>
  );
};

export default RootLayout;
