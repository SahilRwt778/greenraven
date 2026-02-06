import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#0b4d2e] text-white pt-10 pb-6 text-xs md:text-sm">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Top Section: Links & Info */}
                <div className="flex flex-col md:flex-row justify-between mb-10 gap-8">

                    {/* Left Column: Links */}
                    <div className="flex gap-16">
                        <div className="flex flex-col gap-2">
                            <span className="font-bold text-gray-300 mb-1">SITE LINKS</span>
                            <a href="#" className="hover:text-gray-300">Contact Us</a>
                            <a href="#" className="hover:text-gray-300">About Us</a>
                            <a href="#" className="hover:text-gray-300">Industry News</a>
                        </div>
                        <div className="flex flex-col gap-2 pt-6"> {/* Padding top to align with design visual stagger if needed, or just standard list */}
                            {/* The design shows two columns of links roughly. */}
                            <a href="#" className="hover:text-gray-300">Promotions</a>
                            <a href="#" className="hover:text-gray-300">Resellers</a>
                            <a href="#" className="hover:text-gray-300">FAQ's</a>
                        </div>
                        <div className="flex flex-col gap-2 pt-6">
                            <a href="#" className="hover:text-gray-300">Gallery</a>
                            <a href="#" className="hover:text-gray-300">Our Products</a>
                        </div>
                    </div>

                    {/* Right Column: Company Info */}
                    <div className="text-right">
                        <p className="font-bold">GreenRaven, Inc</p>
                        <p>123 Main Street, Suite 100</p>
                        <p>Madison, WI 12345</p>
                        <p>888-555-1212</p>
                    </div>
                </div>

                {/* Bottom Section: Logos */}
                <div className="border-t border-green-700 pt-8 flex flex-wrap justify-between items-center gap-6 opacity-80 filter grayscale hover:grayscale-0 transition-all duration-300">
                    {/* Placeholder Logos */}
                    <span className="text-xl font-bold tracking-tighter">IRONRIDGE</span>
                    <span className="text-xl font-bold text-orange-400 flex items-center gap-1">
                        <span className="text-2xl">☀️</span> HELIENE
                    </span>
                    <span className="text-2xl font-black italic">EG4</span>
                    <span className="text-xl font-bold text-orange-500">GENERAC</span>
                    <span className="text-xl font-bold text-blue-400">Trinasolar</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
