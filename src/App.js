import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Navbar";
import Resources from "./screens/Resources";
import Details from "./screens/Details";
import Table from "./screens/HebrewTable";
import Home from "./screens/Home";

function App() {
  return (
    <>
      <div className="h-screen flex flex-col justify-between">
        <div>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/table" element={<Table />} />
            <Route path="/details/:index" exact element={<Details />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
