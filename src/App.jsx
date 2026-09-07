import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyCompareBar from './components/StickyCompareBar';
import WhatsAppInquiry from './components/WhatsAppInquiry';

// Pages
import HomePage from './pages/HomePage';
import MachineryPage from './pages/MachineryPage';
import PowerWeederPage from './pages/PowerWeederPage';
import TractorsPage from './pages/TractorsPage';
import ImplementsPage from './pages/ImplementsPage';
import MachineDetailPage from './pages/MachineDetailPage';
import SolutionsPage from './pages/SolutionsPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import InsightsPage from './pages/InsightsPage';
import QuotePage from './pages/QuotePage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#0f1115] text-[#f8f9fa] font-['Inter',sans-serif]">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/machinery" element={<MachineryPage />} />
              <Route path="/machinery/power-weeder" element={<PowerWeederPage />} />
              <Route path="/machinery/tractors" element={<TractorsPage />} />
              <Route path="/implements" element={<ImplementsPage />} />
              <Route path="/machinery/:id" element={<MachineDetailPage />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="/quote" element={<QuotePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          
          {/* Global Enhancements Floating Layer */}
          <StickyCompareBar />
          <WhatsAppInquiry />
        </div>
      </Router>
    </LanguageProvider>
  );
}
