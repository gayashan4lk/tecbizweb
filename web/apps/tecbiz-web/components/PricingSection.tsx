
import React from 'react';

const PricingSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-8">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
