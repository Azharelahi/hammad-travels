import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "components/layout/Header/Header";
import Footer from "components/layout/Footer/Footer";
import FloatingButtons from "components/layout/FloatingButtons/FloatingButtons";
import AppRoutes from "routes/AppRoutes";
import "./styles/App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (pathname !== "/hire-details") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <AppRoutes />
      </main>
      <FloatingButtons /> {/* Floating Buttons added here */}
      <Footer />
    </>
  );
}

export default App;