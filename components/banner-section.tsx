"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function BannerSection() {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        className="w-full h-full relative flex items-center justify-center"
      >
        <Image
          src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766507096/banner_ywaglm.png"
          alt="D'GROCER Premium Gift Boxes - Dry Fruits, Nuts and Seeds"
          fill
          className="object-fill w-full h-full"
          priority
        />
      </motion.div>
    </section>
  )
}
