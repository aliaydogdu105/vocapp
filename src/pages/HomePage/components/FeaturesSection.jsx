import React, { useState } from "react";
import { RiSpeakFill, RiSpeakLine } from "react-icons/ri";
import { IoBook, IoBookOutline } from "react-icons/io5";
import { PiNetworkX, PiNetworkXFill } from "react-icons/pi";
import { IoReader, IoReaderOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import BackgroundHeader from "./BackgroundHeader";

const FeaturesSection = ({ featuresRef }) => {
  const cards = [
    {
      id: 1,
      header: "Pronunciation",
      text: "Improve your speech",
      icon: <RiSpeakLine size={50} />,
      iconHover: <RiSpeakFill size={50} />,
      route: "/pronunciation",
    },
    {
      id: 2,
      header: "Definitions",
      text: "Understand meanings",
      icon: <IoBookOutline size={50} />,
      iconHover: <IoBook size={50} />,
      route: "/definitions",
    },
    {
      id: 3,
      header: "Word Matching",
      text: "Enhance vocabulary",
      icon: <PiNetworkX size={50} />,
      iconHover: <PiNetworkXFill size={50} />,
      route: "/word-matching",
    },
    {
      id: 4,
      header: "Story Time",
      text: "Read or listen stories",
      icon: <IoReaderOutline size={50} />,
      iconHover: <IoReader size={50} />,
      route: "/stories",
    },
  ];

  const topPage = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section ref={featuresRef} className="py-10 mb-10 text-center">
      <h2 className="text-3xl font-bold mb-12" id="features">
        Features
      </h2>
      <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-2">
        {cards.map((card) => {
          const [isHovered, setIsHovered] = useState(false);

          return (
            <div
              key={card.id}
              className="border border-base flex-1 w-80 py-10 hover:flex-[1.15] hover:shadow-2xl transition-all glass"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="flex justify-center">
                {isHovered ? card.iconHover : card.icon}
              </div>
              <header className="text-xl font-bold m-4 whitespace-nowrap relative">
                <BackgroundHeader text={card.header} />
                <h2>{card.header}</h2>
              </header>
              <p className="italic">{card.text}</p>
              <Link
                to={card.route}
                onClick={topPage}
                className="btn btn-outline w-1/3 active:opacity-90 mt-2"
              >
                <button>Start</button>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesSection;
