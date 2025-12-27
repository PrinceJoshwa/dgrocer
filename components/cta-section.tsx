// "use client"

// import { motion, Variants } from "framer-motion"
// import { useInView } from "react-intersection-observer"
// import { MessageCircle, Mail, Phone } from "lucide-react"

// export default function CTASection() {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.1,
//       },
//     },
//   }

//   const itemVariants: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },
// }

//   const contacts = [
//     {
//       icon: MessageCircle,
//       label: "WhatsApp",
//       value: "+91 9445477032",
//       href: "https://wa.me/919445477032?text=Hi%20D%27GROCER%2C%20I%20would%20like%20to%20place%20an%20order%20for%20your%20premium%20gift%20boxes",
//     },
//     {
//       icon: Mail,
//       label: "Email",
//       value: "dgrocerinfo@gmail.com",
//       href: "mailto:dgrocerinfo@gmail.com",
//     },
//     {
//       icon: Phone,
//       label: "Phone",
//       value: "+91 9445477032",
//       href: "tel:+919445477032",
//     },
//   ]

//   return (
//     <section
//       ref={ref}
//       className="py-20 md:py-32 bg-gradient-to-br from-[#044116] to-[#032d0f] text-white relative overflow-hidden"
//     >
//       {/* Decorative elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl -top-40 -right-40"
//           animate={{ y: [0, 30, 0] }}
//           transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
//         />
//       </div>

//       <motion.div
//         ref={ref}
//         variants={containerVariants}
//         initial="hidden"
//         animate={inView ? "visible" : "hidden"}
//         className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10"
//       >
//         <div className="space-y-16">
//           <motion.div variants={itemVariants} className="text-center space-y-6">
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">Ready to Order?</h2>
//             <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
//               Contact us today for premium gift boxes, bulk orders & corporate inquiries
//             </p>
//           </motion.div>

//           <motion.div
//             variants={{
//               hidden: { opacity: 0 },
//               visible: {
//                 opacity: 1,
//                 transition: { staggerChildren: 0.15, delayChildren: 0.2 },
//               },
//             }}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//             className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
//           >
//             {contacts.map((contact, idx) => {
//               const Icon = contact.icon
//               return (
//                 <motion.a
//                   key={idx}
//                   variants={itemVariants}
//                   href={contact.href}
//                   target={contact.icon === MessageCircle || contact.icon === Mail ? "_blank" : undefined}
//                   rel={contact.icon === MessageCircle || contact.icon === Mail ? "noopener noreferrer" : undefined}
//                   whileHover={{ scale: 1.05, y: -5 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="p-6 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all text-center space-y-4"
//                 >
//                   <div className="inline-block p-3 bg-white/20 rounded-lg">
//                     <Icon className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <p className="text-sm font-semibold text-white/70 uppercase tracking-wide">{contact.label}</p>
//                     <p className="text-lg font-semibold mt-2">{contact.value}</p>
//                   </div>
//                 </motion.a>
//               )
//             })}
//           </motion.div>

//           <motion.div variants={itemVariants} className="text-center pt-8 border-t border-white/20">
//             <p className="text-white/80 text-sm">Perfect for Family | Friends | Corporates | Festive Bulk Orders</p>
//           </motion.div>
//         </div>
//       </motion.div>
//     </section>
//   )
// }
"use client"

import { motion, type Variants, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MessageCircle, Mail, Phone, ArrowRight, Sparkles as SparklesIcon } from "lucide-react"
import { useState, useRef, MouseEvent } from "react"

export default function CTASection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  }

  const contacts = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+91 9445477032",
      action: "Chat Now",
      href: "https://wa.me/919445477032?text=Hi%20D%27GROCER%2C%20I%20would%20like%20to%20place%20an%20order%20for%20your%20premium%20gift%20boxes",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      icon: Mail,
      label: "Email",
      value: "dgrocerinfo@gmail.com",
      action: "Send Email",
      href: "mailto:dgrocerinfo@gmail.com",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9445477032",
      action: "Call Us",
      href: "tel:+919445477032",
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
    },
  ]

  // Contact Card with 3D effect
  const ContactCard = ({ contact, index }: { contact: typeof contacts[0], index: number }) => {
    const cardRef = useRef<HTMLAnchorElement>(null)
    const [isHovered, setIsHovered] = useState(false)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const springConfig = { damping: 25, stiffness: 300 }
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig)
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig)

    const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
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

    const Icon = contact.icon

    return (
      <motion.a
        ref={cardRef}
        variants={itemVariants}
        href={contact.href}
        target={contact.icon === MessageCircle || contact.icon === Mail ? "_blank" : undefined}
        rel={contact.icon === MessageCircle || contact.icon === Mail ? "noopener noreferrer" : undefined}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        whileHover={{ y: -15 }}
        whileTap={{ scale: 0.98 }}
        className="group relative p-8 rounded-3xl bg-white border border-slate-200 hover:border-emerald-300 shadow-lg hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500 flex flex-col items-center text-center"
      >
        {/* Animated Background Gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${contact.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          initial={{ scale: 0.8 }}
          animate={isHovered ? { scale: 1 } : { scale: 0.8 }}
        />

        <div className="relative z-10 flex flex-col items-center w-full">
          {/* Floating Icon Container */}
          <motion.div
            className={`mb-6 p-5 rounded-2xl bg-gradient-to-br ${contact.gradient} text-white shadow-xl shadow-emerald-900/20 group-hover:shadow-2xl transition-all duration-500`}
            animate={isHovered ? {
              y: [-5, 5, -5],
              rotate: [0, 5, -5, 0],
              scale: 1.1
            } : { y: 0, rotate: 0, scale: 1 }}
            transition={{
              duration: 2,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut"
            }}
          >
            <Icon className="w-10 h-10" strokeWidth={1.5} />
          </motion.div>

          {/* Content */}
          <div className="space-y-3 mb-6 w-full">
            <p className="text-sm font-black text-slate-400 uppercase tracking-widest">
              {contact.label}
            </p>
            <motion.p
              className="text-base md:text-lg lg:text-xl font-black text-[#044116] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#044116] group-hover:to-[#055a1a] transition-all break-words"
              animate={isHovered ? { scale: [1, 1.05, 1] } : { scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {contact.value}
            </motion.p>
          </div>

          {/* Action Link */}
          <motion.div
            className="mt-auto flex items-center gap-2 text-sm font-black text-[#044116] group-hover:text-emerald-600"
            animate={isHovered ? { x: [0, 5, 0] } : { x: 0 }}
            transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
          >
            {contact.action}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.div>
        </div>

        {/* Decorative corner sparkle */}
        <motion.div
          className="absolute top-4 right-4 text-emerald-400/30 group-hover:text-emerald-400 transition-colors"
          animate={isHovered ? {
            rotate: 360,
            scale: [1, 1.2, 1]
          } : { rotate: 0, scale: 1 }}
          transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
        >
          <SparklesIcon size={20} />
        </motion.div>

        {/* Hover Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/0 via-emerald-400/0 to-emerald-400/0 group-hover:from-emerald-400/20 group-hover:via-emerald-400/10 group-hover:to-orange-400/20 rounded-3xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.a>
    )
  }

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 bg-gradient-to-b from-white via-emerald-50/30 to-white overflow-hidden"
    >
      {/* Enhanced Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dot Pattern */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#044116_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-[0.02]" />

        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute w-[600px] h-[600px] bg-gradient-to-br from-emerald-200/60 to-emerald-100/40 rounded-full blur-3xl -top-20 -right-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] bg-gradient-to-br from-orange-200/60 to-amber-100/40 rounded-full blur-3xl -bottom-20 -left-20"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Sparkles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0, 0.5, 0],
              y: -600,
              x: [0, Math.random() * 100 - 50],
              rotate: 360
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "linear"
            }}
            className="absolute bottom-0 text-emerald-400/20"
            style={{ left: `${15 + i * 15}%` }}
          >
            <SparklesIcon size={20 + Math.random() * 10} />
          </motion.div>
        ))}
      </div>

      <motion.div
        ref={ref}
          variants={containerVariants}
          initial={false}
          animate={inView ? "visible" : "visible"}
        className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10"
      >
        <div className="space-y-16">

          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-emerald-50 border border-emerald-200 text-[#044116] font-black text-sm tracking-widest uppercase shadow-sm"
            >
              Get in Touch
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#044116] via-[#055a1a] to-[#044116] tracking-tight"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Ready to Order?
            </motion.h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Contact us today for premium gift boxes, bulk orders & corporate inquiries. We are happy to assist you!
            </p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
          >
            {contacts.map((contact, idx) => (
              <ContactCard key={idx} contact={contact} index={idx} />
            ))}
          </motion.div>

          {/* Footer Text */}
          <motion.div
            variants={itemVariants}
            className="text-center pt-8 border-t border-slate-100"
          >
            <p className="text-slate-500 text-base md:text-lg font-semibold">
              Perfect for <span className="text-[#044116] font-black">Family</span> | <span className="text-[#044116] font-black">Friends</span> | <span className="text-[#044116] font-black">Corporates</span> | <span className="text-[#044116] font-black">Festive Bulk Orders</span>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}