
// "use client"

// import { motion, type Variants } from "framer-motion"
// import { useInView } from "react-intersection-observer"
// import { CheckCircle2 } from "lucide-react"

// export default function BenefitsSection() {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.1,
//       },
//     },
//   }

//   const itemVariants: Variants = {
//     hidden: { opacity: 0, x: -30 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.6,
//         ease: [0.16, 1, 0.3, 1], // ✅ TS-safe easeOut
//       },
//     },
//   }

//   const benefits = [
//     "Fresh & Premium Quality Ingredients",
//     "Beautifully Packaged Gift Boxes",
//     "Perfect for Corporates & Bulk Orders",
//     "Customizable Gift Hampers Available",
//     "Healthy & Nutritious Selection",
//     "Competitive Pricing Starting from ₹199",
//     "Quick Delivery & Order Processing",
//     "Trusted Brand for Festive Occasions",
//   ]

//   return (
//     <section ref={ref} className="py-20 md:py-32 bg-white">
//       <div className="container mx-auto px-4 md:px-6 lg:px-8">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           className="space-y-12"
//         >
//           <motion.div variants={itemVariants} className="text-center space-y-4">
//             <h2 className="text-4xl md:text-5xl font-bold text-[#044116]">
//               Why Our Customers Love Us
//             </h2>
//           </motion.div>

//           <motion.div
//             variants={containerVariants}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
//           >
//             {benefits.map((benefit, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={itemVariants}
//                 className="flex items-start gap-4 p-4 rounded-lg hover:bg-emerald-50 transition-colors"
//               >
//                 <CheckCircle2 className="w-6 h-6 text-[#044116] flex-shrink-0 mt-1" />
//                 <p className="text-slate-700 font-medium text-lg">{benefit}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
"use client"

import { motion, type Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  CheckCircle2,
  Gift,
  Truck,
  Leaf,
  Users,
  Sparkles,
  ShieldCheck,
  IndianRupee
} from "lucide-react"

export default function BenefitsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  const benefits = [
    { text: "Fresh & Premium Quality Ingredients", icon: Leaf },
    { text: "Beautifully Packaged Gift Boxes", icon: Gift },
    { text: "Perfect for Corporates & Bulk Orders", icon: Users },
    { text: "Customizable Gift Hampers Available", icon: Sparkles },
    { text: "Healthy & Nutritious Selection", icon: ShieldCheck },
    { text: "Competitive Pricing Starting from ₹199", icon: IndianRupee },
    { text: "Quick Delivery & Order Processing", icon: Truck },
    { text: "Trusted Brand for Festive Occasions", icon: CheckCircle2 },
  ]

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-gradient-to-br from-[#044116] via-[#033d14] to-[#044116] overflow-hidden">

      {/* Enhanced Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -50, 0],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-emerald-900/40 rounded-full blur-3xl"
        />

        {/* Floating Sparkles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0, 0.6, 0],
              y: -800,
              x: [0, Math.random() * 200 - 100],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear"
            }}
            className="absolute bottom-0 text-emerald-300/20"
            style={{ left: `${10 + i * 12}%` }}
          >
            <Sparkles size={15 + Math.random() * 10} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6 max-w-3xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-emerald-100 font-black text-sm tracking-widest uppercase shadow-lg"
            >
              Why Choose Us
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight"
              animate={{
                textShadow: [
                  "0 0 20px rgba(16, 185, 129, 0.3)",
                  "0 0 40px rgba(16, 185, 129, 0.5)",
                  "0 0 20px rgba(16, 185, 129, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-200 to-emerald-300">D'GROCER</span> Difference
            </motion.h2>
            <p className="text-emerald-100/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We go the extra mile to ensure every box delivers happiness, health, and premium quality.
            </p>
          </motion.div>

          {/* Grid Layout */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 hover:border-emerald-400/50 transition-all duration-500"
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 to-emerald-400/0 group-hover:from-emerald-400/10 group-hover:to-transparent rounded-3xl transition-all duration-500" />

                  <div className="relative flex flex-col items-start gap-4">
                    {/* Animated Icon Box */}
                    <motion.div
                      className="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-900 text-emerald-300 group-hover:from-emerald-600 group-hover:to-emerald-700 group-hover:text-white shadow-lg shadow-black/20 group-hover:shadow-emerald-500/30 transition-all duration-500"
                      animate={{
                        boxShadow: [
                          "0 10px 30px rgba(0, 0, 0, 0.2)",
                          "0 10px 40px rgba(16, 185, 129, 0.3)",
                          "0 10px 30px rgba(0, 0, 0, 0.2)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      whileHover={{
                        rotate: [0, -5, 5, 0],
                        scale: 1.1
                      }}
                    >
                      <Icon className="w-7 h-7" strokeWidth={1.5} />
                    </motion.div>

                    {/* Text */}
                    <p className="text-white/90 font-bold text-lg leading-snug group-hover:text-white transition-colors">
                      {benefit.text}
                    </p>
                  </div>

                  {/* Decorative corner glow */}
                  <motion.div
                    className="absolute top-3 right-3 w-16 h-16 rounded-full bg-emerald-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Border glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/20 group-hover:via-emerald-400/20 group-hover:to-emerald-500/20 rounded-3xl blur-sm -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}