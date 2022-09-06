import React from "react";
import Double from "../assets/double.png";
import Single from "../assets/single.png";
import Triple from "../assets/triple.png";

const Card = ({ image, title, btnText, price }) => {
  return (
    <div className="w-full shadow-xl flex flex-col my-8 p-4 rounded-lg hover:scale-105 duration-300">
      <img className="w-20 mx-auto bg-white mt-[-3rem]" src={image} alt="/" />
      <h2 className="text-2xl font-bold text-center py-4 my-20 text-grey">{title}</h2>
      <p className="text-4xl font-bold text-center">{price}</p>
      <div className="font-medium text-center">
        <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
        <p className="py-2 border-b mx-8">1 Granted User</p>
        <p className="py-2 border-b mx-8">Send upto 2GB</p>
      </div>
      <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3">
        {btnText}
      </button>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-8 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <Card
          image={Single}
          price="$99"
          title="Single User"
          btnText="Start Trail"
        />
        <Card
          image={Double}
          price="$149"
          title="Double User"
          btnText="Small Team Plan"
        />
        <Card
          image={Triple}
          price="$599"
          title="Triple User"
          btnText="Coporate Plan"
        />
      </div>
    </div>
  );
};

export default Cards;

// Built with Vivid ⚡️
