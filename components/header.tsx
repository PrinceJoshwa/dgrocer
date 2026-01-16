// "use client"

// import { motion } from "framer-motion"
// import Link from "next/link"
// import { useState } from "react"
// import { Menu, X } from "lucide-react"

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   const navItems = [
//     { label: "Home", href: "#home" },
//     { label: "Products", href: "#products" },
//     { label: "Benefits", href: "#benefits" },
//     { label: "Contact", href: "#contact" },
//   ]

//   return (
//     <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16 md:h-20">
//           {/* Logo */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className="flex-shrink-0"
//           >
//             <Link href="/" className="flex items-center gap-2">
//               <div className="w-10 h-10 md:w-12 md:h-12 bg-[#044116] rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold text-lg">D</span>
//               </div>
//               <div className="hidden sm:block">
//                 <p className="font-bold text-[#044116] text-lg md:text-xl">D'GROCER</p>
//                 <p className="text-xs text-gray-600">Eat Right, Stay Healthy</p>
//               </div>
//             </Link>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-8">
//             {navItems.map((item) => (
//               <motion.a
//                 key={item.href}
//                 href={item.href}
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="text-gray-700 hover:text-[#044116] font-medium transition-colors duration-300"
//               >
//                 {item.label}
//               </motion.a>
//             ))}
//           </nav>

//           {/* Desktop CTA Button */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className="hidden md:block"
//           >
//             <a
//               href="https://wa.me/919445477032?text=Hi%20D'GROCER%2C%20I%20would%20like%20to%20place%20an%20order%20for%20gift%20boxes."
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-[#044116] text-white px-6 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg"
//             >
//               Order Now
//             </a>
//           </motion.div>

//           {/* Mobile Menu Button */}
//           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-[#044116]">
//             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {mobileMenuOpen && (
//           <motion.nav
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden pb-4 border-t border-gray-100"
//           >
//             {navItems.map((item) => (
//               <a
//                 key={item.href}
//                 href={item.href}
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="block py-3 text-gray-700 hover:text-[#044116] font-medium transition-colors"
//               >
//                 {item.label}
//               </a>
//             ))}
//             <a
//               href="https://wa.me/919445477032?text=Hi%20D'GROCER%2C%20I%20would%20like%20to%20place%20an%20order%20for%20gift%20boxes."
//               target="_blank"
//               rel="noopener noreferrer"
//               onClick={() => setMobileMenuOpen(false)}
//               className="block w-full mt-3 bg-[#044116] text-white px-4 py-2 rounded-lg font-medium text-center hover:bg-opacity-90 transition-all"
//             >
//               Order Now
//             </a>
//           </motion.nav>
//         )}
//       </div>
//     </header>
//   )
// }

"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // UPDATED NAV ITEMS
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" }, // Changed to full route
    { label: "Benefits", href: "/#benefits" },
    { label: "Contact", href: "/#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#044116] rounded-lg flex items-center justify-center shadow-lg shadow-emerald-900/20">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div className="hidden sm:block">
                <p className="font-black text-[#044116] text-lg md:text-xl tracking-tight">D'GROCER</p>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Premium Quality</p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-bold text-gray-600 hover:text-[#044116] transition-colors duration-300 uppercase tracking-wide"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block"
          >
            <a
              href="https://wa.me/919445477032?text=Hi%20D'GROCER%2C%20I%20would%20like%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#044116] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-emerald-900 transition-all duration-300 shadow-lg hover:shadow-emerald-900/30 transform hover:-translate-y-0.5"
            >
              Order Now
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-[#044116]">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden pb-6 border-t border-gray-100 overflow-hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-4 text-lg font-bold text-gray-700 hover:text-[#044116] border-b border-gray-50"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://wa.me/919445477032"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full mt-6 bg-[#044116] text-white px-4 py-3 rounded-xl font-bold text-center shadow-lg"
            >
              Order via WhatsApp
            </a>
          </motion.nav>
        )}
      </div>
    </header>
  )
}
