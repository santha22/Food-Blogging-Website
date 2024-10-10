import React from 'react'
import Image from "next/image";

const About = () => {
  return (
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
  )
}

export default About;
