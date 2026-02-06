import React from 'react';

const MainSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12 md:px-12 md:py-16">
            <h2 className="text-3xl md:text-3xl font-bold text-center text-gray-900 mb-8">
                Meeting the Energy Needs for Tomorrow
            </h2>

            <p className="text-gray-700 mb-8 max-w-5xl mx-auto leading-relaxed text-sm md:text-base">
                Green Raven supports the energy production industry as a central hub—primarily in commercial solar, while
                also supporting geothermal, generators, and other power solutions. We help customers execute projects by
                providing:
            </p>

            <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-5xl mx-auto">
                <ul className="space-y-4 text-gray-800 font-medium text-sm md:text-base list-disc pl-5">
                    <li>
                        <span className="font-bold">Manufacturer-direct equipment distribution</span> <span className="font-normal text-gray-600">(nationwide, any volume)</span>
                    </li>
                    <li>
                        <span className="font-bold">Installer + project matchmaking</span> <span className="font-normal text-gray-600">(sales orgs ↔ installers)</span>
                    </li>
                    <li>
                        <span className="font-bold">Financing tools</span> <span className="font-normal text-gray-600">for commercial projects</span>
                    </li>
                    <li>
                        <span className="font-bold">Permit-ready engineering</span> <span className="font-normal text-gray-600">and design support</span>
                    </li>
                </ul>

                <div>
                    <button className="bg-[#f0c419] hover:bg-[#d9b015] text-white font-semibold py-3 px-8 rounded-md shadow-md transition-colors duration-200">
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MainSection;
