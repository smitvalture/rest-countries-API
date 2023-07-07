import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountryInfo from "./pages/CountryInfo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
