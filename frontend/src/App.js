import React from "react";
import "@/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { Toaster } from "./components/ui/sonner";
import SEO from "./components/SEO";
import HomePage from "./pages/HomePage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <SEO />
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
          <Toaster position="top-right" />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
