import React from "react";

const ResidentialEnergySection = () => {
  return (
    <section className="w-full">
      {/* Image Section */}
      <div className="relative w-full h-[420px]">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80"
          alt="Residential Energy"
          className="w-full h-full object-cover"
        />

        {/* Category Label */}
        <div className="absolute bottom-[-28px] left-8 bg-white shadow-lg flex items-center gap-3 px-6 py-4 border-b-4 border-green-600">
          <span className="text-green-600 text-xl">🏡</span>
          <span className="uppercase tracking-widest text-sm font-semibold text-gray-700">
            Residential
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left */}
        <h2 className="text-4xl md:text-5xl font-light leading-tight">
          Clean energy solutions <br />
          <span className="font-medium">for your home</span>
        </h2>

        {/* Right */}
        <p className="text-gray-600 text-lg leading-relaxed">
          Your home deserves energy that’s reliable, sustainable, and future-ready.
          Whether you’re upgrading to solar, adding backup power, or building an
          energy-efficient home from the ground up, <strong>GreenRaven</strong> delivers
          smart residential energy systems designed to lower costs, reduce carbon
          footprint, and increase long-term value — all while turning heads in your
          neighborhood.
        </p>
      </div>
    </section>
  );
};

export default ResidentialEnergySection;
