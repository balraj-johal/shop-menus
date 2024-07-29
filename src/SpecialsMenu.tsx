import "./styles/index.css";

import { useCurrentFrame, useVideoConfig } from "remotion";

import Four from "./components/Specials/Four";
import Three from "./components/Specials/Three";
import Two from "./components/Specials/Two";
import One from "./components/Specials/One";
import { FRAMES_PER_SECOND } from "./config";
import { AnimatePresence } from "framer-motion";

export const SpecialsMenu = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const loopDuration = 16 * fps;
  const frameInLoop = frame % loopDuration;

  const component = (() => {
    if (frameInLoop > 12 * FRAMES_PER_SECOND) return (
      <Four />
    )
    if (frameInLoop > 8 * FRAMES_PER_SECOND) return (
      <Three />
    )
    if (frameInLoop > 4 * FRAMES_PER_SECOND) return (
      <Two />
    )
    return (
      <One />
    )
  })()

  return (
    <AnimatePresence mode="wait">
      <div className="Test">
        {component}
      </div>
    </AnimatePresence>
  )
};
