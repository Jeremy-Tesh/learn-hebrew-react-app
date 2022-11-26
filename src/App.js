import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Navbar";
import Resources from "./screens/Resources";
import Details from "./screens/Details";
import Table from "./screens/HebrewTable";
import Home from "./screens/Home";
import Contact from "./screens/Contact";

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
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
