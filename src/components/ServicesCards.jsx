export default function ServicesCards() {
  const services = [
    {
      title: "Smart Screening",
      description: "Comprehensive behavioral assessment driven by AI to help you understand your child's needs better.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.3" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.5c-1.5 0-3-.5-3.5-1.5-.8-1.6-2-2-3-3.5A4.5 4.5 0 0 1 8.5 6M12 18.5c1.5 0 3-.5 3.5-1.5.8-1.6 2-2 3-3.5A4.5 4.5 0 0 0 15.5 6M12 6V3m0 3a3.5 3.5 0 0 0-3.5 3.5v1c0 1 .5 1.5 1 2m2.5-6.5A3.5 3.5 0 0 1 15.5 9.5v1c0 1-.5 1.5-1 2" />
        </svg>
      )
    },
    {
      title: "Progress Tracking",
      description: "Monitor your child's development over time with detailed reporting and personalized guidance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      )
    },
    {
      title: "Supportive Community",
      description: "Connect with fellow mothers and share your experiences within a safe and understanding space.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.3" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-white py-20 px-4 md:px-8" dir="ltr">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Headings */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Premium Services
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Providing a dedicated suite of tools and services tailored to support you throughout your journey
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white border border-gray-100 p-8 rounded-[24px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
            >
              
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-[16px] bg-primary-50 text-primary-500 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-primary-500 group-hover:text-white shadow-sm">
                {service.icon}
              </div>

              {/* Card Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-200 group-hover:text-primary-500">
                {service.title}
              </h3>

              {/* Card Description */}
              <p className="text-gray-500 text-[15px] leading-relaxed">
                {service.description}
              </p>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}