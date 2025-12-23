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

import { motion, type Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"

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
        staggerChildren: 0.1,
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
        damping: 20,
        stiffness: 100,
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
     UI
  ======================= */

  return (
    <section
      ref={ref}
      className="py-24 md:py-24 bg-[#FDFBF7]" // Warmer, premium off-white background
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
             <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-[#044116] font-bold text-xs tracking-widest uppercase">
              Our Selection
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#044116] tracking-tight">
              Gift Boxes Collection
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Thoughtfully curated premium dry fruit gift boxes for every
              occasion and budget.
            </p>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"
          >
            {products.map((product, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-2xl flex flex-col border border-slate-100 hover:border-emerald-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-3 right-3 z-20">
                    <span className="px-3 py-1 bg-[#044116] text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg">
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-emerald-50/50 to-orange-50/30 p-6 flex items-center justify-center">
                  <motion.img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-contain drop-shadow-md group-hover:drop-shadow-xl transition-all duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                  {/* Subtle shine overlay */}
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Title & Weight */}
                  <div className="mb-4">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#044116] transition-colors">
                        {product.name}
                      </h3>
                      <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded-md">
                        {product.weight}
                      </span>
                    </div>
                  </div>

                  {/* Ingredients List */}
                  <div className="flex-grow space-y-3 mb-6">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-1">
                      Includes
                    </div>
                    <ul className="space-y-1.5">
                      {product.items.map((item, i) => (
                        <li key={i} className="flex items-center text-sm text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 mr-2.5 flex-shrink-0" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer: Price & Action */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Price</p>
                      <p className="text-2xl font-bold text-[#044116]">
                        {product.price}
                      </p>
                    </div>
<a
  href="https://wa.me/919445477032?text=Hi%20D%27GROCER%2C%20I%20would%20like%20to%20place%20an%20order%20for%20your%20premium%20gift%20boxes"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="px-4 py-2 bg-emerald-50 text-[#044116] text-sm font-semibold rounded-lg group-hover:bg-[#044116] group-hover:text-white transition-colors duration-300">
    Order
  </button>
</a>

                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer Text */}
          <motion.div variants={itemVariants} className="text-center bg-white p-8 rounded-2xl border border-emerald-100 shadow-sm max-w-3xl mx-auto">
            <p className="font-bold text-[#044116] text-lg mb-2">
              Perfect Gift for Corporates & Festive Occasions
            </p>
            <p className="text-slate-600">
              Need bulk orders? We offer customized gift boxes tailored to your requirements.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}