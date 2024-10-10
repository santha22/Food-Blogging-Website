"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import ArticleCard from './ArticleCard';
import { articles } from "./data";

const HomePage = () => {
  const [current, setCurrent] = useState(1);
  const itemsPerPage = 3;

  // Calculate total pages
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  // Get the articles to display for the current page
  const startIndex = (current - 1) * itemsPerPage;
  const displayedArticles = articles.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (current < totalPages) {
      setCurrent(current + 1);
    }
  };

  const handlePrev = () => {
    if (current > 1) {
      setCurrent(current - 1);
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="max-h-[804px] relative flex justify-between items-center mb-16">
        {/* <div> */}
  
                  


        {/* <div className="w-1/2 pl-24 pr-8"> */}
        <div className="w-1/2 pl-24 pr-8 max-h-[804px]">
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

      {/* About Us Section */}
      <section className="flex justify-between items-center mb-16 px-24">
        <Image src="/pharmasict-serving-customer-drug-store 1.png" alt="About Us" width={384} height={468} />
        <div className="w-1/2">
          <h2 className="text-4xl font-bold text-[#0E2368] mb-4">About Us</h2>
          <p className="text-base text-[#444957] mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.
          </p>
          <button className="bg-[#E23744] text-white px-6 py-2 rounded-full">Read More</button>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="mb-16 px-24">
        <h2 className="text-4xl font-bold text-[#0E2368] text-center mb-8">Latest Articles</h2>
        <div className="grid grid-cols-3 gap-8">
          {displayedArticles.map((article, index) => (
            <ArticleCard 
              key={index}
              image={article.image}
              title={article.title}
              description={article.description}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <button 
            onClick={handlePrev} 
            className={`mx-2 w-8 h-8 border border-[#424961] rounded-md ${current === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={current === 1}
          >
            &lt;
          </button>
          <span className="mx-2 w-8 h-8 text-[#424961]">
            {current} / {totalPages}
          </span>
          <button 
            onClick={handleNext} 
            className={`mx-2 w-8 h-8 border border-[#424961] rounded-md ${current === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={current === totalPages}
          >
            &gt;
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F8F8F8] py-16 px-24 flex justify-between">
        <Image src="/Screenshot_669 2.png" alt="Food Truck" width={161} height={125} />
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <p className="text-sm text-[#646874]">
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434
          </p>
          <p className="text-sm text-[#646874] mt-2">example2020@gmail.com</p>
          <p className="text-sm text-[#646874] mt-2">(904) 443-0343</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">More</h3>
          <ul className="text-sm text-[#646874] space-y-2">
            <li>About Us</li>
            <li>Products</li>
            <li>Career</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="flex flex-col items-end">
          <h3 className="font-bold text-lg mb-4">Social Links</h3>
          <div className="flex space-x-4 mb-4">
            <Image src="/Component.png" alt="Instagram" width={21} height={21} />
            <Image src="/Component.png" alt="Twitter" width={21} height={21} />
            <Image src="/Path 1.png" alt="Facebook" width={21} height={21} />
          </div>
          <p className="text-sm text-[#646874]">© 2022 Food Truck Example</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
