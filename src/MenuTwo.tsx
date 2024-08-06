import kebabsItems from "./content/kebabs.json";
import burgersItems from "./content/burgers.json";
import kebabAndChipsItems from "./content/kebab-and-chips.json";
import drinksItems from "./content/drinks.json";
import Section from "./components/Section";
import { MenuMain } from "./components/MenuMain";

export const MenuTwo = () => {
  return (
    <MenuMain
      left={
        <>
          <Section name="Kebabs" items={kebabsItems} />
          <Section name="Kebab And Chips" items={kebabAndChipsItems} />
        </>
      }
      right={
        <>
          <Section name="Burgers" items={burgersItems} />
          <Section name="Drinks" items={drinksItems} />
        </>
      }
    />
  );
};
