import React from 'react'
import Image from "next/image"

const ArticleCard = ({ image, title, description }) => (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <Image src={image} alt={title} width={326} height={257} className="w-full" />
      <div className="p-6">
        <h3 className="text-lg font-bold text-[#0E2368] mb-2">{title}</h3>
        <p className="text-sm text-[#444957] mb-4">{description}</p>
        <button className="border border-[#424961] text-[#424961] px-4 py-1 rounded-full text-sm">Read More</button>
      </div>
    </div>
  );

export default ArticleCard;
