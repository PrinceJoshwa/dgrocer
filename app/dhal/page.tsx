import { products } from "@/lib/products"
import CategoryPage from "@/components/category-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Premium Dhals | D'GROCER - Everyday Home Essentials",
  description: "Shop premium quality dhals including moong dal, masoor dal, chana dal, and toor dal. Free delivery within 5 km of Velachery.",
  keywords: "dhal, dal, moong dal, masoor dal, chana dal, toor dal, pulses, grocery",
}

export default function DhalPage() {
  const dhalProducts = products.filter((p) => p.category === "Dals & Pulses")
  

  return <CategoryPage category="Dals & Pulses" products={dhalProducts} />
}
