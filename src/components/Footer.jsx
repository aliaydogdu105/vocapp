import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center gap-3 bg-neutral text-neutral-content py-4 px-4 md:px-16">
      <div className=" max-w-7xl w-full flex justify-between items-center mx-auto">
        <aside className="flex gap-2 items-center">
          <img
            src="https://cdn3.iconfinder.com/data/icons/letters-and-numbers-1/32/letter_V_red-512.png"
            alt="logo"
            width={30}
          />
          <p>Copyright © {new Date().getFullYear()}</p>
        </aside>
        <menu className="flex gap-4 md:place-self-center md:justify-self-end">
          <a className=" transition filter hover:drop-shadow-[4px_4px_2px_#000]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 16 16"
              className="fill-current"
            >
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg>
          </a>
          <a className=" transition filter hover:drop-shadow-[4px_4px_2px_#FF0000]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a className=" transition filter hover:drop-shadow-[4px_4px_2px_#1877F2]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </menu>
      </div>
    </footer>
  );
};

export default Footer;
