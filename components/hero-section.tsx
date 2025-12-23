// "use client"

// import { motion, Variants } from "framer-motion"
// import { ArrowDown } from "lucide-react"

// export default function HeroSection() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.2,
//       },
//     },
//   }

//   const itemVariants: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },
// }

//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-white to-slate-50 pt-20 md:pt-0">
//       {/* Decorative elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           className="absolute w-96 h-96 bg-emerald-50 rounded-full blur-3xl -top-40 -right-40"
//           animate={{ y: [0, 30, 0] }}
//           transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
//         />
//         <motion.div
//           className="absolute w-96 h-96 bg-emerald-50 rounded-full blur-3xl -bottom-40 -left-40"
//           animate={{ y: [0, -30, 0] }}
//           transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
//         />
//       </div>

//       <motion.div
//         className="container mx-auto px-4 md:px-6 lg:px-8 z-10"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left content */}
//           <div className="space-y-8">
//             <motion.div variants={itemVariants} className="space-y-4">
//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#044116] leading-tight">D'GROCER</h1>
//               <p className="text-xl md:text-2xl text-slate-600 font-light">Dry Fruits, Nuts & Seeds</p>
//             </motion.div>

//             <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-xl">
//               Premium quality dry fruits and nuts thoughtfully curated and beautifully packaged for the people you care
//               about.
//             </motion.p>

//             <motion.div variants={itemVariants} className="text-3xl md:text-4xl font-semibold text-[#044116]">
//               Eat right, Stay healthy
//             </motion.div>

// <motion.a
//   href="#products"
//   variants={itemVariants}
//   whileHover={{ scale: 1.05 }}
//   whileTap={{ scale: 0.95 }}
//   className="inline-block px-8 py-4 bg-[#044116] text-white font-semibold rounded-lg hover:bg-[#033010] transition-colors text-lg"
// >
//   Explore Gift Boxes
// </motion.a>

//           </div>

//           {/* Right image */}
//           <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
//             <motion.div
//               animate={{ y: [0, 20, 0] }}
//               transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
//               className="relative"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-emerald-100 rounded-2xl blur-2xl opacity-60" />
//               <img
//                 src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766505510/WhatsApp_Image_2025-12-23_at_7.47.52_PM_rwqkpl.jpg"
//                 alt="D'GROCER Premium Gift Box"
//                 className="relative w-full max-w-md h-auto rounded-2xl shadow-2xl"
//               />
//             </motion.div>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Scroll indicator */}
//       <motion.div
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
//       >
//         <ArrowDown className="w-6 h-6 text-[#044116]" />
//       </motion.div>
//     </section>
//   )
// }
"use client"

import { motion, Variants } from "framer-motion"
import { ArrowDown, Leaf, Star } from "lucide-react"

export default function HeroSection() {
  
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const textRevealVariants: Variants = {
    hidden: { opacity: 0, y: 100, rotate: 2 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for "luxury" feel
      },
    },
  }

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#FDFBF7] overflow-hidden pt-20 md:pt-0">
      
      {/* ==============================
          CREATIVE BACKGROUND ELEMENTS 
         ============================== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Gradient Orb Top Right */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
          className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-[100px]"
        />
        
        {/* Soft Gradient Orb Bottom Left */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
          className="absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[80px]"
        />

        {/* Floating Particles (Leaves) */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100, x: Math.random() * 100 }}
            animate={{ 
              opacity: [0, 0.4, 0], 
              y: -500, 
              x: Math.random() * 200,
              rotate: 360 
            }}
            transition={{ 
              duration: 15 + Math.random() * 10, 
              repeat: Number.POSITIVE_INFINITY, 
              delay: i * 5 
            }}
            className="absolute bottom-0 left-[20%] text-emerald-800/10"
            style={{ left: `${20 + i * 30}%` }}
          >
            <Leaf size={40 + Math.random() * 40} />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="container mx-auto px-4 md:px-6 lg:px-8 z-10 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* ==============================
              LEFT CONTENT (Typography)
             ============================== */}
          <div className="space-y-8 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <motion.div variants={fadeUpVariants} className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-bold tracking-widest uppercase">
                <Star className="w-3 h-3 fill-emerald-800" />
                Premium Selection
              </span>
            </motion.div>

            {/* Main Title with Masking Effect */}
            <div className="overflow-hidden">
              <motion.h1 
                variants={textRevealVariants} 
                className="text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.9] font-extrabold text-[#044116] tracking-tight"
              >
                D'GROCER
              </motion.h1>
            </div>

            <div className="overflow-hidden">
              <motion.h2 
                variants={textRevealVariants}
                className="text-2xl md:text-3xl lg:text-4xl font-serif text-slate-500 italic"
              >
                Dry Fruits, Nuts & Seeds
              </motion.h2>
            </div>

            <motion.p 
              variants={fadeUpVariants} 
              className="text-lg text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Experience the crunch of health. Premium quality dry fruits, thoughtfully curated and beautifully packaged for the people you care about.
            </motion.p>

            <motion.div variants={fadeUpVariants} className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#products"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-[#044116] text-white font-semibold rounded-full overflow-hidden shadow-xl shadow-emerald-900/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Collection 
                  <ArrowDown className="w-4 h-4 -rotate-90 group-hover:rotate-0 transition-transform duration-300" />
                </span>
                {/* Button Hover Fill Effect */}
                <div className="absolute inset-0 bg-[#065f20] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
              </motion.a>
              
              <div className="flex items-center justify-center gap-2 px-6 py-4 text-[#044116] font-medium">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Eat right, Stay healthy
              </div>
            </motion.div>
          </div>

          {/* ==============================
              RIGHT IMAGE (Glass Card)
             ============================== */}
          <motion.div 
            variants={fadeUpVariants} 
            className="relative flex justify-center lg:justify-end"
          >
            {/* The "Glass" Frame Container */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
              className="relative p-4 bg-white/40 backdrop-blur-md border border-white/50 rounded-3xl shadow-2xl shadow-emerald-900/10"
            >
              {/* Image Itself */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto">
                <img
                  src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766505510/WhatsApp_Image_2025-12-23_at_7.47.52_PM_rwqkpl.jpg"
                  alt="D'GROCER Premium Gift Box"
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Shine Effect on Image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Decorative "Sticker" on the image card */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -bottom-8 -left-8 w-24 h-24 bg-white rounded-full flex items-center justify-center p-1 shadow-lg hidden md:flex"
              >
                <div className="w-full h-full rounded-full border border-dashed border-emerald-300 flex items-center justify-center text-[10px] font-bold text-emerald-800 uppercase tracking-widest text-center">
                  100% <br/> Natural
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer text-[#044116]/50 hover:text-[#044116] transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  )
}