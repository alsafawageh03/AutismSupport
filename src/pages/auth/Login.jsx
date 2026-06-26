import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Heart } from 'lucide-react';
import axios from 'axios';

export default function Login() {
  // تخرين قيم المدخلات (الإيميل والباسورد)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // حالات التحكم في الواجهة (إظهار الباسورد، رسائل الخطأ، وحالة التحميل)
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // دالة إرسال البيانات للـ API عند الضغط على زر تسجيل الدخول
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // 🚀 الربط المباشر بـ API السواجر الخاص بكم
      const response = await axios.post('https://autism.runasp.net/Api/V1/Authentication/SignIn', {
        email: email,
        password: password
      });

      // في حال نجاح العملية واستلام التوكن (Token) بنجاح
      if (response.data && response.data.token) {
        // حفظ التوكن في متصفح المستخدم للحفاظ على تسجيل الدخول
        localStorage.setItem('token', response.data.token);
        
        alert('تم تسجيل الدخول بنجاح! جاري توجيهك...');
        
        // التوجيه لصفحة ملف الطفل الداخلية (الداشبورد)
        window.location.href = '/child-profile'; 
      }
    } catch (err) {
      // التعامل مع أخطاء السيرفر (مثل: كلمة المرور خطأ أو الإيميل غير مسجل)
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('عذراً، حدث خطأ ما. تأكدي من صحة البيانات وحاولي مجدداً.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50/30 via-white to-white flex items-center justify-center p-4" dir="rtl">
      <div className="w-full max-w-md bg-white rounded-3xl border border-gray-100 shadow-xl p-8 md:p-10 transition-all">
        
        {/* اللوجو والترحيب بالأمهات */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white shadow-md mb-3">
            <Heart className="w-6 h-6 fill-current" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">مرحباً بكِ في أوتيكير</h2>
          <p className="text-gray-500 text-sm mt-1">سجلي الدخول لمتابعة رحلة طفلكِ وتطور مهاراته</p>
        </div>

        {/* صندوق إظهار الأخطاء في حال فشل تسجيل الدخول */}
        {error && (
          <div className="bg-red-50 border border-red-100 text-red-600 text-sm p-3.5 rounded-2xl mb-5 text-center font-medium">
            {error}
          </div>
        )}

        {/* نموذج تسجيل الدخول (Form) */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* حقل البريد الإلكتروني */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">البريد الإلكتروني</label>
            <div className="relative">
              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400">
                <Mail className="w-5 h-5" />
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-4 pr-12 py-3.5 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:border-teal-500 focus:bg-white text-gray-800 transition-all text-sm"
                placeholder="example@mail.com"
              />
            </div>
          </div>

          {/* حقل كلمة المرور */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-gray-700">كلمة المرور</label>
              <a href="#" className="text-xs font-bold text-teal-600 hover:underline">نسيتي كلمة المرور؟</a>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400">
                <Lock className="w-5 h-5" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-12 py-3.5 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:border-teal-500 focus:bg-white text-gray-800 transition-all text-sm"
                placeholder="••••••••"
              />
              {/* زر إظهار وإخفاء كلمة المرور (العين) */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* زر التقديم والإرسال */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-teal-600 text-white font-bold rounded-2xl hover:bg-teal-700 transition-all shadow-lg shadow-teal-100 disabled:bg-gray-300 disabled:shadow-none text-base mt-2 flex items-center justify-center"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                {/* شكل لودر بسيط أثناء انتظار السيرفر */}
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                جاري تسجيل الدخول...
              </span>
            ) : "تسجيل الدخول"}
          </button>
        </form>

        {/* رابط إنشاء حساب جديد */}
        <div className="text-center mt-8 text-sm text-gray-500">
          ليس لديكِ حساب؟{' '}
          <a href="#" className="text-teal-600 font-bold hover:underline">أنشئي حسابكِ الآن</a>
        </div>

      </div>
    </div>
  );
}