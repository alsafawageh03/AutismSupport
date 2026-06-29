import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 right-0 left-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/50 px-6 md:px-12 py-4" dir="ltr">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Side: Logo */}
        <div className="flex items-center gap-2 text-primary-500 text-2xl font-bold tracking-tight">
          <span>Auticare</span>
          <div className="bg-primary-500 text-white p-1 rounded-full w-7 h-7 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </div>
        </div>

        {/* Center Side: Navigation Links */}
        <div className="hidden md:flex items-center gap-1 text-sm font-medium text-gray-500">
          <a href="#home" className="bg-primary-50 text-primary-500 px-4 py-2 rounded-full font-semibold transition-colors">
            Home
          </a>
          <a href="#child-profile" className="hover:text-gray-900 px-3 py-2 rounded-full transition-colors">
            Child Profile
          </a>
          <a href="#assessment" className="hover:text-gray-900 px-3 py-2 rounded-full transition-colors">
            Screening
          </a>
          <a href="#reports" className="hover:text-gray-900 px-3 py-2 rounded-full transition-colors">
            Reports
          </a>
          <a href="#support" className="hover:text-gray-900 px-3 py-2 rounded-full transition-colors">
            AI Support
          </a>
          <a href="#community" className="hover:text-gray-900 px-3 py-2 rounded-full transition-colors">
            Community
          </a>
        </div>

        {/* Right Side: Action Buttons */}
        <div className="flex items-center gap-3">
          
          {/* Account Button */}
          <button className="border-2 border-primary-500 text-primary-500 font-bold text-sm px-4 py-2 rounded-[12px] hover:bg-primary-50 transition-all duration-150 flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <span>My Account</span>
          </button>

          {/* Login Link */}
          <Link 
            to="/login" 
            className="bg-primary-500 text-white font-bold text-sm px-5 py-2.5 rounded-[12px] hover:bg-primary-600 shadow-sm transition-all duration-150"
          >
            Login
          </Link>

        </div>

      </div>
    </nav>
  );
}