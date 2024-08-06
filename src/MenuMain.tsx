import "./styles/index.css";

import { loadFont } from "@remotion/google-fonts/Rubik";
import { AbsoluteFill } from "remotion";

import chipsItems from "./content/chips.json";
import fishItems from "./content/fish.json";
import sausagesItems from "./content/sausages.json";
import chickenItems from "./content/chicken.json";
import Section from "./components/Section";

const { fontFamily } = loadFont();

export const MenuMain = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#2B5C8F", fontFamily }}>
      <div className="MainContainer">
        <div className="Column">
          <Section name="Chips" items={chipsItems} />
          <Section name="Sausages" items={sausagesItems} />
        </div>
        <div className="Column">
          <Section name="Fish" items={fishItems} />
          <Section name="Chicken" items={chickenItems} />
        </div>
      </div>
    </AbsoluteFill>
  );
};
