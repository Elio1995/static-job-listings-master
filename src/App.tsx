import React, { useState } from "react";
import Card from "./Components/Card";
import Top from "./Components/Top";
import FilterComponent from "./Components/FilterComponent";
import Data from "./Database/Data";
import "./App.css";

export type Job = {
  id: number;
  company: string;
  logo: string;
  new: Boolean;
  featured: Boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: [string?, string?, string?];
  tools: [string?, string?, string?];
};

function App() {
  const [items, setItems] = useState(Data);

  const filterItem = (curcat: string) => {
    const newItem = Data.filter((newVal) => {
      return newVal.languages.includes(curcat) || newVal.tools.includes(curcat);
    });
    console.log(newItem);

    setItems(newItem);
  };

  return (
    <div className="App">
      <Top />
      <div className="mainApp mx-40">
        <FilterComponent setItems={setItems} filterItem={filterItem} />
        <Card jobList={items} />
      </div>
    </div>
  );
}

export default App;
