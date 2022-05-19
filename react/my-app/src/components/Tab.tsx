import "./Tab.css";
import React, { useState } from "react";

export interface TabProps {
    content: {
        title: string
        text: string
    }[]
}

export function Tab({ content }: TabProps) {
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
      <h1>React</h1>
      {buttons}
      <div className="textPane"> {content[currentOption].text} </div>
    </div>
  );

  return <div className="tabPane">{tabMode}</div>;
}
