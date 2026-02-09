import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const makeovers = [
  {
    before:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80",
    after:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1600&q=80",
    title: "From grid-dependent to energy independent",
    desc:
      "A suburban home upgraded with rooftop solar, battery storage, and smart energy monitoring — cutting annual energy costs by over 60%.",
  },
  {
    before:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80",
    after:
      "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?auto=format&fit=crop&w=1600&q=80",
    title: "Built for efficiency, designed for the future",
    desc:
      "GreenRaven delivered a fully integrated clean-energy system for a newly renovated home — solar, EV charging, and backup power included.",
  },
];

export default function RealEnergyMakeover() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((index - 1 + makeovers.length) % makeovers.length);
  const next = () => setIndex((index + 1) % makeovers.length);

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
              Real energy makeovers
            </h2>
            <p className="mt-3 text-slate-600 max-w-xl">
              Looking for inspiration? See how GreenRaven has transformed homes
              with smart, sustainable energy solutions.
            </p>
          </div>

          <button className="mt-6 md:mt-0 inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-md font-medium hover:bg-emerald-700 transition">
            View more
          </button>
        </div>

        {/* Slider */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Before */}
          <div className="relative">
            <img
              src={makeovers[index].before}
              alt="Before"
              className="w-full h-[380px] object-cover rounded-lg"
            />
            <span className="absolute top-4 left-4 bg-white/90 px-4 py-1 text-sm font-semibold text-slate-700 rounded">
              Before
            </span>
          </div>

          {/* After */}
          <div className="relative">
            <img
              src={makeovers[index].after}
              alt="After"
              className="w-full h-[380px] object-cover rounded-lg"
            />
            <span className="absolute top-4 left-4 bg-emerald-600 px-4 py-1 text-sm font-semibold text-white rounded">
              After
            </span>
          </div>

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:scale-105 transition hidden md:flex"
          >
            <ArrowLeft className="h-5 w-5 text-slate-700" />
          </button>

          <button
            onClick={next}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:scale-105 transition hidden md:flex"
          >
            <ArrowRight className="h-5 w-5 text-slate-700" />
          </button>
        </div>

        {/* Caption */}
        <div className="mt-8 max-w-3xl">
          <h3 className="text-xl font-semibold text-slate-900">
            {makeovers[index].title}
          </h3>
          <p className="mt-2 text-slate-600">
            {makeovers[index].desc}
          </p>
        </div>

        {/* Dots */}
        <div className="mt-6 flex gap-3">
          {makeovers.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition ${
                i === index ? "bg-emerald-600" : "bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
