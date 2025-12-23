"use client"

import { motion, Variants } from "framer-motion"
import { ArrowDown } from "lucide-react"

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-white to-slate-50 pt-20 md:pt-0">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-emerald-50 rounded-full blur-3xl -top-40 -right-40"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-emerald-50 rounded-full blur-3xl -bottom-40 -left-40"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        />
      </div>

      <motion.div
        className="container mx-auto px-4 md:px-6 lg:px-8 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#044116] leading-tight">D'GROCER</h1>
              <p className="text-xl md:text-2xl text-slate-600 font-light">Dry Fruits, Nuts & Seeds</p>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-xl">
              Premium quality dry fruits and nuts thoughtfully curated and beautifully packaged for the people you care
              about.
            </motion.p>

            <motion.div variants={itemVariants} className="text-3xl md:text-4xl font-semibold text-[#044116]">
              Eat right, Stay healthy
            </motion.div>

<motion.a
  href="#products"
  variants={itemVariants}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="inline-block px-8 py-4 bg-[#044116] text-white font-semibold rounded-lg hover:bg-[#033010] transition-colors text-lg"
>
  Explore Gift Boxes
</motion.a>

          </div>

          {/* Right image */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-emerald-100 rounded-2xl blur-2xl opacity-60" />
              <img
                src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766505510/WhatsApp_Image_2025-12-23_at_7.47.52_PM_rwqkpl.jpg"
                alt="D'GROCER Premium Gift Box"
                className="relative w-full max-w-md h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ArrowDown className="w-6 h-6 text-[#044116]" />
      </motion.div>
    </section>
  )
}
