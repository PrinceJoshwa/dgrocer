"use client"

import { motion, Variants, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Leaf, Star, Sparkles } from "lucide-react"
import { useRef } from "react"

export default function HeroSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  }

  const textRevealVariants: Variants = {
    hidden: { opacity: 0, y: 80, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100,
        duration: 0.8,
      },
    },
  }

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  }

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FDFBF7] via-white to-emerald-50/30 overflow-hidden pt-20 md:pt-0">
      
      {/* ==============================
          ENHANCED BACKGROUND ELEMENTS 
         ============================== */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none">
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1], 
            rotate: [0, 180, 360],
            x: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -right-[10%] w-[700px] h-[700px] bg-gradient-to-br from-emerald-200/40 to-emerald-100/20 rounded-full blur-[120px]"
        />
        
        <motion.div
          animate={{ 
            scale: [1, 1.4, 1], 
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[10%] -left-[10%] w-[600px] h-[600px] bg-gradient-to-tr from-orange-100/40 to-amber-100/30 rounded-full blur-[100px]"
        />

        {/* Floating Sparkles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0], 
              scale: [0, 1, 0],
              y: [-100, -600],
              x: [0, Math.random() * 200 - 100],
            }}
            transition={{ 
              duration: 3 + Math.random() * 2, 
              repeat: Infinity, 
              delay: i * 1.5,
              ease: "easeOut"
            }}
            className="absolute bottom-0 text-emerald-400/30"
            style={{ left: `${10 + i * 20}%` }}
          >
            <Sparkles size={20 + Math.random() * 15} />
          </motion.div>
        ))}

        {/* Floating Leaves */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`leaf-${i}`}
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: [0, 0.3, 0], 
              y: -700, 
              x: [0, Math.random() * 300 - 150],
              rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
            }}
            transition={{ 
              duration: 12 + Math.random() * 8, 
              repeat: Infinity, 
              delay: i * 3,
              ease: "linear"
            }}
            className="absolute bottom-0 text-emerald-700/10"
            style={{ left: `${15 + i * 25}%` }}
          >
            <Leaf size={35 + Math.random() * 30} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="container mx-auto px-4 md:px-6 lg:px-8 z-10 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* ==============================
              LEFT CONTENT (Enhanced Typography)
             ============================== */}
          <div className="space-y-8 text-center lg:text-left">
            
            {/* Animated Badge */}
            <motion.div variants={fadeUpVariants} className="flex justify-center lg:justify-start">
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-50 to-emerald-100/50 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-widest uppercase shadow-sm"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Star className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                </motion.div>
                Premium Selection
              </motion.span>
            </motion.div>

            {/* Main Title with Enhanced Animation */}
            <div className="overflow-hidden">
              <motion.h1 
                variants={textRevealVariants} 
                className="text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] font-black text-transparent bg-clip-text bg-gradient-to-br from-[#044116] via-[#055a1a] to-[#044116] tracking-tighter"
              >
                D'GROCER
              </motion.h1>
            </div>

            <div className="overflow-hidden">
              <motion.h2 
                variants={textRevealVariants}
                className="text-2xl md:text-3xl lg:text-4xl font-serif text-slate-600 italic"
              >
                Dry Fruits, Nuts & Seeds
              </motion.h2>
            </div>

            <motion.p 
              variants={fadeUpVariants} 
              className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Experience the crunch of health. Premium quality dry fruits, thoughtfully curated and beautifully packaged for the people you care about.
            </motion.p>

            <motion.div variants={fadeUpVariants} className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#products"
                whileHover={{ scale: 1.08, boxShadow: "0 20px 40px rgba(4, 65, 22, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#044116] to-[#055a1a] text-white font-bold rounded-full overflow-hidden shadow-2xl shadow-emerald-900/30"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Collection 
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowDown className="w-5 h-5 -rotate-90" />
                  </motion.div>
                </span>
                {/* Animated Gradient Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#065f20] to-[#044116]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center gap-2 px-6 py-4 text-[#044116] font-semibold bg-emerald-50/50 rounded-full border border-emerald-100"
              >
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-emerald-500"
                />
                Eat right, Stay healthy
              </motion.div>
            </motion.div>
          </div>

          {/* ==============================
              RIGHT IMAGE (Enhanced Glass Card)
             ============================== */}
          <motion.div 
            variants={fadeUpVariants} 
            className="relative flex justify-center lg:justify-end"
          >
            {/* Enhanced Glass Frame */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
              className="relative p-5 bg-white/50 backdrop-blur-xl border border-white/60 rounded-[2rem] shadow-2xl shadow-emerald-900/20"
            >
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto group">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  src="https://res.cloudinary.com/dhgdjsfqh/image/upload/v1766821284/ok_one_1_fn9fcw.png"
                  alt="D'GROCER Premium Gift Box"
                  className="w-full h-full object-cover"
                />
                
                {/* Animated Shine Effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-white/40 via-white/20 to-transparent"
                  initial={{ x: "-100%", y: "-100%" }}
                  whileHover={{ x: "100%", y: "100%" }}
                  transition={{ duration: 0.8 }}
                />
              </div>

              {/* Animated Badge */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-10 -left-10 w-28 h-28 bg-gradient-to-br from-white to-emerald-50 rounded-full flex items-center justify-center p-1.5 shadow-xl shadow-emerald-900/20 hidden md:flex"
              >
                <div className="w-full h-full rounded-full border-2 border-dashed border-emerald-400 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="text-[11px] font-black text-emerald-800 uppercase tracking-wider text-center leading-tight"
                  >
                    100% <br/> Natural
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 to-orange-400/20 rounded-[2.5rem] blur-2xl -z-10 opacity-50" />
            </motion.div>
          </motion.div>

        </div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      {/* <motion.a
        href="#products"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer flex flex-col items-center gap-2 group"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-xs font-semibold text-[#044116]/60 uppercase tracking-wider">Scroll</span>
        <div className="w-6 h-10 border-2 border-[#044116]/30 rounded-full flex items-start justify-center p-1.5 group-hover:border-[#044116] transition-colors">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[#044116] rounded-full"
          />
        </div>
      </motion.a> */}
    </section>
  )
}