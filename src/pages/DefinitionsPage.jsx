import React from "react";

const DefinitionsPage = () => {
  return (
    <div className="h-[calc(100vh-68px)] flex justify-center items-center flex-col gap-8">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-primary w-full max-w-xs"
      />
      <div className="hero bg-base-200 max-w-2xl rounded-2xl outline outline-1">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefinitionsPage;
