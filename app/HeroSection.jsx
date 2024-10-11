import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
    
  return (
    <section className="flex flex-col h-full md:flex-row justify-between items-center mb-16">
        <div className="order-2 h-full md:order-1 w-full md:w-1/2 px-8 md:pl-24 md:pr-8 text-center md:text-left">
          <div className="pb-64 hidden md:md:inline-block">
            <Image src="/Screenshot_669 1.png" alt="Food Truck" width={735} height={804} className="top-10 w-20 h-16  hidden md:inline-block" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-[#0E2368] leading-tight mb-6 pt-10 md:pt-0">
            Discover the <span className="text-[#E23744]">Best</span> Food and Drinks
          </h1>
          <p className="text-base text-[#444957] mb-8">
            Naturally made Healthcare Products for the better care & support of your body.
          </p>
          <button className="bg-[#E23744] text-white px-8 py-3 rounded-full">Explore Now!</button>
        </div>
        <div className="order-1 md:order-2 w-full md:w-1/2 relative">
          <Image src="/Rectangle 400.png" alt="Pizza" width={107} height={83} className="w-full md:rounded-bl-[200px]" />
          <button className="absolute top-4 right-4 border border-white text-white px-3 py-1 rounded-full text-sm">
            Get In Touch
          </button>
        </div>                    

      </section>
  )
}

export default HeroSection;
