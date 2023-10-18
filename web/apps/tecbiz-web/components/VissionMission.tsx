import React from 'react';
import Image from 'next/image';

import placeholderImage from '../images/G1.png';
import placeholderImage2 from '../images/G3.jpg';

const VissionMission: React.FC = () => {
  return (
    <section className="py-12 bg-black"> 
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-black rounded-lg shadow-md text-blue-100 hover:bg-blue-200 hover:text-blue-900 transition duration-700 transform hover:scale-90">
            <div className="flex justify-center mb-4">
              <Image src={placeholderImage} alt="Dummy Person" className="w-32 h-32 rounded-full object-cover" />
            </div>
            <h2 className="text-3xl md:text-3xl font-bold underline text-center mb-8">Our Vision</h2>
            <h1 className="text-xl md:text-xl font-semibold text-center mb-8">
              At TecBiz Solutions, We Passionately Aspire To Empower Individuals, Guiding Them On A Transformative Journey Towards Excellence Through The Boundless Realms Of AI Innovation, Unlocking Their Full Potential In The World Of Opportunities.
            </h1>
          </div>

          <div className="p-6 bg-black rounded-lg shadow-md text-blue-100 hover:bg-blue-200 hover:text-blue-900 transition duration-700 transform hover:scale-90">
            <div className="flex justify-center mb-4">
              <Image src={placeholderImage2} alt="Dummy Person" className="w-32 h-32 rounded-full object-cover" />
            </div>
            <h2 className="text-3xl md:text-3xl font-bold underline text-center mb-8">Our Mission</h2>
            <h1 className="text-xl md:text-xl font-semibold text-center mb-8">
              At TecBiz Solutions, Our Mission Is To Catalyze Personal Development By Harnessing The Power Of Technology, Enabling Individuals To Flourish, Excel, And Seize New Horizons In Their Professional Journeys.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VissionMission;
