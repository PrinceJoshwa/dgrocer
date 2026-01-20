import { products } from "@/lib/products"
import CategoryPage from "@/components/category-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Premium Dry Fruits and Gift Boxes | D'GROCER - Curated Gift Hampers",
  description: "Explore our premium gift boxes and hampers. Perfect for special occasions with carefully curated collections. Free delivery within 5 km of Velachery.",
  keywords: "gift box, gift hamper, dry fruits, premium gift, hamper, special occasion",
}

export default function GiftBoxesPage() {
  const giftBoxProducts = products.filter((p) => p.category === "Gift Boxes")

  return <CategoryPage category="Gift Boxes" products={giftBoxProducts} />
  
}
