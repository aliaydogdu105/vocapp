import React from "react";

const InformationSection = () => {
  return (
    <div className=" flex flex-col gap-7 p-7 mr-2 sm:mr-0 sm:p-14 my-10 bg-base-200 bg-opacity-80 relative rounded-r-3xl border-l-8 border-base-300 border-opacity-50">
      <div className=" bg-[url(https://img.freepik.com/free-vector/white-abstract-background-theme_23-2148830884.jpg?t=st=1723294436~exp=1723298036~hmac=b63604f9dd7855ca1a744f5503ce6ae20c7faa16168529aeaef2083506ce396c&w=996)] w-full h-full absolute top-0 left-0 -z-10 bg-cover bg-no-repeat bg-center rounded-r-3xl">
      </div>
      <h2 className=" text-2xl text-center font-bold">
        How can you enhance your English vocabulary effectively?
      </h2>
      <p className=" text-justify indent-5">
        Expanding your English vocabulary provides significant advantages in
        both your personal and professional life. Understanding texts in a
        foreign language, communicating accurately, and expressing yourself
        freely in a global world requires a robust vocabulary.
      </p>
      <p className=" italic font-semibold">
        Enhance your English vocabulary with our comprehensive approach through
        three key sections:
      </p>
      <ul className=" list-disc list-inside space-y-4">
        <li>
          Perfect your speaking skills and boost your confidence by learning the
          correct pronunciations of words.
        </li>
        <li>
          Discover detailed meanings of words and learn how to use them in the
          right context.
        </li>
        <li>
          Make your learning permanent with fun and interactive word matching
          games.
        </li>
      </ul>
      <p>
        Our goal is to make your English learning process effective, enjoyable,
        and efficient. Start now and elevate your vocabulary to the next level!
      </p>
    </div>
  );
};

export default InformationSection;
