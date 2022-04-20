import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Navbar";
import Details from "./screens/Details";
import Table from "./screens/HebrewTable";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/table" element={<Table />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
