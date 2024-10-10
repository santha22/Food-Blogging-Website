import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#F8F8F8] py-16 px-8 md:px-24 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">
        <Image src="/Screenshot_669 2.png" alt="Food Truck" width={161} height={125} className="w-32 h-24 mb-8 md:mb-0"/>
        <div className="mb-8 md:mb-0">
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <p className="text-sm text-[#646874]">
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434
          </p>
          <p className="text-sm text-[#646874] mt-2">example2020@gmail.com</p>
          <p className="text-sm text-[#646874] mt-2">(904) 443-0343</p>
        </div>
        <div className="mb-8 md:mb-0">
          <h3 className="font-bold text-lg mb-4">More</h3>
          <ul className="text-sm text-[#646874] space-y-2">
            <li>About Us</li>
            <li>Products</li>
            <li>Career</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <h3 className="font-bold text-lg mb-4">Social Links</h3>
          <div className="flex space-x-4 mb-4">
            <Image src="/instagram.png" alt="Instagram" width={21} height={21} />
            <Image src="/twitter.png" alt="Twitter" width={21} height={21} />
            <Image src="/facebook.png" alt="Facebook" width={21} height={21} />
          </div>
          <p className="text-sm text-[#646874]">© 2022 Food Truck Example</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
