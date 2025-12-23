
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
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
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

  // Mapped specific icons to your content for a more creative look
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
    // Changed to Dark Emerald background for contrast/premium feel
    <section ref={ref} className="relative py-24 md:py-32 bg-[#044116] overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-emerald-900/40 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4 max-w-3xl mx-auto">
             <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-emerald-100 font-medium text-xs tracking-widest uppercase backdrop-blur-sm">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Experience the <span className="text-emerald-300">D'GROCER</span> Difference
            </h2>
            <p className="text-emerald-100/80 text-lg max-w-2xl mx-auto">
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
                  whileHover={{ y: -8 }}
                  className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-emerald-400/50 transition-all duration-300"
                >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 to-emerald-400/0 group-hover:from-emerald-400/10 group-hover:to-transparent rounded-2xl transition-all duration-500" />
                  
                  <div className="relative flex flex-col items-start gap-4">
                    {/* Icon Box */}
                    <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-900 text-emerald-300 group-hover:text-white group-hover:scale-110 shadow-lg shadow-black/20 transition-all duration-300">
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    
                    {/* Text */}
                    <p className="text-white/90 font-medium text-lg leading-snug group-hover:text-white transition-colors">
                      {benefit.text}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}