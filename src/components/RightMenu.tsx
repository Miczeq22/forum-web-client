import { useWindowDimensions } from "../hooks/useWindowDimensions";

export const RightMenu = () => {
  const { width } = useWindowDimensions();

  if (width <= 768) {
    return null;
  }

  return (
    <div
      style={{
        gridArea: "right-menu",
      }}
    >
      Right Menu
    </div>
  );
};
