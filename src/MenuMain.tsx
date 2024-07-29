import "./styles/index.css";

import { loadFont } from "@remotion/google-fonts/Rubik";
import { AbsoluteFill } from "remotion";

import chipsItems from "./content/chips.json";
import Section from "./components/Section";
 
const { fontFamily } = loadFont();

export const MenuMain = () => {
  // const frame = useCurrentFrame();
  // const { durationInFrames, fps } = useVideoConfig();


  // A <AbsoluteFill> is just a absolutely positioned <div>!
  return (
    <AbsoluteFill style={{ backgroundColor: "#2B5C8F", fontFamily }}>
      <div className="MainContainer">
        <div className="Column">
          <Section name="Chips" items={chipsItems} />
        </div>
        <div className="Column">
          <Section name="Chips" items={chipsItems} />
        </div>
      </div>
    </AbsoluteFill>
  );
};
