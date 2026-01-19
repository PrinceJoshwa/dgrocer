import { products } from "@/lib/products"
import CategoryPage from "@/components/category-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Premium Spices | D'GROCER - Authentic Indian Spices",
  description: "Discover our authentic collection of premium spices including turmeric, chili powder, cumin, and coriander. Free home delivery.",
  keywords: "spices, turmeric, chili powder, cumin, coriander, methi, authentic spices, Indian spices",
}

export default function SpicesPage() {
  const spiceProducts = products.filter((p) => p.category === "Spices")

  return <CategoryPage category="Spices" products={spiceProducts} />
}
