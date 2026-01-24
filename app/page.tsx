// // "use client"

// // import { motion, Variants } from "framer-motion"
// // import Link from "next/link"
// // import Header from "@/components/header"
// // import Footer from "@/components/footer"
// // import BenefitsSection from "@/components/benefits-section"
// // import CTASection from "@/components/cta-section"
// // import { ArrowRight, Leaf, Zap, Truck } from "lucide-react"
// // import Categories, { CategoriesContent } from "./categories/categories-content"

// // const categories = [
// //   { name: "Dals & Pulses", path: "/dhal", description: "Premium quality dals and pulses, sourced and packed with care" },
// //   { name: "Spices", path: "/spices", description: "Authentic Indian spices for authentic flavors" },
// //   { name: "Sweeteners", path: "/groceries", description: "Pure and natural sweeteners for your kitchen" },
// // ]

// // const categoryDescriptions = {
// //   "Dals & Pulses": "Premium quality dals and pulses, sourced and packed with care",
// //   "Spices": "Authentic Indian spices for authentic flavors",
// //   "Sweeteners": "Pure and natural sweeteners for your kitchen",
// // }

// // export default function HomePage() {
// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: {
// //         staggerChildren: 0.1,
// //         delayChildren: 0.2,
// //       },
// //     },
// //   }

// // const itemVariants: Variants = {
// //   hidden: {
// //     opacity: 0,
// //     y: 20,
// //   },
// //   visible: {
// //     opacity: 1,
// //     y: 0,
// //     transition: {
// //       type: "spring" as const, // ✅ FIX
// //       damping: 20,
// //       stiffness: 120,
// //     },
// //   },
// // }
// //   const features = [
// //     {
// //       icon: Leaf,
// //       title: "Premium Quality",
// //       description: "Hand-picked products sourced directly for freshness and quality",
// //     },
// //     {
// //       icon: Truck,
// //       title: "Free Home Delivery",
// //       description: "Complimentary delivery within 5 km radius of Velachery",
// //     },
// //     {
// //       icon: Zap,
// //       title: "Quick Service",
// //       description: "Fast and efficient delivery to your doorstep",
// //     },
// //   ]

// //   return (
// //     <div className="min-h-screen bg-white overflow-hidden">
// //       <Header />

// //       {/* ==============================
// //           HERO SECTION - Product Focus
// //          ============================== */}
// //       <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FDFBF7] via-white to-emerald-50/30 overflow-hidden pt-20 md:pt-0">
// //         {/* Background Elements */}
// //         <motion.div className="absolute inset-0 pointer-events-none">
// //           <motion.div
// //             animate={{
// //               scale: [1, 1.3, 1],
// //               rotate: [0, 180, 360],
// //               x: [0, 50, 0],
// //             }}
// //             transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
// //             className="absolute -top-[20%] -right-[10%] w-[700px] h-[700px] bg-gradient-to-br from-emerald-200/40 to-emerald-100/20 rounded-full blur-[120px]"
// //           />
// //           <motion.div
// //             animate={{
// //               scale: [1, 1.4, 1],
// //               x: [0, -50, 0],
// //               y: [0, 30, 0],
// //             }}
// //             transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
// //             className="absolute -bottom-[10%] -left-[10%] w-[600px] h-[600px] bg-gradient-to-tr from-orange-100/40 to-amber-100/30 rounded-full blur-[100px]"
// //           />
// //         </motion.div>

// //         <motion.div
// //           className="container mx-auto px-4 md:px-6 lg:px-8 z-10 relative"
// //           variants={containerVariants}
// //           initial="hidden"
// //           animate="visible"
// //         >
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
// //             {/* Left Content */}
// //             <div className="space-y-8 text-center lg:text-left">
// //               <motion.div variants={itemVariants}>
// //                 <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-50 to-emerald-100/50 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-widest uppercase shadow-sm">
// //                   <motion.div
// //                     animate={{ rotate: 360 }}
// //                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
// //                   >
// //                     <Leaf className="w-3.5 h-3.5" />
// //                   </motion.div>
// //                   Fresh & Premium
// //                 </span>
// //               </motion.div>

// //               <div className="overflow-hidden">
// //                 <motion.h1
// //                   variants={itemVariants}
// //                   className="text-5xl md:text-6xl lg:text-7xl leading-[0.9] font-black text-transparent bg-clip-text bg-gradient-to-br from-[#044116] via-[#055a1a] to-[#044116] tracking-tighter"
// //                 >
// //                   Everyday Home Essentials in One Place
// //                 </motion.h1>
// //               </div>

// //               <motion.p
// //                 variants={itemVariants}
// //                 className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0"
// //               >
// //                 Discover our carefully curated collection of premium dhals, authentic spices, and daily groceries. Everything you need for delicious, healthy meals delivered to your doorstep.
// //               </motion.p>

// //               {/* CTA Buttons */}
// //               <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
// //                 <Link
// //                   href="/categories"
// //                   className="group relative px-8 py-4 bg-gradient-to-r from-[#044116] to-[#055a1a] text-white font-bold rounded-full overflow-hidden shadow-2xl shadow-emerald-900/30 hover:shadow-emerald-900/50 transition-all"
// //                 >
// //                   <span className="relative z-10 flex items-center justify-center gap-2">
// //                     Explore All Categories
// //                     <motion.div
// //                       animate={{ x: [0, 5, 0] }}
// //                       transition={{ duration: 1.5, repeat: Infinity }}
// //                     >
// //                       <ArrowRight className="w-5 h-5" />
// //                     </motion.div>
// //                   </span>
// //                 </Link>
// //                 {/* <a
// //                   href="/#contact"
// //                   className="flex items-center justify-center gap-2 px-6 py-4 text-[#044116] font-semibold bg-emerald-50/50 rounded-full border border-emerald-200 hover:bg-emerald-100/50 transition-all"
// //                 >
// //                   <Truck className="w-5 h-5" />
// //                   Free Delivery Info
// //                 </a> */}
// //               </motion.div>

// //               {/* Delivery Info */}
// //               <motion.div variants={itemVariants} className="text-sm text-slate-600 pt-4">
// //                 <p className="font-semibold text-[#044116]">Free home delivery within 5 km radius of Velachery</p>
// //               </motion.div>
// //             </div>

// //             {/* Right Image */}
// //             <motion.div variants={itemVariants} className="relative flex justify-center lg:justify-end">
// //               <motion.div
// //                 animate={{ y: [0, -20, 0] }}
// //                 transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
// //                 className="relative p-5 bg-white/50 backdrop-blur-xl border border-white/60 rounded-[2rem] shadow-2xl shadow-emerald-900/20"
// //               >
// //                 <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto">
// //                   <img
// //                     src="https://ik.imagekit.io/j0xzq9pns/groceries/dgrocer%20banner.jpeg"
// //                     alt="Fresh groceries and home essentials"
// //                     className="w-full h-full object-cover"
// //                   />
// //                   <motion.div
// //                     className="absolute inset-0 bg-gradient-to-tr from-white/40 via-white/20 to-transparent"
// //                     initial={{ x: "-100%", y: "-100%" }}
// //                     whileHover={{ x: "100%", y: "100%" }}
// //                     transition={{ duration: 0.8 }}
// //                   />
// //                 </div>
// //                 <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 to-orange-400/20 rounded-[2.5rem] blur-2xl -z-10 opacity-50" />
// //               </motion.div>
// //             </motion.div>
// //           </div>
// //         </motion.div>
// //       </section>

// //       {/* ==============================
// //           CATEGORY SHOWCASE SECTION
// //          ============================== */}
// //       <section className="relative py-24 md:py-32 bg-gradient-to-b from-white via-emerald-50/20 to-white overflow-hidden">
// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           transition={{ duration: 0.8 }}
// //           viewport={{ once: true }}
// //           className="container mx-auto px-4 md:px-6 lg:px-8"
// //         >
// //           <motion.div
// //             variants={containerVariants}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //             className="space-y-16"
// //           >
// //             {/* Section Header */}
// //             <motion.div variants={itemVariants} className="text-center space-y-6 max-w-3xl mx-auto">
// //               <motion.div
// //                 whileHover={{ scale: 1.05 }}
// //                 className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-emerald-50 border border-emerald-200 text-emerald-800 font-black text-xs tracking-widest uppercase shadow-sm"
// //               >
// //                 Product Categories
// //               </motion.div>
// //               <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#044116] via-[#055a1a] to-[#044116] tracking-tight">
// //                 Choose Your Category
// //               </motion.h2>
// //               <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
// //                 Browse our carefully organized collection of premium products
// //               </p>
// //             </motion.div>

// //             {/* Category Cards Grid */}
// //             <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
// //               {categories.map((category) => (
// //                 <motion.div
// //                   key={category.name}
// //                   variants={itemVariants}
// //                   whileHover={{ y: -12 }}
// //                   className="group relative"
// //                 >
// //                   <Link href={category.path}>
// //                     <div className="relative p-8 bg-white rounded-3xl border border-slate-100 hover:border-emerald-300 shadow-lg hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500 overflow-hidden h-full flex flex-col justify-between min-h-[320px]">
// //                       {/* Background Gradient */}
// //                       <motion.div
// //                         className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 to-orange-50/0 group-hover:from-emerald-50/50 group-hover:to-orange-50/30 transition-all duration-500 rounded-3xl"
// //                         initial={{ scale: 0.8 }}
// //                         whileHover={{ scale: 1 }}
// //                       />

// //                       <div className="relative z-10">
// //                         {/* Icon */}
// //                         <motion.div
// //                           className="mb-6 p-4 w-fit rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 group-hover:from-[#044116] group-hover:to-[#055a1a] transition-all duration-500"
// //                           whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
// //                         >
// //                           <Leaf
// //                             className="w-8 h-8 text-[#044116] group-hover:text-white transition-all"
// //                             strokeWidth={1.5}
// //                           />
// //                         </motion.div>

// //                         {/* Title */}
// //                         <h3 className="text-3xl font-black text-[#044116] mb-4 group-hover:text-emerald-700 transition-colors">
// //                           {category.name}
// //                         </h3>

// //                         {/* Description */}
// //                         <p className="text-slate-600 text-base leading-relaxed mb-6 group-hover:text-slate-700 transition-colors">
// //                           {category.description}
// //                         </p>
// //                       </div>

// //                       {/* Bottom CTA */}
// //                       <motion.div
// //                         className="relative z-10 flex items-center gap-2 text-[#044116] font-bold group-hover:gap-3 transition-all"
// //                         whileHover={{ x: 5 }}
// //                       >
// //                         Browse {category.name}
// //                         <ArrowRight className="w-5 h-5 transition-transform" />
// //                       </motion.div>

// //                       {/* Hover Glow */}
// //                       <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/0 via-emerald-400/0 to-emerald-400/0 group-hover:from-emerald-400/20 group-hover:via-emerald-400/10 group-hover:to-orange-400/20 rounded-3xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
// //                     </div>
// //                   </Link>
// //                 </motion.div>
// //               ))}
// //             </motion.div>
// //           </motion.div>
// //         </motion.div>
// //       </section>

// //       <CategoriesContent />



// //       {/* ==============================
// //           FEATURES SECTION
// //          ============================== */}
// //       <section className="relative py-20 md:py-28 bg-white">
// //         <div className="container mx-auto px-4 md:px-6 lg:px-8">
// //           <motion.div
// //             variants={containerVariants}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //             className="grid grid-cols-1 md:grid-cols-3 gap-8"
// //           >
// //             {features.map((feature, idx) => {
// //               const Icon = feature.icon
// //               return (
// //                 <motion.div
// //                   key={idx}
// //                   variants={itemVariants}
// //                   className="p-8 rounded-3xl bg-gradient-to-br from-white to-emerald-50/30 border border-emerald-100 hover:border-emerald-300 transition-all shadow-lg hover:shadow-xl"
// //                 >
// //                   <motion.div
// //                     className="p-4 w-fit rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 mb-6"
// //                     whileHover={{ scale: 1.1, rotate: 5 }}
// //                   >
// //                     <Icon className="w-8 h-8 text-[#044116]" strokeWidth={1.5} />
// //                   </motion.div>
// //                   <h3 className="text-2xl font-bold text-[#044116] mb-3">{feature.title}</h3>
// //                   <p className="text-slate-600 leading-relaxed">{feature.description}</p>
// //                 </motion.div>
// //               )
// //             })}
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Benefits Section */}
// //       <BenefitsSection />

// //       {/* CTA Section */}
// //       <CTASection />

// //       {/* Footer */}
// //       {/* <Footer /> */}
// //     </div>
// //   )
// // }
// "use client"

// import { motion } from "framer-motion"
// import Link from "next/link"
// import Header from "@/components/header"
// import Footer from "@/components/footer"
// import BenefitsSection from "@/components/benefits-section"
// import CTASection from "@/components/cta-section"
// import { ArrowRight, Leaf, Flame, Sparkles, Gift, Star, Zap, Truck } from "lucide-react"
// import { products } from "@/lib/products" // Adjust path
// import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"

// // Define categories data locally since we are removing the separate page
// const categoryData = [
//   {
//     id: "dhal",
//     name: "Dals & Pulses",
//     path: "/dhal",
//     icon: Leaf,
//     color: "from-emerald-500 to-teal-600",
//     bgColor: "from-emerald-50 to-teal-50",
//     description: "Rich in protein and nutrition, hygienically packed for your family.",
//     highlights: ["Moong Dal", "Toor Dal", "Masoor Dal"],
//   },
//   {
//     id: "spices",
//     name: "Authentic Spices",
//     path: "/spices",
//     icon: Flame,
//     color: "from-orange-500 to-red-600",
//     bgColor: "from-orange-50 to-red-50",
//     description: "Handpicked spices to add the perfect aromatic touch to your dishes.",
//     highlights: ["Turmeric", "Chili", "Cumin"],
//   },
//   {
//     id: "sweeteners",
//     name: "Pure Sweeteners",
//     path: "/groceries",
//     icon: Sparkles,
//     color: "from-amber-500 to-yellow-600",
//     bgColor: "from-amber-50 to-yellow-50",
//     description: "Natural sweeteners from refined sugar to traditional jaggery.",
//     highlights: ["Jaggery", "Brown Sugar"],
//   },
//   {
//     id: "dry-fruits",
//     name: "Dry Fruits and Hampers",
//     path: "/gift-boxes",
//     icon: Sparkles,
//     color: "from-amber-500 to-yellow-600",
//     bgColor: "from-amber-50 to-yellow-50",
//     description: "Nutrient-rich dry fruits for healthy snacking and gifting.",
//     highlights: ["Almonds", "Cashews", "Raisins"],
//   },
// ]

// export default function HomePage() {
//   // Filter 3 popular hampers for the preview section
//   const featuredHampers = products
//     .filter((p) => p.category === "Gift Boxes")
//     .slice(0, 3)

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   }

//         {/* ==============================
//           FEATURES SECTION
//          ============================== */}

//            const features = [
//     {
//       icon: Leaf,
//       title: "Premium Quality",
//       description: "Hand-picked products sourced directly for freshness and quality",
//     },
//     {
//       icon: Truck,
//       title: "Free Home Delivery",
//       description: "Complimentary delivery within 5 km radius of Velachery",
//     },
//     {
//       icon: Zap,
//       title: "Quick Service",
//       description: "Fast and efficient delivery to your doorstep",
//     },
//   ]
//   return (
//     <div className="min-h-screen bg-white overflow-hidden">
//       <Header />

//       {/* ==============================
//           HERO SECTION
//          ============================== */}
//       <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-[#FDFBF7] via-white to-emerald-50/30 overflow-hidden pt-20 md:pt-0">
//         <motion.div className="container mx-auto px-4 md:px-6 lg:px-8 z-10 relative">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//             <div className="space-y-8 text-center lg:text-left">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-widest uppercase"
//               >
//                 <Leaf className="w-3.5 h-3.5" /> Fresh & Premium
//               </motion.div>
//               <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 }}
//                 className="text-5xl md:text-7xl font-black text-[#044116] tracking-tighter leading-none"
//               >
//                 Everyday Essentials <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-400">
//                   Delivered Fresh.
//                 </span>
//               </motion.h1>
//               <p className="text-xl text-slate-600 max-w-lg mx-auto lg:mx-0">
//                 Premium dals, authentic spices, and exclusive dry fruit hampers. Quality you can trust, delivered to your door.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//                 <Link
//                   href="/dhal"
//                   className="px-8 py-4 bg-[#044116] text-white font-bold rounded-full hover:bg-emerald-900 transition-all shadow-lg shadow-emerald-900/20"
//                 >
//                   Shop Groceries
//                 </Link>
//                 <Link
//                   href="/gift-boxes"
//                   className="px-8 py-4 bg-amber-500 text-white font-bold rounded-full hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
//                 >
//                   <Gift className="w-5 h-5" /> View Hampers
//                 </Link>
//               </div>
//             </div>

//             {/* Hero Image */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="relative hidden lg:block"
//             >
//                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700">
//                   <img
//                     src="https://ik.imagekit.io/j0xzq9pns/groceries/dgrocer%20banner.jpeg"
//                     alt="Groceries"
//                     className="w-full object-cover"
//                   />
//                </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ==============================
//           NEW SECTION: DRY FRUIT HAMPERS
//          ============================== */}
//       <section className="py-20 bg-slate-50 relative overflow-hidden">
//         {/* Background Decorative */}
//         <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
//             <div className="max-w-2xl">
//               <span className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-2 block">Festive Special</span>
//               <h2 className="text-4xl md:text-5xl font-black text-[#044116] mb-4">Dry Fruits & Hampers</h2>
//               <p className="text-slate-600 text-lg">
//                 Exquisite dry fruit collections perfect for gifting or healthy snacking. 
//                 <span className="block mt-2 font-semibold text-amber-700">
//                   <Star className="inline w-4 h-4 mb-1" /> Corporate & Bulk Orders Available
//                 </span>
//               </p>
//             </div>
//             <Link 
//               href="/gift-boxes" 
//               className="flex items-center gap-2 text-[#044116] font-bold border-b-2 border-[#044116] pb-1 hover:text-emerald-700 hover:border-emerald-700 transition-colors"
//             >
//               View All Hampers <ArrowRight className="w-5 h-5" />
//             </Link>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {featuredHampers.map((hamper, idx) => (
//               <motion.div
//                 key={hamper.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: idx * 0.1 }}
//                 viewport={{ once: true }}
//                 className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300"
//               >
//                 <div className="aspect-[4/3] bg-amber-50/50 p-6 relative">
//                    <img 
//                     src={hamper.image} 
//                     alt={hamper.name} 
//                     className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" 
//                    />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-slate-800 mb-2">{hamper.name}</h3>
//                   <p className="text-sm text-slate-500 mb-4 line-clamp-2">
//                     {hamper.items?.join(", ")}
//                   </p>
//                   <div className="flex justify-between items-center">
//                     <span className="font-bold text-lg text-[#044116]">{hamper.price}</span>
//                     <Link href="/gift-boxes" className="bg-amber-100 text-amber-800 px-4 py-2 rounded-lg text-sm font-bold hover:bg-amber-200 transition-colors">
//                       View Details
//                     </Link>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
          
//           {/* Corporate Banner Insert */}
//           <div className="mt-12 bg-[#044116] rounded-2xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
//             <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
//             <div className="relative z-10 text-white">
//               <h3 className="text-2xl md:text-3xl font-bold mb-2">Looking for Corporate Gifts?</h3>
//               <p className="text-emerald-100">We offer customized packing and special pricing for bulk orders.</p>
//             </div>
//             <Link 
//               href="/gift-boxes"
//               className="relative z-10 bg-white text-[#044116] px-8 py-3 rounded-full font-bold hover:bg-emerald-50 transition-colors"
//             >
//               Learn More
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ==============================
//           CATEGORIES SECTION (Refactored from separate page)
//          ============================== */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-2 block">Our Range</span>
//             <h2 className="text-4xl md:text-5xl font-black text-[#044116] mb-4">Shop By Category</h2>
//             <p className="text-slate-600">Find exactly what you need from our premium selection.</p>
//           </div>

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8"
//           >
//             {categoryData.map((category) => {
//               const IconComponent = category.icon
//               return (
//                 <motion.div key={category.id} variants={itemVariants} className="group relative h-full">
//                   <Link href={category.path}>
//                     <div className="relative h-full rounded-3xl bg-white border border-slate-100 hover:border-emerald-300 shadow-lg hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500 overflow-hidden flex flex-col">
//                       <motion.div
//                         className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-40 group-hover:opacity-60 transition-opacity duration-500`}
//                         initial={{ scale: 0.95 }}
//                         whileHover={{ scale: 1 }}
//                       />
//                       <div className="relative p-8 flex flex-col h-full">
//                         <motion.div
//                           className={`mb-6 w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} text-white flex items-center justify-center shadow-lg`}
//                           whileHover={{ scale: 1.1, rotate: 5 }}
//                         >
//                           <IconComponent className="w-7 h-7" strokeWidth={1.5} />
//                         </motion.div>
//                         <h2 className="text-2xl font-black text-[#044116] mb-3 group-hover:text-emerald-700 transition-colors">
//                           {category.name}
//                         </h2>
//                         <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
//                           {category.description}
//                         </p>
//                         <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100/50">
//                           <span className="text-sm font-bold text-[#044116]">Explore</span>
//                           <div className="w-8 h-8 rounded-full bg-[#044116] flex items-center justify-center text-white">
//                             <ArrowRight className="w-4 h-4" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </Link>
//                 </motion.div>
//               )
//             })}
//           </motion.div>
//         </div>
//       </section>

//       <section className="relative py-20 md:py-28 bg-white">
//         <div className="container mx-auto px-4 md:px-6 lg:px-8">
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
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
//             viewport={{ once: true }}
//             className="grid grid-cols-1 md:grid-cols-3 gap-8"
//           >
//             {features.map((feature, idx) => {
//               const Icon = feature.icon
//               return (
//                 <motion.div
//                   key={idx}
//                   variants={itemVariants}
//                   className="p-8 rounded-3xl bg-gradient-to-br from-white to-emerald-50/30 border border-emerald-100 hover:border-emerald-300 transition-all shadow-lg hover:shadow-xl"
//                 >
//                   <motion.div
//                     className="p-4 w-fit rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 mb-6"
//                     whileHover={{ scale: 1.1, rotate: 5 }}
//                   >
//                     <Icon className="w-8 h-8 text-[#044116]" strokeWidth={1.5} />
//                   </motion.div>
//                   <h3 className="text-2xl font-bold text-[#044116] mb-3">{feature.title}</h3>
//                   <p className="text-slate-600 leading-relaxed">{feature.description}</p>
//                 </motion.div>
//               )
//             })}
//           </motion.div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <BenefitsSection />

//       {/* CTA Section */}
//       <CTASection />

//       {/* Footer */}
//       {/* <Footer /> */}
//     </div>
//   )
// }

"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BenefitsSection from "@/components/benefits-section"
import CTASection from "@/components/cta-section"
import { ArrowRight, Leaf, Flame, Sparkles, Gift, Star, Zap, Truck } from "lucide-react"
import { products } from "@/lib/products" 

// Define categories data locally 
const categoryData = [
  {
    id: "dhal",
    name: "Dals & Pulses",
    path: "/dhal",
    icon: Leaf,
    color: "from-emerald-500 to-teal-600",
    bgColor: "from-emerald-50 to-teal-50",
    description: "Rich in protein and nutrition, hygienically packed for your family.",
    highlights: ["Moong Dal", "Toor Dal", "Masoor Dal"],
  },
  {
    id: "spices",
    name: "Authentic Spices",
    path: "/spices",
    icon: Flame,
    color: "from-orange-500 to-red-600",
    bgColor: "from-orange-50 to-red-50",
    description: "Handpicked spices to add the perfect aromatic touch to your dishes.",
    highlights: ["Turmeric", "Chili", "Cumin"],
  },
  {
    id: "sweeteners",
    name: "Pure Sweeteners",
    path: "/groceries",
    icon: Sparkles,
    color: "from-amber-500 to-yellow-600",
    bgColor: "from-amber-50 to-yellow-50",
    description: "Natural sweeteners from refined sugar to traditional jaggery.",
    highlights: ["Jaggery", "Brown Sugar"],
  },
  {
    id: "dry-fruits",
    name: "Dry Fruits and Hampers",
    path: "/gift-boxes",
    icon: Sparkles,
    color: "from-amber-500 to-yellow-600",
    bgColor: "from-amber-50 to-yellow-50",
    description: "Nutrient-rich dry fruits for healthy snacking and gifting.",
    highlights: ["Almonds", "Cashews", "Raisins"],
  },
]

export default function HomePage() {
  // Filter 3 popular hampers for the preview section
  const featuredHampers = products
    ? products.filter((p) => p.category === "Gift Boxes").slice(-3)
    : []

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const features = [
    {
      icon: Leaf,
      title: "Premium Quality",
      description: "Hand-picked products sourced directly for freshness and quality",
    },
    {
      icon: Truck,
      title: "Free Home Delivery",
      description: "Complimentary delivery within 5 km radius of Velachery",
    },
    {
      icon: Zap,
      title: "Quick Service",
      description: "Fast and efficient delivery to your doorstep",
    },
  ]

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />

      {/* ==============================
          HERO SECTION
         ============================== */}
      {/* Changed min-h-[90vh] to min-h-auto for mobile to prevent huge gaps */}
      <section className="relative min-h-[auto] lg:min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-[#FDFBF7] via-white to-emerald-50/30 overflow-hidden pt-16 pb-16 lg:pt-0 lg:pb-0">
        <motion.div className="container mx-auto px-4 md:px-6 lg:px-8 z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] md:text-xs font-bold tracking-widest uppercase"
              >
                <Leaf className="w-3 md:w-3.5 h-3 md:h-3.5" /> Fresh & Premium
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                // Reduced text size on mobile (text-4xl) to prevent overflow
                className="text-4xl sm:text-5xl md:text-7xl font-black text-[#044116] tracking-tighter leading-[1.1] md:leading-none"
              >
                Everyday Essentials <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-400">
                  Delivered Fresh.
                </span>
              </motion.h1>
              <p className="text-base md:text-xl text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Premium dals, authentic spices, and exclusive dry fruit hampers. Quality you can trust, delivered to your door.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <Link
                  href="/dhal"
                  className="px-8 py-4 bg-[#044116] text-white font-bold rounded-full hover:bg-emerald-900 transition-all shadow-lg shadow-emerald-900/20 text-center"
                >
                  Shop Groceries
                </Link>
                <Link
                  href="/gift-boxes"
                  className="px-8 py-4 bg-amber-500 text-white font-bold rounded-full hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
                >
                  <Gift className="w-5 h-5" /> View Hampers
                </Link>
              </div>
            </div>

            {/* Hero Image - FIX: Removed 'hidden' and added mobile styling */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative mt-8 lg:mt-0 block"
            >
               <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700 mx-auto max-w-sm lg:max-w-none">
                  <img
                    src="https://ik.imagekit.io/j0xzq9pns/groceries/dgrocer%20banner.jpeg"
                    alt="Groceries"
                    className="w-full h-auto object-cover"
                  />
               </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ==============================
          NEW SECTION: DRY FRUIT HAMPERS
         ============================== */}
      <section className="py-16 md:py-20 bg-slate-50 relative overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 gap-4 md:gap-6">
            <div className="max-w-2xl text-center md:text-left w-full md:w-auto">
              <span className="text-amber-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-2 block">Festive Special</span>
              <h2 className="text-3xl md:text-5xl font-black text-[#044116] mb-3 md:mb-4">Dry Fruits & Hampers</h2>
              <p className="text-slate-600 text-base md:text-lg">
                Exquisite dry fruit collections perfect for gifting. 
                <span className="block mt-2 font-semibold text-amber-700 text-sm md:text-base">
                  <Star className="inline w-4 h-4 mb-1" /> Corporate & Bulk Orders Available
                </span>
              </p>
            </div>
            <Link 
              href="/gift-boxes" 
              className="hidden md:flex items-center gap-2 text-[#044116] font-bold border-b-2 border-[#044116] pb-1 hover:text-emerald-700 hover:border-emerald-700 transition-colors"
            >
              View All Hampers <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {featuredHampers.map((hamper, idx) => (
              <motion.div
                key={hamper.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-amber-50/50 p-2 relative">
                   <img 
                    src={hamper.image} 
                    alt={hamper.name} 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" 
                   />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2">{hamper.name}</h3>
                  <p className="text-xs md:text-sm text-slate-500 mb-4 line-clamp-2">
                    {hamper.items?.join(", ")}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg text-[#044116]">{hamper.price}</span>
                    <Link href="/gift-boxes" className="bg-amber-100 text-amber-800 px-4 py-2 rounded-lg text-sm font-bold hover:bg-amber-200 transition-colors">
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex justify-center md:hidden">
             <Link 
              href="/gift-boxes" 
              className="flex items-center gap-2 text-[#044116] font-bold border-b-2 border-[#044116] pb-1 hover:text-emerald-700 hover:border-emerald-700 transition-colors"
            >
              View All Hampers <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          {/* Corporate Banner Insert */}
          <div className="mt-12 bg-[#044116] rounded-2xl p-6 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="relative z-10 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Looking for Corporate Gifts?</h3>
              <p className="text-emerald-100 text-sm md:text-base">We offer customized packing and special pricing for bulk orders.</p>
            </div>
            <Link 
              href="/gift-boxes"
              className="relative z-10 bg-white text-[#044116] px-8 py-3 rounded-full font-bold hover:bg-emerald-50 transition-colors text-sm md:text-base"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ==============================
          CATEGORIES SECTION
         ============================== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-2 block">Our Range</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#044116] mb-3 md:mb-4">Shop By Category</h2>
            <p className="text-slate-600 text-base md:text-lg">Find exactly what you need from our premium selection.</p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {categoryData.map((category) => {
              const IconComponent = category.icon
              return (
                <motion.div key={category.id} variants={itemVariants} className="group relative h-full">
                  <Link href={category.path}>
                    <div className="relative h-full rounded-3xl bg-white border border-slate-100 hover:border-emerald-300 shadow-lg hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500 overflow-hidden flex flex-col">
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-40 group-hover:opacity-60 transition-opacity duration-500`}
                        initial={{ scale: 0.95 }}
                        whileHover={{ scale: 1 }}
                      />
                      <div className="relative p-6 md:p-8 flex flex-col h-full">
                        <motion.div
                          className={`mb-4 md:mb-6 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${category.color} text-white flex items-center justify-center shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <IconComponent className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />
                        </motion.div>
                        <h2 className="text-xl md:text-2xl font-black text-[#044116] mb-2 md:mb-3 group-hover:text-emerald-700 transition-colors">
                          {category.name}
                        </h2>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                          {category.description}
                        </p>
                        <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100/50">
                          <span className="text-sm font-bold text-[#044116]">Explore</span>
                          <div className="w-8 h-8 rounded-full bg-[#044116] flex items-center justify-center text-white">
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#044116] mb-3 md:mb-4">Why Choose D'GROCER?</h2>
            <p className="text-base md:text-lg text-slate-600">
              Premium quality, tested and trusted by thousands of families
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white to-emerald-50/30 border border-emerald-100 hover:border-emerald-300 transition-all shadow-lg hover:shadow-xl"
                >
                  <motion.div
                    className="p-3 md:p-4 w-fit rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 mb-4 md:mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#044116]" strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#044116] mb-2 md:mb-3">{feature.title}</h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}