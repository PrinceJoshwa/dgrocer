// // "use client"

// // import { useState } from "react"
// // import { motion, AnimatePresence } from "framer-motion"
// // import Header from "@/components/header"
// // import Footer from "@/components/footer"
// // import CTASection from "@/components/cta-section"
// // import { products, Product } from "@/lib/products"
// // import { ShoppingBag, Leaf, Droplet, Bean, Search, Filter, ArrowRight } from "lucide-react"

// // export default function ProductsPage() {
// //   const [activeCategory, setActiveCategory] = useState("All")
// //   const categories = ["All", "Gift Box", "Sweeteners", "Spices", "Dals & Pulses"]

// //   const filteredProducts = activeCategory === "All" 
// //     ? products 
// //     : products.filter(p => p.category === activeCategory)

// //   // Whatsapp generator
// //   const getWhatsappLink = (product: Product) => {
// //     const text = `Hi D'GROCER, I am interested in ${product.name}. Please share details.`
// //     return `https://wa.me/919445477032?text=${encodeURIComponent(text)}`
// //   }

// //   return (
// //     <div className="min-h-screen bg-slate-50">
// //       <Header />
      
// //       {/* Page Header */}
// //       <div className="bg-[#044116] text-white py-20 relative overflow-hidden">
// //         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
// //         <div className="container mx-auto px-4 text-center relative z-10">
// //           <motion.h1 
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             className="text-4xl md:text-5xl font-black mb-4"
// //           >
// //             Our Complete Catalog
// //           </motion.h1>
// //           <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
// //             From premium gift boxes to daily kitchen essentials. Explore our range of high-quality ingredients.
// //           </p>
// //         </div>
// //       </div>

// //       {/* Filter Section */}
// //       <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 py-4">
// //         <div className="container mx-auto px-4 overflow-x-auto">
// //           <div className="flex gap-2 md:justify-center min-w-max">
// //             {categories.map((cat) => (
// //               <button
// //                 key={cat}
// //                 onClick={() => setActiveCategory(cat)}
// //                 className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
// //                   activeCategory === cat
// //                     ? "bg-[#044116] text-white shadow-lg shadow-emerald-900/20"
// //                     : "bg-gray-100 text-gray-600 hover:bg-gray-200"
// //                 }`}
// //               >
// //                 {cat}
// //               </button>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       {/* Product Grid */}
// //       <div className="container mx-auto px-4 py-12 md:py-16">
// //         <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //           <AnimatePresence>
// //             {filteredProducts.map((product) => (
// //               <ProductCard key={product.id} product={product} getLink={getWhatsappLink} />
// //             ))}
// //           </AnimatePresence>
// //         </motion.div>
// //       </div>

// //       <CTASection />
// //       <Footer />
// //     </div>
// //   )
// // }

// // function ProductCard({ product, getLink }: { product: Product, getLink: (p: Product) => string }) {
// //   const isGiftBox = product.category === "Gift Box"

// //   return (
// //     <motion.div
// //       layout
// //       initial={{ opacity: 0, scale: 0.9 }}
// //       animate={{ opacity: 1, scale: 1 }}
// //       exit={{ opacity: 0, scale: 0.9 }}
// //       whileHover={{ y: -5 }}
// //       className={`bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-emerald-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${isGiftBox ? '' : 'p-6'}`}
// //     >
// //       {/* --- LAYOUT FOR GIFT BOXES (IMAGE FOCUSED) --- */}
// //       {isGiftBox && (
// //         <>
// //           <div className="relative h-64 bg-gray-50 p-4">
// //             <img 
// //               src={product.image || "/placeholder.svg"} 
// //               alt={product.name} 
// //               className="w-full h-full object-contain hover:scale-110 transition-transform duration-500"
// //             />
// //             {product.badge && (
// //               <span className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
// //                 {product.badge}
// //               </span>
// //             )}
// //           </div>
// //           <div className="p-6 flex flex-col flex-grow">
// //             <div className="flex justify-between items-start mb-2">
// //               <h3 className="text-xl font-bold text-slate-800">{product.name}</h3>
// //               <span className="bg-emerald-50 text-[#044116] text-xs font-bold px-2 py-1 rounded-md">{product.weight}</span>
// //             </div>
// //             <div className="flex-grow">
// //               <p className="text-xs text-slate-400 font-bold uppercase mb-2">Includes</p>
// //               <div className="flex flex-wrap gap-1">
// //                 {product.items?.slice(0, 4).map((item, i) => (
// //                   <span key={i} className="text-xs text-slate-600 bg-gray-100 px-2 py-1 rounded-sm">{item}</span>
// //                 ))}
// //                 {(product.items?.length || 0) > 4 && <span className="text-xs text-slate-500 px-1">+{product.items!.length - 4} more</span>}
// //               </div>
// //             </div>
// //             <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
// //               <span className="text-2xl font-black text-[#044116]">{product.price}</span>
// //               <a href={getLink(product)} target="_blank" className="flex items-center gap-2 text-sm font-bold text-[#044116] hover:underline">
// //                 Order <ArrowRight size={16} />
// //               </a>
// //             </div>
// //           </div>
// //         </>
// //       )}

// //       {/* --- LAYOUT FOR GROCERIES (LIST/TABLE FOCUSED) --- */}
// //       {!isGiftBox && (
// //         <div className="flex flex-col h-full">
// //           <div className="flex items-center gap-4 mb-4">
// //             <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
// //               product.category === 'Sweeteners' ? 'bg-amber-100 text-amber-700' :
// //               product.category === 'Spices' ? 'bg-red-100 text-red-700' :
// //               'bg-emerald-100 text-emerald-700'
// //             }`}>
// //               {product.category === 'Sweeteners' && <Droplet size={20} />}
// //               {product.category === 'Spices' && <Leaf size={20} />}
// //               {product.category === 'Dals & Pulses' && <Bean size={20} />}
// //             </div>
// //             <div>
// //               <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">{product.category}</span>
// //               <h3 className="text-lg font-bold text-slate-800 leading-tight">{product.name}</h3>
// //             </div>
// //           </div>

// //           <div className="bg-gray-50 rounded-xl p-4 flex-grow">
// //             <div className="flex justify-between text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">
// //               <span>Weight</span>
// //               <span>Price</span>
// //             </div>
// //             <div className="space-y-2">
// //               {product.prices?.map((p, idx) => (
// //                 <div key={idx} className="flex justify-between items-center text-sm border-b border-gray-200 last:border-0 pb-1 last:pb-0">
// //                   <span className="font-medium text-slate-600">{p.weight}</span>
// //                   <span className="font-bold text-[#044116]">{p.price}</span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           <a 
// //             href={getLink(product)} 
// //             target="_blank"
// //             className="mt-4 w-full py-2 rounded-lg border border-emerald-200 text-[#044116] font-bold text-sm flex items-center justify-center gap-2 hover:bg-emerald-50 transition-colors"
// //           >
// //             Inquire via WhatsApp
// //           </a>
// //         </div>
// //       )}
// //     </motion.div>
// //   )
// // }

// "use client"

// import { useState, useMemo } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import Header from "@/components/header"
// import Footer from "@/components/footer"
// import { products, Product } from "@/lib/products"
// import { 
//   Search, 
//   ShoppingBag, 
//   Leaf, 
//   Droplet, 
//   Bean, 
//   Filter, 
//   ArrowUpRight,
//   MessageCircle,
//   Package
// } from "lucide-react"

// export default function ProductsPage() {
//   const [activeCategory, setActiveCategory] = useState("All")
//   const [searchQuery, setSearchQuery] = useState("")

//   const categories = ["All", "Gift Box", "Sweeteners", "Spices", "Dals & Pulses"]

//   // Filter Logic
//   const filteredProducts = useMemo(() => {
//     return products.filter((product) => {
//       const matchesCategory = activeCategory === "All" || product.category === activeCategory
//       const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
//       return matchesCategory && matchesSearch
//     })
//   }, [activeCategory, searchQuery])

//   return (
//     <div className="min-h-screen bg-slate-50/50">
//       <Header />
      
//       {/* ==================== 
//           HERO SECTION 
//       ==================== */}
//       <div className="relative bg-[#044116] text-white pt-32 pb-24 overflow-hidden">
//         {/* Abstract Background Pattern */}
//         <div className="absolute inset-0 opacity-10">
//             <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
//               <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
//             </svg>
//         </div>
        
//         <div className="container mx-auto px-4 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
//               Our Collection
//             </h1>
//             <p className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
//               Explore our premium range of dry fruits, spices, and healthy essentials.
//             </p>
//           </motion.div>
//         </div>
//       </div>

//       {/* ==================== 
//           STICKY CONTROLS 
//       ==================== */}
//       <div className="sticky top-16 md:top-20 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
//             {/* Categories (Desktop & Mobile Scroll) */}
//             <div className="w-full md:w-auto overflow-x-auto no-scrollbar">
//               <div className="flex gap-2 min-w-max px-1">
//                 {categories.map((cat) => (
//                   <button
//                     key={cat}
//                     onClick={() => setActiveCategory(cat)}
//                     className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
//                       activeCategory === cat
//                         ? "bg-[#044116] border-[#044116] text-white shadow-lg shadow-emerald-900/20 transform scale-105"
//                         : "bg-white border-gray-200 text-slate-600 hover:border-emerald-200 hover:bg-emerald-50/50"
//                     }`}
//                   >
//                     {cat}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Search Bar */}
//             <div className="w-full md:w-72 relative">
//               <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
//                 <Search size={18} />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border-transparent focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 rounded-xl text-sm font-medium transition-all outline-none"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ==================== 
//           PRODUCT GRID 
//       ==================== */}
//       <div className="container mx-auto px-4 py-12 min-h-[60vh]">
//         {filteredProducts.length === 0 ? (
//           <div className="text-center py-20 text-slate-400">
//             <Package size={48} className="mx-auto mb-4 opacity-50" />
//             <p className="text-lg font-medium">No products found matching your search.</p>
//           </div>
//         ) : (
//           <motion.div 
//             layout 
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
//           >
//             <AnimatePresence mode="popLayout">
//               {filteredProducts.map((product) => (
//                 <ProductCard key={product.id} product={product} />
//               ))}
//             </AnimatePresence>
//           </motion.div>
//         )}
//       </div>

//       {/* <Footer /> */}
//     </div>
//   )
// }

// /* ==================== 
//    SMART PRODUCT CARD 
// ==================== */
// function ProductCard({ product }: { product: Product }) {
//   const isGiftBox = product.category === "Gift Box"

//   // Helper to generate WhatsApp Link
//   const getLink = (variant?: string, price?: string) => {
//     let message = ""
//     if (isGiftBox) {
//       message = `Hi, I would like to order the *${product.name} Gift Box* priced at ${product.price}.`
//     } else {
//       message = `Hi, I would like to order *${product.name}* (${variant}) priced at ${price}.`
//     }
//     return `https://wa.me/919445477032?text=${encodeURIComponent(message)}`
//   }

//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.95 }}
//       transition={{ duration: 0.3 }}
//       className={`group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-emerald-200/50 shadow-sm hover:shadow-xl hover:shadow-emerald-900/10 transition-all duration-500 flex flex-col h-full`}
//     >
//       {/* --- GIFT BOX LAYOUT --- */}
//       {isGiftBox ? (
//         <>
//           {/* Image Area */}
//           <div className="relative h-60 p-6 bg-gradient-to-br from-slate-50 to-white flex items-center justify-center overflow-hidden">
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//             <motion.img 
//               src={product.image || "/placeholder.svg"} 
//               alt={product.name}
//               whileHover={{ scale: 1.1, rotate: -2 }}
//               transition={{ type: "spring", stiffness: 300 }}
//               className="w-full h-full object-contain relative z-10 drop-shadow-md group-hover:drop-shadow-xl"
//             />
//             {product.badge && (
//               <span className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
//                 {product.badge}
//               </span>
//             )}
//           </div>

//           {/* Content Area */}
//           <div className="p-6 flex flex-col flex-grow relative">
//             <div className="mb-4">
//               <h3 className="text-xl font-black text-slate-800 mb-1 group-hover:text-[#044116] transition-colors">
//                 {product.name}
//               </h3>
//               <p className="text-sm font-bold text-slate-400">{product.weight}</p>
//             </div>

//             {/* Items List (Truncated) */}
//             <div className="flex-grow mb-6">
//               <div className="flex flex-wrap gap-1.5">
//                 {product.items?.slice(0, 3).map((item, i) => (
//                   <span key={i} className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-1 rounded-md border border-slate-200/50">
//                     {item}
//                   </span>
//                 ))}
//                 {(product.items?.length || 0) > 3 && (
//                   <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
//                     +{product.items!.length - 3} more
//                   </span>
//                 )}
//               </div>
//             </div>

//             {/* Footer Action */}
//             <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
//               <div className="flex flex-col">
//                 <span className="text-[10px] text-slate-400 font-bold uppercase">Price</span>
//                 <span className="text-2xl font-black text-[#044116]">{product.price}</span>
//               </div>
//               <a 
//                 href={getLink()}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 bg-[#044116] hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-emerald-900/20 active:scale-95"
//               >
//                 Order <ShoppingBag size={16} />
//               </a>
//             </div>
//           </div>
//         </>
//       ) : (
//         /* --- GROCERY ITEM LAYOUT --- */
//         <div className="flex flex-col h-full p-5">
//           {/* Header */}
//           <div className="flex items-start justify-between mb-4">
//             <div className="flex items-center gap-3">
//               <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
//                 product.category === 'Sweeteners' ? 'bg-amber-100 text-amber-600' :
//                 product.category === 'Spices' ? 'bg-red-100 text-red-600' :
//                 'bg-emerald-100 text-emerald-600'
//               }`}>
//                 {product.category === 'Sweeteners' && <Droplet size={20} />}
//                 {product.category === 'Spices' && <Leaf size={20} />}
//                 {product.category === 'Dals & Pulses' && <Bean size={20} />}
//               </div>
//               <div>
//                 <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-0.5">
//                   {product.category}
//                 </span>
//                 <h3 className="text-lg font-bold text-slate-800 leading-tight group-hover:text-[#044116] transition-colors">
//                   {product.name}
//                 </h3>
//               </div>
//             </div>
//           </div>

//           {/* Variants Table */}
//           <div className="bg-slate-50/80 rounded-2xl p-1 flex-grow border border-slate-100">
//             <div className="space-y-1">
//               {product.prices?.map((p, idx) => (
//                 <div key={idx} className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-100 shadow-sm hover:border-emerald-200 transition-colors group/item">
//                   <div className="flex flex-col">
//                     <span className="text-xs font-bold text-slate-500 uppercase">{p.weight}</span>
//                     <span className="text-lg font-black text-slate-800">{p.price}</span>
//                   </div>
                  
//                   {/* Micro Interaction Button */}
//                   <a
//                     href={getLink(p.weight, p.price)}
//                     target="_blank"
//                     className="p-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-[#044116] hover:text-white transition-all"
//                     title="Order this quantity"
//                   >
//                     <ArrowUpRight size={18} />
//                   </a>
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           <div className="mt-4 text-center">
//              <p className="text-[10px] text-slate-400 font-medium">Click arrow to order specific quantity</p>
//           </div>
//         </div>
//       )}
//     </motion.div>
    
//   )
// }

"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "@/components/header"
import { products, Product } from "@/lib/products"
import { 
  Search, 
  ShoppingBag, 
  ArrowUpRight,
  Package
} from "lucide-react"

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const categories = ["All", "Gift Box", "Sweeteners", "Spices", "Dals & Pulses"]

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = activeCategory === "All" || product.category === activeCategory
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <div className="min-h-screen bg-slate-50/50">
      <Header />
      
      {/* ==================== 
          HERO SECTION 
      ==================== */}
      <div className="relative bg-[#044116] text-white pt-32 pb-24 overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              Our Collection
            </h1>
            <p className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
              Explore our premium range of dry fruits, spices, and healthy essentials.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ==================== 
          STICKY CONTROLS 
      ==================== */}
      <div className="sticky top-16 md:top-20 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Categories (Desktop & Mobile Scroll) */}
            <div className="w-full md:w-auto overflow-x-auto no-scrollbar">
              <div className="flex gap-2 min-w-max px-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                      activeCategory === cat
                        ? "bg-[#044116] border-[#044116] text-white shadow-lg shadow-emerald-900/20 transform scale-105"
                        : "bg-white border-gray-200 text-slate-600 hover:border-emerald-200 hover:bg-emerald-50/50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Bar */}
            <div className="w-full md:w-72 relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                <Search size={18} />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border-transparent focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 rounded-xl text-sm font-medium transition-all outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ==================== 
          PRODUCT GRID 
      ==================== */}
      <div className="container mx-auto px-4 py-12 min-h-[60vh]">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <Package size={48} className="mx-auto mb-4 opacity-50" />
            <p className="text-lg font-medium">No products found matching your search.</p>
          </div>
        ) : (
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  )
}

/* ==================== 
   SMART PRODUCT CARD 
==================== */
function ProductCard({ product }: { product: Product }) {
  const isGiftBox = product.category === "Gift Box"

  // Helper to generate WhatsApp Link
  const getLink = (variant?: string, price?: string) => {
    let message = ""
    if (isGiftBox) {
      message = `Hi, I would like to order the *${product.name} Gift Box* priced at ${product.price}.`
    } else {
      message = `Hi, I would like to order *${product.name}* (${variant}) priced at ${price}.`
    }
    return `https://wa.me/919445477032?text=${encodeURIComponent(message)}`
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={`group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-emerald-200/50 shadow-sm hover:shadow-xl hover:shadow-emerald-900/10 transition-all duration-500 flex flex-col h-full`}
    >
      {/* --- GIFT BOX LAYOUT --- */}
      {isGiftBox ? (
        <>
          {/* Large Image Area for Gift Boxes */}
          <div className="relative h-60 p-6 bg-gradient-to-br from-slate-50 to-white flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.img 
              src={product.image || "/placeholder.svg"} 
              alt={product.name}
              whileHover={{ scale: 1.1, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full h-full object-contain relative z-10 drop-shadow-md group-hover:drop-shadow-xl"
            />
            {product.badge && (
              <span className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                {product.badge}
              </span>
            )}
          </div>

          <div className="p-6 flex flex-col flex-grow relative">
            <div className="mb-4">
              <h3 className="text-xl font-black text-slate-800 mb-1 group-hover:text-[#044116] transition-colors">
                {product.name}
              </h3>
              <p className="text-sm font-bold text-slate-400">{product.weight}</p>
            </div>

            <div className="flex-grow mb-6">
              <div className="flex flex-wrap gap-1.5">
                {product.items?.slice(0, 3).map((item, i) => (
                  <span key={i} className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-1 rounded-md border border-slate-200/50">
                    {item}
                  </span>
                ))}
                {(product.items?.length || 0) > 3 && (
                  <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                    +{product.items!.length - 3} more
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Price</span>
                <span className="text-2xl font-black text-[#044116]">{product.price}</span>
              </div>
              <a 
                href={getLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#044116] hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-emerald-900/20 active:scale-95"
              >
                Order <ShoppingBag size={16} />
              </a>
            </div>
          </div>
        </>
      ) : (
        /* --- GROCERY ITEM LAYOUT (Now with Images!) --- */
        <div className="flex flex-col h-full p-4">
          
          {/* Grocery Image Container - Added New */}
          <div className="relative h-40 mb-4 bg-slate-50 rounded-2xl flex items-center justify-center p-3 overflow-hidden group/image">
            <motion.img 
              src={product.image || "/placeholder.svg"} 
              alt={product.name}
              className="w-full h-full object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-500"
            />
            {/* Category Label Overlay */}
            <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-slate-500 shadow-sm border border-slate-100">
              {product.category}
            </div>
          </div>

          <div className="mb-4 px-1">
            <h3 className="text-lg font-bold text-slate-800 leading-tight group-hover:text-[#044116] transition-colors">
              {product.name}
            </h3>
          </div>

          {/* Variants Table */}
          <div className="bg-slate-50/80 rounded-2xl p-1 flex-grow border border-slate-100">
            <div className="space-y-1">
              {product.prices?.map((p, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-100 shadow-sm hover:border-emerald-200 transition-colors group/item">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-500 uppercase">{p.weight}</span>
                    <span className="text-lg font-black text-slate-800">{p.price}</span>
                  </div>
                  
                  {/* Micro Interaction Button */}
                  <a
                    href={getLink(p.weight, p.price)}
                    target="_blank"
                    className="p-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-[#044116] hover:text-white transition-all"
                    title="Order this quantity"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  )
}