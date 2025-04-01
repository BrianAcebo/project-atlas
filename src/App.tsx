import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Cluster } from "./pages/Cluster";
import { Toaster } from "sonner";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <>
      <Navbar />
      <Toaster richColors position="bottom-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cluster/*" element={<Cluster />} />
      </Routes>

      {currentPage === "/" && <Footer />}
    </>
  );
};

export default App;
