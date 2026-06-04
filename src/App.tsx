import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { GalleryPage } from "./pages/GalleryPage";
import { AudioPage } from "./pages/AudioPage";
import { MusicPage } from "./pages/MusicPage";
import { ContactPage } from "./pages/ContactPage";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/audio" element={<AudioPage />} />
          <Route path="/vision" element={<MusicPage />} />
          <Route path="/music" element={<Navigate to="/vision" replace />} />
          <Route path="/services" element={<Navigate to="/contact" replace />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
