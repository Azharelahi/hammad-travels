import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import Contact from "./pages/Contact us/Contact";
import AboutUs from "./pages/About US/AboutUs";
import Tours from "./pages/Tours/Tours";
import TourDetails from "./pages/Tour Details/TourDetails";
import Destination from "./pages/Destinations/Destination";

function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tour/:title" element={<TourDetails />} />
          <Route path="/destination/:name" element={<Destination />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
