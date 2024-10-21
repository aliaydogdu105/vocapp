import React from "react";
import StoryCards from "./components/StoryCards";
import {
  FaStar,
  FaRocket,
  FaGlobe,
  FaSpaceShuttle,
  FaCompass,
  FaMoon,
  FaSun,
  FaGlobeAmericas,
  FaMeteor,
  FaCloud,
  FaRegStar,
  FaMars,
  FaInfinity,
  FaBolt,
  FaMapMarkedAlt,
  FaSearch,
  FaSatellite,
  FaPlane,
  FaComments,
  FaClock,
} from "react-icons/fa";

const data = [
  {
    name: "Star Explorer",
    icon: <FaStar />,
    level: "Elementary",
  },
  {
    name: "Galaxy Adventurer",
    icon: <FaRocket />,
    level: "Intermediate",
  },
  {
    name: "Cosmic Traveler",
    icon: <FaGlobe />,
    level: "Advanced",
  },
  {
    name: "Space Pioneer",
    icon: <FaSpaceShuttle />,
    level: "Intermediate",
  },
  {
    name: "Stellar Navigator",
    icon: <FaCompass />,
    level: "Advanced",
  },
  {
    name: "Lunar Explorer",
    icon: <FaMoon />,
    level: "Elementary",
  },
  {
    name: "Solar Voyager",
    icon: <FaSun />,
    level: "Intermediate",
  },
  {
    name: "Planet Discoverer",
    icon: <FaGlobeAmericas />,
    level: "Advanced",
  },
  {
    name: "Comet Chaser",
    icon: <FaMeteor />,
    level: "Intermediate",
  },
  {
    name: "Nebula Drifter",
    icon: <FaCloud />,
    level: "Advanced",
  },
  {
    name: "Asteroid Hunter",
    icon: <FaRegStar />,
    level: "Elementary",
  },
  {
    name: "Martian Settler",
    icon: <FaMars />,
    level: "Intermediate",
  },
  {
    name: "Black Hole Explorer",
    icon: <FaInfinity />,
    level: "Advanced",
  },
  {
    name: "Supernova Seeker",
    icon: <FaBolt />,
    level: "Advanced",
  },
  {
    name: "Astro Cartographer",
    icon: <FaMapMarkedAlt />,
    level: "Intermediate",
  },
  {
    name: "Exoplanet Researcher",
    icon: <FaSearch />,
    level: "Advanced",
  },
  {
    name: "Interstellar Wanderer",
    icon: <FaSatellite />,
    level: "Intermediate",
  },
  {
    name: "Galactic Pilot",
    icon: <FaPlane />,
    level: "Elementary",
  },
  {
    name: "Alien Communicator",
    icon: <FaComments />,
    level: "Advanced",
  },
  {
    name: "Time Traveler",
    icon: <FaClock />,
    level: "Intermediate",
  },
];

const StoryPage = () => {
  const storyList = data.map((story) => (
    <StoryCards
      key={story.name}
      name={story.name}
      level={story.level}
      icon={story.icon}
    />
  ));
  return (
    <div className=" flex flex-col justify-center items-center ">
      <h1 className=" text-4xl font-semibold italic my-5">Story Time</h1>
      <div className=" flex justify-center gap-10 pb-10 flex-wrap">
        {storyList}
      </div>
    </div>
  );
};

export default StoryPage;
