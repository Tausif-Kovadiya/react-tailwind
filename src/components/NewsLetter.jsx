import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow ?
          </h1>
          <p>Signup our Newsletter and stay upto date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <input type="email" placeholder="Email address" className="p-3 w-full rounded-md text-black outline-none" />
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-4">
              Notify Me
            </button>n>
          </div>
          <p>We care about protection of your data. Read our <span className="text-[#00df9a] cursor-pointer">Privacy Policy.</span></p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
