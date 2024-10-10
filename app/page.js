"use client";

import React, { useState } from 'react';
import { articles } from "./data";
import Footer from './Footer';
import About from './About';
import HeroSection from './HeroSection';
import ArticleSection from './ArticleSection';

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
    <div className="max-w-[1440px] mx-auto">
      {/* Hero Section */}
      <HeroSection />

      {/* About Us Section */}
      <About />

      {/* Latest Articles Section */}
      <ArticleSection 
        displayedArticles={displayedArticles}
        handlePrev={handlePrev}
        handleNext={handleNext}
        current={current}
        totalPages={totalPages}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;



// import React from 'react';
// import { pizza } from "../public/Rectangle 400.png"
// const ArticleCard = ({ image, title, description }) => (
//   <div className="bg-white rounded-2xl shadow-md overflow-hidden">
//     <img src={image} alt={title} className="w-full h-64 object-cover" />
//     <div className="p-6">
//       <h3 className="text-lg font-bold text-[#0E2368] mb-2">{title}</h3>
//       <p className="text-sm text-[#444957] mb-4">{description}</p>
//       <button className="border border-[#424961] text-[#424961] px-4 py-1 rounded-full text-sm">Read More</button>
//     </div>
//   </div>
// );

// const HomePage = () => {
//   return (
//     <div className="max-w-[1440px] mx-auto">
//       {/* Hero Section */}
//       <section className="flex flex-col md:flex-row justify-between items-center mb-16">
//         <div className="order-2 md:order-1 w-full md:w-1/2 px-8 md:pl-24 md:pr-8 text-center md:text-left">
//           <img src="../public/Rectangle 400.png" alt="Food Truck" className="w-20 h-16 mb-8 hidden md:inline-block" />
//           <h1 className="text-3xl md:text-5xl font-bold text-[#0E2368] leading-tight mb-6">
//             Discover the <span className="text-[#E23744]">Best Food</span> and Drinks
//           </h1>
//           <p className="text-base text-[#444957] mb-8">
//             Naturally made Healthcare Products for the better care & support of your body.
//           </p>
//           <button className="bg-[#E23744] text-white px-8 py-3 rounded-full">Explore Now!</button>
//         </div>
//         <div className="order-1 md:order-2 w-full md:w-1/2 relative">
//           <img src="/Rectangle 400.png" alt="Pizza" className="w-full md:rounded-bl-[200px]" />
//           <div className="absolute top-0 right-0 left-0 bottom-0 bg-[#E23744] opacity-20 md:rounded-bl-[200px]" />
//           <button className="absolute top-4 right-4 border border-white text-white px-3 py-1 rounded-full text-sm">
//             Get In Touch
//           </button>
//         </div>
//       </section>

//       {/* About Us Section */}
//       <section className="flex flex-col md:flex-row justify-between items-center mb-16 px-8 md:px-24">
//         <img src="/about-us-image.jpg" alt="About Us" className="w-full md:w-auto md:h-[468px] rounded-[20px] mb-8 md:mb-0" />
        // <div className="w-full md:w-1/2">
        //   <h2 className="text-2xl md:text-4xl font-bold text-[#0E2368] mb-4">About Us</h2>
        //   <p className="text-sm md:text-base text-[#444957] mb-6">
        //     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.
        //   </p>
        //   <button className="bg-[#E23744] text-white px-6 py-2 rounded-full">Read More</button>
        // </div>
//       </section>

//       {/* Latest Articles Section */}
//       <section className="mb-16 px-8 md:px-24">
//         <h2 className="text-2xl md:text-4xl font-bold text-[#0E2368] text-center mb-8">Latest Articles</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <ArticleCard 
//             image="/article1.jpg"
//             title="Grilled Tomatoes at Home"
//             description="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
//           />
//           <ArticleCard 
//             image="/article2.jpg"
//             title="Snacks for Travel"
//             description="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
//           />
//           <ArticleCard 
//             image="/article3.jpg"
//             title="Post-workout Recipes"
//             description="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
//           />
//         </div>
        // <div className="flex justify-center mt-8">
        //   <button className="mx-2 w-8 h-8 border border-[#424961] rounded-md">&lt;</button>
        //   <button className="mx-2 w-8 h-8 border border-[#424961] rounded-md text-white bg-[#424961]">1</button>
        //   <button className="mx-2 w-8 h-8 border border-[#424961] rounded-md">2</button>
        //   <button className="mx-2 w-8 h-8 border border-[#424961] rounded-md">&gt;</button>
        // </div>
//       </section>

//       {/* Footer */}
      // <footer className="bg-[#F8F8F8] py-16 px-8 md:px-24 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">
      //   <img src="/food-truck-logo.png" alt="Food Truck" className="w-32 h-24 mb-8 md:mb-0" />
      //   <div className="mb-8 md:mb-0">
      //     <h3 className="font-bold text-lg mb-4">Contact Us</h3>
      //     <p className="text-sm text-[#646874]">
      //       Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434
      //     </p>
      //     <p className="text-sm text-[#646874] mt-2">example2020@gmail.com</p>
      //     <p className="text-sm text-[#646874] mt-2">(904) 443-0343</p>
      //   </div>
      //   <div className="mb-8 md:mb-0">
      //     <h3 className="font-bold text-lg mb-4">More</h3>
      //     <ul className="text-sm text-[#646874] space-y-2">
      //       <li>About Us</li>
      //       <li>Products</li>
      //       <li>Career</li>
      //       <li>Contact Us</li>
      //     </ul>
      //   </div>
      //   <div className="flex flex-col items-center md:items-end">
      //     <h3 className="font-bold text-lg mb-4">Social Links</h3>
      //     <div className="flex space-x-4 mb-4">
      //       <img src="/instagram.png" alt="Instagram" className="w-5 h-5" />
      //       <img src="/twitter.png" alt="Twitter" className="w-5 h-5" />
      //       <img src="/facebook.png" alt="Facebook" className="w-5 h-5" />
      //     </div>
      //     <p className="text-sm text-[#646874]">© 2022 Food Truck Example</p>
      //   </div>
      // </footer>
//     </div>
//   );
// };

// export default HomePage;