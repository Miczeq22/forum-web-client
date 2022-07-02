import { useWindowDimensions } from "../hooks/useWindowDimensions";

export const SideBar = () => {
  const { width } = useWindowDimensions();

  if (width <= 768) {
    return null;
  }

  return <div className="sidebar">Sidebar</div>;
};
