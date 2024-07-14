import { Composition } from "remotion";
import { MenuMain } from "./MenuMain";

// Each <Composition> is an entry in the sidebar!
export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        // You can take the "id" to render a video:
        // npx remotion render src/index.ts <id> out/video.mp4
        id="MenuMain"
        component={MenuMain}
        durationInFrames={24 * 60 * 15}
        fps={24}
        width={1280}
        height={720}
      />
    </>
  );
};
