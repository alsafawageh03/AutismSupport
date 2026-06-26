

export default function HeroSection() {
  return (
    <section className="w-full relative overflow-hidden bg-white min-h-[90vh] flex flex-col justify-between items-center px-4 md:px-8 pt-32 pb-16" dir="rtl">
      
      {/* طبقة التدرج اللوني الصحيحة (أبيض في المنتصف وسماوي خفيف جداً على الأطراف) */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(135deg,_hsl(199_89%_94%)_0%,_hsl(0_0%_100%)_50%,_hsl(168_82%_95%)_100%)]">
  </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center my-auto">
        
        {/* الشارة العلوية الصغيرة (Badge) - ستظهر الآن كاملة بشكل ممتاز */}
        <div className="inline-flex items-center gap-1.5 bg-[#e6f8f3] text-[#00a878] text-sm font-medium px-4 py-1.5 rounded-full mb-8 border border-[#ccf2e6]/50">
          <span>منصة آمنة ومعتمدة</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
          </svg>
        </div>

        {/* العنوان الرئيسي الكبير الحاد والواضح */}
        <h1 className="text-[42px] md:text-[62px] font-bold text-[#1e293b] leading-[1.25] mb-6 tracking-tight">
          رحلة دعم وتمكين <br />
          <span className="text-[#00b686]">لأمهات أطفال التوحد</span>
        </h1>

        {/* الوصف النصي الفرعي المطابق تماماً */}
        <p className="text-[#64748b] text-base md:text-xl font-normal max-w-2xl mx-auto leading-relaxed mb-10 px-4">
          منصة متكاملة توفر أدوات تقييم ذكية، تقارير مفصلة، ومجتمع داعم لمساعدتكِ في رحلة رعاية طفلك
        </p>

        {/* منطقة الأزرار جنبًا إلى جنب */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mb-14">
          
          {/* زر ابدأ رحلة التشخيص الأخضر */}
          <button className="w-full sm:w-auto bg-[#00b686] text-white font-bold text-lg px-8 py-3.5 rounded-[14px] shadow-sm hover:bg-[#00a378] transition-all duration-200 flex items-center justify-center gap-2 group">
            <span>ابدأ رحلة التشخيص</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </button>

          {/* زر انضمي للمجتمع المفرغ */}
          <button className="w-full sm:w-auto bg-white border-2 border-[#00b686] text-[#00b686] font-bold text-lg px-8 py-3.5 rounded-[14px] hover:bg-[#f0fdf4] transition-all duration-200">
            انضمي للمجتمع
          </button>

        </div>

      </div>

      {/* شريط الإحصائيات السفلي الصغير (المميزات) - تم فصله ليكون في نهاية السكشن ليعطي مساحة مثالية قبل السكشن التالي */}
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs md:text-sm text-[#475569] border-t border-gray-100/60 pt-6 w-full relative z-10">
        
        <div className="flex items-center gap-1.5">
          <span className="text-[#00b686] bg-[#e6f8f3] w-5 h-5 rounded-full flex items-center justify-center text-[10px]">✓</span>
          <span>+١,٠٠٠ أم مستفيدة</span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-[#00b686] bg-[#e6f8f3] w-5 h-5 rounded-full flex items-center justify-center text-[10px]">✓</span>
          <span>تقييمات دقيقة</span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-[#00b686] bg-[#e6f8f3] w-5 h-5 rounded-full flex items-center justify-center text-[10px]">✓</span>
          <span>دعم متخصص ٢٤/٧</span>
        </div>

      </div>

    </section>
  );
}