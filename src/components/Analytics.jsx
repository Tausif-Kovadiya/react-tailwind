import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          src={Laptop}
          alt="laptop image"
          className="w-[500px] mx-auto my-4"
        />
        <div className="flex flex-col justify-center">
          <p className="my-4 text-xl">DATA ANALYTICS DASHBOARD</p>
          <h1 className="sm:text-3xl font-bold py-2 text-8xl md:text-4xl">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos at
            nesciunt odio quidem unde labore reprehenderit dicta! Esse, quod
            earum. Voluptates natus ex corporis iste est porro perferendis modi
            exercitationem.
          </p>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

// Built with Vivid ⚡️
