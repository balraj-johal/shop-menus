import chipsItems from "./content/chips.json";
import fishItems from "./content/fish.json";
import sausagesItems from "./content/sausages.json";
import chickenItems from "./content/chicken.json";
import Section from "./components/Section";
import { MenuMain } from "./components/MenuMain";

export const MenuOne = () => {
  return (
    <MenuMain
      left={
        <>
          <Section name="Chips" items={chipsItems} />
          <Section name="Sausages" items={sausagesItems} centered />
        </>
      }
      right={
        <>
          <Section name="Fish" items={fishItems} />
          <Section name="Chicken" items={chickenItems} centered />
        </>
      }
    />
  );
};
