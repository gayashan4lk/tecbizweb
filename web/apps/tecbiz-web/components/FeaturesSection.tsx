
import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-4 border rounded-lg shadow-md">
          </div>

          <div className="p-4 border rounded-lg shadow-md">
          </div>

          <div className="p-4 border rounded-lg shadow-md">
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
