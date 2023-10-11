import React from 'react';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl md:text-3xl font-bold underline text-center mb-8">Our Vision</h2>
            <h1 className="text-xl md:text-xl font-semibold text-center mb-8">
              "At TecBiz Solutions, We Passionately Aspire To Empower Individuals, Guiding Them On A Transformative Journey Towards Excellence Through The Boundless Realms Of AI Innovation, Unlocking Their Full Potential In The World Of Opportunities."
            </h1>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl md:text-3xl font-bold underline text-center mb-8">Our Mission</h2>
            <h1 className="text-xl md:text-xl font-semibold text-center mb-8">
              "At TecBiz Solutions, Our Mission Is To Catalyze Personal Development By Harnessing The Power Of Technology, Enabling Individuals To Flourish, Excel, And Seize New Horizons In Their Professional Journeys."
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
