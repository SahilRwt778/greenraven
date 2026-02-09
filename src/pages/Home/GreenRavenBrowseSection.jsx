import React from "react";

const GreenRavenBrowseSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 py-20 px-6 overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-light text-white leading-tight max-w-3xl">
          The right energy solution, <br />
          <span className="font-medium">
            at the right cost, delivered on time
          </span>
        </h2>

        <p className="mt-6 text-lg text-slate-300 max-w-3xl">
          Clean energy is an investment in your future. Let’s build the right
          system for you.
        </p>

        <p className="mt-4 text-slate-400 max-w-3xl">
          <strong className="text-white">GreenRaven</strong> brings together
          engineering expertise, premium components, and trusted installers to
          deliver reliable solar and energy solutions for homes and businesses.
          From design to deployment, we ensure performance, transparency, and
          long-term value.
        </p>

        {/* Browse */}
        <h3 className="mt-14 text-2xl font-semibold text-white">
          Browse our clean energy solutions for:
        </h3>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Residential */}
          <div className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1589201529153-5297335c1684?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGdyZWVuJTIwZW5lcmd5fGVufDB8fDB8fHww"
              alt="Residential Solar"
              className="h-80 w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h4 className="text-2xl font-semibold text-white">
                Homes
              </h4>
              <p className="mt-1 text-slate-200 text-sm">
                Solar, battery backup, and energy-efficient upgrades designed
                for modern living.
              </p>

              <div className="mt-4 h-1 w-full bg-emerald-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </div>
          </div>

          {/* Commercial */}
          <div className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Commercial Solar"
              className="h-80 w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h4 className="text-2xl font-semibold text-white">
                Businesses
              </h4>
              <p className="mt-1 text-slate-200 text-sm">
                Scalable solar and energy systems to reduce operating costs and
                meet sustainability goals.
              </p>

              <div className="mt-4 h-1 w-full bg-emerald-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenRavenBrowseSection;
