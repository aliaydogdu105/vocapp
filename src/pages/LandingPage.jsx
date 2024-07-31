import React, { useRef } from "react";
import heroImage from "../assets/image/homePageHero.png";

const LandingPage = () => {
  const featuresRef = useRef(null);

  return (
    <div className="">
      {/* Hero Section */}
      <section className=" flex flex-col-reverse sm:flex-row justify-around items-center text-center gap-12 mx-6 mt-16">
        <div className=" flex flex-col justify-center items-center gap-5">
          <h1 className=" text-4xl font-bold">
            Learn English Vocabulary Effortlessly
          </h1>
          <p className="text-lg">
            Master pronunciation, definitions, and more.
          </p>
          <button
            className=" btn btn-primary w-44 px-6 py-3 rounded-full shadow-lg hover:scale-105 active:scale-95 transition"
            onClick={() =>
              window.scrollTo({
                top: featuresRef.current.offsetTop,
                behavior: "smooth",
              })
            }
          >
            Get Started
          </button>
        </div>
        <img src={heroImage} alt="Hero" className=" w-1/2 sm:w-1/3" />
      </section>
      {/* Features Section */}
      <section ref={featuresRef} className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-12" id="features">
          Features
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-2 ">
          <div className=" border border-base flex-1 w-80 py-6 hover:flex-[1.5] hover:shadow-2xl transition-all">
            <div className="text-blue-500 mb-4">
              <svg
                className="h-12 w-12 mx-auto"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 22c5.421 0 10-4.579 10-10S17.421 2 12 2 2 6.579 2 12s4.579 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm-2 11h4v2h-4v-2zm0-6h4v5h-4V9z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Pronunciation</h3>
            <p className="text-gray-600">Improve your speech</p>
          </div>
          <div className="border border-base flex-1 w-80 py-6 hover:flex-[1.5] hover:shadow-2xl transition-all">
            <div className="text-blue-500 mb-4">
              <svg
                className="h-12 w-12 mx-auto"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 22c5.421 0 10-4.579 10-10S17.421 2 12 2 2 6.579 2 12s4.579 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm-2 11h4v2h-4v-2zm0-6h4v5h-4V9z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Definitions</h3>
            <p className="text-gray-600">Understand meanings</p>
          </div>
          <div className="border border-base flex-1 w-80 py-6 hover:flex-[1.5] hover:shadow-2xl transition-all">
            <div className="text-blue-500 mb-4">
              <svg
                className="h-12 w-12 mx-auto"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 22c5.421 0 10-4.579 10-10S17.421 2 12 2 2 6.579 2 12s4.579 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm-2 11h4v2h-4v-2zm0-6h4v5h-4V9z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Word Matching</h3>
            <p className="text-gray-600">Enhance vocabulary</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
