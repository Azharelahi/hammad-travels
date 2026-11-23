import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import FloatingButtons from "./pages/FloatingButtons"; // Import the Floating Buttons

// Lazy-load secondary pages so the landing page ships only the JS it needs.
// Home stays eager because it is the landing route.
const Contact = lazy(() => import("./pages/Contact us/Contact"));
const AboutUs = lazy(() => import("./pages/About US/AboutUs"));
const Tours = lazy(() => import("./pages/Tours/Tours"));
const TourDetails = lazy(() => import("./pages/Tour Details/TourDetails"));
const Destination = lazy(() => import("./pages/Destinations/Destination"));
const CarHire = lazy(() => import("./pages/Car Hire/CarHire"));
const HireDetails = lazy(() => import("./pages/Hiring Details/HireDetails"));
const Mountaines = lazy(() => import("./pages/Trips/Mountaines"));
const Beaches = lazy(() => import("./pages/Trips/Beach"));
const Deserts = lazy(() => import("./pages/Trips/Desert"));
const Forests = lazy(() => import("./pages/Trips/Forests"));
const CarsGallery = lazy(() => import("./pages/Our Cars Gallery/CarsGallery"));
const FAQ = lazy(() => import("./pages/FAQ"));
const TermsOfServices = lazy(() => import("./pages/TermsOfServices"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

function App() {
  return (
    <>
      <Header />
      <main>
        <Suspense
          fallback={
            <div className="page-loader" aria-label="Loading" role="status">
              <span className="page-loader__spinner" />
            </div>
          }
        >
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
        </Suspense>
      </main>
      <FloatingButtons /> {/* Floating Buttons added here */}
      <Footer />
    </>
  );
}

export default App;