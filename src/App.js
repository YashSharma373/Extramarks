import "./styles.css";
import MainSection from "./MainSection";
import LeftDrawer from "./LeftDrawer";

export default function App() {
  return (
    <div className="App">
      <LeftDrawer />
      <MainSection />
    </div>
  );
}
