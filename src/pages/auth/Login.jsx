import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Heart } from 'lucide-react';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    loading(true);

    try {
      const response = await axios.post('https://autism.runasp.net/Api/V1/Authentication/SignIn', {
        email: email,
        password: password
      });

      if (response.data && response.data.token) {
        localStorage.setItem('token', response.data.token);
        alert('Logged in successfully! Redirecting...');
        window.location.href = '/child-profile'; 
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Something went wrong. Please check your credentials and try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50/40 via-white to-white flex items-center justify-center p-4" dir="ltr">
      <div className="w-full max-w-md bg-white rounded-3xl border border-gray-100 shadow-xl p-8 md:p-10 transition-all">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white shadow-md mb-3">
            <Heart className="w-6 h-6 fill-current" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Welcome to Auticare</h2>
          <p className="text-gray-500 text-sm mt-1">Log in to track your child's journey and skill development</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-100 text-red-600 text-sm p-3.5 rounded-2xl mb-5 text-center font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Email Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                <Mail className="w-5 h-5" />
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pr-4 pl-12 py-3.5 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:border-primary-500 focus:bg-white text-gray-800 transition-all text-sm"
                placeholder="example@mail.com"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-gray-700">Password</label>
              <a href="#" className="text-xs font-bold text-primary-500 hover:underline">Forgot Password?</a>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                <Lock className="w-5 h-5" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pr-12 pl-12 py-3.5 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:border-primary-500 focus:bg-white text-gray-800 transition-all text-sm"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-primary-500 text-white font-bold rounded-2xl hover:bg-primary-600 transition-all shadow-lg shadow-primary-500/10 disabled:bg-gray-300 disabled:shadow-none text-base mt-2 flex items-center justify-center"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Logging in...
              </span>
            ) : "Log In"}
          </button>
        </form>

        {/* Footer Link */}
        <div className="text-center mt-8 text-sm text-gray-500">
          Don't have an account?{' '}
          <a href="#" className="text-primary-500 font-bold hover:underline">Create your account</a>
        </div>

      </div>
    </div>
  );
}