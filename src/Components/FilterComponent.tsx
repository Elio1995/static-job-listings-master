import React from "react";
import Data from "../Database/Data";

function FilterComponent(props: any) {
  function extract(array: [], newarray: []) {
    if (!newarray) newarray = [];
    if (array)
      for (var i = 0; i < array.length; ++i) {
        if (array[i].constructor.name === "Array") extract(array[i], newarray);
        else newarray.push(array[i]);
      }
    return newarray;
  }

  const filterLanguage = [...new Set(Data.map((Val) => Val.languages))];
  const filterTool = [...new Set(Data.map((Val) => Val.tools))];

  const extraxtLanguage = extract(filterLanguage);
  const extraxtTool = extract(filterTool);

  const languageArray = [...new Set(extraxtLanguage)];
  const toolArray = [...new Set(extraxtTool)];

  const languageAndToolArray = languageArray.concat(toolArray);

  console.log(languageAndToolArray);

  return (
    <div className="filterDiv bg-white py-5 mt-5">
      <button
        className="filterButtons text-white mx-2 font-black text-sm"
        style={{
          color: "hsl(180, 29%, 50%)",
          backgroundColor: "hsl(180, 52%, 96%)",
        }}
        onClick={() => props.setItems(Data)}
      >
        All
      </button>
      {languageAndToolArray.map((languageTool) => {
        return (
          <>
            <button
              onClick={() => props.filterItem(languageTool)}
              className="filterButtons text-white mx-2 font-black text-sm"
              style={{
                color: "hsl(180, 29%, 50%)",
                backgroundColor: "hsl(180, 52%, 96%)",
              }}
            >
              {languageTool}
            </button>
          </>
        );
      })}
    </div>
  );
}

export default FilterComponent;
