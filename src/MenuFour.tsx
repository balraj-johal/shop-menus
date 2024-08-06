import othersItems from "./content/others.json";
import fishItems from "./content/fish.json";
import sausagesItems from "./content/sausages.json";
import chickenItems from "./content/chicken.json";
import Section from "./components/Section";
import { MenuMain } from "./components/MenuMain";

export const MenuFour = () => {
  return (
    <MenuMain
      left={
        <>
          <Section name="Others" items={othersItems} />
          <Section name="Sausages" items={sausagesItems} />
        </>
      }
      right={
        <>
          <Section name="Fish" items={fishItems} />
          <Section name="Chicken" items={chickenItems} />
        </>
      }
    />
  );
};
