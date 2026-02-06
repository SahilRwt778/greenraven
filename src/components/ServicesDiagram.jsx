import React from 'react';

const ServicesDiagram = () => {
    return (
        <section className="py-12 bg-white overflow-hidden">
            {/* Mind Map Section */}
            <div className="max-w-6xl mx-auto px-4 relative h-[600px] mb-16 hidden md:block">
                {/* Center Hub */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="bg-white border-2 border-gray-300 rounded-lg px-6 py-3 shadow-sm">
                        <span className="font-bold text-lg text-green-800">Green Raven</span>
                    </div>
                </div>

                {/* SVG for connecting lines */}
                <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                    {/* Lines connecting to center - approximate coordinates based on standard radial layout */}
                    {/* Top */}
                    <line x1="50%" y1="50%" x2="50%" y2="20%" stroke="#cbd5e1" strokeWidth="2" />
                    {/* Top Right */}
                    <line x1="50%" y1="50%" x2="75%" y2="30%" stroke="#cbd5e1" strokeWidth="2" />
                    {/* Right */}
                    <line x1="50%" y1="50%" x2="80%" y2="50%" stroke="#cbd5e1" strokeWidth="2" />
                    {/* Bottom Right */}
                    <line x1="50%" y1="50%" x2="70%" y2="75%" stroke="#cbd5e1" strokeWidth="2" />
                    {/* Bottom */}
                    <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="#cbd5e1" strokeWidth="2" />
                    {/* Bottom Left */}
                    <line x1="50%" y1="50%" x2="30%" y2="75%" stroke="#cbd5e1" strokeWidth="2" />
                    {/* Left */}
                    <line x1="50%" y1="50%" x2="20%" y2="50%" stroke="#cbd5e1" strokeWidth="2" />
                    {/* Top Left */}
                    <line x1="50%" y1="50%" x2="30%" y2="30%" stroke="#cbd5e1" strokeWidth="2" />
                </svg>

                {/* Nodes */}
                {/* Top */}
                <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2 text-center w-48">
                    <p className="text-gray-800 font-medium">Sales Organizations</p>
                </div>

                {/* Top Right */}
                <div className="absolute top-[25%] left-[72%] text-center w-56">
                    <p className="text-gray-800 font-medium">Finance Tools</p>
                    <p className="text-gray-600 text-sm">(Commercial and Residential)</p>
                </div>

                {/* Right */}
                <div className="absolute top-[45%] left-[78%] text-left w-48">
                    <p className="text-gray-800 font-medium">Permit</p>
                    <p className="text-gray-800 font-medium">Ready</p>
                    <p className="text-gray-800 font-medium">Commercial</p>
                    <p className="text-gray-800 font-medium">Engineering</p>
                </div>

                {/* Bottom Right */}
                <div className="absolute top-[75%] left-[65%] text-center w-48">
                    <p className="text-gray-800 font-medium">Installers</p>
                </div>

                {/* Bottom - This seems to be missing in the pic but 'Installers' is close. Let's adjust based on pic. 
                    Actually, looking at the pic:
                    Top: Sales Orgs
                    Top Right: Finance Tools
                    Right: Permit Ready...
                    Bottom Right: Installers
                    Bottom Left: Prevailing Wage...
                    Left: Hardware Direct...
                    Top Left: Geothermal Solutions
                */}

                {/* Bottom Left */}
                <div className="absolute top-[70%] left-[25%] text-center w-48">
                    <p className="text-gray-800 font-medium">Prevailing Wage</p>
                    <p className="text-gray-800 font-medium">Consulting</p>
                </div>

                {/* Left */}
                <div className="absolute top-[45%] left-[10%] text-right w-56">
                    <p className="text-gray-800 font-medium">Hardware Direct from</p>
                    <p className="text-gray-800 font-medium">the Manufacturer</p>
                </div>

                {/* Top Left */}
                <div className="absolute top-[25%] left-[20%] text-center w-48">
                    <p className="text-gray-800 font-medium">Geothermal Solutions</p>
                </div>
            </div>

            {/* Mobile View Placeholder for Mind Map */}
            <div className="md:hidden px-4 mb-12">
                <h3 className="text-xl font-bold text-center mb-6 text-green-800">Our Ecosystem</h3>
                <ul className="space-y-4 text-center">
                    <li className="p-3 bg-gray-50 rounded-lg shadow-sm">Sales Organizations</li>
                    <li className="p-3 bg-gray-50 rounded-lg shadow-sm">Finance Tools</li>
                    <li className="p-3 bg-gray-50 rounded-lg shadow-sm">Permit Ready Engineering</li>
                    <li className="p-3 bg-gray-50 rounded-lg shadow-sm">Installers</li>
                    <li className="p-3 bg-gray-50 rounded-lg shadow-sm">Prevailing Wage Consulting</li>
                    <li className="p-3 bg-gray-50 rounded-lg shadow-sm">Hardware Direct</li>
                    <li className="p-3 bg-gray-50 rounded-lg shadow-sm">Geothermal Solutions</li>
                </ul>
            </div>


            {/* Scrolling Banner */}
            <div className="relative border-t border-b border-gray-200 bg-white py-4 overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                    <span className="mx-6 text-sm font-semibold text-gray-700">"Direct Manufacturer Relationships"</span>
                    <span className="mx-6 text-sm font-semibold text-gray-700">"Nationwide U.S. Shipping"</span>
                    <span className="mx-6 text-sm font-semibold text-gray-700">"Commercial & Residential Installations Supported"</span>
                    <span className="mx-6 text-sm font-semibold text-gray-700">"Installer-Only Distribution"</span>
                    <span className="mx-6 text-sm font-semibold text-gray-700">"Geothermal Solutions"</span>
                    <span className="mx-6 text-sm font-semibold text-gray-700">"Engineering"</span>
                    <span className="mx-6 text-sm font-semibold text-gray-700">"Commercial Financing"</span>
                    <span className="mx-6 text-sm font-semibold text-gray-700">"Solar-specific CRM"</span>
                    {/* Duplicate for seamless loop */}
                    <span className="mx-6 text-sm font-semibold text-gray-700">"Direct Manufacturer Relationships"</span>
                    <span className="mx-6 text-sm font-semibold text-gray-700">"Nationwide U.S. Shipping"</span>
                    <span className="mx-6 text-sm font-semibold text-gray-700">"Commercial & Residential Installations Supported"</span>
                    <span className="mx-6 text-sm font-semibold text-gray-700">"Installer-Only Distribution"</span>
                    <span className="mx-6 text-sm font-semibold text-gray-700">"Geothermal Solutions"</span>
                    <span className="mx-6 text-sm font-semibold text-gray-700">"Engineering"</span>
                    <span className="mx-6 text-sm font-semibold text-gray-700">"Commercial Financing"</span>
                    <span className="mx-6 text-sm font-semibold text-gray-700">"Solar-specific CRM"</span>
                </div>
            </div>
            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default ServicesDiagram;
