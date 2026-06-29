export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Create Child Profile",
      description: "Add your child's basic information and behavioral observations."
    },
    {
      number: "2",
      title: "Take the Screening",
      description: "Answer simple, carefully designed behavioral questions."
    },
    {
      number: "3",
      title: "Receive the Report",
      description: "Get a detailed report along with personalized recommendations."
    },
    {
      number: "4",
      title: "Track & Develop",
      description: "Monitor progress with continuous support from our community."
    }
  ];

  return (
    <section className="w-full bg-primary-50 py-20 px-4 md:px-8 my-16" dir="ltr">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Headings */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            How Auticare Works
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto font-medium">
            Four simple steps to get a comprehensive screening and ongoing support
          </p>
        </div>

        {/* Steps Container & Connecting Line */}
        <div className="relative w-full">
          
          {/* Horizontal Connecting Line */}
          <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-[2px] bg-gray-200/60" />

          {/* Four Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                
                {/* Step Number Circle */}
                <div className="w-16 h-16 rounded-full bg-primary-500 text-white flex items-center justify-center text-xl font-bold mb-6 shadow-sm">
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-gray-500 text-[14px] leading-relaxed max-w-[210px]">
                  {step.description}
                </p>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}