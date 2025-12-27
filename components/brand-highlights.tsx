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

import { motion, Variants, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Leaf, Gift, Sparkles, Users } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { useState, useRef, MouseEvent } from "react"

export default function BrandHighlights() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
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
      color: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-50 to-green-50",
    },
    {
      icon: Gift,
      title: "Custom packaging",
      description: "Exquisitely designed gift boxes perfect for any occasion",
      color: "from-orange-500 to-amber-600",
      bgGradient: "from-orange-50 to-amber-50",
    },
    {
      icon: Sparkles,
      title: "Healthy & Fresh",
      description: "Eat right, stay healthy with our nutritious selections",
      color: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
    },
    {
      icon: Users,
      title: "Occasional hampers",
      description: "Ideal for corporates, friends, relatives & bulk orders",
      color: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
    },
  ]

  // Individual Card Component with 3D effect
  const HighlightCard = ({ highlight, index }: { highlight: typeof highlights[0], index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const springConfig = { damping: 25, stiffness: 300 }
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), springConfig)
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig)

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      x.set((e.clientX - centerX) / rect.width)
      y.set((e.clientY - centerY) / rect.height)
    }

    const handleMouseLeave = () => {
      x.set(0)
      y.set(0)
      setIsHovered(false)
    }

    const Icon = highlight.icon

    return (
      <motion.div
        ref={cardRef}
        variants={itemVariants}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        whileHover={{ y: -15, transition: { duration: 0.3 } }}
        className="group relative p-8 rounded-3xl bg-white border border-slate-100 hover:border-emerald-300 shadow-md hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500"
      >
        {/* Animated Background Gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${highlight.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          initial={{ scale: 0.8 }}
          animate={isHovered ? { scale: 1 } : { scale: 0.8 }}
        />

        <div className="relative z-10">
          {/* Floating Icon Container */}
          <motion.div
            className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 text-[#044116] group-hover:from-[#044116] group-hover:to-[#055a1a] group-hover:text-white transition-all duration-500 shadow-lg shadow-emerald-900/10 group-hover:shadow-xl group-hover:shadow-emerald-900/20"
            animate={isHovered ? {
              y: [-5, 5, -5],
              rotate: [0, 5, -5, 0]
            } : { y: 0, rotate: 0 }}
            transition={{
              duration: 2,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut"
            }}
          >
            <Icon className="w-9 h-9" strokeWidth={1.5} />
          </motion.div>

          {/* Title with gradient on hover */}
          <motion.h3
            className="text-2xl md:text-2xl font-black text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#044116] group-hover:to-[#055a1a] transition-all duration-300"
            animate={isHovered ? { x: [0, 5, 0] } : { x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {highlight.title}
          </motion.h3>

          <p className="text-slate-600 text-base leading-relaxed group-hover:text-slate-700 transition-colors">
            {highlight.description}
          </p>
        </div>

        {/* Decorative corner element */}
        <motion.div
          className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-100/50 to-emerald-200/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={isHovered ? { scale: [1, 1.5, 1] } : { scale: 1 }}
          transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
        />

        {/* Hover Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/0 via-emerald-400/0 to-emerald-400/0 group-hover:from-emerald-400/20 group-hover:via-emerald-400/10 group-hover:to-orange-400/20 rounded-3xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
    )
  }

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-gradient-to-b from-emerald-50/30 via-white to-white overflow-hidden">

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-10 right-10 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-10 left-10 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial={false}
          animate={inView ? "visible" : "visible"}
          className="space-y-20"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto space-y-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block p-2 px-5 rounded-full bg-gradient-to-r from-emerald-100 to-emerald-50 border border-emerald-200 text-[#044116] font-black text-sm tracking-wider uppercase shadow-sm"
            >
              OUR PROMISE
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#044116] via-[#055a1a] to-[#044116] tracking-tight"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Why Choose D'GROCER?
            </motion.h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              We deliver premium quality with exceptional attention to detail, ensuring every bite is a celebration of health and taste.
            </p>
          </motion.div>

          {/* Grid Section */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {highlights.map((highlight, idx) => (
              <HighlightCard key={idx} highlight={highlight} index={idx} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}