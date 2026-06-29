export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-gray-400 pt-16 pb-8 px-4 md:px-8 border-t border-gray-700/20" dir="ltr">
      <div className="max-w-6xl mx-auto">
        
        {/* Four-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 pb-14">
          
          {/* Column 1: Platform Logo & Description */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-primary-500 text-2xl font-bold">
              <span>Auticare</span>
              <div className="bg-primary-500 text-white p-1 rounded-full w-7 h-7 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </div>
            </div>
            <p className="text-gray-400 text-[14px] leading-relaxed max-w-[250px]">
              A specialized platform dedicated to supporting mothers of autistic children, providing smart screening tools and a supportive community.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white text-[16px] font-bold mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-[14px] text-gray-400">
              <li><a href="#home" className="hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#assessment" className="hover:text-primary-400 transition-colors">Smart Screening</a></li>
              <li><a href="#community" className="hover:text-primary-400 transition-colors">Mothers Community</a></li>
              <li><a href="#support" className="hover:text-primary-400 transition-colors">AI Support</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h4 className="text-white text-[16px] font-bold mb-5">Contact Us</h4>
            <ul className="flex flex-col gap-3.5 text-[14px] text-gray-400">
              <li className="flex items-center gap-2">
                <span className="text-primary-500 text-base">✉</span>
                <span className="font-sans">support@auticare.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary-500 text-base">📞</span>
                <span className="font-sans">+4567 123 50 966</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary-500 text-base">📍</span>
                <span>Riyadh, Saudi Arabia</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Disclaimer */}
          <div>
            <h4 className="text-white text-[16px] font-bold mb-5">Disclaimer</h4>
            <p className="text-gray-400 text-[12px] leading-relaxed max-w-[240px]">
              The information provided on this platform is for educational and informational purposes only and is not a substitute for professional medical advice. Please consult a doctor or healthcare specialist for an accurate diagnosis.
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyrights & Policies */}
        <div className="pt-6 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-gray-400">
          <div className="flex gap-4 order-2 md:order-1">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
          <div className="order-1 md:order-2">
            <p>&copy; 2026 Auticare. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}