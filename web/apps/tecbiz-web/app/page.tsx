"use client"
import React from 'react';
import Welcome from "./Te.json";
import Lottie from 'lottie-react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import VissionMission from '../components/VissionMission';
import Founders from '../components/Founders';
import Team from '../components/Team';

const RootLayout: React.FC = () => {
  const backgroundStyle = {
    backgroundImage: `url('${Welcome}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="bg-black">
      <div className="content-container md:text-center scrollbar-thin" style={{ marginTop: '80px' }}>
        <div className="w-full h-96 sm:hidden md:hidden lg:h-96 xl:h-96">
          <Lottie
            animationData={Welcome}
            loop={true}
            autoplay={true}
            style={{ maxWidth: '100%', height: '100%' }}
          />
        </div>
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
