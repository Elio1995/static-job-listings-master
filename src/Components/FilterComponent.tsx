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
    <div className="mx-20">
      <button
        className="text-white mx-2 mt-5"
        onClick={() => props.setItems(Data)}
      >
        All
      </button>
      {languageAndToolArray.map((languageTool) => {
        return (
          <>
            <button
              onClick={() => props.filterItem(languageTool)}
              className="text-white mx-2 mt-5"
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
