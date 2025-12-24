// // "use client"

// // import { motion, Variants } from "framer-motion"
// // import { useInView } from "react-intersection-observer"

// // export default function ProductShowcase() {
// //   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: {
// //         staggerChildren: 0.12,
// //         delayChildren: 0.1,
// //       },
// //     },
// //   }

// //   const itemVariants: Variants = {
// //   hidden: { opacity: 0, y: 30 },
// //   visible: {
// //     opacity: 1,
// //     y: 0,
// //     transition: {
// //       duration: 0.6,
// //       ease: [0.16, 1, 0.3, 1],
// //     },
// //   },
// // }

// //   const products = [
// //     {
// //       name: "Economy",
// //       weight: "120g",
// //       price: "₹199",
// //       items: ["Almond 30g", "Cashew 30g", "Black Raisins 30g", "Fig 30g"],
// //       image: "",
// //     },
// //     {
// //       name: "Standard",
// //       weight: "200g",
// //       price: "₹299",
// //       items: ["Almond 50g", "Cashew 50g", "Black Raisins 50g", "Fig 50g"],
// //       image: "",
// //       badge: "Popular",
// //     },
// //     {
// //       name: "Premium",
// //       weight: "300g",
// //       price: "₹499",
// //       items: ["Almond 50g", "Cashew 50g", "Black Raisins 50g", "Fig 50g", "Pistachio 50g", "Pumpkin Seed 50g"],
// //       image: "",
// //     },
// //     {
// //       name: "Elite",
// //       weight: "475g",
// //       price: "₹599",
// //       items: [
// //         "Almond 75g",
// //         "Cashew 75g",
// //         "Black Raisins 75g",
// //         "Pumpkin Seed 75g",
// //         "Raisins 75g",
// //         "Pistachio 50g",
// //         "Fig 50g",
// //       ],
// //       image: "",
// //     },
// //   ]

// //   return (
// //     <section ref={ref} className="py-20 md:py-32 bg-gradient-to-br from-slate-50 to-white">
// //       <div className="container mx-auto px-4 md:px-6 lg:px-8">
// //         <motion.div
// //           variants={containerVariants}
// //           initial="hidden"
// //           animate={inView ? "visible" : "hidden"}
// //           className="space-y-16"
// //         >
// //           <motion.div variants={itemVariants} className="text-center space-y-4">
// //             <h2 className="text-4xl md:text-5xl font-bold text-[#044116]">Gift Boxes Collection</h2>
// //             <p className="text-lg text-slate-600 max-w-2xl mx-auto">
// //               Thoughtfully curated premium gift boxes for every occasion and budget
// //             </p>
// //           </motion.div>

// //           <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// //             {products.map((product, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 variants={itemVariants}
// //                 whileHover={{ y: -15, transition: { duration: 0.3 } }}
// //                 className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300"
// //               >
// //                 {product.badge && (
// //                   <div className="absolute top-4 right-4 z-10">
// //                     <span className="inline-block px-4 py-1 bg-[#044116] text-white text-xs font-semibold rounded-full">
// //                       {product.badge}
// //                     </span>
// //                   </div>
// //                 )}

// //                 {/* Image container */}
// //                 <div className="relative h-64 md:h-72 overflow-hidden bg-gradient-to-br from-emerald-50 to-slate-50">
// //                   <img
// //                     src={product.image || "/placeholder.svg"}
// //                     alt={product.name}
// //                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// //                   />
// //                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
// //                 </div>

// //                 {/* Content */}
// //                 <div className="p-6 space-y-4">
// //                   <div>
// //                     <h3 className="text-xl font-bold text-[#044116]">{product.name}</h3>
// //                     <p className="text-sm text-slate-500">{product.weight}</p>
// //                   </div>

// //                   <div className="space-y-2">
// //                     <p className="text-xs text-slate-600 font-medium">CONTAINS:</p>
// //                     <ul className="space-y-1">
// //                       {product.items.map((item, i) => (
// //                         <li key={i} className="text-xs text-slate-600 flex items-start">
// //                           <span className="text-[#044116] mr-2">•</span>
// //                           {item}
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   </div>

// //                   <div className="pt-4 border-t border-emerald-100">
// //                     <p className="text-3xl font-bold text-[#044116]">{product.price}</p>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   )
// // }

// "use client"

// import { motion, type Variants } from "framer-motion"
// import { useInView } from "react-intersection-observer"

// export default function ProductShowcase() {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   })

//   /* =======================
//      ANIMATION VARIANTS
//   ======================= */

//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.12,
//         delayChildren: 0.1,
//       },
//     },
//   }

//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: [0.16, 1, 0.3, 1], // TS-safe easeOut
//       },
//     },
//   }

//   /* =======================
//      PRODUCT DATA (FROM PDF)
//   ======================= */

//   const products = [
//     {
//       name: "Economy",
//       weight: "120g",
//       price: "₹199",
//       items: [
//         "Almond – 30g",
//         "Cashew – 30g",
//         "Black Kismiss – 30g",
//         "Fig – 30g",
//       ],
//       image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766506305/Screenshot_2025-12-23_213202_jwz81l.png",
//     },
//     {
//       name: "Standard",
//       weight: "200g",
//       price: "₹299",
//       badge: "Popular",
//       items: [
//         "Almond – 50g",
//         "Cashew – 50g",
//         "Black Kismiss – 50g",
//         "Fig – 50g",
//       ],
//       image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766506306/Screenshot_2025-12-23_213143_zieuou.png",
//     },
//     {
//       name: "Standard Plus",
//       weight: "200g",
//       price: "₹399",
//       items: [
//         "Almond – 50g",
//         "Cashew – 50g",
//         "Kismiss – 50g",
//         "Pista – 50g",
//       ],
//       image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766506307/Screenshot_2025-12-23_213221_oimy6c.png",
//     },
//     {
//       name: "Premium",
//       weight: "300g",
//       price: "₹499",
//       items: [
//         "Almond – 50g",
//         "Cashew – 50g",
//         "Black Kismiss – 50g",
//         "Fig – 50g",
//         "Pista – 50g",
//         "Pumpkin Seed – 50g",
//       ],
//       image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766506306/Screenshot_2025-12-23_213307_fve6uc.png",
//     },
//     {
//       name: "Royal",
//       weight: "300g",
//       price: "₹699",
//       items: [
//         "Almond – 50g",
//         "Cashew – 50g",
//         "Kismiss – 50g",
//         "Walnut – 50g",
//         "Pista – 50g",
//         "Pumpkin Seed – 50g",
//       ],
//       image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766506303/Screenshot_2025-12-23_213256_rupwjd.png",
//     },
//     {
//       name: "Royal Plus",
//       weight: "300g",
//       price: "₹699",
//       items: [
//         "Almond – 75g",
//         "Cashew – 75g",
//         "Kismiss – 75g",
//         "Pista – 75g",
//       ],
//       image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766506304/Screenshot_2025-12-23_213320_pnpsfc.png",
//     },
//     {
//       name: "Classic",
//       weight: "350g",
//       price: "₹599",
//       items: [
//         "Almond – 50g",
//         "Cashew – 50g",
//         "Black Kismiss – 50g",
//         "Fig – 50g",
//         "Pista – 50g",
//         "Pumpkin Seed – 50g",
//         "Kismiss – 50g",
//       ],
//       image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766506304/Screenshot_2025-12-23_213357_zbjnmm.png",
//     },
//     {
//       name: "Elite",
//       weight: "475g",
//       price: "₹999",
//       items: [
//         "Almond – 75g",
//         "Cashew – 75g",
//         "Black Kismiss – 75g",
//         "Pumpkin Seed – 75g",
//         "Kismiss – 75g",
//         "Pista – 50g",
//         "Fig – 50g",
//       ],
//       image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766506300/Screenshot_2025-12-23_213342_af5xur.png",
//     },
//     {
//       name: "Luxury",
//       weight: "550g",
//       price: "₹1499",
//       badge: "Premium",
//       items: [
//         "Almond – 200g",
//         "Cashew – 50g",
//         "Black Kismiss – 50g",
//         "Fig – 50g",
//         "Pista – 50g",
//         "Pumpkin Seed – 50g",
//         "Kismiss – 50g",
//         "Walnut – 50g",
//       ],
//       image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766506297/Screenshot_2025-12-23_213416_ppgh3o.png",
//     },
//   ]

//   /* =======================
//      UI
//   ======================= */

//   return (
//     <section
//       ref={ref}
//       className="py-20 md:py-32 bg-gradient-to-br from-slate-50 to-white"
//     >
//       <div className="container mx-auto px-4 md:px-6 lg:px-8">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           className="space-y-16"
//         >
//           {/* Heading */}
//           <motion.div variants={itemVariants} className="text-center space-y-4">
//             <h2 className="text-4xl md:text-5xl font-bold text-[#044116]">
//               Gift Boxes Collection
//             </h2>
//             <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//               Thoughtfully curated premium dry fruit gift boxes for every
//               occasion and budget
//             </p>
//           </motion.div>

//           {/* Products Grid */}
//           <motion.div
//             variants={containerVariants}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
//           >
//             {products.map((product, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={itemVariants}
//                 whileHover={{ y: -12 }}
//                 className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300"
//               >
//                 {product.badge && (
//                   <div className="absolute top-4 right-4 z-10">
//                     <span className="px-4 py-1 bg-[#044116] text-white text-xs font-semibold rounded-full">
//                       {product.badge}
//                     </span>
//                   </div>
//                 )}

//                 {/* Image */}
//                 <div className="relative h-64 bg-gradient-to-br from-emerald-50 to-slate-50">
//                   <img
//                     src={product.image || "/placeholder.svg"}
//                     alt={product.name}
//                     className="w-full h-full object-fill group-hover:scale-110 transition-transform duration-500"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="p-6 space-y-4">
//                   <div>
//                     <h3 className="text-xl font-bold text-[#044116]">
//                       {product.name}
//                     </h3>
//                     <p className="text-sm text-slate-500">{product.weight}</p>
//                   </div>

//                   <ul className="space-y-1 text-sm text-slate-600">
//                     {product.items.map((item, i) => (
//                       <li key={i} className="flex gap-2">
//                         <span className="text-[#044116]">•</span>
//                         {item}
//                       </li>
//                     ))}
//                   </ul>

//                   <div className="pt-4 border-t">
//                     <p className="text-3xl font-bold text-[#044116]">
//                       {product.price}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Footer Text */}
//           <div className="text-center space-y-2">
//             <p className="font-semibold text-[#044116]">
//               Perfect Gift for Corporates & Festive Occasions
//             </p>
//             <p className="text-slate-600">
//               Bulk orders & customized gift boxes accepted
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

"use client"

import { motion, type Variants, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState, useRef, MouseEvent } from "react"

export default function ProductShowcase() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  /* =======================
     ANIMATION VARIANTS
  ======================= */

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
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.6,
      },
    },
  }

  /* =======================
     PRODUCT DATA (UNCHANGED)
  ======================= */

  const products = [
    {
      name: "Economy",
      weight: "120g",
      price: "₹199",
      items: [
        "Almond – 30g",
        "Cashew – 30g",
        "Black Kismiss – 30g",
        "Fig – 30g",
      ],
      image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766506305/Screenshot_2025-12-23_213202_jwz81l.png",
    },
    {
      name: "Standard",
      weight: "200g",
      price: "₹299",
      badge: "Popular",
      items: [
        "Almond – 50g",
        "Cashew – 50g",
        "Black Kismiss – 50g",
        "Fig – 50g",
      ],
      image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766506306/Screenshot_2025-12-23_213143_zieuou.png",
    },
    {
      name: "Standard Plus",
      weight: "200g",
      price: "₹399",
      items: [
        "Almond – 50g",
        "Cashew – 50g",
        "Kismiss – 50g",
        "Pista – 50g",
      ],
      image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766506307/Screenshot_2025-12-23_213221_oimy6c.png",
    },
    {
      name: "Premium",
      weight: "300g",
      price: "₹499",
      items: [
        "Almond – 50g",
        "Cashew – 50g",
        "Black Kismiss – 50g",
        "Fig – 50g",
        "Pista – 50g",
        "Pumpkin Seed – 50g",
      ],
      image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766506306/Screenshot_2025-12-23_213307_fve6uc.png",
    },
    {
      name: "Royal",
      weight: "300g",
      price: "₹699",
      items: [
        "Almond – 50g",
        "Cashew – 50g",
        "Kismiss – 50g",
        "Walnut – 50g",
        "Pista – 50g",
        "Pumpkin Seed – 50g",
      ],
      image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766506303/Screenshot_2025-12-23_213256_rupwjd.png",
    },
    {
      name: "Royal Plus",
      weight: "300g",
      price: "₹699",
      items: [
        "Almond – 75g",
        "Cashew – 75g",
        "Kismiss – 75g",
        "Pista – 75g",
      ],
      image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766506304/Screenshot_2025-12-23_213320_pnpsfc.png",
    },
    {
      name: "Classic",
      weight: "350g",
      price: "₹599",
      items: [
        "Almond – 50g",
        "Cashew – 50g",
        "Black Kismiss – 50g",
        "Fig – 50g",
        "Pista – 50g",
        "Pumpkin Seed – 50g",
        "Kismiss – 50g",
      ],
      image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766506304/Screenshot_2025-12-23_213357_zbjnmm.png",
    },
    {
      name: "Elite",
      weight: "475g",
      price: "₹999",
      items: [
        "Almond – 75g",
        "Cashew – 75g",
        "Black Kismiss – 75g",
        "Pumpkin Seed – 75g",
        "Kismiss – 75g",
        "Pista – 50g",
        "Fig – 50g",
      ],
      image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766506300/Screenshot_2025-12-23_213342_af5xur.png",
    },
    {
      name: "Luxury",
      weight: "550g",
      price: "₹1499",
      badge: "Premium",
      items: [
        "Almond – 200g",
        "Cashew – 50g",
        "Black Kismiss – 50g",
        "Fig – 50g",
        "Pista – 50g",
        "Pumpkin Seed – 50g",
        "Kismiss – 50g",
        "Walnut – 50g",
      ],
      image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766506297/Screenshot_2025-12-23_213416_ppgh3o.png",
    },
  ]

  /* =======================
     PRODUCT CARD COMPONENT
  ======================= */

  const ProductCard = ({ product, index }: { product: typeof products[0], index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)

    // Magnetic effect values
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const springConfig = { damping: 20, stiffness: 300 }
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), springConfig)
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), springConfig)

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

    return (
      <motion.div
        ref={cardRef}
        variants={itemVariants}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        whileHover={{ y: -15, transition: { duration: 0.3 } }}
        className="group relative bg-white rounded-3xl flex flex-col border border-slate-100 hover:border-emerald-300 shadow-md hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500 overflow-hidden"
      >
        {/* Badge */}
        {product.badge && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
            className="absolute top-4 right-4 z-20"
          >
            <span className="px-3 py-1.5 bg-gradient-to-r from-[#044116] to-[#055a1a] text-white text-[10px] font-black uppercase tracking-wider rounded-full shadow-xl shadow-emerald-900/30">
              {product.badge}
            </span>
          </motion.div>
        )}

        {/* Image Container with Enhanced Effects */}
        <div className="relative h-72 overflow-hidden bg-gradient-to-br from-emerald-50/50 via-white to-orange-50/30 p-6 flex items-center justify-center">
          <motion.div
            className="relative w-full h-full"
            animate={isHovered ? { scale: 1.15 } : { scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </motion.div>

          {/* Animated Gradient Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.8 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Shine Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent"
            initial={{ x: "-100%", y: "-100%" }}
            animate={isHovered ? { x: "100%", y: "100%" } : { x: "-100%", y: "-100%" }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Title & Weight */}
          <div className="mb-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl md:text-2xl font-black text-slate-900 group-hover:text-[#044116] transition-colors">
                {product.name}
              </h3>
              <span className="text-xs font-bold text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                {product.weight}
              </span>
            </div>
          </div>

          {/* Ingredients List */}
          <div className="flex-grow space-y-3 mb-6">
            <div className="text-xs font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">
              What's Inside
            </div>
            <ul className="space-y-2">
              {product.items.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center text-sm text-slate-600 group-hover:text-slate-700"
                >
                  <motion.span
                    animate={isHovered ? { scale: [1, 1.5, 1] } : { scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 mr-3 flex-shrink-0"
                  />
                  <span className="truncate font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Footer: Price & Action */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
            <div>
              <p className="text-xs text-slate-400 font-semibold mb-1">Price</p>
              <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#044116] to-[#055a1a]">
                {product.price}
              </p>
            </div>

            <motion.a
              href="https://wa.me/919445477032?text=Hi%20D%27GROCER%2C%20I%20would%20like%20to%20place%20an%20order%20for%20your%20premium%20gift%20boxes"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-5 py-2.5 bg-gradient-to-r from-emerald-50 to-emerald-100 text-[#044116] text-sm font-black rounded-xl group-hover:from-[#044116] group-hover:to-[#055a1a] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg overflow-hidden"
            >
              <span className="relative z-10">Order Now</span>
            </motion.a>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/0 via-emerald-400/0 to-emerald-400/0 group-hover:from-emerald-400/20 group-hover:via-emerald-400/10 group-hover:to-orange-400/20 rounded-3xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
    )
  }

  /* =======================
     UI
  ======================= */

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-gradient-to-b from-white via-[#FDFBF7] to-emerald-50/30"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Heading */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-emerald-50 border border-emerald-200 text-[#044116] font-black text-xs tracking-widest uppercase shadow-sm"
            >
              Our Selection
            </motion.div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#044116] via-[#055a1a] to-[#044116] tracking-tight">
              Gift Boxes Collection
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Thoughtfully curated premium dry fruit gift boxes for every
              occasion and budget. Each box is a celebration of health and taste.
            </p>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          >
            {products.map((product, idx) => (
              <ProductCard key={idx} product={product} index={idx} />
            ))}
          </motion.div>

          {/* Footer Text */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-white via-emerald-50/50 to-white p-10 rounded-3xl border border-emerald-100 shadow-lg max-w-4xl mx-auto"
          >
            <p className="font-black text-[#044116] text-xl md:text-2xl mb-3">
              Perfect Gift for Corporates & Festive Occasions
            </p>
            <p className="text-slate-600 text-lg">
              Need bulk orders? We offer customized gift boxes tailored to your requirements.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}