import React, { useState } from 'react';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('Home');

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About Us', href: '#' },
        { name: 'Products and Services', href: '#' },
        { name: 'Gallery', href: '#' },
        { name: 'Partners', href: '#' },
        { name: 'Contact Us', href: '#' },
    ];

    return (
        <header className="w-full font-sans shadow-md sticky top-0 z-50">
            {/* Top Green Bar */}
            <div className="bg-[#1a5f3a] text-white py-4 px-6 md:px-12 flex items-center">
                <div className="flex items-center gap-3">
                    {/* Placeholder for Leaf Icon - using a simple SVG */}
                    <div className="bg-lime-500 rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white transform -rotate-45">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>
                    </div>
                    {/* Logo Text */}
                    <h1 className="text-3xl font-bold tracking-wide">
                        Green<span className="font-normal">Raven</span>
                    </h1>
                </div>
            </div>

            {/* Bottom White Bar - Navigation */}
            <div className="bg-white py-4 px-6 md:px-12 border-b border-gray-200">
                <nav>
                    <ul className="flex flex-wrap gap-8 text-sm font-medium text-gray-800">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={() => setActiveLink(link.name)}
                                    className={`pb-1 transition-all duration-200 hover:text-green-800 ${activeLink === link.name
                                            ? 'border-b-2 border-black font-semibold'
                                            : 'border-b-2 border-transparent'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
