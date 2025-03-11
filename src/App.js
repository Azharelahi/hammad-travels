import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import Contact from "./pages/Contact us/Contact";
import AboutUs from "./pages/About US/AboutUs";
import Tours from "./pages/Tours/Tours";
import TourDetails from "./pages/Tour Details/TourDetails";
import Destination from "./pages/Destinations/Destination";
import FloatingButtons from "./pages/FloatingButtons"; // Import the Floating Buttons
import CarHire from "./pages/Car Hire/CarHire";
import HireDetails from "./pages/Hiring Details/HireDetails";
import Mountaines from "./pages/Trips/Mountaines";
import Beaches from "./pages/Trips/Beach";
import Deserts from "./pages/Trips/Desert";
import Forests from "./pages/Trips/Forests";
import CarsGallery from "./pages/Our Cars Gallery/CarsGallery";
import FAQ from "./pages/FAQ";
import TermsOfServices from "./pages/TermsOfServices";
import PrivacyPolicy from "./pages/PrivacyPolicy";

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
          <Route path="/car-hire" element={<CarHire />} />
          <Route path="/hire-details" element={<HireDetails />} />
          <Route path="/mountaines" element={<Mountaines />} />
          <Route path="/beaches" element={<Beaches />} />
          <Route path="/deserts" element={<Deserts />} />
          <Route path="/forests" element={<Forests />} />
          <Route path="/gallery" element={<CarsGallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<TermsOfServices />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
      <FloatingButtons /> {/* Floating Buttons added here */}
      <Footer />
    </>
  );
}

export default App;
