import React from 'react'
import Image from "next/image";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center mb-16 p-20 px-8 md:px-24 bg-[linear-gradient(90.07deg,_rgba(30,_42,_93,_0.04)_30.91%,_rgba(48,_62,_130,_0.04)_64.79%,_rgba(60,_80,_157,_0.04)_91.94%)]">
        <Image src="/pharmasict-serving-customer-drug-store 1.png" className="w-full hidden md:inline-block md:w-auto md:h-[468px]  mb-8 md:mb-0"  alt="About Us" width={384} height={468} />
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-4xl text-center md:text-start font-bold text-[#0E2368] mb-4">About Us</h2>
          <p className="text-sm md:text-base text-[#444957] mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.
          </p>
          <button className="bg-[#E23744] text-white px-6 py-2 rounded-full">Read More</button>
        </div>
      </section>
  )
}

export default About;
