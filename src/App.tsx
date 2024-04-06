import { Route, Routes } from "react-router-dom";
import Boot from "./components/Boot";
import Desktop from "./components/Desktop";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Boot />} />
        <Route path="/desktop" element={<Desktop />} />
      </Routes>
    </>
  );
}

export default App;
