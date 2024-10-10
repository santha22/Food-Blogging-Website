import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="max-h-[804px] relative flex justify-between items-center mb-16">
        <div className="w-1/2 pl-24 pr-8">
          <Image src="/Screenshot_669 1.png" alt="Food Truck" width={107} height={83} className="mb-8 absolute top-[33px] left-[100px]" />
          <div className="w-[345px] h-[207px] top-[227px] left-[100px]">
            <h1 className="text-5xl font-bold text-[#0E2368] leading-tight mb-6">
              Discover the <span className="text-[#E23744]">Best</span> Food and Drinks
            </h1>
          </div>
          <div className="w-[345px] h-[55px] top-[460px] left-[100px]">
            <p className="text-base text-[#444957] mb-8">
              Naturally made Healthcare Products for the better care & support of your body.
            </p>
          </div>
          <button className="bg-[#E23744] text-white px-8 py-3 rounded-full">Explore Now!</button>
        </div>
        <div className="w-1/2 relative">
          <Image src="/Rectangle 400.png" alt="Pizza" width={735} height={804} className="w-full rounded-bl-[200px]" />
          <button className="z-10 absolute top-4 right-4 border border-white text-white px-3 py-1 rounded-full">
            Get In Touch
          </button>
        </div>
                    

      </section>
  )
}

export default HeroSection;
