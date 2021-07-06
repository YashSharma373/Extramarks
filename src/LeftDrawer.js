import leftDrawer from "./Assets/leftDrawer.png";

export default function LeftDrawer() {
  return (
    <div
      className="left-drawer"
      style={{
        backgroundImage: `url(${leftDrawer}`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    ></div>
  );
}
