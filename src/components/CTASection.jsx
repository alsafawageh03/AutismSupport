
export default function CTASection() {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-8" dir="rtl">
      <div className="max-w-6xl mx-auto">
        {/* البانر الأخضر الرئيسي بحواف دائرية كبيرة */}
        <div className="bg-[#00b686] rounded-[24px] py-16 px-6 text-center flex flex-col items-center justify-center shadow-sm">
          
          {/* أيقونة القلب في الأعلى */}
          <div className="text-white mb-4">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="2" 
              stroke="currentColor" 
              className="w-14 h-14"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" 
              />
            </svg>
          </div>

          {/* العنوان الرئيسي للبانر */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wide">
            ابدأي رحلتك اليوم
          </h2>

          {/* الوصف المكتوب */}
          <p className="text-white/90 text-base md:text-lg font-normal mb-8 max-w-2xl leading-relaxed">
            انضمي إلى آلاف الأمهات اللاتي وجدن الدعم والتوجيه في أوتيكير
          </p>

          {/* زر التسجيل الأبيض الانسيابي */}
          <button className="bg-white text-[#00b686] font-bold text-lg px-10 py-3.5 rounded-[16px] shadow-md hover:bg-gray-55 transition-all duration-300">
            سجلي الآن مجاناً
          </button>

        </div>
      </div>
    </section>
  );
}