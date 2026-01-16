// // // "use client"

// // // import { motion, type Variants, useMotionValue, useSpring, useTransform } from "framer-motion"
// // // import { useInView } from "react-intersection-observer"
// // // import { useState, useRef, MouseEvent } from "react"

// // // export default function ProductShowcase() {
// // //   const { ref, inView } = useInView({
// // //     triggerOnce: true,
// // //     threshold: 0.1,
// // //   })

// // //   /* =======================
// // //      ANIMATION VARIANTS
// // //   ======================= */

// // //   const containerVariants: Variants = {
// // //     hidden: { opacity: 0 },
// // //     visible: {
// // //       opacity: 1,
// // //       transition: {
// // //         staggerChildren: 0.03,
// // //         delayChildren: 0.05,
// // //       },
// // //     },
// // //   }

// // //   const itemVariants: Variants = {
// // //     hidden: { opacity: 0, y: 60, scale: 0.9 },
// // //     visible: {
// // //       opacity: 1,
// // //       y: 0,
// // //       scale: 1,
// // //       transition: {
// // //         type: "spring",
// // //         damping: 20,
// // //         stiffness: 100,
// // //         duration: 0.6,
// // //       },
// // //     },
// // //   }

// // //   /* =======================
// // //      PRODUCT DATA (UPDATED FROM PDF)
// // //   ======================= */

// // //   const products = [
// // //     {
// // //       name: "Economy",
// // //       weight: "300g",
// // //       price: "₹199",
// // //       items: [
// // //         "Almond",
// // //         "Cashew",
// // //         "Black Kismiss",
// // //         "Fig",
// // //       ],
// // //       // image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766506305/Screenshot_2025-12-23_213202_jwz81l.png",
// // //       image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/9.png?updatedAt=1766849966367",
// // //     },
// // //     {
// // //       name: "Standard",
// // //       weight: "400g",
// // //       price: "₹299",
// // //       badge: "Popular",
// // //       items: [
// // //         "Almond",
// // //         "Cashew",
// // //         "Black Kismiss",
// // //         "Fig",
// // //       ],
// // //       // image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766506306/Screenshot_2025-12-23_213143_zieuou.png",
// // //       image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/7.png?updatedAt=1766849965838",
// // //     },
// // //     {
// // //       name: "Standard Plus",
// // //       weight: "400g",
// // //       price: "₹399",
// // //       items: [
// // //         "Almond",
// // //         "Cashew",
// // //         "Kismiss",
// // //         "Pista",
// // //       ],
// // //       // image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766506307/Screenshot_2025-12-23_213221_oimy6c.png",
// // //       image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/2.png?updatedAt=1766849968531",
// // //     },
// // //     {
// // //       name: "Premium",
// // //       weight: "560g",
// // //       price: "₹499",
// // //       items: [
// // //         "Almond",
// // //         "Cashew",
// // //         "Black Kismiss",
// // //         "Fig",
// // //         "Pista",
// // //         "Pumpkin Seed",
// // //       ],
// // //       // image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766506306/Screenshot_2025-12-23_213307_fve6uc.png",
// // //       image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/6.png?updatedAt=1766849968568",
// // //     },
// // //     {
// // //       name: "Classic",
// // //       weight: "750g",
// // //       price: "₹599",
// // //       items: [
// // //         "Almond",
// // //         "Cashew",
// // //         "Black Kismiss",
// // //         "Fig",
// // //         "Pista",
// // //         "Pumpkin Seed",
// // //         "Kismiss",
// // //       ],
// // //       // image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766506304/Screenshot_2025-12-23_213357_zbjnmm.png",
// // //       image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/5.png?updatedAt=1766849966756",
// // //     },
// // //     {
// // //       name: "Royal",
// // //       weight: "600g",
// // //       price: "₹699",
// // //       items: [
// // //         "Almond",
// // //         "Cashew",
// // //         "Kismiss",
// // //         "Walnut",
// // //         "Pista",
// // //         "Pumpkin Seed",
// // //       ],
// // //       // image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766506303/Screenshot_2025-12-23_213256_rupwjd.png",
// // //       image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/1.png?updatedAt=1766849968324",
// // //     },
// // //     {
// // //       name: "Royal Plus",
// // //       weight: "700g",
// // //       price: "₹699",
// // //       items: [
// // //         "Almond",
// // //         "Cashew",
// // //         "Kismiss",
// // //         "Pista",
// // //       ],
// // //       // image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766506304/Screenshot_2025-12-23_213320_pnpsfc.png",
// // //       image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/8.png?updatedAt=1766849965157",
// // //     },
// // //     {
// // //       name: "Delight",
// // //       weight: "Gift Hamper",
// // //       price: "₹799",
// // //       badge: "New",
// // //       items: [
// // //         "Edenberg Wine (375ml)",
// // //         "Biscoff",
// // //         "Kinder Creamy",
// // //         "Dairy Milk",
// // //         "Munch",
// // //         "Gems",
// // //       ],
// // //       // Placeholder image or use a generic festive one
// // //       // image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766506300/Screenshot_2025-12-23_213342_af5xur.png", 
// // //       image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/Delight.png?updatedAt=1767258946402", 
// // //     },
// // //     {
// // //       name: "Elite",
// // //       weight: "1000g",
// // //       price: "₹999",
// // //       items: [
// // //         "Almond",
// // //         "Cashew",
// // //         "Black Kismiss",
// // //         "Pumpkin Seed",
// // //         "Kismiss",
// // //         "Pista",
// // //         "Fig",
// // //       ],
// // //       // image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766506300/Screenshot_2025-12-23_213342_af5xur.png",
// // //       image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/elite.png?updatedAt=1767258946375",
// // //     },
// // //     {
// // //       name: "Supreme",
// // //       weight: "Gift Hamper",
// // //       price: "₹1099",
// // //       badge: "New",
// // //       items: [
// // //         "Edenberg Wine (375ml)",
// // //         "Biscoff",
// // //         "Dairy Milk",
// // //         "Nestle",
// // //         "Kitkat",
// // //         "Imported Chocolates",
// // //       ],
// // //       // Placeholder image or use a generic festive one
// // //       // image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766506300/Screenshot_2025-12-23_213342_af5xur.png",
// // //       image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/supreme.png?updatedAt=1767258936964",
// // //     },
// // //     {
// // //       name: "Luxury",
// // //       weight: "1100g",
// // //       price: "₹1499",
// // //       badge: "Premium",
// // //       items: [
// // //         "Almond",
// // //         "Cashew",
// // //         "Black Kismiss",
// // //         "Fig",
// // //         "Pista",
// // //         "Pumpkin Seed",
// // //         "Kismiss",
// // //         "Walnut",
// // //       ],
// // //       // image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766506297/Screenshot_2025-12-23_213416_ppgh3o.png",
// // //       image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/luxury.png?updatedAt=1767258948073",
// // //     },
// // //   ]

// // //   /* =======================
// // //      PRODUCT CARD COMPONENT
// // //   ======================= */

// // //   const ProductCard = ({ product, index }: { product: typeof products[0], index: number }) => {
// // //     const cardRef = useRef<HTMLDivElement>(null)
// // //     const [isHovered, setIsHovered] = useState(false)

// // //     // Magnetic effect values
// // //     const x = useMotionValue(0)
// // //     const y = useMotionValue(0)

// // //     const springConfig = { damping: 20, stiffness: 300 }
// // //     const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), springConfig)
// // //     const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), springConfig)

// // //     const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
// // //       if (!cardRef.current) return
// // //       const rect = cardRef.current.getBoundingClientRect()
// // //       const centerX = rect.left + rect.width / 2
// // //       const centerY = rect.top + rect.height / 2
// // //       x.set((e.clientX - centerX) / rect.width)
// // //       y.set((e.clientY - centerY) / rect.height)
// // //     }

// // //     const handleMouseLeave = () => {
// // //       x.set(0)
// // //       y.set(0)
// // //       setIsHovered(false)
// // //     }

// // //     // Construct WhatsApp message based on product
// // //     const whatsappMessage = `Hi D'GROCER, I would like to place an order for the ${product.name} Gift Box (${product.price})`;
// // //     const whatsappLink = `https://wa.me/919445477032?text=${encodeURIComponent(whatsappMessage)}`;

// // //     return (
// // //       <motion.div
// // //         ref={cardRef}
// // //         variants={itemVariants}
// // //         onMouseMove={handleMouseMove}
// // //         onMouseEnter={() => setIsHovered(true)}
// // //         onMouseLeave={handleMouseLeave}
// // //         style={{ rotateX, rotateY }}
// // //         whileHover={{ y: -15, transition: { duration: 0.3 } }}
// // //         className="group relative bg-white rounded-3xl flex flex-col border border-slate-100 hover:border-emerald-300 shadow-md hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500 overflow-hidden"
// // //       >
// // //         {/* Badge */}
// // //         {product.badge && (
// // //           <motion.div
// // //             initial={{ scale: 0, rotate: -180 }}
// // //             animate={{ scale: 1, rotate: 0 }}
// // //             transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
// // //             className="absolute top-4 right-4 z-20"
// // //           >
// // //             <span className="px-3 py-1.5 bg-gradient-to-r from-[#044116] to-[#055a1a] text-white text-[10px] font-black uppercase tracking-wider rounded-full shadow-xl shadow-emerald-900/30">
// // //               {product.badge}
// // //             </span>
// // //           </motion.div>
// // //         )}

// // //         {/* Image Container with Enhanced Effects */}
// // //         <div className="relative h-72 overflow-hidden bg-gradient-to-br from-emerald-50/50 via-white to-orange-50/30 p-6 flex items-center justify-center">
// // //           <motion.div
// // //             className="relative w-full h-full"
// // //             animate={isHovered ? { scale: 1.15 } : { scale: 1 }}
// // //             transition={{ duration: 0.6, ease: "easeOut" }}
// // //           >
// // //             <img
// // //               src={product.image}
// // //               alt={product.name}
// // //               onError={(e) => {
// // //                 // Fallback if image fails or is empty
// // //                 (e.target as HTMLImageElement).src = "/placeholder.svg"
// // //               }}
// // //               className="w-full h-full object-contain drop-shadow-lg"
// // //             />
// // //           </motion.div>

// // //           {/* Animated Gradient Overlay */}
// // //           <motion.div
// // //             className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: isHovered ? 0.8 : 0 }}
// // //             transition={{ duration: 0.3 }}
// // //           />

// // //           {/* Shine Effect */}
// // //           <motion.div
// // //             className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent"
// // //             initial={{ x: "-100%", y: "-100%" }}
// // //             animate={isHovered ? { x: "100%", y: "100%" } : { x: "-100%", y: "-100%" }}
// // //             transition={{ duration: 0.8 }}
// // //           />
// // //         </div>

// // //         {/* Content */}
// // //         <div className="p-6 flex flex-col flex-grow">
// // //           {/* Title & Weight */}
// // //           <div className="mb-4">
// // //             <div className="flex justify-between items-start mb-2">
// // //               <h3 className="text-xl md:text-2xl font-black text-slate-900 group-hover:text-[#044116] transition-colors">
// // //                 {product.name}
// // //               </h3>
// // //               <span className="text-xs font-bold text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100 whitespace-nowrap">
// // //                 {product.weight}
// // //               </span>
// // //             </div>
// // //           </div>

// // //           {/* Ingredients List */}
// // //           <div className="flex-grow space-y-3 mb-6">
// // //             <div className="text-xs font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">
// // //               What's Inside
// // //             </div>
// // //             <ul className="space-y-2">
// // //               {product.items.map((item, i) => (
// // //                 <motion.li
// // //                   key={i}
// // //                   initial={{ opacity: 0, x: -10 }}
// // //                   animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
// // //                   transition={{ delay: i * 0.05 }}
// // //                   className="flex items-center text-sm text-slate-600 group-hover:text-slate-700"
// // //                 >
// // //                   <motion.span
// // //                     animate={isHovered ? { scale: [1, 1.5, 1] } : { scale: 1 }}
// // //                     transition={{ delay: i * 0.05 }}
// // //                     className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 mr-3 flex-shrink-0"
// // //                   />
// // //                   <span className="truncate font-medium">{item}</span>
// // //                 </motion.li>
// // //               ))}
// // //             </ul>
// // //           </div>

// // //           {/* Footer: Price & Action */}
// // //           <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
// // //             <div>
// // //               <p className="text-xs text-slate-400 font-semibold mb-1">Price</p>
// // //               <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#044116] to-[#055a1a]">
// // //                 {product.price}
// // //               </p>
// // //             </div>

// // //             <motion.a
// // //               href={whatsappLink}
// // //               target="_blank"
// // //               rel="noopener noreferrer"
// // //               whileHover={{ scale: 1.05 }}
// // //               whileTap={{ scale: 0.95 }}
// // //               className="relative px-5 py-2.5 bg-gradient-to-r from-emerald-50 to-emerald-100 text-[#044116] text-sm font-black rounded-xl group-hover:from-[#044116] group-hover:to-[#055a1a] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg overflow-hidden"
// // //             >
// // //               <span className="relative z-10">Order Now</span>
// // //             </motion.a>
// // //           </div>
// // //         </div>

// // //         {/* Hover Glow Effect */}
// // //         <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/0 via-emerald-400/0 to-emerald-400/0 group-hover:from-emerald-400/20 group-hover:via-emerald-400/10 group-hover:to-orange-400/20 rounded-3xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
// // //       </motion.div>
// // //     )
// // //   }

// // //   /* =======================
// // //      UI
// // //   ======================= */

// // //   return (
// // //     <section
// // //       ref={ref}
// // //       className="py-24 md:py-32 bg-gradient-to-b from-white via-[#FDFBF7] to-emerald-50/30"
// // //     >
// // //       <div className="container mx-auto px-4 md:px-6 lg:px-8">
// // //         <motion.div
// // //           variants={containerVariants}
// // //           initial={false}
// // //           animate={inView ? "visible" : "visible"}
// // //           className="space-y-16"
// // //         >
// // //           {/* Heading */}
// // //           <motion.div variants={itemVariants} className="text-center space-y-6">
// // //             <motion.div
// // //               whileHover={{ scale: 1.05 }}
// // //               className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-emerald-50 border border-emerald-200 text-[#044116] font-black text-xs tracking-widest uppercase shadow-sm"
// // //             >
// // //               Our Selection
// // //             </motion.div>
// // //             <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#044116] via-[#055a1a] to-[#044116] tracking-tight">
// // //               Gift Boxes Collection
// // //             </h2>
// // //             <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
// // //               Thoughtfully curated premium dry fruit gift boxes for every
// // //               occasion and budget. Each box is a celebration of health and taste.
// // //             </p>
// // //           </motion.div>

// // //           {/* Products Grid */}
// // //           <motion.div
// // //             variants={containerVariants}
// // //             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10"
// // //           >
// // //             {products.map((product, idx) => (
// // //               <ProductCard key={idx} product={product} index={idx} />
// // //             ))}
// // //           </motion.div>

// // //           {/* Footer Text */}
// // //           <motion.div
// // //             variants={itemVariants}
// // //             className="text-center bg-gradient-to-r from-white via-emerald-50/50 to-white p-10 rounded-3xl border border-emerald-100 shadow-lg max-w-4xl mx-auto"
// // //           >
// // //             <p className="font-black text-[#044116] text-xl md:text-2xl mb-3">
// // //               Perfect Gift for Corporates & Festive Occasions
// // //             </p>
// // //             <p className="text-slate-600 text-lg">
// // //               Need bulk orders? We offer customized gift boxes tailored to your requirements.
// // //             </p>
// // //           </motion.div>
// // //         </motion.div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // "use client"

// // import { motion, type Variants, useMotionValue, useSpring, useTransform } from "framer-motion"
// // import { useInView } from "react-intersection-observer"
// // import { useState, useRef, MouseEvent } from "react"
// // import { ArrowRight } from "lucide-react"
// // import Link from "next/link"
// // import { products } from "@/lib/products" // IMPORTING SHARED DATA

// // export default function ProductShowcase() {
// //   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

// //   // FILTER FOR HOME PAGE: Only show popular Gift Boxes (First 4 items marked popular or top 4)
// //   const homeProducts = products.filter(p => p.category === "Gift Box" && p.popular).slice(0, 4)

// //   const containerVariants: Variants = {
// //     hidden: { opacity: 0 },
// //     visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
// //   }

// //   const itemVariants: Variants = {
// //     hidden: { opacity: 0, y: 50 },
// //     visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 20 } },
// //   }

// //   /* =======================
// //      PRODUCT CARD (Simplified for internal use)
// //   ======================= */
// //   const ProductCard = ({ product, index }: { product: typeof homeProducts[0], index: number }) => {
// //     const cardRef = useRef<HTMLDivElement>(null)
// //     const [isHovered, setIsHovered] = useState(false)
// //     const x = useMotionValue(0)
// //     const y = useMotionValue(0)

// //     const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
// //       if (!cardRef.current) return
// //       const rect = cardRef.current.getBoundingClientRect()
// //       x.set((e.clientX - (rect.left + rect.width / 2)) / rect.width)
// //       y.set((e.clientY - (rect.top + rect.height / 2)) / rect.height)
// //     }

// //     const whatsappLink = `https://wa.me/919445477032?text=Hi%20I%20am%20interested%20in%20${product.name}`

// //     return (
// //       <motion.div
// //         ref={cardRef}
// //         variants={itemVariants}
// //         onMouseMove={handleMouseMove}
// //         onMouseEnter={() => setIsHovered(true)}
// //         onMouseLeave={() => { setIsHovered(false); x.set(0); y.set(0) }}
// //         style={{ rotateX: useSpring(useTransform(y, [-0.5, 0.5], [5, -5])), rotateY: useSpring(useTransform(x, [-0.5, 0.5], [-5, 5])) }}
// //         className="group relative bg-white rounded-3xl flex flex-col border border-slate-100 hover:border-emerald-300 shadow-md hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500 overflow-hidden"
// //       >
// //         <div className="relative h-64 bg-slate-50 p-6 flex items-center justify-center overflow-hidden">
// //           <motion.img
// //             src={product.image}
// //             alt={product.name}
// //             animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
// //             className="w-full h-full object-contain drop-shadow-md z-10 relative"
// //           />
// //            {product.badge && (
// //             <span className="absolute top-4 right-4 z-20 px-3 py-1 bg-[#044116] text-white text-[10px] font-bold uppercase rounded-full">
// //               {product.badge}
// //             </span>
// //           )}
// //         </div>

// //         <div className="p-6 flex flex-col flex-grow">
// //           <h3 className="text-xl font-black text-slate-900 mb-1">{product.name}</h3>
// //           <p className="text-sm font-bold text-slate-400 mb-4">{product.weight}</p>
          
// //           <div className="flex-grow">
// //              <div className="flex flex-wrap gap-2">
// //                 {product.items?.slice(0, 3).map((item, i) => (
// //                   <span key={i} className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-md">{item}</span>
// //                 ))}
// //                 <span className="text-xs text-slate-400 py-1">+more</span>
// //              </div>
// //           </div>

// //           <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
// //             <span className="text-2xl font-black text-[#044116]">{product.price}</span>
// //             <a href={whatsappLink} className="text-sm font-bold text-[#044116] underline decoration-2 underline-offset-4">Order Now</a>
// //           </div>
// //         </div>
// //       </motion.div>
// //     )
// //   }

// //   return (
// //     <section ref={ref} className="py-24 bg-gradient-to-b from-white via-[#FDFBF7] to-emerald-50/30">
// //       <div className="container mx-auto px-4 md:px-6">
// //         <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="space-y-12">
          
// //           <div className="text-center space-y-4">
// //             <h2 className="text-4xl md:text-5xl font-black text-[#044116]">Best Sellers</h2>
// //             <p className="text-lg text-slate-600 max-w-2xl mx-auto">
// //               Our most loved premium gift boxes, perfect for any occasion.
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// //             {homeProducts.map((product, idx) => (
// //               <ProductCard key={idx} product={product} index={idx} />
// //             ))}
// //           </div>

// //           <motion.div variants={itemVariants} className="flex justify-center pt-8">
// //             <Link 
// //               href="/products"
// //               className="group flex items-center gap-3 px-8 py-4 bg-[#044116] text-white rounded-full font-bold shadow-xl shadow-emerald-900/20 hover:scale-105 transition-transform"
// //             >
// //               View Full Catalog
// //               <ArrowRight className="group-hover:translate-x-1 transition-transform" />
// //             </Link>
// //           </motion.div>

// //         </motion.div>
// //       </div>
// //     </section>
// //   )
// // }

// "use client"

// import { motion, type Variants, useMotionValue, useSpring, useTransform } from "framer-motion"
// import { useInView } from "react-intersection-observer"
// import { useState, useRef, MouseEvent } from "react"
// import { ArrowRight } from "lucide-react"
// import Link from "next/link"
// import { products } from "@/lib/products" // ✅ CHANGED TO LIB

// export default function ProductShowcase() {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

//   // FILTER: Try to find popular items
//   let homeProducts = products.filter(p => p.category === "Gift Box" && p.popular).slice(0, 4)
  
//   // FALLBACK: If no popular items found, just show the first 4 Gift Boxes
//   if (homeProducts.length === 0) {
//     homeProducts = products.filter(p => p.category === "Gift Box").slice(0, 4)
//   }

//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
//   }

//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 20 } },
//   }

//   /* =======================
//      PRODUCT CARD
//   ======================= */
//   const ProductCard = ({ product, index }: { product: typeof homeProducts[0], index: number }) => {
//     const cardRef = useRef<HTMLDivElement>(null)
//     const [isHovered, setIsHovered] = useState(false)
//     const x = useMotionValue(0)
//     const y = useMotionValue(0)

//     const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
//       if (!cardRef.current) return
//       const rect = cardRef.current.getBoundingClientRect()
//       x.set((e.clientX - (rect.left + rect.width / 2)) / rect.width)
//       y.set((e.clientY - (rect.top + rect.height / 2)) / rect.height)
//     }

//     const whatsappLink = `https://wa.me/919445477032?text=Hi%20I%20am%20interested%20in%20${product.name}`

//     return (
//       <motion.div
//         ref={cardRef}
//         variants={itemVariants}
//         onMouseMove={handleMouseMove}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => { setIsHovered(false); x.set(0); y.set(0) }}
//         style={{ rotateX: useSpring(useTransform(y, [-0.5, 0.5], [5, -5])), rotateY: useSpring(useTransform(x, [-0.5, 0.5], [-5, 5])) }}
//         className="group relative bg-white rounded-3xl flex flex-col border border-slate-100 hover:border-emerald-300 shadow-md hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500 overflow-hidden"
//       >
//         <div className="relative h-64 bg-slate-50 p-6 flex items-center justify-center overflow-hidden">
//           <motion.img
//             src={product.image}
//             alt={product.name}
//             animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
//             className="w-full h-full object-contain drop-shadow-md z-10 relative"
//           />
//            {product.badge && (
//             <span className="absolute top-4 right-4 z-20 px-3 py-1 bg-[#044116] text-white text-[10px] font-bold uppercase rounded-full">
//               {product.badge}
//             </span>
//           )}
//         </div>

//         <div className="p-6 flex flex-col flex-grow">
//           <h3 className="text-xl font-black text-slate-900 mb-1">{product.name}</h3>
//           <p className="text-sm font-bold text-slate-400 mb-4">{product.weight}</p>
          
//           <div className="flex-grow">
//              <div className="flex flex-wrap gap-2">
//                 {product.items?.slice(0, 3).map((item, i) => (
//                   <span key={i} className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-md">{item}</span>
//                 ))}
//                 <span className="text-xs text-slate-400 py-1">+more</span>
//              </div>
//           </div>

//           <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
//             <span className="text-2xl font-black text-[#044116]">{product.price}</span>
//             <a href={whatsappLink} className="text-sm font-bold text-[#044116] underline decoration-2 underline-offset-4">Order Now</a>
//           </div>
//         </div>
//       </motion.div>
//     )
//   }

//   return (
//     <section ref={ref} className="py-24 bg-gradient-to-b from-white via-[#FDFBF7] to-emerald-50/30">
//       <div className="container mx-auto px-4 md:px-6">
//         <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="space-y-12">
          
//           <div className="text-center space-y-4">
//             <h2 className="text-4xl md:text-5xl font-black text-[#044116]">Best Sellers</h2>
//             <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//               Our most loved premium gift boxes, perfect for any occasion.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {homeProducts.map((product, idx) => (
//               <ProductCard key={idx} product={product} index={idx} />
//             ))}
//           </div>

//           <motion.div variants={itemVariants} className="flex justify-center pt-8">
//             <Link 
//               href="/products"
//               className="group flex items-center gap-3 px-8 py-4 bg-[#044116] text-white rounded-full font-bold shadow-xl shadow-emerald-900/20 hover:scale-105 transition-transform"
//             >
//               View Full Catalog
//               <ArrowRight className="group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </motion.div>

//         </motion.div>
//       </div>
//     </section>
//   )
// }

"use client"

import { motion, type Variants, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState, useRef, MouseEvent } from "react"
import { products as allProducts } from "@/lib/products" // Import your data
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ProductShowcase() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // --- FILTER LOGIC ---
  // 1. Try to find products marked as "popular"
  let displayProducts = allProducts.filter(p => p.category === "Gift Box" && p.popular).slice(0, 4)
  
  // 2. Fallback: If no popular items, just show the first 4 Gift Boxes
  if (displayProducts.length === 0) {
    displayProducts = allProducts.filter(p => p.category === "Gift Box").slice(0, 4)
  }

  /* =======================
      ANIMATION VARIANTS (From your Old Code)
   ======================= */

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.05,
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
     PRODUCT CARD COMPONENT
  ======================= */

  const ProductCard = ({ product, index }: { product: typeof displayProducts[0], index: number }) => {
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

    // Construct WhatsApp message based on product
    const whatsappMessage = `Hi D'GROCER, I would like to place an order for the ${product.name} Gift Box (${product.price})`;
    const whatsappLink = `https://wa.me/919445477032?text=${encodeURIComponent(whatsappMessage)}`;

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
              src={product.image}
              alt={product.name}
              onError={(e) => {
                // Fallback if image fails or is empty
                (e.target as HTMLImageElement).src = "/placeholder.svg"
              }}
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
              <span className="text-xs font-bold text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100 whitespace-nowrap">
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
              {product.items?.map((item, i) => (
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
              href={whatsappLink}
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
          initial={false}
          animate={inView ? "visible" : "visible"}
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
              Best Sellers
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our most loved premium gift boxes, perfect for any occasion.
            </p>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10"
          >
            {displayProducts.map((product, idx) => (
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

            <motion.div variants={itemVariants} className="flex justify-center pt-8">
             <Link 
               href="/products"
               className="group flex items-center gap-3 px-8 py-4 bg-[#044116] text-white rounded-full font-bold shadow-xl shadow-emerald-900/20 hover:scale-105 transition-transform"
             >
               View Full Catalog
               <ArrowRight className="group-hover:translate-x-1 transition-transform" />
             </Link>
           </motion.div>
      </div>
    </section>
  )
}