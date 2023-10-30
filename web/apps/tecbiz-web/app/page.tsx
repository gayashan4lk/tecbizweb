"use client"
import React from 'react';
import Welcome from './Te.json';
import Lottie from 'lottie-react';

import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import VissionMission from '../components/VissionMission';
import Founders from '../components/Founders';
import Team from '../components/Team';

const RootLayout: React.FC = () => {
  return (
    <div className="bg-black">
      <div className="content-container md:text-center scrollbar-thin" >
        <HeroSection />
        <FeaturesSection />
        <VissionMission />
        <Founders />
        <Team />
      </div>
      <div className="w-full h-screen  fixed top-10 left-0 z-0">
        <Lottie
          animationData={Welcome}
          loop={true}
          autoplay={true}
          style={{ maxWidth: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
};

export default RootLayout;
