import React from 'react'
import Image from "next/image"

const ArticleCard = ({ image, title, description }) => (
    <div className="bg-white border rounded-2xl shadow-md overflow-hidden">
      <div className="p-10">
        <Image src={image} alt={title} width={326} height={257} className="w-full" />
        <div className="p-6">
          <h3 className="text-lg font-bold text-[#0E2368] mb-2">{title}</h3>
          <p className="text-sm text-[#444957] mb-4">{description}</p>
          <button className="border-2 border-[#424961] text-[#424961] font-bold px-4 py-1 rounded-full text-sm">Read More</button>
        </div>
      </div>
    </div>
  );

export default ArticleCard;
