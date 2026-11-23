import Header from "components/layout/Header/Header";
import Footer from "components/layout/Footer/Footer";
import FloatingButtons from "components/layout/FloatingButtons/FloatingButtons";
import AppRoutes from "routes/AppRoutes";
import "./styles/App.css";

function App() {
  return (
    <>
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