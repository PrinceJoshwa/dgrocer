// // // "use client"
// // // import HeroSection from "@/components/hero-section"
// // // import BrandHighlights from "@/components/brand-highlights"
// // // import ProductShowcase from "@/components/product-showcase"
// // // import BenefitsSection from "@/components/benefits-section"
// // // import CTASection from "@/components/cta-section"
// // // import StickyWhatsApp from "@/components/sticky-whatsapp"

// // // export default function Home() {
// // //   return (
// // //     <main className="min-h-screen bg-white overflow-hidden">
// // //       <StickyWhatsApp />
// // //       <HeroSection />
// // //       <BrandHighlights />
// // //       <ProductShowcase />
// // //       <BenefitsSection />
// // //       <CTASection />
// // //     </main>
// // //   )
// // // }

// // "use client"
// // import Header from "@/components/header"
// // import Footer from "@/components/footer"
// // import HeroSection from "@/components/hero-section"
// // import BrandHighlights from "@/components/brand-highlights"
// // import ProductShowcase from "@/components/product-showcase"
// // import BenefitsSection from "@/components/benefits-section"
// // import CTASection from "@/components/cta-section"
// // import StickyWhatsApp from "@/components/sticky-whatsapp"
// // import WhatsappChat from "@/components/WhatsAppChat"
// // import BannerSection from "@/components/banner-video"

// // export default function Home() {
// //   return (
// //     <div className="min-h-screen bg-white overflow-hidden">
// //       <Header />
// //       <main className="flex flex-col">
// //         {/* <StickyWhatsApp /> */}
// //         <section id="home">
// //           <HeroSection />
// //           <BannerSection />
// //         </section>
// //         {/* <BrandHighlights /> */}
// //         <section id="products">
// //           <ProductShowcase />
// //         </section>
// //         <section id="benefits">
// //           <BenefitsSection />
// //         </section>
// //         <section id="contact">
// //           <CTASection />
// //         </section>
// //       </main>
// //       {/* <Footer /> */}
// //       <WhatsappChat />
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
// import { ArrowRight, Leaf, Zap, Truck } from "lucide-react"

// const categories = [
//   { name: "Dals & Pulses", path: "/dhal", description: "Premium quality dals and pulses, sourced and packed with care" },
//   { name: "Spices", path: "/spices", description: "Authentic Indian spices for authentic flavors" },
//   { name: "Sweeteners", path: "/groceries", description: "Pure and natural sweeteners for your kitchen" },
// ]

// const categoryDescriptions = {
//   "Dals & Pulses": "Premium quality dals and pulses, sourced and packed with care",
//   "Spices": "Authentic Indian spices for authentic flavors",
//   "Sweeteners": "Pure and natural sweeteners for your kitchen",
// }

// export default function HomePage() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", damping: 20, stiffness: 100 },
//     },
//   }

//   const features = [
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
//           HERO SECTION - Product Focus
//          ============================== */}
//       <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FDFBF7] via-white to-emerald-50/30 overflow-hidden pt-20 md:pt-0">
//         {/* Background Elements */}
//         <motion.div className="absolute inset-0 pointer-events-none">
//           <motion.div
//             animate={{
//               scale: [1, 1.3, 1],
//               rotate: [0, 180, 360],
//               x: [0, 50, 0],
//             }}
//             transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute -top-[20%] -right-[10%] w-[700px] h-[700px] bg-gradient-to-br from-emerald-200/40 to-emerald-100/20 rounded-full blur-[120px]"
//           />
//           <motion.div
//             animate={{
//               scale: [1, 1.4, 1],
//               x: [0, -50, 0],
//               y: [0, 30, 0],
//             }}
//             transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute -bottom-[10%] -left-[10%] w-[600px] h-[600px] bg-gradient-to-tr from-orange-100/40 to-amber-100/30 rounded-full blur-[100px]"
//           />
//         </motion.div>

//         <motion.div
//           className="container mx-auto px-4 md:px-6 lg:px-8 z-10 relative"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//             {/* Left Content */}
//             <div className="space-y-8 text-center lg:text-left">
//               <motion.div variants={itemVariants}>
//                 <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-50 to-emerald-100/50 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-widest uppercase shadow-sm">
//                   <motion.div
//                     animate={{ rotate: 360 }}
//                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//                   >
//                     <Leaf className="w-3.5 h-3.5" />
//                   </motion.div>
//                   Fresh & Premium
//                 </span>
//               </motion.div>

//               <div className="overflow-hidden">
//                 <motion.h1
//                   variants={itemVariants}
//                   className="text-5xl md:text-6xl lg:text-7xl leading-[0.9] font-black text-transparent bg-clip-text bg-gradient-to-br from-[#044116] via-[#055a1a] to-[#044116] tracking-tighter"
//                 >
//                   Everyday Home Essentials in One Place
//                 </motion.h1>
//               </div>

//               <motion.p
//                 variants={itemVariants}
//                 className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0"
//               >
//                 Discover our carefully curated collection of premium dhals, authentic spices, and daily groceries. Everything you need for delicious, healthy meals delivered to your doorstep.
//               </motion.p>

//               {/* CTA Buttons */}
//               <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//                 <Link
//                   href="/dhal"
//                   className="group relative px-8 py-4 bg-gradient-to-r from-[#044116] to-[#055a1a] text-white font-bold rounded-full overflow-hidden shadow-2xl shadow-emerald-900/30 hover:shadow-emerald-900/50 transition-all"
//                 >
//                   <span className="relative z-10 flex items-center justify-center gap-2">
//                     Shop Categories
//                     <motion.div
//                       animate={{ x: [0, 5, 0] }}
//                       transition={{ duration: 1.5, repeat: Infinity }}
//                     >
//                       <ArrowRight className="w-5 h-5" />
//                     </motion.div>
//                   </span>
//                 </Link>
//                 <a
//                   href="/#contact"
//                   className="flex items-center justify-center gap-2 px-6 py-4 text-[#044116] font-semibold bg-emerald-50/50 rounded-full border border-emerald-200 hover:bg-emerald-100/50 transition-all"
//                 >
//                   <Truck className="w-5 h-5" />
//                   Free Delivery Info
//                 </a>
//               </motion.div>

//               {/* Delivery Info */}
//               <motion.div variants={itemVariants} className="text-sm text-slate-600 pt-4">
//                 <p className="font-semibold text-[#044116]">Free home delivery within 5 km radius of Velachery</p>
//               </motion.div>
//             </div>

//             {/* Right Image */}
//             <motion.div variants={itemVariants} className="relative flex justify-center lg:justify-end">
//               <motion.div
//                 animate={{ y: [0, -20, 0] }}
//                 transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
//                 className="relative p-5 bg-white/50 backdrop-blur-xl border border-white/60 rounded-[2rem] shadow-2xl shadow-emerald-900/20"
//               >
//                 <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto">
//                   <img
//                     src="https://images.unsplash.com/photo-1599599810694-2202da81b236?w=500&h=600&fit=crop"
//                     alt="Fresh groceries and home essentials"
//                     className="w-full h-full object-cover"
//                   />
//                   <motion.div
//                     className="absolute inset-0 bg-gradient-to-tr from-white/40 via-white/20 to-transparent"
//                     initial={{ x: "-100%", y: "-100%" }}
//                     whileHover={{ x: "100%", y: "100%" }}
//                     transition={{ duration: 0.8 }}
//                   />
//                 </div>
//                 <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 to-orange-400/20 rounded-[2.5rem] blur-2xl -z-10 opacity-50" />
//               </motion.div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ==============================
//           CATEGORY SHOWCASE SECTION
//          ============================== */}
//       <section className="relative py-24 md:py-32 bg-gradient-to-b from-white via-emerald-50/20 to-white overflow-hidden">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="container mx-auto px-4 md:px-6 lg:px-8"
//         >
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="space-y-16"
//           >
//             {/* Section Header */}
//             <motion.div variants={itemVariants} className="text-center space-y-6 max-w-3xl mx-auto">
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-emerald-50 border border-emerald-200 text-emerald-800 font-black text-xs tracking-widest uppercase shadow-sm"
//               >
//                 Product Categories
//               </motion.div>
//               <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#044116] via-[#055a1a] to-[#044116] tracking-tight">
//                 Choose Your Category
//               </motion.h2>
//               <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
//                 Browse our carefully organized collection of premium products
//               </p>
//             </motion.div>

//             {/* Category Cards Grid */}
//             <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
//               {categories.map((category) => (
//                 <motion.div
//                   key={category.name}
//                   variants={itemVariants}
//                   whileHover={{ y: -12 }}
//                   className="group relative"
//                 >
//                   <Link href={category.path}>
//                     <div className="relative p-8 bg-white rounded-3xl border border-slate-100 hover:border-emerald-300 shadow-lg hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500 overflow-hidden h-full flex flex-col justify-between min-h-[320px]">
//                       {/* Background Gradient */}
//                       <motion.div
//                         className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 to-orange-50/0 group-hover:from-emerald-50/50 group-hover:to-orange-50/30 transition-all duration-500 rounded-3xl"
//                         initial={{ scale: 0.8 }}
//                         whileHover={{ scale: 1 }}
//                       />

//                       <div className="relative z-10">
//                         {/* Icon */}
//                         <motion.div
//                           className="mb-6 p-4 w-fit rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 group-hover:from-[#044116] group-hover:to-[#055a1a] transition-all duration-500"
//                           whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
//                         >
//                           <Leaf
//                             className="w-8 h-8 text-[#044116] group-hover:text-white transition-all"
//                             strokeWidth={1.5}
//                           />
//                         </motion.div>

//                         {/* Title */}
//                         <h3 className="text-3xl font-black text-[#044116] mb-4 group-hover:text-emerald-700 transition-colors">
//                           {category.name}
//                         </h3>

//                         {/* Description */}
//                         <p className="text-slate-600 text-base leading-relaxed mb-6 group-hover:text-slate-700 transition-colors">
//                           {category.description}
//                         </p>
//                       </div>

//                       {/* Bottom CTA */}
//                       <motion.div
//                         className="relative z-10 flex items-center gap-2 text-[#044116] font-bold group-hover:gap-3 transition-all"
//                         whileHover={{ x: 5 }}
//                       >
//                         Browse {category.name}
//                         <ArrowRight className="w-5 h-5 transition-transform" />
//                       </motion.div>

//                       {/* Hover Glow */}
//                       <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/0 via-emerald-400/0 to-emerald-400/0 group-hover:from-emerald-400/20 group-hover:via-emerald-400/10 group-hover:to-orange-400/20 rounded-3xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                     </div>
//                   </Link>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* ==============================
//           FEATURES SECTION
//          ============================== */}
//       <section className="relative py-20 md:py-28 bg-white">
//         <div className="container mx-auto px-4 md:px-6 lg:px-8">
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
//       <Footer />
//     </div>
//   )
// }
"use client"

import { motion, Variants } from "framer-motion"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BenefitsSection from "@/components/benefits-section"
import CTASection from "@/components/cta-section"
import { ArrowRight, Leaf, Zap, Truck } from "lucide-react"

const categories = [
  { name: "Dals & Pulses", path: "/dhal", description: "Premium quality dals and pulses, sourced and packed with care" },
  { name: "Spices", path: "/spices", description: "Authentic Indian spices for authentic flavors" },
  { name: "Sweeteners", path: "/groceries", description: "Pure and natural sweeteners for your kitchen" },
]

const categoryDescriptions = {
  "Dals & Pulses": "Premium quality dals and pulses, sourced and packed with care",
  "Spices": "Authentic Indian spices for authentic flavors",
  "Sweeteners": "Pure and natural sweeteners for your kitchen",
}

export default function HomePage() {
  const containerVariants = {
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
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const, // ✅ FIX
      damping: 20,
      stiffness: 120,
    },
  },
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
          HERO SECTION - Product Focus
         ============================== */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FDFBF7] via-white to-emerald-50/30 overflow-hidden pt-20 md:pt-0">
        {/* Background Elements */}
        <motion.div className="absolute inset-0 pointer-events-none">
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
        </motion.div>

        <motion.div
          className="container mx-auto px-4 md:px-6 lg:px-8 z-10 relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              <motion.div variants={itemVariants}>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-50 to-emerald-100/50 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-widest uppercase shadow-sm">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Leaf className="w-3.5 h-3.5" />
                  </motion.div>
                  Fresh & Premium
                </span>
              </motion.div>

              <div className="overflow-hidden">
                <motion.h1
                  variants={itemVariants}
                  className="text-5xl md:text-6xl lg:text-7xl leading-[0.9] font-black text-transparent bg-clip-text bg-gradient-to-br from-[#044116] via-[#055a1a] to-[#044116] tracking-tighter"
                >
                  Everyday Home Essentials in One Place
                </motion.h1>
              </div>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0"
              >
                Discover our carefully curated collection of premium dhals, authentic spices, and daily groceries. Everything you need for delicious, healthy meals delivered to your doorstep.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/categories"
                  className="group relative px-8 py-4 bg-gradient-to-r from-[#044116] to-[#055a1a] text-white font-bold rounded-full overflow-hidden shadow-2xl shadow-emerald-900/30 hover:shadow-emerald-900/50 transition-all"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Explore All Categories
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </span>
                </Link>
                <a
                  href="/#contact"
                  className="flex items-center justify-center gap-2 px-6 py-4 text-[#044116] font-semibold bg-emerald-50/50 rounded-full border border-emerald-200 hover:bg-emerald-100/50 transition-all"
                >
                  <Truck className="w-5 h-5" />
                  Free Delivery Info
                </a>
              </motion.div>

              {/* Delivery Info */}
              <motion.div variants={itemVariants} className="text-sm text-slate-600 pt-4">
                <p className="font-semibold text-[#044116]">Free home delivery within 5 km radius of Velachery</p>
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div variants={itemVariants} className="relative flex justify-center lg:justify-end">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
                className="relative p-5 bg-white/50 backdrop-blur-xl border border-white/60 rounded-[2rem] shadow-2xl shadow-emerald-900/20"
              >
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto">
                  <img
                    src="https://images.unsplash.com/photo-1599599810694-2202da81b236?w=500&h=600&fit=crop"
                    alt="Fresh groceries and home essentials"
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-white/40 via-white/20 to-transparent"
                    initial={{ x: "-100%", y: "-100%" }}
                    whileHover={{ x: "100%", y: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 to-orange-400/20 rounded-[2.5rem] blur-2xl -z-10 opacity-50" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ==============================
          CATEGORY SHOWCASE SECTION
         ============================== */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-white via-emerald-50/20 to-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 md:px-6 lg:px-8"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {/* Section Header */}
            <motion.div variants={itemVariants} className="text-center space-y-6 max-w-3xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-emerald-50 border border-emerald-200 text-emerald-800 font-black text-xs tracking-widest uppercase shadow-sm"
              >
                Product Categories
              </motion.div>
              <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#044116] via-[#055a1a] to-[#044116] tracking-tight">
                Choose Your Category
              </motion.h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Browse our carefully organized collection of premium products
              </p>
            </motion.div>

            {/* Category Cards Grid */}
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {categories.map((category) => (
                <motion.div
                  key={category.name}
                  variants={itemVariants}
                  whileHover={{ y: -12 }}
                  className="group relative"
                >
                  <Link href={category.path}>
                    <div className="relative p-8 bg-white rounded-3xl border border-slate-100 hover:border-emerald-300 shadow-lg hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500 overflow-hidden h-full flex flex-col justify-between min-h-[320px]">
                      {/* Background Gradient */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 to-orange-50/0 group-hover:from-emerald-50/50 group-hover:to-orange-50/30 transition-all duration-500 rounded-3xl"
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                      />

                      <div className="relative z-10">
                        {/* Icon */}
                        <motion.div
                          className="mb-6 p-4 w-fit rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 group-hover:from-[#044116] group-hover:to-[#055a1a] transition-all duration-500"
                          whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                        >
                          <Leaf
                            className="w-8 h-8 text-[#044116] group-hover:text-white transition-all"
                            strokeWidth={1.5}
                          />
                        </motion.div>

                        {/* Title */}
                        <h3 className="text-3xl font-black text-[#044116] mb-4 group-hover:text-emerald-700 transition-colors">
                          {category.name}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-600 text-base leading-relaxed mb-6 group-hover:text-slate-700 transition-colors">
                          {category.description}
                        </p>
                      </div>

                      {/* Bottom CTA */}
                      <motion.div
                        className="relative z-10 flex items-center gap-2 text-[#044116] font-bold group-hover:gap-3 transition-all"
                        whileHover={{ x: 5 }}
                      >
                        Browse {category.name}
                        <ArrowRight className="w-5 h-5 transition-transform" />
                      </motion.div>

                      {/* Hover Glow */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/0 via-emerald-400/0 to-emerald-400/0 group-hover:from-emerald-400/20 group-hover:via-emerald-400/10 group-hover:to-orange-400/20 rounded-3xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ==============================
          FEATURES SECTION
         ============================== */}
      <section className="relative py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="p-8 rounded-3xl bg-gradient-to-br from-white to-emerald-50/30 border border-emerald-100 hover:border-emerald-300 transition-all shadow-lg hover:shadow-xl"
                >
                  <motion.div
                    className="p-4 w-fit rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-8 h-8 text-[#044116]" strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-[#044116] mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
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

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  )
}
