// "use client"

// import { motion, Variants } from "framer-motion"
// import { Leaf, Gift, Sparkles, Users } from "lucide-react"
// import { useInView } from "react-intersection-observer"

// export default function BrandHighlights() {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.1,
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


//   // const itemVariants = {
//   //   hidden: { opacity: 0, y: 30 },
//   //   visible: {
//   //     opacity: 1,
//   //     y: 0,
//   //     transition: { duration: 0.6, ease: "easeOut" },
//   //   },
//   // }

//   const highlights = [
//     {
//       icon: Leaf,
//       title: "Premium Quality",
//       description: "Hand-picked dry fruits and nuts of the highest quality",
//     },
//     {
//       icon: Gift,
//       title: "Beautiful Packaging",
//       description: "Exquisitely designed gift boxes perfect for any occasion",
//     },
//     {
//       icon: Sparkles,
//       title: "Healthy & Fresh",
//       description: "Eat right, stay healthy with our nutritious selections",
//     },
//     {
//       icon: Users,
//       title: "Perfect for All",
//       description: "Ideal for corporates, friends, relatives & bulk orders",
//     },
//   ]

//   return (
//     <section ref={ref} className="py-20 md:py-32 bg-white">
//       <div className="container mx-auto px-4 md:px-6 lg:px-8">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           className="space-y-16"
//         >
//           <motion.div variants={itemVariants} className="text-center space-y-4">
//             <h2 className="text-4xl md:text-5xl font-bold text-[#044116]">Why Choose D'GROCER?</h2>
//             <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//               We deliver premium quality with exceptional attention to detail
//             </p>
//           </motion.div>

//           <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {highlights.map((highlight, idx) => {
//               const Icon = highlight.icon
//               return (
//                 <motion.div
//                   key={idx}
//                   variants={itemVariants}
//                   whileHover={{ y: -10 }}
//                   className="p-8 rounded-xl border border-emerald-100 hover:border-[#044116] hover:shadow-lg transition-all bg-gradient-to-br from-white to-emerald-50"
//                 >
//                   <div className="mb-6 inline-block p-3 bg-[#044116] rounded-lg">
//                     <Icon className="w-6 h-6 text-white" />
//                   </div>
//                   <h3 className="text-xl font-semibold text-[#044116] mb-3">{highlight.title}</h3>
//                   <p className="text-slate-600 text-sm leading-relaxed">{highlight.description}</p>
//                 </motion.div>
//               )
//             })}
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
"use client"

import { motion, Variants } from "framer-motion"
import { Leaf, Gift, Sparkles, Users } from "lucide-react"
import { useInView } from "react-intersection-observer"

export default function BrandHighlights() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Increased delay for a more distinct step effect
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        duration: 0.8,
      },
    },
  }

  const highlights = [
    {
      icon: Leaf,
      title: "Premium Quality",
      description: "Hand-picked dry fruits and nuts of the highest quality",
    },
    {
      icon: Gift,
      title: "Beautiful Packaging",
      description: "Exquisitely designed gift boxes perfect for any occasion",
    },
    {
      icon: Sparkles,
      title: "Healthy & Fresh",
      description: "Eat right, stay healthy with our nutritious selections",
    },
    {
      icon: Users,
      title: "Perfect for All",
      description: "Ideal for corporates, friends, relatives & bulk orders",
    },
  ]

  return (
    // Added a subtle gradient background for depth instead of plain white
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-white to-emerald-50/50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-20"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-block p-2 px-4 rounded-full bg-emerald-100/50 text-[#044116] font-semibold text-sm tracking-wider mb-2">
              OUR PROMISE
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#044116] tracking-tight">
              Why Choose D'GROCER?
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              We deliver premium quality with exceptional attention to detail, ensuring every bite is a celebration of health and taste.
            </p>
          </motion.div>

          {/* Grid Section */}
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {highlights.map((highlight, idx) => {
              const Icon = highlight.icon
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -12, transition: { duration: 0.3 } }}
                  className="group relative p-8 rounded-2xl bg-white border border-slate-100 hover:border-emerald-200 shadow-sm hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-300"
                >
                  {/* Decorative Gradient Blob on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 to-emerald-50/0 group-hover:from-emerald-50/50 group-hover:to-transparent rounded-2xl transition-all duration-500" />

                  <div className="relative z-10">
                    {/* Icon Container with Color Swap Animation */}
                    <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-emerald-50 text-[#044116] group-hover:bg-[#044116] group-hover:text-white transition-colors duration-300 shadow-inner">
                      <Icon className="w-7 h-7" strokeWidth={1.5} />
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#044116] transition-colors">
                      {highlight.title}
                    </h3>
                    
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed group-hover:text-slate-600">
                      {highlight.description}
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