export default function EcosystemHub() {
  const services = [
  {
    title: "Homes",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Businesses",
    image:
      "https://images.unsplash.com/photo-1581093588401-16c4c5a2f1f4?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Industrial",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Garage Doors",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Maintenance",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Energy Solutions",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80",
  },
];


 return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((item, index) => (
        <div
          key={index}
          className="group relative h-[320px] overflow-hidden rounded-2xl cursor-pointer"
        >
          {/* Image */}
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition duration-500" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <h3 className="text-white text-2xl font-bold transform translate-y-6 group-hover:translate-y-0 transition duration-500">
              {item.title}
            </h3>

            <button className="mt-3 w-fit opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition duration-500 bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
              Explore More →
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

