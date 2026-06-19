import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Admin from "./pages/Admin";
import AboutPage from "./pages/AboutPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import PortfolioGalleryPage from "./pages/PortfolioGalleryPage";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services/:service" element={<ServiceDetailPage />} />
        <Route path="/portfolio/:category" element={<PortfolioGalleryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;