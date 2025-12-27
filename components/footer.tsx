"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="bg-[#044116] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">D'GROCER</h3>
            {/* <p className="text-green-100 text-sm mb-4">Premium dry fruits, nuts and seeds for healthy living.</p>
            <p className="text-green-200 italic text-sm">Eat Right, Stay Healthy</p> */}
          </motion.div>

          {/* Products Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold mb-4">Product Range</h4>
            <ul className="space-y-2 text-green-100 text-sm">
              <li>Almonds</li>
              <li>Cashews</li>
              <li>Pistachios</li>
              <li>Black Raisins (Kismiss)</li>
              <li>Figs</li>
              <li>Walnuts</li>
              <li>Pumpkin Seeds</li>
            </ul>
          </motion.div>

          {/* Packages Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold mb-4">Gift Box Options</h4>
            <ul className="space-y-2 text-green-100 text-sm">
              <li>Economy (120g) - Rs. 199</li>
              <li>Standard (200g) - Rs. 299</li>
              <li>Premium (300g) - Rs. 499</li>
              <li>Royal (300g) - Rs. 699</li>
              <li>Elite (475g) - Rs. 999</li>
              <li>Luxury (550g) - Rs. 1499</li>
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="tel:+919445477032"
                className="flex items-center gap-2 text-green-100 hover:text-white transition-colors"
              >
                <Phone size={18} />
                <span className="text-sm">+91 9445477032</span>
              </a>
              <a
                href="mailto:dgrocerinfo@gmail.com"
                className="flex items-center gap-2 text-green-100 hover:text-white transition-colors"
              >
                <Mail size={18} />
                <span className="text-sm">dgrocerinfo@gmail.com</span>
              </a>
              <div className="flex items-start gap-2 text-green-100">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span className="text-sm">Available for bulk & corporate orders</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-green-700 my-8"></div>

        {/* Bottom Footer */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-green-200 text-sm"
        >
          <p>&copy; {currentYear} D'GROCER. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <a
              href="https://wa.me/919445477032"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
