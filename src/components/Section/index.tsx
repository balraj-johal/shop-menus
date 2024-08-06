import { MenuItem } from "../../types";

interface Props {
  name?: string;
  items: MenuItem[];
}

const Section = ({ name, items }: Props) => {
  return (
    <section>
      {name && <h1>{name}</h1>}
      <div>
        {items.map(({item, price}) => (
          <div className="MenuItem" key={item}>
            <span>{item}</span>
            <span className="MenuItem-Price">{price}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Section;