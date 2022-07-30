import axios from "axios";
import { useEffect, useState } from "react";
import ScoopOption from "./ScoopOption";

const Options = ({ optionType }: any) => {
  const [items, setItems] = useState<{ name: string; imagePath: string }[]>([]);

  // optionType is 'scoops' or 'toppings'
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {
        // TODO: handle error response
      });
  }, [optionType]);

  // TODO: replace 'null' with ToppingOption when available
  // const ItemComponent = optionType === "scoops" ? ScoopOption : null;
  const ItemComponent = ScoopOption;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <div>{optionItems}</div>;
};

export default Options;
