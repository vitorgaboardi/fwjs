import "./Tab.css";
import React, { useState } from "react";

export interface TabProps {
    content: {
        title: string
        text: string
    }[];
    tabTitle: string;
}

export function Tab({ content, tabTitle }: TabProps) {
  const [currentOption, setCurrentOption] = useState(0);

  function select(optionIndex: number) {
    setCurrentOption(optionIndex);
  }

  const buttons = content.map((obj, index) => (
    <button
      key={obj.title}
      className={index === currentOption ? "selected" : ""}
      onClick={() => select(index)}
    >
      {obj.title}
    </button>
  ));

  const tabMode = (
    <div className="tabPane">
      <div> <h1> {tabTitle} </h1> </div>
      {buttons}
      <div className="textPane"> {content[currentOption].text} </div>
    </div>
  );

  return <div className="tabPane">{tabMode}</div>;
}
