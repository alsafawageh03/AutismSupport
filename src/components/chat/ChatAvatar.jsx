import logo from "../../assets/chatbot-logo.jpg";

function ChatAvatar({ size = 60 }) {
  return (
    <div 
      className="relative flex items-center justify-center select-none"
      style={{ width: size, height: size }}
    >
      {/* 1. Animated Spinner Border */}
      <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 border-r-blue-400 animate-spin z-0"></div>
      
      {/* 2. Static Background Border (Gives depth under the spinner) */}
      <div className="absolute inset-0 rounded-full border-4 border-slate-100 z-0"></div>

      {/* 3. Rounded Avatar Image */}
      <img
        src={logo}
        alt="Olfa Logo"
        className="w-full h-full rounded-full object-cover relative z-10 p-[2px] bg-white"
      />
    </div>
  );
}

export default ChatAvatar;