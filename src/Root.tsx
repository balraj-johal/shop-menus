import { Composition } from "remotion";
import { MenuMain } from "./MenuMain";
import { SpecialsMenu } from "./SpecialsMenu";
import { MINUTE_IN_FRAMES } from "./config";

// Each <Composition> is an entry in the sidebar!
export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        // You can take the "id" to render a video:
        // npx remotion render src/index.ts <id> out/video.mp4
        id="MenuMain"
        component={MenuMain}
        durationInFrames={MINUTE_IN_FRAMES * 15}
        fps={24}
        width={1280}
        height={720}
      />

      <Composition
        // You can take the "id" to render a video:
        // npx remotion render src/index.ts <id> out/video.mp4
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
