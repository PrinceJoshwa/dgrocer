// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import { config } from "@fortawesome/fontawesome-svg-core";
// import "@fortawesome/fontawesome-svg-core/styles.css";

// // Prevent Font Awesome from automatically adding its CSS
// config.autoAddCss = false;

// const WhatsAppChat: React.FC = () => {
//     const [isOpen, setIsOpen] = useState<boolean>(false);
//     const [isMounted, setIsMounted] = useState<boolean>(false);

//     const phoneNumber: string = "+919445477032"; // Replace with your actual WhatsApp number
//     const message: string = encodeURIComponent(
//         "Hello, I need more information about the Temple."
//     );

//     const toggleChat = (): void => setIsOpen((prev) => !prev);

//     useEffect(() => {
//         setIsMounted(true);
//     }, []);

//     if (!isMounted) {
//         return null;
//     }

//     return (
//         <>
//             <motion.div
//                 className="fixed bottom-4 right-4 z-50"
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ type: "spring", stiffness: 260, damping: 20 }}
//             >
//                 {/* Blinking Animation Wrapper */}
//                 <motion.div
//                     className="absolute inset-0 rounded-full bg-green-400 opacity-50"
//                     animate={{
//                         scale: [1, 1.4, 1],
//                         opacity: [0.4, 0.1, 0.4],
//                     }}
//                     transition={{
//                         duration: 1.5,
//                         repeat: Infinity,
//                     }}
//                 />

//                 <button
//                     onClick={toggleChat}
//                     className="relative flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors"
//                 >
//                     <FontAwesomeIcon icon={faWhatsapp} size="2x" />
//                 </button>

//             </motion.div>

//             <AnimatePresence>
//                 {isOpen && (
//                     <motion.div
//                         className="fixed bottom-20 right-4 bg-white p-4 rounded-lg shadow-xl z-50 w-72"
//                         initial={{ opacity: 0, y: 50, scale: 0.3 }}
//                         animate={{ opacity: 1, y: 0, scale: 1 }}
//                         exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
//                         transition={{ type: "spring", damping: 25, stiffness: 500 }}
//                     >
//                         <button
//                             onClick={toggleChat}
//                             className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//                         >
//                             <FontAwesomeIcon icon={faTimes} size="lg" />
//                         </button>

//                         <h3 className="text-lg font-semibold mb-2">Chat with us on WhatsApp</h3>
//                         <p className="text-sm text-gray-600 mb-4">
//                             Click the button below to place a Order                     </p>

//                         <a
//                             href={`https://wa.me/${phoneNumber}?text=${message}`}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="bg-green-500 text-white py-2 px-4 rounded-full inline-block text-center w-full hover:bg-green-600 transition-colors"
//                         >
//                             <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
//                             Whatsapp Order
//                         </a>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </>
//     );
// };

// export default WhatsAppChat;
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const WhatsAppChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // ✅ WhatsApp API URL (no number logic inside component)
  const whatsappUrl =
    "https://wa.me/919445477032?text=Hi%20D%27GROCER%2C%20I%20would%20like%20to%20place%20an%20order%20for%20your%20premium%20gift%20boxes";

  const toggleChat = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.div
        className="fixed bottom-4 right-4 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-green-400"
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />

        <button
          onClick={toggleChat}
          className="relative w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </button>
      </motion.div>

      {/* Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-4 bg-white p-4 rounded-lg shadow-xl z-50 w-72"
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", damping: 25, stiffness: 500 }}
          >
            <button
              onClick={toggleChat}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <h3 className="text-lg font-semibold mb-2">
              Chat with us on WhatsApp
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              Click below to place your order instantly.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white py-2 px-4 rounded-full w-full inline-flex items-center justify-center hover:bg-green-600 transition-colors"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
              WhatsApp Order
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppChat;
