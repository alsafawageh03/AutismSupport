export default function HeroSection() {
  return (
    <section className="w-full relative overflow-hidden bg-white min-h-[90vh] flex flex-col justify-between items-center px-4 md:px-8 pt-32 pb-16" dir="ltr">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary-50 via-white to-primary-100">
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center my-auto">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-1.5 bg-primary-100 text-primary-700 text-sm font-medium px-4 py-1.5 rounded-full mb-8 border border-primary-200">
          <span>Safe & Certified Platform</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
          </svg>
        </div>

        {/* Main Heading */}
        <h1 className="text-[42px] md:text-[62px] font-bold text-gray-900 leading-[1.25] mb-6 tracking-tight">
          A Journey of Support <br />
          <span className="text-primary-500">for Autism Mothers</span>
        </h1>

        {/* Subtitle Description */}
        <p className="text-gray-600 text-base md:text-xl font-normal max-w-2xl mx-auto leading-relaxed mb-10 px-4">
          An integrated platform providing smart screening tools, detailed reporting, and a supportive community to empower you in your child's care journey.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mb-14">
          
          {/* Primary Action Button */}
          <button className="w-full sm:w-auto bg-primary-500 text-white font-bold text-lg px-8 py-3.5 rounded-[14px] shadow-sm hover:bg-primary-600 transition-all duration-200 flex items-center justify-center gap-2 group">
            <span>Start Screening Journey</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>

          {/* Secondary Action Button */}
          <button className="w-full sm:w-auto bg-white border-2 border-primary-500 text-primary-500 font-bold text-lg px-8 py-3.5 rounded-[14px] hover:bg-primary-50 transition-all duration-200">
            Join the Community
          </button>

        </div>

      </div>

      {/* Trust Badges Bar */}
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs md:text-sm text-gray-600 border-t border-gray-100 pt-6 w-full relative z-10">
        
        <div className="flex items-center gap-1.5">
          <span className="text-primary-600 bg-primary-100 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold">✓</span>
          <span>1,000+ Empowered Mothers</span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-primary-600 bg-primary-100 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold">✓</span>
          <span>Accurate Screenings</span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-primary-600 bg-primary-100 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold">✓</span>
          <span>24/7 Specialized Support</span>
        </div>

      </div>

    </section>
  );
}