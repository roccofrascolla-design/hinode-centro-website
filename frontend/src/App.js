import React from "react";
import "@/App.css";
import { LanguageProvider } from "./context/LanguageContext";
import { Toaster } from "./components/ui/sonner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import Apartment from "./components/Apartment";
import Location from "./components/Location";
import Experience from "./components/Experience";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <WhyChoose />
          <Apartment />
          <Location />
          <Experience />
          <Gallery />
          <Booking />
          <FAQ />
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </LanguageProvider>
  );
}

export default App;
