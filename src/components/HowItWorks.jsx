

export default function HowItWorks() {
  const steps = [
    {
      number: "١",
      title: "إنشاء ملف الطفل",
      description: "أضيفي معلومات طفلك الأساسية والملاحظات السلوكية"
    },
    {
      number: "٢",
      title: "إجراء التقييم",
      description: "أجيبي على أسئلة سلوكية بسيطة ومصممة بعناية"
    },
    {
      number: "٣",
      title: "استلام التقرير",
      description: "احصلي على تقرير تفصيلي مع توصيات مخصصة"
    },
    {
      number: "٤",
      title: "متابعة وتطوير",
      description: "تابعي التقدم مع دعم مستمر من مجتمعنا"
    }
  ];

  return (
    // الخلفية السماوية الثابتة مع مسافات السكشن الأصلية
    <section className="w-full bg-[#f5fffd] py-20 px-4 md:px-8 my-16" dir="rtl">
      <div className="max-w-5xl mx-auto">
        
        {/* العناوين الرئيسية */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e293b] mb-4">
            كيف يعمل أوتيكير؟
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto font-medium">
            أربع خطوات بسيطة للحصول على تقييم شامل ودعم مستمر
          </p>
        </div>

        {/* حاوية الخطوات والخط الواصل */}
        <div className="relative w-full">
          
          {/* الخط الأفقي الواصل ويمر خلف الدوائر مباشرة بدون تداخل */}
          <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-[2px] bg-gray-200/50" />

          {/* شبكة الخطوات الأربعة (تم تقريب المسافات باستخدام gap-4) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                
                {/* الدائرة الرقمية: تم إزالة الـ border تماماً لتكون خضراء سادة صافية */}
                <div className="w-16 h-16 rounded-full bg-[#00b686] text-white flex items-center justify-center text-xl font-bold mb-6 shadow-sm">
                  {step.number}
                </div>

                {/* عنوان الخطوة */}
                <h3 className="text-xl font-bold text-[#1e293b] mb-3">
                  {step.title}
                </h3>

                {/* وصف الخطوة */}
                <p className="text-slate-400 text-[14px] leading-relaxed max-w-[210px]">
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