import { Truck, Users, CreditCard, FileCheck } from "lucide-react";

export default function ServicesFeatureSection() {
  const features = [
    {
      icon: Truck,
      title: "Manufacturer-direct equipment distribution",
      desc: "Nationwide fulfillment with no minimum volume requirements. Get factory pricing, faster delivery, and consistent quality across all projects.",
    },
    {
      icon: Users,
      title: "Installer + project matchmaking",
      desc: "We connect qualified sales organizations with vetted installers to ensure smooth execution, accountability, and faster project closeouts.",
    },
    {
      icon: CreditCard,
      title: "Financing tools for commercial projects",
      desc: "Flexible financing options designed for commercial-scale deployments, helping reduce upfront capital strain and accelerate approvals.",
    },
    {
      icon: FileCheck,
      title: "Permit-ready engineering & design support",
      desc: "Code-compliant, permit-ready drawings and engineering assistance to streamline approvals and eliminate costly rework.",
    },
  ];

  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight mb-6">
            Why <span className="underline decoration-[#cc0033] decoration-2 underline-offset-6">
              GreenRaven
            </span>{" "}
            Energy?
          </h2>

          <p className="text-slate-600 text-lg mb-8 max-w-md">
            We deliver a better experience every day for every customer.
          </p>

          <button className="bg-[#cc0033] text-white px-8 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-[#a30028] transition">
            About us
          </button>
        </div>

        {/* RIGHT FEATURES */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-14">

          {features.map((item, idx) => (
            <div key={idx} className="shadow-lg p-3">
              {/* Icon */}
              <item.icon className="h-8 w-8 text-[#cc0033] mb-4" />

              {/* Title */}
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed mb-4">
                {item.desc}
              </p>

              {/* Divider */}
              <div className="h-[2px] w-16 bg-slate-200" />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
