import { useEffect, useState } from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import Category from "../models/Category";
import { getCategories } from "../services/DataService";

export const LeftMenu = () => {
  const { width } = useWindowDimensions();
  const [categories, setCategories] = useState<JSX.Element>(
    <div>Left Menu</div>
  );

  useEffect(() => {
    getCategories()
      .then((categories: Array<Category>) => {
        const cats = categories.map((cat) => <li key={cat.id}>{cat.name}</li>);

        setCategories(<ul className="category">{cats}</ul>);
      })
      .catch(console.log);
  }, []);

  if (width <= 768) {
    return null;
  }

  return <div className="leftmenu">{categories}</div>;
};
