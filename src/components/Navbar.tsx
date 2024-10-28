import React from 'react';
import { Stethoscope } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Stethoscope className="h-8 w-8 text-emerald-500" />
            <span className="ml-2 text-xl font-medium">Happy</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="px-3 py-2 rounded-md text-sm hover:text-emerald-500">Home</a>
            <a href="#" className="px-3 py-2 rounded-md text-sm hover:text-emerald-500">About</a>
            <a href="#" className="px-3 py-2 rounded-md text-sm hover:text-emerald-500">Our Services</a>
            <a href="#" className="px-3 py-2 rounded-md text-sm hover:text-emerald-500">Our Clinics</a>
            <a href="#" className="px-3 py-2 rounded-md text-sm hover:text-emerald-500">Location</a>
          </div>

          <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
            Book Online
          </button>
        </div>
      </div>
    </nav>
  );
}