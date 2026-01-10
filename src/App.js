import { useState } from "react";
import "./index.css";
import SideBar from "./components/SideBar";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";

function App() {
  const [showfrom, setShowFrom] = useState(false);

  function handleOpenform() {
    setShowFrom((prev) => !prev);
  }

  return (
    <main>
      <SideBar handleOpenform={handleOpenform} isShowfrom={showfrom} />
      {showfrom && <NewProject handleOpenform={handleOpenform} />}
      {!showfrom && <NoProject handleOpenform={handleOpenform} />}
    </main>
  );
}

export default App;
