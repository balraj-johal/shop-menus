import naansItems from "./content/naans.json";
import piesItems from "./content/pies.json";
import sundriesItems from "./content/sundries.json";
import othersItems from "./content/others.json";
import wrapsItems from "./content/wraps.json";
import Section from "./components/Section";
import { MenuMain } from "./components/MenuMain";

export const MenuThree = () => {
  return (
    <MenuMain
      left={
        <>
          <Section name="Naans" items={naansItems} />
          <Section name="Pies" items={piesItems} centered />
          <h1 style={{textAlign: "center", fontWeight: 400}}>
            Call us at
            &nbsp;
            <strong>01902 926171</strong>
          </h1>
        </>
      }
      right={
        <>
          <Section name="Wraps" items={wrapsItems} />
          <Section name="Others" items={othersItems.concat(sundriesItems)} centered />
        </>
      }
    />
  );
};
