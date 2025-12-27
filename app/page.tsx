// "use client"
// import HeroSection from "@/components/hero-section"
// import BrandHighlights from "@/components/brand-highlights"
// import ProductShowcase from "@/components/product-showcase"
// import BenefitsSection from "@/components/benefits-section"
// import CTASection from "@/components/cta-section"
// import StickyWhatsApp from "@/components/sticky-whatsapp"

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-white overflow-hidden">
//       <StickyWhatsApp />
//       <HeroSection />
//       <BrandHighlights />
//       <ProductShowcase />
//       <BenefitsSection />
//       <CTASection />
//     </main>
//   )
// }

"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import BrandHighlights from "@/components/brand-highlights"
import ProductShowcase from "@/components/product-showcase"
import BenefitsSection from "@/components/benefits-section"
import CTASection from "@/components/cta-section"
import StickyWhatsApp from "@/components/sticky-whatsapp"
import WhatsappChat from "@/components/WhatsAppChat"
import BannerSection from "@/components/banner-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />
      <main className="flex flex-col">
        {/* <StickyWhatsApp /> */}
        <section id="home">
          <HeroSection />
          {/* <BannerSection /> */}
        </section>
        {/* <BrandHighlights /> */}
        <section id="products">
          <ProductShowcase />
        </section>
        <section id="benefits">
          <BenefitsSection />
        </section>
        <section id="contact">
          <CTASection />
        </section>
      </main>
      {/* <Footer /> */}
      <WhatsappChat />
    </div>
  )
}
