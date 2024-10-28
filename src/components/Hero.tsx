import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-600">July 10, 2023</p>
              <p className="text-sm text-gray-600">We're Open Clinic<br />8 AM - 5 PM</p>
            </div>
            
            <h1 className="text-6xl font-medium leading-tight mb-8">
              <span className="block">Exceptional</span>
              <span className="block text-emerald-500">Dental</span>
              <span className="block">Care</span>
            </h1>
            
            <p className="text-gray-600 mb-8 max-w-lg">
              With our team of experienced dentists and state-of-the-art technology, we deliver comprehensive treatments in a comfortable and welcoming environment.
            </p>
            
            <button className="bg-black text-white px-8 py-4 rounded-full inline-flex items-center space-x-2 hover:bg-gray-800 transition-colors">
              <span>Book Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-2 gap-8 mt-16">
              <div>
                <div className="text-4xl font-medium mb-2">13</div>
                <p className="text-sm text-gray-600">Achieve Your Dream Smile with Our Range of Services</p>
              </div>
              <div>
                <div className="text-4xl font-medium mb-2">852<span className="text-emerald-500">+</span></div>
                <p className="text-sm text-gray-600">Transforming Healthcare with Telemedicine Connect, Consult, And Care Remotely</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Dental Care"
              className="w-full h-[600px] object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}