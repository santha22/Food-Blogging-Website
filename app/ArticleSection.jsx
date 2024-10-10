import React from 'react'
import ArticleCard from './ArticleCard';

const ArticleSection = ({
    displayedArticles,
    handleNext,
    handlePrev,
    current,
    totalPages
}) => {
  return (
    <section className="mb-16 px-8 md:px-24">
        <h2 className="text-2xl md:text-4xl font-bold text-[#0E2368] text-center md:text-start mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
  )
}

export default ArticleSection;
