import React from "react";
import InputPart from "./components/InputPart";
import DefinitionCard from "./components/DefinitionCard";

const DefinitionsPage = () => {
  return (
    <div className="flex justify-center items-start mt-10">
      <div className="flex flex-col justify-center items-center gap-4 w-11/12">
        <InputPart />
        <DefinitionCard />
      </div>
    </div>
  );
};

export default DefinitionsPage;
