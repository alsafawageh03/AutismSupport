import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection"; 
import ServicesCards from "./components/ServicesCards";
import HowItWorks from "./components/HowItWorks";
import CTASection from "./components/CTASection"; 
import Footer from "./components/Footer";

// استيراد صفحة اللوجين من الفولدر بتاعها
import Login from "./pages/auth/Login";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-800 antialiased selection:bg-teal-500 selection:text-white">
        <Routes>
          
          {/* 1️⃣ الرابط الرئيسي: بيعرض كل سيكشنز الـ Landing Page اللي عملتيها */}
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <ServicesCards />
              <HowItWorks />
              <CTASection />
              <Footer />
            </>
          } />

          {/* 2️⃣ رابط صفحة تسجيل الدخول المنفصلة */}
          <Route path="/login" element={<Login />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;