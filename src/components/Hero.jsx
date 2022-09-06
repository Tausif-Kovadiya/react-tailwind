import React from "react";
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className="text-white">
      <div className="mt-[96px] w-full h-screen mx-auto text-center">
        <p className="uppercase text-[#00df9a] font-bold">
          Growing with Data Analytics
        </p>
        <h2 className="md:text-7xl sm:text-6xl text-4xl md:py-6 sm:py-4 py-1">Grow With Data</h2>
        <div className="flex justify-center items-center">
          <p className="md:text-4xl sm:text-3xl text-xl font-bold">Fast, flexible financing for</p>
          <Typed className="md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2" strings={['Home', 'Car', 'Education']} typeSpeed={120} backSpeed={140} loop/>
        </div>
        <p className="md:text-2xl text-xl text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, dolores, nam adipisci labore aperiam provident.</p>
        <button className="bg-[#00df9a] hover:bg-white hover:text-[#00df9a] 
        hover:-translate-y-1 duration-300 w-[200px] rounded-md font-medium my-6 mx-auto py-3 focus:ring focus:ring-white">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
