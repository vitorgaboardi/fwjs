import "./Tab.css";
import { MainText } from './MainText';
import React, { useState } from "react";

export interface TabProps {
    content: {
        title: string
        text: string
    }[];
    tabTitle: string;
    textBackgroundColor?: string;
}

export function Tab(props: TabProps) {
  const [currentOption, setCurrentOption] = useState(0);

  function select(optionIndex: number) {
    setCurrentOption(optionIndex);
  }

  const buttons = props.content.map((obj, index) => (
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
      <div> <h1> {props.tabTitle} </h1> </div>
      {buttons}
      
      <MainText 
        text={props.content[currentOption].text}
        backgroundColor={props.textBackgroundColor}
      />
      
    </div>
  );

  return <div className="tabPane">{tabMode}</div>;
}
