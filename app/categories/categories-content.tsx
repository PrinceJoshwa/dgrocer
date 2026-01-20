// "use client"

// import { motion, Variants } from "framer-motion"
// import Link from "next/link"
// import Header from "@/components/header"
// // import Footer from "@/components/footer"
// import { ArrowRight, Leaf, Flame, Sparkles, Gift } from "lucide-react"

// const categoryData = [
//   {
//     id: "dhal",
//     name: "Dals & Pulses",
//     path: "/dhal",
//     icon: Leaf,
//     color: "from-emerald-500 to-teal-600",
//     bgColor: "from-emerald-50 to-teal-50",
//     description:
//       "Premium quality dals and pulses sourced from the finest farms. Rich in protein and nutrition, hygienically packed for your family's health.",
//     highlights: ["Moong Dal", "Toor Dal", "Masoor Dal", "Chana Dal", "Urad Dal"],
//   },
//   {
//     id: "spices",
//     name: "Authentic Spices",
//     path: "/spices",
//     icon: Flame,
//     color: "from-orange-500 to-red-600",
//     bgColor: "from-orange-50 to-red-50",
//     description:
//       "Authentic Indian spices handpicked for their flavor and quality. Add the perfect aromatic touch to your traditional and modern dishes.",
//     highlights: ["Turmeric", "Chili Powder", "Coriander", "Cumin", "Garam Masala"],
//   },
//   {
//     id: "sweeteners",
//     name: "Pure Sweeteners",
//     path: "/groceries",
//     icon: Sparkles,
//     color: "from-amber-500 to-yellow-600",
//     bgColor: "from-amber-50 to-yellow-50",
//     description:
//       "Pure and natural sweeteners for your everyday cooking. From refined sugar to traditional jaggery, all hygienically packed.",
//     highlights: ["Sugar", "Jaggery", "Brown Sugar", "Rock Sugar"],
//   },
//   {
//     id: "gift-boxes",
//     name: "Premium Gift Boxes",
//     path: "/gift-boxes",
//     icon: Gift,
//     color: "from-pink-500 to-rose-600",
//     bgColor: "from-pink-50 to-rose-50",
//     description:
//       "Beautifully curated gift hampers perfect for any occasion. Share the goodness of quality groceries with your loved ones.",
//     highlights: ["Festival Boxes", "Family Hampers", "Corporate Gifts", "Custom Boxes"],
//   },
// ]

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.2,
//     },
//   },
// }

// const itemVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 20,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.4,
//       ease: [0.4, 0, 0.2, 1], // ✅ Material-style easeOut
//     },
//   },
// }

// export function CategoriesContent() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/30 to-white">
//       <Header />

//       {/* Hero Section */}
//       <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
//         <div className="absolute inset-0 -z-10">
//           <div className="absolute top-20 right-0 w-72 h-72 bg-emerald-100/30 rounded-full blur-3xl" />
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl" />
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto text-center"
//         >
//           <h1 className="text-5xl md:text-6xl font-black text-[#044116] mb-6 leading-tight">
//             Explore Our Categories
//           </h1>
//           <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
//             Discover premium quality groceries across all our carefully curated categories. From essential dals to authentic spices, everything you need for your kitchen.
//           </p>

//           {/* Free Delivery Badge */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.3, duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-orange-50 border border-emerald-200 rounded-full px-6 py-3 mb-12"
//           >
//             <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" />
//             <span className="text-sm font-semibold text-[#044116]">
//               ✓ Free delivery within 5 km radius of Velachery
//             </span>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Categories Grid */}
//       <section className="relative py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
//           >
//             {categoryData.map((category) => {
//               const IconComponent = category.icon
//               return (
//                 <motion.div
//                   key={category.id}
//                   variants={itemVariants}
//                   className="group relative"
//                 >
//                   <Link href={category.path}>
//                     <div className="relative h-full rounded-3xl bg-white border border-slate-100 hover:border-emerald-300 shadow-lg hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500 overflow-hidden">
//                       {/* Background Gradient */}
//                       <motion.div
//                         className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-40 group-hover:opacity-60 transition-opacity duration-500`}
//                         initial={{ scale: 0.95 }}
//                         whileHover={{ scale: 1 }}
//                       />

//                       {/* Content */}
//                       <div className="relative p-8 h-full flex flex-col justify-between">
//                         {/* Top Section */}
//                         <div>
//                           {/* Icon */}
//                           <motion.div
//                             className={`mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} text-white flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
//                             whileHover={{ scale: 1.1, rotate: 5 }}
//                             transition={{ type: "spring", stiffness: 400 }}
//                           >
//                             <IconComponent className="w-8 h-8" strokeWidth={1.5} />
//                           </motion.div>

//                           {/* Title */}
//                           <h2 className="text-3xl font-black text-[#044116] mb-3 group-hover:text-emerald-700 transition-colors">
//                             {category.name}
//                           </h2>

//                           {/* Description */}
//                           <p className="text-slate-600 text-base leading-relaxed mb-6 group-hover:text-slate-700 transition-colors">
//                             {category.description}
//                           </p>

//                           {/* Highlights */}
//                           <div className="space-y-2">
//                             <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Popular Items</p>
//                             <div className="flex flex-wrap gap-2">
//                               {category.highlights.map((item, idx) => (
//                                 <motion.span
//                                   key={idx}
//                                   initial={{ opacity: 0, scale: 0.8 }}
//                                   whileInView={{ opacity: 1, scale: 1 }}
//                                   transition={{ delay: idx * 0.05 }}
//                                   className="text-xs font-semibold px-3 py-1.5 rounded-full border bg-emerald-50 text-emerald-700 border-emerald-100"
//                                 >
//                                   {item}
//                                 </motion.span>
//                               ))}
//                             </div>
//                           </div>
//                         </div>

//                         {/* Bottom CTA */}
//                         <motion.div
//                           initial={{ opacity: 0, y: 10 }}
//                           whileInView={{ opacity: 1, y: 0 }}
//                           transition={{ delay: 0.3 }}
//                           className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between group-hover:border-emerald-200 transition-colors"
//                         >
//                           <span className="text-sm font-semibold text-[#044116]">
//                             Browse Collection
//                           </span>
//                           <motion.div
//                             className="w-10 h-10 rounded-full bg-gradient-to-r from-[#044116] to-[#055a1a] flex items-center justify-center text-white group-hover:shadow-lg transition-shadow"
//                             whileHover={{ x: 4 }}
//                           >
//                             <ArrowRight className="w-5 h-5" />
//                           </motion.div>
//                         </motion.div>
//                       </div>
//                     </div>
//                   </Link>
//                 </motion.div>
//               )
//             })}
//           </motion.div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-emerald-50/50 to-transparent">
//         <div className="max-w-4xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-4xl font-black text-[#044116] mb-4">Why Choose D'GROCER?</h2>
//             <p className="text-lg text-slate-600">
//               Premium quality, tested and trusted by thousands of families
//             </p>
//           </motion.div>

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             className="grid grid-cols-1 md:grid-cols-3 gap-8"
//           >
//             {[
//               {
//                 title: "Premium Quality",
//                 description: "Handpicked products from trusted sources, ensuring the best quality for your family.",
//               },
//               {
//                 title: "Free Delivery",
//                 description: "Complimentary home delivery within 5 km radius of Velachery - always fresh, always fast.",
//               },
//               {
//                 title: "Hygienically Packed",
//                 description: "All products are carefully hygienically packed to maintain freshness and quality.",
//               },
//             ].map((feature, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={itemVariants}
//                 className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-emerald-300 hover:shadow-xl transition-all duration-500 text-center"
//               >
//                 <h3 className="text-xl font-black text-[#044116] mb-3">{feature.title}</h3>
//                 <p className="text-slate-600">{feature.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* <Footer /> */}
//     </div>
//   )
// }
"use client"

import { motion, Variants } from "framer-motion"
import Link from "next/link"
import Header from "@/components/header"
// import Footer from "@/components/footer"
import { ArrowRight, Leaf, Flame, Sparkles, Gift } from "lucide-react"

const categoryData = [
  {
    id: "dhal",
    name: "Dals & Pulses",
    path: "/dhal",
    icon: Leaf,
    color: "from-emerald-500 to-teal-600",
    bgColor: "from-emerald-50 to-teal-50",
    description:
      "Premium quality dals and pulses sourced from the finest farms. Rich in protein and nutrition, hygienically packed for your family's health.",
    highlights: ["Moong Dal", "Toor Dal", "Masoor Dal", "Chana Dal", "Urad Dal"],
  },
  {
    id: "spices",
    name: "Authentic Spices",
    path: "/spices",
    icon: Flame,
    color: "from-orange-500 to-red-600",
    bgColor: "from-orange-50 to-red-50",
    description:
      "Authentic Indian spices handpicked for their flavor and quality. Add the perfect aromatic touch to your traditional and modern dishes.",
    highlights: ["Turmeric", "Chili Powder", "Coriander", "Cumin", "Garam Masala"],
  },
  {
    id: "sweeteners",
    name: "Pure Sweeteners",
    path: "/groceries",
    icon: Sparkles,
    color: "from-amber-500 to-yellow-600",
    bgColor: "from-amber-50 to-yellow-50",
    description:
      "Pure and natural sweeteners for your everyday cooking. From refined sugar to traditional jaggery, all hygienically packed.",
    highlights: ["Sugar", "Jaggery", "Brown Sugar", "Rock Sugar"],
  },
  {
    id: "gift-boxes",
    name: "Premium Gift Boxes",
    path: "/gift-boxes",
    icon: Gift,
    color: "from-pink-500 to-rose-600",
    bgColor: "from-pink-50 to-rose-50",
    description:
      "Beautifully curated gift hampers perfect for any occasion. Share the goodness of quality groceries with your loved ones.",
    highlights: ["Festival Boxes", "Family Hampers", "Corporate Gifts", "Custom Boxes"],
  },
]

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
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1], // ✅ Material-style easeOut
    },
  },
}

export function CategoriesContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/30 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-0 w-72 h-72 bg-emerald-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-black text-[#044116] mb-6 leading-tight">
            Explore Our Categories
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Discover premium quality groceries across all our carefully curated categories. From essential dals to authentic spices, everything you need for your kitchen.
          </p>

          {/* Free Delivery Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-orange-50 border border-emerald-200 rounded-full px-6 py-3 mb-12"
          >
            <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-[#044116]">
              ✓ Free delivery within 5 km radius of Velachery
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* Categories Grid */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          >
            {categoryData.map((category) => {
              const IconComponent = category.icon
              return (
                <motion.div
                  key={category.id}
                  variants={itemVariants}
                  className="group relative"
                >
                  <Link href={category.path}>
                    <div className="relative h-full rounded-3xl bg-white border border-slate-100 hover:border-emerald-300 shadow-lg hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500 overflow-hidden">
                      {/* Background Gradient */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-40 group-hover:opacity-60 transition-opacity duration-500`}
                        initial={{ scale: 0.95 }}
                        whileHover={{ scale: 1 }}
                      />

                      {/* Content */}
                      <div className="relative p-8 h-full flex flex-col justify-between">
                        {/* Top Section */}
                        <div>
                          {/* Icon */}
                          <motion.div
                            className={`mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} text-white flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <IconComponent className="w-8 h-8" strokeWidth={1.5} />
                          </motion.div>

                          {/* Title */}
                          <h2 className="text-3xl font-black text-[#044116] mb-3 group-hover:text-emerald-700 transition-colors">
                            {category.name}
                          </h2>

                          {/* Description */}
                          <p className="text-slate-600 text-base leading-relaxed mb-6 group-hover:text-slate-700 transition-colors">
                            {category.description}
                          </p>

                          {/* Highlights */}
                          <div className="space-y-2">
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Popular Items</p>
                            <div className="flex flex-wrap gap-2">
                              {category.highlights.map((item, idx) => (
                                <motion.span
                                  key={idx}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: idx * 0.05 }}
                                  className="text-xs font-semibold px-3 py-1.5 rounded-full border bg-emerald-50 text-emerald-700 border-emerald-100"
                                >
                                  {item}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Bottom CTA */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between group-hover:border-emerald-200 transition-colors"
                        >
                          <span className="text-sm font-semibold text-[#044116]">
                            Browse Collection
                          </span>
                          <motion.div
                            className="w-10 h-10 rounded-full bg-gradient-to-r from-[#044116] to-[#055a1a] flex items-center justify-center text-white group-hover:shadow-lg transition-shadow"
                            whileHover={{ x: 4 }}
                          >
                            <ArrowRight className="w-5 h-5" />
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-emerald-50/50 to-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-[#044116] mb-4">Why Choose D'GROCER?</h2>
            <p className="text-lg text-slate-600">
              Premium quality, tested and trusted by thousands of families
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Premium Quality",
                description: "Handpicked products from trusted sources, ensuring the best quality for your family.",
              },
              {
                title: "Free Delivery",
                description: "Complimentary home delivery within 5 km radius of Velachery - always fresh, always fast.",
              },
              {
                title: "Hygienically Packed",
                description: "All products are carefully hygienically packed to maintain freshness and quality.",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-emerald-300 hover:shadow-xl transition-all duration-500 text-center"
              >
                <h3 className="text-xl font-black text-[#044116] mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  )
}
