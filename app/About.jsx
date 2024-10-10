import React from 'react'
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full h-[467px] relative top-[989px] flex justify-between  bg-[linear-gradient(90.07deg,_rgba(30,_42,_93,_0.04)_30.91%,_rgba(48,_62,_130,_0.04)_64.79%,_rgba(60,_80,_157,_0.04)_91.94%)]">
      <div>
        <Image 
        src="/pharmasict-serving-customer-drug-store 1.png"
        width={384}
        height={468}
        />
      </div>

      <div className="flex flex-col top-[1096px] left-[789px] gap-[21px] w-[447px] h-[254px]">
        <h1>About Us</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
      </div>
    </div>
  )
}

export default About;
