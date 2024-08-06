import { Composition } from "remotion";
import { SpecialsMenu } from "./SpecialsMenu";
import { MINUTE_IN_FRAMES } from "./config";
import { MenuOne } from "./MenuOne";
import { MenuFour } from "./MenuFour";
import { MenuThree } from "./MenuThree";
import { MenuTwo } from "./MenuTwo";

import "./styles/index.css";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MenuOne"
        component={MenuOne}
        durationInFrames={MINUTE_IN_FRAMES * 15}
        fps={24}
        width={1280}
        height={720}
      />
      <Composition
        id="MenuTwo"
        component={MenuTwo}
        durationInFrames={MINUTE_IN_FRAMES * 15}
        fps={24}
        width={1280}
        height={720}
      />
      <Composition
        id="MenuThree"
        component={MenuThree}
        durationInFrames={MINUTE_IN_FRAMES * 15}
        fps={24}
        width={1280}
        height={720}
      />
      <Composition
        id="MenuFour"
        component={MenuFour}
        durationInFrames={MINUTE_IN_FRAMES * 15}
        fps={24}
        width={1280}
        height={720}
      />

      <Composition
        id="SpecialsMenu"
        component={SpecialsMenu}
        durationInFrames={MINUTE_IN_FRAMES * 16}
        fps={24}
        width={1920}
        height={1080}
      />
    </>
  );
};
