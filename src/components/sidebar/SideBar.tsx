import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { SidebarMenus } from "./SideBarMenus";

export const SideBar = () => {
  const { width } = useWindowDimensions();

  if (width <= 768) {
    return null;
  }

  return (
    <div
      style={{
        gridArea: "sidebar",
        backgroundColor: "yellow",
      }}
    >
      <SidebarMenus />
    </div>
  );
};