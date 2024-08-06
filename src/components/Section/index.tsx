import clsx from "clsx";
import { MenuItem } from "../../types";

interface Props {
  name?: string;
  centered?: boolean;
  items: MenuItem[];
}

const Section = ({ name, items, centered }: Props) => {
  return (
    <section>
      {name && <h1>{name}</h1>}
      <div className={clsx("SectionList", centered && "centered")}>
        {items.map(({item, price}) => (
          <div className={"MenuItem"} key={item}>
            <span>{item}</span>
            <span className="MenuItem-Price">{price}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Section;