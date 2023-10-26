"use client"
import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import VissionMission from '../components/VissionMission';
import Founders from '../components/Founders';
import Team from '../components/Team';
import Welcome from "./Te.json";
import Lottie from 'lottie-react';



const HomePage: React.FC = () => {
  return (
    <div className="bg-black dark:bg-gray-800">
      <div className="content-container md:text-center">
      <div className="background-animation">
      <Lottie
        animationData={Welcome}
        loop={true}
        autoplay={true}
      />
    
        <HeroSection />
        <FeaturesSection />
        <VissionMission />
        <Founders />
        <Team />
      </div>
      </div>
    </div>
  
  );
};

export default HomePage;
