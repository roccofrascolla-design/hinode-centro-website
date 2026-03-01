import React from "react";
import "@/App.css";
import { LanguageProvider } from "./context/LanguageContext";
import { Toaster } from "./components/ui/sonner";
import SEO from "./components/SEO";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import Apartment from "./components/Apartment";
import Location from "./components/Location";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import HouseRules from "./components/HouseRules";
import FAQ from "./components/FAQ";
import Awards from "./components/Awards";
import Footer from "./components/Footer";

function App() {
  return (
    <LanguageProvider>
      <SEO />
      <div className="App">
        <Header />
        <main>
          <Hero />
          <WhyChoose />
          <Apartment />
          <Location />
          <Experience />
          <Testimonials />
          <Gallery />
          <Booking />
          <HouseRules />
          <FAQ />
          <Awards />
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </LanguageProvider>
  );
}

export default App;
