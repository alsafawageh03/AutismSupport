

export default function Footer() {
  return (
    <footer className="w-full bg-[#2a3746] text-gray-400 pt-16 pb-8 px-4 md:px-8 border-t border-gray-700/20" dir="rtl">
      <div className="max-w-6xl mx-auto">
        
        {/* شبكة الأعمدة الأربعة المطابقة تماماً للصورة */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 pb-14">
          
          {/* العمود الأول: لوجو المنصة والوصف */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-[#00b686] text-2xl font-bold">
              <span>أوتيكير</span>
              <div className="bg-[#00b686] text-white p-1 rounded-full w-7 h-7 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </div>
            </div>
            <p className="text-gray-400 text-[14px] leading-relaxed max-w-[250px]">
              منصة متخصصة لدعم أمهات أطفال التوحد، نقدم أدوات تقييم ذكية ومجتمع داعم.
            </p>
          </div>

          {/* العمود الثاني: روابط سريعة بنفس الأسماء بالصورة */}
          <div>
            <h4 className="text-white text-[16px] font-bold mb-5">روابط سريعة</h4>
            <ul className="flex flex-col gap-3 text-[14px] text-gray-400">
              <li><a href="#home" className="hover:text-[#00b686] transition-colors">الرئيسية</a></li>
              <li><a href="#assessment" className="hover:text-[#00b686] transition-colors">التقييم الذكي</a></li>
              <li><a href="#community" className="hover:text-[#00b686] transition-colors">مجتمع الأمهات</a></li>
              <li><a href="#support" className="hover:text-[#00b686] transition-colors">الدعم الذكي</a></li>
            </ul>
          </div>

          {/* العمود الثالث: تواصل معنا بالأيقونات والنصوص المطابقة */}
          <div>
            <h4 className="text-white text-[16px] font-bold mb-5">تواصل معنا</h4>
            <ul className="flex flex-col gap-3.5 text-[14px] text-gray-400">
              <li className="flex items-center gap-2">
                <span className="text-[#00b686] text-base">✉</span>
                <span className="font-sans">support@auticare.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00b686] text-base">📞</span>
                <span className="font-sans" dir="ltr">+4567 123 50 966</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00b686] text-base">📍</span>
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>

          {/* العمود الرابع: إخلاء مسؤولية بالنص الحقيقي المكتوب في موقعك */}
          <div>
            <h4 className="text-white text-[16px] font-bold mb-5">إخلاء مسؤولية</h4>
            <p className="text-gray-400 text-[12px] leading-relaxed max-w-[240px]">
              المعلومات المقدمة في هذه المنصة هي لأغراض تعليمية وتوعوية فقط ولا تُعد بديلاً عن الاستشارة الطبية المتخصصة. يُرجى استشارة طبيب أو أخصائي مختص للحصول على تشخيص دقيق.
            </p>
          </div>

        </div>

        {/* الشريط السفلي: الحقوق والسياسات */}
        <div className="pt-6 border-t border-gray-700/30 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-gray-400">
          <div className="flex gap-4 order-2 md:order-1">
            <a href="#privacy" className="hover:text-white transition-colors">سياسة الخصوصية</a>
            <a href="#terms" className="hover:text-white transition-colors">الشروط والأحكام</a>
          </div>
          <div className="order-1 md:order-2">
            <p>2024 أوتيكير. جميع الحقوق محفوظة.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}