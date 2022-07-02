import { useWindowDimensions } from "../hooks/useWindowDimensions";

export const LeftMenu = () => {
  const { width } = useWindowDimensions();

  if (width <= 768) {
    return null;
  }

  return <div className="leftmenu">Left Menu</div>;
};