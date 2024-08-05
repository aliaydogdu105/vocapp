import React from "react";

const InformationSection = () => {
  return (
    <div className=" flex flex-col gap-3 p-6 my-10 bg-base-200">
      <h2 className=" text-xl font-semibold">
        How can you enhance your English vocabulary effectively?
      </h2>
      <p>
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
