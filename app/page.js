"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import ArticleCard from './ArticleCard';
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
    <div className="w-full">
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
