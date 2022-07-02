import { useWindowDimensions } from "../hooks/useWindowDimensions";

export const RightMenu = () => {
  const { width } = useWindowDimensions();

  if (width <= 768) {
    return null;
  }

  return <div className="rightmenu">Right Menu</div>;
};
