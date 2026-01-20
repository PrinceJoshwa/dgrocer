"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import { products } from "@/lib/products" // Adjust path if needed
import { Gift, Phone, CheckCircle, Star } from "lucide-react"

export default function GiftHampersPage() {
  const hampers = products.filter((p) => p.category === "Gift Boxes")

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[#044116] text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-emerald-800/50 px-4 py-2 rounded-full mb-6 border border-emerald-700"
          >
            <Gift className="w-4 h-4 text-emerald-300" />
            <span className="text-sm font-medium text-emerald-100">Perfect for every occasion</span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Premium Dry Fruit Hampers</h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto">
            Curated with the finest almonds, cashews, and dates. The ultimate gesture of health and love.
          </p>
        </div>
      </section>

      {/* Corporate & Bulk Order Banner */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-600 text-white py-4 relative overflow-hidden shadow-lg">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-full">
              <Star className="w-6 h-6 text-white fill-current animate-pulse" />
            </div>
            <div>
              <h3 className="font-bold text-xl leading-tight">Corporate & Bulk Orders?</h3>
              <p className="text-amber-100 text-sm">Get exclusive discounts on bulk quantities for weddings & events.</p>
            </div>
          </div>
          <a
            href="https://wa.me/919445477032?text=Hi%20D'GROCER,%20I%20am%20interested%20in%20Bulk/Corporate%20Orders."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-orange-600 px-6 py-3 rounded-full font-bold hover:bg-orange-50 transition-colors flex items-center gap-2 shadow-md"
          >
            <Phone className="w-4 h-4" />
            Enquire Now
          </a>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hampers.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {product.badge}
                  </div>
                )}
                <img
                  src={product.image || "/placeholder.png"}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-800">{product.name}</h3>
                  <span className="bg-emerald-50 text-emerald-700 text-sm font-bold px-2 py-1 rounded">
                    {product.price}
                  </span>
                </div>
                
                {product.weight && (
                  <p className="text-slate-500 text-sm mb-4 font-medium">{product.weight}</p>
                )}

                <div className="space-y-2 mb-6 flex-grow">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Contains:</p>
                  <div className="flex flex-wrap gap-2">
                    {product.items?.slice(0, 4).map((item, i) => (
                      <span key={i} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md border border-slate-200">
                        {item}
                      </span>
                    ))}
                    {product.items && product.items.length > 4 && (
                      <span className="text-xs text-slate-400 px-1 py-1">+{product.items.length - 4} more</span>
                    )}
                  </div>
                </div>

                <a
                  href={`https://wa.me/919445477032?text=Hi%20D'GROCER,%20I%20would%20like%20to%20order%20${product.name}%20Hamper.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-[#044116] text-white py-3 rounded-xl font-bold hover:bg-emerald-800 transition-colors"
                >
                  Order via WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us for Hampers */}
      <section className="bg-emerald-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-[#044116] mb-12">Why Our Hampers?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Premium Quality", desc: "Grade A dry fruits sourced globally." },
              { title: "Elegant Packaging", desc: "Designed to impress your loved ones." },
              { title: "Customizable", desc: "Tailor the contents to your budget." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-700">
                  <CheckCircle size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}