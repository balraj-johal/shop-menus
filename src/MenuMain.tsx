import {
  AbsoluteFill,
} from "remotion";

export const MenuMain = () => {
  // const frame = useCurrentFrame();
  // const { durationInFrames, fps } = useVideoConfig();


  // A <AbsoluteFill> is just a absolutely positioned <div>!
  return (
    <AbsoluteFill style={{ backgroundColor: "blue" }}>
      <h1>Testing!</h1>
    </AbsoluteFill>
  );
};
