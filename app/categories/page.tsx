import { Metadata } from "next"
import { CategoriesContent } from "./categories-content"

export const metadata: Metadata = {
  title: "All Categories | D'GROCER - Premium Quality Groceries",
  description: "Browse all product categories - Dals & Pulses, Authentic Spices, Pure Sweeteners, and Premium Gift Boxes. Free delivery in Velachery.",
  keywords: "grocery categories, dhal, spices, sweeteners, gift boxes, premium groceries",
}

export default function CategoriesPage() {
  return <CategoriesContent />
}
