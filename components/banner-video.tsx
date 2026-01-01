// // "use client"

// // import { motion } from "framer-motion"
// // import { Play } from "lucide-react"

// // export default function BannerSection() {
// //   return (
// //     <section className="w-full py-20 md:py-32 bg-[#FDFBF7] relative overflow-hidden">
      
// //       {/* Background decorative blob */}
// //       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-100/50 rounded-full blur-[100px] pointer-events-none" />

// //       <div className="container mx-auto px-4 relative z-10">
// //         <motion.div
// //           initial={{ opacity: 0, y: 40 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8, ease: "easeOut" }}
// //           className="flex flex-col items-center gap-8"
// //         >
// //           {/* Section Heading */}
// //           <div className="text-center space-y-4 mb-4">
// //              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-[#044116] text-xs font-bold tracking-widest uppercase">
// //                 Watch Our Process
// //              </span>
// //             <h2 className="text-3xl md:text-5xl font-black text-[#044116]">
// //               Unboxing Happiness
// //             </h2>
// //           </div>

// //           {/* VIDEO CONTAINER - REEL STYLE */}
// //           <div className="relative group">
            
// //             {/* 1. The Phone Frame Container */}
// //             <div className="relative w-full max-w-[320px] md:max-w-[360px] aspect-[9/16] rounded-[2.5rem] border-[8px] border-white shadow-2xl shadow-emerald-900/20 overflow-hidden bg-black z-10">
              
// //               {/* 2. The Video Player */}
// //               <video
// //                 className="w-full h-full object-cover"
// //                 autoPlay
// //                 loop
// //                 muted
// //                 playsInline
// //                 // Optional: Add a poster image for loading state
// //                 // poster="/path-to-placeholder.jpg" 
// //               >
// //                 {/* 👇 PASTE YOUR VIDEO LINK HERE 👇 */}
// //                 <source src="YOUR_VIDEO_URL_HERE" type="video/mp4" />
// //                 Your browser does not support the video tag.
// //               </video>

// //               {/* Gradient Overlay for Text Visibility */}
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              
// //               {/* Optional: Overlay Text inside video */}
// //               <div className="absolute bottom-8 left-0 w-full text-center text-white p-4">
// //                 <p className="font-bold text-lg">Premium Gift Boxes</p>
// //                 <p className="text-xs opacity-90">Curated with Love</p>
// //               </div>
// //             </div>

// //             {/* 3. Decorative Elements behind the phone */}
// //             <motion.div 
// //               animate={{ rotate: 360 }}
// //               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
// //               className="absolute -top-10 -right-10 w-24 h-24 text-emerald-200/50 z-0 hidden md:block"
// //             >
// //               <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
// //                 <path d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z" />
// //               </svg>
// //             </motion.div>
            
// //             <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 to-orange-400/20 rounded-[3rem] blur-2xl -z-10 opacity-70" />
// //           </div>

// //         </motion.div>
// //       </div>
// //     </section>
// //   )
// // }

// "use client"

// import { motion } from "framer-motion"
// import { CheckCircle2, ArrowRight, Star } from "lucide-react"

// export default function BannerSection() {
//   const features = [
//     "Prices starting from just ₹199 to ₹1499",
//     "Perfect for Corporate & Bulk Orders",
//     "Fully Customizable Gift Hampers",
//     "Premium Quality Dry Fruits & Nuts",
//   ]

//   return (
//     <section className="py-20 md:py-32 bg-[#FDFBF7] overflow-hidden">
//       <div className="container mx-auto px-4 md:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
//           {/* ====================================
//               LEFT SIDE: VIDEO (Centered)
//              ==================================== */}
//           <motion.div 
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             // ✅ CHANGED: lg:justify-end -> lg:justify-center (Centers video in left half)
//             className="relative flex justify-center lg:justify-center"
//           >
//             {/* Phone-like Container for Video */}
//             <div className="relative w-full max-w-[320px] md:max-w-[360px] aspect-[9/16] rounded-[2.5rem] border-8 border-white bg-black shadow-2xl shadow-emerald-900/20 overflow-hidden z-10">
//               <video
//                 className="w-full h-full object-cover"
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//               >
//                 {/* 👇 PASTE YOUR VIDEO LINK HERE 👇 */}
//                 <source src="YOUR_VIDEO_URL_HERE" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
              
//               {/* Overlay Gradient */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
//             </div>

//             {/* Decorative Elements */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-emerald-100/50 rounded-full blur-3xl -z-10" />
            
//             <motion.div
//               animate={{ y: [0, -10, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
//             >
//               <div className="bg-emerald-100 p-2 rounded-full">
//                 <Star className="w-5 h-5 text-[#044116] fill-current" />
//               </div>
//               <div>
//                 <p className="text-xs text-slate-500 font-bold uppercase">New Year Special</p>
//                 <p className="text-[#044116] font-black text-lg">2026 Collection</p>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* ====================================
//               RIGHT SIDE: CONTENT (Adjusted Spacing)
//              ==================================== */}
//           <motion.div 
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             // ✅ ADDED: lg:pl-10 to push text slightly right for better balance
//             className="space-y-8 text-center lg:text-left lg:pl-10"
//           >
//             <div className="space-y-4">
//               <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold tracking-widest uppercase">
//                 Limited Time Offer
//               </span>
//               <h2 className="text-4xl md:text-5xl font-black text-[#044116] leading-tight">
//                 Celebrate New Year <br /> with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">Health & Happiness</span>
//               </h2>
//               <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
//                 Start 2026 on a healthy note! Discover our exclusive range of dry fruit gift hampers, elegantly designed for your friends, family, and corporate partners.
//               </p>
//             </div>

//             {/* Feature List */}
//             <ul className="space-y-4 max-w-lg mx-auto lg:mx-0">
//               {features.map((feature, idx) => (
//                 <motion.li 
//                   key={idx}
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.4 + (idx * 0.1) }}
//                   className="flex items-center gap-3 text-slate-700 font-medium"
//                 >
//                   <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
//                   {feature}
//                 </motion.li>
//               ))}
//             </ul>

//             {/* CTA Button */}
//             <motion.div 
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="pt-4"
//             >
//               <a
//                 href="https://wa.me/919445477032?text=Hi%20D'GROCER%2C%20I%20saw%20your%20New%20Year%20video%20and%20want%20to%20order%20gift%20boxes."
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 px-8 py-4 bg-[#044116] text-white rounded-full font-bold shadow-lg shadow-emerald-900/20 hover:bg-[#055a1a] transition-colors"
//               >
//                 Order via WhatsApp
//                 <ArrowRight className="w-5 h-5" />
//               </a>
//             </motion.div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight, Star, Volume2, VolumeX } from "lucide-react"
import { useState, useRef } from "react"

export default function BannerSection() {
  // State to manage sound
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Function to toggle sound
  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  const features = [
    "Prices starting from just ₹199 to ₹1499",
    "Perfect for Corporate & Bulk Orders",
    "Fully Customizable Gift Hampers",
    "Premium Quality Dry Fruits & Nuts",
  ]

  return (
    <section className="py-20 md:py-32 bg-[#FDFBF7] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* ====================================
              LEFT SIDE: VIDEO (Centered)
             ==================================== */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-center"
          >
            {/* Phone-like Container for Video */}
            <div className="relative w-full max-w-[320px] md:max-w-[360px] aspect-[9/16] rounded-[2.5rem] border-8 border-white bg-black shadow-2xl shadow-emerald-900/20 overflow-hidden z-10">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted // Starts muted (required for autoplay)
                playsInline
              >
                {/* 👇 PASTE YOUR VIDEO LINK HERE 👇 */}
                <source src="https://ik.imagekit.io/rk1ma1kth/VID-20260101-WA0007.mp4?tr=orig&updatedAt=1767263856996" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Sound Toggle Button */}
              <button
                onClick={toggleSound}
                className="absolute top-6 right-6 z-30 p-2.5 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full text-white transition-all duration-300 border border-white/20 shadow-lg"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-emerald-100/50 rounded-full blur-3xl -z-10" />
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
            >
              <div className="bg-emerald-100 p-2 rounded-full">
                <Star className="w-5 h-5 text-[#044116] fill-current" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase">New Year Special</p>
                <p className="text-[#044116] font-black text-lg">2026 Collection</p>
              </div>
            </motion.div>
          </motion.div>

          {/* ====================================
              RIGHT SIDE: CONTENT (Adjusted Spacing)
             ==================================== */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 text-center lg:text-left lg:pl-10"
          >
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold tracking-widest uppercase">
                Limited Time Offer
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#044116] leading-tight">
                Celebrate New Year <br /> with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">Health & Happiness</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Start 2026 on a healthy note! Discover our exclusive range of dry fruit gift hampers, elegantly designed for your friends, family, and corporate partners.
              </p>
            </div>

            {/* Feature List */}
            <ul className="space-y-4 max-w-lg mx-auto lg:mx-0">
              {features.map((feature, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (idx * 0.1) }}
                  className="flex items-center gap-3 text-slate-700 font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  {feature}
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="pt-4"
            >
              <a
                href="https://wa.me/919445477032?text=Hi%20D'GROCER%2C%20I%20saw%20your%20New%20Year%20video%20and%20want%20to%20order%20gift%20boxes."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#044116] text-white rounded-full font-bold shadow-lg shadow-emerald-900/20 hover:bg-[#055a1a] transition-colors"
              >
                Order via WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}