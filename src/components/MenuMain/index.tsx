import { loadFont } from "@remotion/google-fonts/Rubik";
import { AbsoluteFill } from "remotion";

const { fontFamily } = loadFont();

interface Props {
  left: React.ReactNode;
  right: React.ReactNode;
}

export const MenuMain = ({left, right}: Props) => {
  return (
    <AbsoluteFill style={{ backgroundColor: "var(--blue-background)", fontFamily }}>
      <div className="MainContainer">
        <div className="Column">
          {left}
        </div>
        <div className="Column">
          {right}
        </div>
      </div>
    </AbsoluteFill>
  );
};
