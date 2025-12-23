"use client"

import { motion, Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MessageCircle, Mail, Phone } from "lucide-react"

export default function CTASection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }
  
  const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

  const contacts = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+91 9445477032",
      href: "https://wa.me/919445477032?text=Hi%20D%27GROCER%2C%20I%20would%20like%20to%20place%20an%20order%20for%20your%20premium%20gift%20boxes",
    },
    {
      icon: Mail,
      label: "Email",
      value: "dgrocerinfo@gmail.com",
      href: "mailto:dgrocerinfo@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9445477032",
      href: "tel:+919445477032",
    },
  ]

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-br from-[#044116] to-[#032d0f] text-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl -top-40 -right-40"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10"
      >
        <div className="space-y-16">
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">Ready to Order?</h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Contact us today for premium gift boxes, bulk orders & corporate inquiries
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.2 },
              },
            }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {contacts.map((contact, idx) => {
              const Icon = contact.icon
              return (
                <motion.a
                  key={idx}
                  variants={itemVariants}
                  href={contact.href}
                  target={contact.icon === MessageCircle || contact.icon === Mail ? "_blank" : undefined}
                  rel={contact.icon === MessageCircle || contact.icon === Mail ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-6 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all text-center space-y-4"
                >
                  <div className="inline-block p-3 bg-white/20 rounded-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white/70 uppercase tracking-wide">{contact.label}</p>
                    <p className="text-lg font-semibold mt-2">{contact.value}</p>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center pt-8 border-t border-white/20">
            <p className="text-white/80 text-sm">Perfect for Family | Friends | Corporates | Festive Bulk Orders</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
