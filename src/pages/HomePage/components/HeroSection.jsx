import React from "react";
import heroImage from "../../../assets/image/homePageHero.png";

const HeroSection = ({ handleScroll }) => {
  return (
    <section className=" flex flex-col sm:flex-row justify-around items-center text-center gap-12 mx-6 mt-16">
      <div className=" flex flex-col justify-center items-center gap-5">
        <h1 className=" text-4xl font-bold">
          Learn English Vocabulary Effortlessly
        </h1>
        <p className="text-lg">Master pronunciation, definitions, and more.</p>
        <button
          className=" btn btn-primary w-44 px-6 py-3 rounded-full shadow-lg hover:scale-105 active:scale-95 transition"
          onClick={handleScroll}
        >
          Get Started
        </button>
      </div>
      <img src={heroImage} alt="Hero" className=" w-2/3 sm:w-1/3" />
    </section>
  );
};

export default HeroSection;
