import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";

import Header from "./components/Navbar";
import Details from "./screens/Details";
import Table from "./screens/HebrewTable";
import Home from "./screens/Home";

function App() {
  return (
    <div className="w-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<Table />} />
        <Route path="/details/:index" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
