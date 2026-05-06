import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Pilot from "./pages/Pilot";
import Contact from "./pages/Contact";
import Download from "./pages/Download";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/pilot" element={<Pilot />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/download" element={<Download />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;