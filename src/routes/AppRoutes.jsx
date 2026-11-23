import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "features/home/Home";

// Secondary routes are code-split so the landing page only loads what it needs.
const Contact = lazy(() => import("features/contact/Contact"));
const AboutUs = lazy(() => import("features/about/AboutUs"));
const Tours = lazy(() => import("features/tours/Tours"));
const TourDetails = lazy(() => import("features/tours/TourDetails"));
const Destination = lazy(() => import("features/destinations/Destination"));
const CarHire = lazy(() => import("features/car-rental/CarHire"));
const HireDetails = lazy(() => import("features/car-rental/HireDetails"));
const Mountaines = lazy(() => import("features/trips/Mountaines"));
const Beaches = lazy(() => import("features/trips/Beach"));
const Deserts = lazy(() => import("features/trips/Desert"));
const Forests = lazy(() => import("features/trips/Forests"));
const CarsGallery = lazy(() => import("features/car-rental/CarsGallery"));
const FAQ = lazy(() => import("features/faq/FAQ"));
const TermsOfServices = lazy(() => import("features/legal/TermsOfServices"));
const PrivacyPolicy = lazy(() => import("features/legal/PrivacyPolicy"));

const AppRoutes = () => (
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
);

export default AppRoutes;