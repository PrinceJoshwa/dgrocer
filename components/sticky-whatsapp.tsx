"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { useState } from "react"

export default function StickyWhatsApp() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappUrl =
    "https://wa.me/919445477032?text=Hi%20D%27GROCER%2C%20I%20would%20like%20to%20place%20an%20order%20for%20your%20premium%20gift%20boxes"

  return (
    <>
      {/* Sticky WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-[#044116] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#033010] transition-colors lg:block hidden"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>

      {/* Mobile WhatsApp Button with Label */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="lg:hidden fixed bottom-6 left-4 right-4 z-40"
      >
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-[#044116] text-white rounded-full shadow-2xl hover:bg-[#033010] transition-colors font-semibold text-lg"
        >
          <MessageCircle className="w-5 h-5" />
          <span>WhatsApp Order</span>
        </motion.a>
      </motion.div>
    </>
  )
}
