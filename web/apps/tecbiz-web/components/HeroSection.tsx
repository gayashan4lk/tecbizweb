import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 *2 ,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.5],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    
    <section className="bg-black bg-cover bg-center min-h-screen flex flex-col items-center  justify-center text-center text-white relative ">
      <div className="absolute hidden md:flex ">

<canvas
        ref={canvasRef} className=""
        style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}

      />
      </div>
      <div className="container   relative items-center justify-centersm:justify-center md:justify-center lg:justify-center xl:justify-center ">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-4 ml-2 text-blue-100 hover:text-blue-400 transition duration-600">
          Empowering Individuals & Achieve Excellence Through Professional Opportunities And AI Innovation.
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4 ml-2 text-blue-300 hover:text-blue-400 transition duration-600">
          Your Solution for Tech Needs
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl px-4 sm:px-6 md:px-8 lg:px-10 mb-4 ml-2 text-white hover:text-blue-900 transition duration-600">
          We provide innovative tech solutions for your business.
        </p>
        <a
          href="#"
          className="group cursor-pointer bg-blue-500 hover:bg-blue-800 text-black font-bold hover:text-gray-400 px-2 py-1 rounded-full text-sm sm:text-base hover:shadow-md transition duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
