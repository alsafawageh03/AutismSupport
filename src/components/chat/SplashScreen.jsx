import { motion } from "framer-motion";

import logo from "../../assets/chatbot-loading.jpg"; 

function SplashScreen() {
  return (
    <div className="splash-screen">
      <motion.img
        src={logo}
        alt="Olfa Smart Assistant"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: [0.8, 1, 1.2, 1],
        }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
    </div>
  );
}

export default SplashScreen;