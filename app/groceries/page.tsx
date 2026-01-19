import { products } from "@/lib/products"
import CategoryPage from "@/components/category-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Premium Sweeteners | D'GROCER - Pure & Natural",
  description: "Premium sweeteners including sugar, jaggery, and brown sugar. Pure, natural, and hygienically packed. Free delivery in Velachery.",
  keywords: "sweeteners, sugar, jaggery, brown sugar, natural sweeteners, grocery",
}

export default function GroceriesPage() {
  const groceryProducts = products.filter((p) => p.category === "Sweeteners")

  return <CategoryPage category="Sweeteners" products={groceryProducts} />
}
