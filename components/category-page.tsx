"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CTASection from "@/components/cta-section"
import { Product } from "@/lib/products"
import { ArrowRight, Leaf, Check } from "lucide-react"

const categoryDescriptions = {
  fruits: "Fresh and organic fruits from local farms.",
  vegetables: "Organic vegetables, straight from the earth.",
  grains: "Whole grains for a healthier diet.",
  // Add more category descriptions as needed
}

interface CategoryPageProps {
  category: string
  products: Product[]
}

export default function CategoryPage({ category, products }: CategoryPageProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const, // ✅ FIX
      damping: 20,
      stiffness: 100,
    },
  },
}

  const whatsappMessage = `Hi D'GROCER, I'm interested in your ${category} products. Please share more details.`
  const whatsappLink = `https://wa.me/919445477032?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />

      {/* ==============================
          PAGE HEADER
         ============================== */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-[#044116] to-[#032d0f] text-white overflow-hidden">
        {/* Background Elements */}
        <motion.div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -right-20 w-96 h-96 bg-emerald-400/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-20 -left-20 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl"
          />
        </motion.div>

        <motion.div
          className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-emerald-100 font-black text-xs tracking-widest uppercase shadow-sm"
            >
              <span className="flex items-center gap-2">
                <Leaf className="w-3.5 h-3.5" />
                Premium Collection
              </span>
            </motion.div>

            <motion.h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">
              {category}
            </motion.h1>

            <motion.p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              {category === "Gift Box" && "Premium gift hampers and curated boxes for special occasions"}
              {category === "Dals & Pulses" && "Premium quality dals and pulses, sourced and packed with care"}
              {category === "Sweeteners" && "Pure and natural sweeteners for your kitchen"}
              {category === "Spices" && "Authentic Indian spices for authentic flavors"}
            </motion.p>

            <motion.p className="text-base text-emerald-200 font-semibold">
              Free delivery within 5 km radius of Velachery
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* ==============================
          PRODUCTS GRID
         ============================== */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-white via-emerald-50/10 to-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {/* Results Count */}
            <motion.div variants={itemVariants} className="text-center">
              <p className="text-lg md:text-xl text-slate-600 font-semibold">
                Showing <span className="text-[#044116] font-black">{products.length}</span> products in{" "}
                <span className="text-[#044116] font-black">{category}</span>
              </p>
            </motion.div>

            {/* Products Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {products.map((product, idx) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group relative bg-white rounded-3xl border border-slate-100 hover:border-emerald-300 shadow-lg hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500 overflow-hidden flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative h-72 overflow-hidden bg-gradient-to-br from-emerald-50/50 via-white to-orange-50/30 p-6 flex items-center justify-center">
                    {product.image ? (
                      <>
                        <motion.img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover rounded-2xl"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                        />
                        {/* Shine Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent rounded-2xl"
                          initial={{ x: "-100%", y: "-100%" }}
                          whileHover={{ x: "100%", y: "100%" }}
                          transition={{ duration: 0.8 }}
                        />
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-100 to-orange-100 rounded-2xl">
                        <p className="text-slate-400 font-semibold">No image available</p>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Title & Badge */}
                    <div className="mb-4">
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <h3 className="text-xl md:text-2xl font-black text-slate-900 group-hover:text-[#044116] transition-colors">
                          {product.name}
                        </h3>
                        {product.badge && (
                          <span className="text-xs font-bold text-white bg-gradient-to-r from-[#044116] to-[#055a1a] px-3 py-1.5 rounded-full whitespace-nowrap shadow-md">
                            {product.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Items (for gift boxes) */}
                    {product.items && product.items.length > 0 && (
                      <div className="mb-4 pb-4 border-b border-slate-100">
                        <p className="text-xs text-slate-500 font-semibold mb-2 uppercase tracking-wider">Includes</p>
                        <div className="flex flex-wrap gap-2">
                          {product.items.slice(0, 4).map((item, i) => (
                            <span key={i} className="text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-semibold border border-emerald-100">
                              {item}
                            </span>
                          ))}
                          {product.items.length > 4 && (
                            <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-semibold border border-slate-200">
                              +{product.items.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Prices */}
                    <div className="mb-6 flex-grow">
                      {product.price ? (
                        // Single price (Gift boxes)
                        <div>
                          <p className="text-xs text-slate-400 font-semibold mb-1 uppercase tracking-wider">Price</p>
                          <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#044116] to-[#055a1a]">
                            {product.price}
                          </p>
                          {product.weight && (
                            <p className="text-sm text-slate-600 mt-1 font-semibold">{product.weight}</p>
                          )}
                        </div>
                      ) : product.prices && product.prices.length > 0 ? (
                        // Multiple prices
                        <div>
                          <p className="text-xs text-slate-400 font-semibold mb-2 uppercase tracking-wider">Available Sizes</p>
                          <div className="grid grid-cols-2 gap-2">
                            {product.prices.map((priceOption, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-gradient-to-br from-emerald-50 to-orange-50/30 rounded-lg p-2.5 border border-emerald-100/50"
                              >
                                <p className="text-xs text-slate-600 font-semibold">{priceOption.weight}</p>
                                <p className="text-lg font-black text-[#044116]">{priceOption.price}</p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>

                    {/* Footer: Action Button */}
                    <motion.a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-4 py-3 bg-gradient-to-r from-[#044116] to-[#055a1a] text-white text-sm font-bold rounded-2xl hover:shadow-lg overflow-hidden text-center transition-all duration-300"
                    >
                      Order via WhatsApp
                    </motion.a>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/0 via-emerald-400/0 to-emerald-400/0 group-hover:from-emerald-400/20 group-hover:via-emerald-400/10 group-hover:to-orange-400/20 rounded-3xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </motion.div>

            {/* Additional Info */}
            <motion.div
              variants={itemVariants}
              className="text-center bg-gradient-to-r from-white via-emerald-50/50 to-white p-10 rounded-3xl border border-emerald-100 shadow-lg max-w-3xl mx-auto"
            >
              <p className="font-black text-[#044116] text-xl md:text-2xl mb-3">
                Need Bulk Orders?
              </p>
              <p className="text-slate-600 text-lg mb-6">
                We offer customized orders and bulk discounts. Contact us via WhatsApp for special requirements.
              </p>
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#044116] to-[#055a1a] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Contact via WhatsApp
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
