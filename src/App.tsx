import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import ScrollToTop from "./components/ScrollToTop";
import MobileStickyBar from "./components/MobileStickyBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Founder from "./pages/Founder";
import Work from "./pages/Work";
import ProjectDetail from "./pages/ProjectDetail";
import ServicesPage from "./pages/Services";
import ProcessPage from "./pages/Process";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="min-h-screen bg-ivory text-inkblack font-sans pb-[64px] lg:pb-0">
      <ScrollToTop />
      <CustomCursor />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
