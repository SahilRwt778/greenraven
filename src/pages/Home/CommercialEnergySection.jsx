import React from "react";

const CommercialEnergySection = () => {
  return (
    <section className="w-full">
      {/* Image Section */}
      <div className="relative w-full h-[520px]">
        <img
          src="https://images.unsplash.com/photo-1698752821927-776ac6cb0e91?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Commercial Energy"
          className="w-full h-full object-cover"
        />

        {/* Category Label */}
        <div className="absolute bottom-[-28px] left-8 bg-white shadow-lg flex items-center gap-3 px-6 py-4 border-b-4 border-emerald-600">
          <span className="text-emerald-600 text-xl">🏢</span>
          <span className="uppercase tracking-widest text-sm font-semibold text-gray-700">
            Commercial
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left */}
        <h2 className="text-4xl md:text-5xl font-light leading-tight">
          Scalable energy systems <br />
          <span className="font-medium">for your business</span>
        </h2>

        {/* Right */}
        <p className="text-gray-600 text-lg leading-relaxed">
          Energy is a strategic asset for your business. From rooftop solar and
          battery storage to grid-optimized commercial systems,{" "}
          <strong>GreenRaven</strong> delivers high-performance energy solutions
          built to scale with your operations. Reduce operating costs, stabilize
          energy spend, and meet sustainability goals with confidence — all
          supported by expert engineering, compliant installation, and
          long-term performance monitoring.
        </p>
      </div>
    </section>
  );
};

export default CommercialEnergySection;
