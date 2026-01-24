// // // data/products.ts

// // export type ProductPrice = {
// //   weight: string;
// //   price: string;
// // };

// // export type Product = {
// //   id: string;
// //   category: "Gift Box" | "Sweeteners" | "Spices" | "Dals & Pulses";
// //   name: string;
// //   items?: string[]; // For gift boxes
// //   prices?: ProductPrice[]; // For groceries with multiple weights
// //   price?: string; // For single price items (Gift boxes)
// //   weight?: string; // For single weight items
// //   image?: string;
// //   badge?: string;
// //   popular?: boolean; // Determines if it shows on the Home Page
// // };

// // export const products: Product[] = [
// //   // ==========================================
// //   // 1. GIFT BOXES (Total 11 Items)
// //   // ==========================================
// //   {
// //     id: "gb-1",
// //     category: "Gift Box",
// //     name: "Economy",
// //     weight: "300g",
// //     price: "₹199",
// //     items: ["Almond", "Cashew", "Black Kismiss", "Fig"],
// //     image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/9.png?updatedAt=1766849966367",
// //     popular: true,
// //   },
// //   {
// //     id: "gb-2",
// //     category: "Gift Box",
// //     name: "Standard",
// //     weight: "400g",
// //     price: "₹299",
// //     badge: "Popular",
// //     items: ["Almond", "Cashew", "Black Kismiss", "Fig"],
// //     image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/7.png?updatedAt=1766849965838",
// //     popular: true,
// //   },
// //   {
// //     id: "gb-3",
// //     category: "Gift Box",
// //     name: "Standard Plus",
// //     weight: "400g",
// //     price: "₹399",
// //     items: ["Almond", "Cashew", "Kismiss", "Pista"],
// //     image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/2.png?updatedAt=1766849968531",
// //   },
// //   {
// //     id: "gb-4",
// //     category: "Gift Box",
// //     name: "Premium",
// //     weight: "560g",
// //     price: "₹499",
// //     items: ["Almond", "Cashew", "Black Kismiss", "Fig", "Pista", "Pumpkin Seed"],
// //     image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/6.png?updatedAt=1766849968568",
// //     popular: true,
// //   },
// //   {
// //     id: "gb-5",
// //     category: "Gift Box",
// //     name: "Classic",
// //     weight: "750g",
// //     price: "₹599",
// //     items: ["Almond", "Cashew", "Black Kismiss", "Fig", "Pista", "Pumpkin Seed", "Kismiss"],
// //     image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/5.png?updatedAt=1766849966756",
// //   },
// //   {
// //     id: "gb-6",
// //     category: "Gift Box",
// //     name: "Royal",
// //     weight: "600g",
// //     price: "₹699",
// //     items: ["Almond", "Cashew", "Kismiss", "Walnut", "Pista", "Pumpkin Seed"],
// //     image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/1.png?updatedAt=1766849968324",
// //   },
// //   {
// //     id: "gb-7",
// //     category: "Gift Box",
// //     name: "Royal Plus",
// //     weight: "700g",
// //     price: "₹699",
// //     items: ["Almond", "Cashew", "Kismiss", "Pista"],
// //     image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/8.png?updatedAt=1766849965157",
// //   },
// //   {
// //     id: "gb-8",
// //     category: "Gift Box",
// //     name: "Delight",
// //     weight: "Gift Hamper",
// //     price: "₹799",
// //     badge: "New",
// //     items: ["Edenberg Wine (375ml)", "Biscoff", "Kinder Creamy", "Dairy Milk", "Munch", "Gems"],
// //     image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/Delight.png?updatedAt=1767258946402",
// //     popular: true,
// //   },
// //   {
// //     id: "gb-9",
// //     category: "Gift Box",
// //     name: "Elite",
// //     weight: "1000g",
// //     price: "₹999",
// //     items: ["Almond", "Cashew", "Black Kismiss", "Pumpkin Seed", "Kismiss", "Pista", "Fig"],
// //     image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/elite.png?updatedAt=1767258946375",
// //   },
// //   {
// //     id: "gb-10",
// //     category: "Gift Box",
// //     name: "Supreme",
// //     weight: "Gift Hamper",
// //     price: "₹1099",
// //     badge: "New",
// //     items: ["Edenberg Wine (375ml)", "Biscoff", "Dairy Milk", "Nestle", "Kitkat", "Imported Chocolates"],
// //     image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/supreme.png?updatedAt=1767258936964",
// //   },
// //   {
// //     id: "gb-11",
// //     category: "Gift Box",
// //     name: "Luxury",
// //     weight: "1100g",
// //     price: "₹1499",
// //     badge: "Premium",
// //     items: ["Almond", "Cashew", "Black Kismiss", "Fig", "Pista", "Pumpkin Seed", "Kismiss", "Walnut"],
// //     image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/luxury.png?updatedAt=1767258948073",
// //   },

// //   // ==========================================
// //   // 2. SWEETENERS (From PDF)
// //   // ==========================================
// //   {
// //     id: "sw-1",
// //     category: "Sweeteners",
// //     name: "Sugar",
// //     prices: [
// //       { weight: "250g", price: "₹14" },
// //       { weight: "500g", price: "₹30" },
// //       { weight: "1kg", price: "₹60" },
// //     ],
// //   },
// //   {
// //     id: "sw-2",
// //     category: "Sweeteners",
// //     name: "Jaggery",
// //     prices: [
// //       { weight: "250g", price: "₹20" },
// //       { weight: "500g", price: "₹42" },
// //       { weight: "1kg", price: "₹75" },
// //     ],
// //   },
// //   {
// //     id: "sw-3",
// //     category: "Sweeteners",
// //     name: "Brown Sugar (Nattu Sarkkarai)",
// //     prices: [
// //       { weight: "500g", price: "₹45" },
// //       { weight: "1kg", price: "₹85" },
// //     ],
// //   },

// //   // ==========================================
// //   // 3. SPICES (From PDF)
// //   // ==========================================
// //   {
// //     id: "sp-1",
// //     category: "Spices",
// //     name: "Cumin Seeds (Seeragam)",
// //     prices: [
// //       { weight: "50g", price: "₹25" },
// //       { weight: "100g", price: "₹45" },
// //       { weight: "250g", price: "₹150" },
// //     ],
// //   },
// //   {
// //     id: "sp-2",
// //     category: "Spices",
// //     name: "Black Pepper (Milagu)",
// //     prices: [
// //       { weight: "50g", price: "₹50" },
// //       { weight: "100g", price: "₹99" },
// //     ],
// //   },
// //   {
// //     id: "sp-3",
// //     category: "Spices",
// //     name: "Fennel Seeds (Sombu)",
// //     prices: [
// //       { weight: "50g", price: "₹25" },
// //       { weight: "100g", price: "₹30" },
// //     ],
// //   },
// //   {
// //     id: "sp-4",
// //     category: "Spices",
// //     name: "Mustard Seeds (Kadugu)",
// //     prices: [
// //       { weight: "100g", price: "₹13" },
// //     ],
// //   },
// //   {
// //     id: "sp-5",
// //     category: "Spices",
// //     name: "Dry Chillies (Vathal)",
// //     prices: [
// //       { weight: "100g", price: "₹25" },
// //       { weight: "250g", price: "₹60" },
// //     ],
// //   },
// //   {
// //     id: "sp-6",
// //     category: "Spices",
// //     name: "Round Chillies (Gundu Vathal)",
// //     prices: [
// //       { weight: "100g", price: "₹41" },
// //       { weight: "250g", price: "₹98" },
// //     ],
// //   },
// //   {
// //     id: "sp-7",
// //     category: "Spices",
// //     name: "Poppy Seeds (Kasakasa)",
// //     prices: [
// //       { weight: "25g", price: "₹50" },
// //       { weight: "50g", price: "₹76" },
// //       { weight: "100g", price: "₹150" },
// //     ],
// //   },
// //   {
// //     id: "sp-8",
// //     category: "Spices",
// //     name: "Mace (Jathi Pathiri)",
// //     prices: [
// //       { weight: "25g", price: "₹60" },
// //       { weight: "50g", price: "₹120" },
// //       { weight: "100g", price: "₹240" },
// //     ],
// //   },
// //   {
// //     id: "sp-9",
// //     category: "Spices",
// //     name: "Nutmeg (Jathikai)",
// //     prices: [
// //       { weight: "25g", price: "₹24" },
// //       { weight: "50g", price: "₹48" },
// //     ],
// //   },
// //   {
// //     id: "sp-10",
// //     category: "Spices",
// //     name: "Dry Ginger (Sukku)",
// //     prices: [
// //       { weight: "25g", price: "₹14" },
// //       { weight: "50g", price: "₹28" },
// //       { weight: "100g", price: "₹54" },
// //     ],
// //   },
// //   {
// //     id: "sp-11",
// //     category: "Spices",
// //     name: "Star Anise (Annachi Poo)",
// //     prices: [
// //       { weight: "25g", price: "₹25" },
// //     ],
// //   },
// //   {
// //     id: "sp-12",
// //     category: "Spices",
// //     name: "Biryani Leaf",
// //     prices: [
// //       { weight: "25g", price: "₹35" },
// //     ],
// //   },
// //   {
// //     id: "sp-13",
// //     category: "Spices",
// //     name: "Cloves (Kirampu)",
// //     prices: [
// //       { weight: "25g", price: "₹35" },
// //     ],
// //   },

// //   // ==========================================
// //   // 4. DALS & PULSES (From PDF)
// //   // ==========================================
// //   {
// //     id: "dp-1",
// //     category: "Dals & Pulses",
// //     name: "Toor Dal Premium ",
// //     prices: [
// //       { weight: "500g", price: "₹85" },
// //       { weight: "1kg", price: "₹170" },
// //     ],
// //   },
// //   {
// //     id: "dp-2",
// //     category: "Dals & Pulses",
// //     name: "Standard Toor Dal ",
// //     prices: [
// //       { weight: "250g", price: "₹38" },
// //       { weight: "500g", price: "₹75" },
// //       { weight: "1kg", price: "₹150" },
// //     ],
// //   },
// //   {
// //     id: "dp-3",
// //     category: "Dals & Pulses",
// //     name: "Premium Urad Dal ",
// //     prices: [
// //       { weight: "250g", price: "₹40" },
// //       { weight: "500g", price: "₹80" },
// //       { weight: "1kg", price: "₹165" },
// //     ],
// //   },
// //   {
// //     id: "dp-4",
// //     category: "Dals & Pulses",
// //     name: "Standard Urad Dal ",
// //     prices: [
// //         { weight: "250g", price: "₹34" },
// //         { weight: "500g", price: "₹67" },
// //         { weight: "1kg", price: "₹130" },
// //     ]
// //   },
// //   {
// //     id: "dp-5",
// //     category: "Dals & Pulses",
// //     name: "Moong Dal (Pasi Paruppu) ",
// //     prices: [
// //       { weight: "250g", price: "₹35" },
// //       { weight: "500g", price: "₹67" },
// //       { weight: "1kg", price: "₹133" },
// //     ],
// //   },
// //   {
// //     id: "dp-6",
// //     category: "Dals & Pulses",
// //     name: "Premium Green Gram",
// //     prices: [
// //         { weight: "250g", price: "₹44" },
// //         { weight: "500g", price: "₹85" },
// //         { weight: "1kg", price: "₹180" },
// //     ]
// //   },
// //   {
// //     id: "dp-7",
// //     category: "Dals & Pulses",
// //     name: "Chana Dal (Kadalai Paruppu)",
// //     prices: [
// //       { weight: "250g", price: "₹30" },
// //       { weight: "500g", price: "₹50" },
// //       { weight: "1kg", price: "₹95" },
// //     ],
// //   },
// //   {
// //     id: "dp-8",
// //     category: "Dals & Pulses",
// //     name: "Masoor Dal ",
// //     prices: [
// //       { weight: "500g", price: "₹55" },
// //       { weight: "1kg", price: "₹109" },
// //     ],
// //   },
// //   {
// //     id: "dp-9",
// //     category: "Dals & Pulses",
// //     name: "White Chickpeas (White Sundal) ",
// //     prices: [
// //         { weight: "250g", price: "₹60" },
// //         { weight: "500g", price: "₹110" },
// //         { weight: "1kg", price: "₹215" },
// //     ]
// //   },
// //   {
// //     id: "dp-10",
// //     category: "Dals & Pulses",
// //     name: "Black Chickpeas (Black Sundal) ",
// //     prices: [
// //         { weight: "250g", price: "₹39" },
// //         { weight: "500g", price: "₹74" },
// //         { weight: "1kg", price: "₹125" },
// //     ]
// //   },
// //   {
// //     id: "dp-11",
// //     category: "Dals & Pulses",
// //     name: "Horse Gram (Black Kanam) ",
// //     prices: [
// //         { weight: "250g", price: "₹30" },
// //         { weight: "500g", price: "₹60" },
// //         { weight: "1kg", price: "₹120" },
// //     ]
// //   },
// //   {
// //     id: "dp-12",
// //     category: "Dals & Pulses",
// //     name: "Rajma Beans ",
// //     prices: [
// //         { weight: "250g", price: "₹39" },
// //         { weight: "500g", price: "₹78" },
// //     ]
// //   }
// // ];

// // data/products.ts

// export type ProductPrice = {
//   weight: string;
//   price: string;
// };

// export type Product = {
//   id: string;
//   category: "Gift Box" | "Sweeteners" | "Spices" | "Dals & Pulses";
//   name: string;
//   items?: string[]; 
//   prices?: ProductPrice[];
//   price?: string; 
//   weight?: string; 
//   image?: string;
//   badge?: string;
//   popular?: boolean;
// };

// export const products: Product[] = [
//   // ==========================================
//   // 1. GIFT BOXES (Existing)
//   // ==========================================
//   {
//     id: "gb-1",
//     category: "Gift Box",
//     name: "Economy",
//     weight: "300g",
//     price: "₹199",
//     items: ["Almond", "Cashew", "Black Kismiss", "Fig"],
//     image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/9.png?updatedAt=1766849966367",
//     popular: true,
//   },
//   {
//     id: "gb-2",
//     category: "Gift Box",
//     name: "Standard",
//     weight: "400g",
//     price: "₹299",
//     badge: "Popular",
//     items: ["Almond", "Cashew", "Black Kismiss", "Fig"],
//     image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/7.png?updatedAt=1766849965838",
//     popular: true,
//   },
//   {
//     id: "gb-3",
//     category: "Gift Box",
//     name: "Standard Plus",
//     weight: "400g",
//     price: "₹399",
//     items: ["Almond", "Cashew", "Kismiss", "Pista"],
//     image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/2.png?updatedAt=1766849968531",
//   },
//   {
//     id: "gb-4",
//     category: "Gift Box",
//     name: "Premium",
//     weight: "560g",
//     price: "₹499",
//     items: ["Almond", "Cashew", "Black Kismiss", "Fig", "Pista", "Pumpkin Seed"],
//     image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/6.png?updatedAt=1766849968568",
//     popular: true,
//   },
//   {
//     id: "gb-5",
//     category: "Gift Box",
//     name: "Classic",
//     weight: "750g",
//     price: "₹599",
//     items: ["Almond", "Cashew", "Black Kismiss", "Fig", "Pista", "Pumpkin Seed", "Kismiss"],
//     image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/5.png?updatedAt=1766849966756",
//   },
//   {
//     id: "gb-6",
//     category: "Gift Box",
//     name: "Royal",
//     weight: "600g",
//     price: "₹699",
//     items: ["Almond", "Cashew", "Kismiss", "Walnut", "Pista", "Pumpkin Seed"],
//     image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/1.png?updatedAt=1766849968324",
//   },
//   {
//     id: "gb-7",
//     category: "Gift Box",
//     name: "Royal Plus",
//     weight: "700g",
//     price: "₹699",
//     items: ["Almond", "Cashew", "Kismiss", "Pista"],
//     image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/8.png?updatedAt=1766849965157",
//     popular: true,
//   },
//   {
//     id: "gb-8",
//     category: "Gift Box",
//     name: "Delight",
//     weight: "Gift Hamper",
//     price: "₹799",
//     badge: "New",
//     items: ["Edenberg Wine (375ml)", "Biscoff", "Kinder Creamy", "Dairy Milk", "Munch", "Gems"],
//     image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/Delight.png?updatedAt=1767258946402",
//     popular: true,
//   },
//   {
//     id: "gb-9",
//     category: "Gift Box",
//     name: "Elite",
//     weight: "1000g",
//     price: "₹999",
//     items: ["Almond", "Cashew", "Black Kismiss", "Pumpkin Seed", "Kismiss", "Pista", "Fig"],
//     image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/elite.png?updatedAt=1767258946375",
//     popular: true,
//   },
//   {
//     id: "gb-10",
//     category: "Gift Box",
//     name: "Supreme",
//     weight: "Gift Hamper",
//     price: "₹1099",
//     badge: "New",
//     items: ["Edenberg Wine (375ml)", "Biscoff", "Dairy Milk", "Nestle", "Kitkat", "Imported Chocolates"],
//     image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/supreme.png?updatedAt=1767258936964",
//     popular: true,
//   },
//   {
//     id: "gb-11",
//     category: "Gift Box",
//     name: "Luxury",
//     weight: "1100g",
//     price: "₹1499",
//     badge: "Premium",
//     items: ["Almond", "Cashew", "Black Kismiss", "Fig", "Pista", "Pumpkin Seed", "Kismiss", "Walnut"],
//     image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/luxury.png?updatedAt=1767258948073",
//     popular: true,
//   },

//   // ==========================================
//   // 2. DALS, PULSES & BEANS (SL.NO 1-14)
//   // ==========================================
//   {
//     id: "dp-1",
//     category: "Dals & Pulses",
//     name: "Toor Dal Premium",
//     // image: "/groceries/1.png", // matches PDF SL 1
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/toordal/1kg.png?updatedAt=1768806210136", // matches PDF SL 1
//     prices: [
//       { weight: "500g", price: "₹85" }, //
//       { weight: "1kg", price: "₹170" },
//     ],
//   },
//   {
//     id: "dp-2",
//     category: "Dals & Pulses",
//     name: "Standard Toor Dal",
//     // image: "/groceries/2.png", // matches PDF SL 2
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/toordal/1kg.png?updatedAt=1768806210136", // matches PDF SL 2
//     prices: [
//       { weight: "250g", price: "₹38" }, //
//       { weight: "500g", price: "₹75" },
//       { weight: "1kg", price: "₹150" },
//     ],
//   },
//   {
//     id: "dp-3",
//     category: "Dals & Pulses",
//     name: "Premium Urad Dal",
//     // image: "/groceries/3.png", // matches PDF SL 3
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/urad/500g.png?updatedAt=1768806259239", // matches PDF SL 3
//     prices: [
//       { weight: "250g", price: "₹40" }, //
//       { weight: "500g", price: "₹80" },
//       { weight: "1kg", price: "₹165" },
//     ],
//   },
//   {
//     id: "dp-4",
//     category: "Dals & Pulses",
//     name: "Standard Urad Dal",
//     // image: "/groceries/4.png", // matches PDF SL 4
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/urad/500g.png?updatedAt=1768806259239", // matches PDF SL 4
//     prices: [
//         { weight: "250g", price: "₹34" }, //
//         { weight: "500g", price: "₹67" },
//         { weight: "1kg", price: "₹130" },
//     ]
//   },
//   {
//     id: "dp-5",
//     category: "Dals & Pulses",
//     name: "Moong Dal (Pasi Paruppu)",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/Dgrocer%20sticker%20mockup%20for%20website/8.png?updatedAt=1768812663157", // matches PDF SL 5
//     prices: [
//       { weight: "250g", price: "₹35" }, //
//       { weight: "500g", price: "₹67" },
//       { weight: "1kg", price: "₹133" },
//     ],
//   },
//   {
//     id: "dp-6",
//     category: "Dals & Pulses",
//     name: "Premium Green Gram",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/pasi%20parupu(moong%20dal,green%20gram)/500g.png?updatedAt=1768806261397", // matches PDF SL 6
//     // image: "/groceries/6.png", // matches PDF SL 6
//     prices: [
//         { weight: "250g", price: "₹44" }, //
//         { weight: "500g", price: "₹85" },
//         { weight: "1kg", price: "₹180" },
//     ]
//   },
//   {
//     id: "dp-7",
//     category: "Dals & Pulses",
//     name: "Chana Dal (Kadalai Paruppu)",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/kadala%20dal%20(chana)/1kg.png?updatedAt=1768806171971", // matches PDF SL 7
//     // image: "/groceries/7.png", // matches PDF SL 7
//     prices: [
//       { weight: "250g", price: "₹30" }, //
//       { weight: "500g", price: "₹50" },
//       { weight: "1kg", price: "₹95" },
//     ],
//   },
//   {
//     id: "dp-8",
//     category: "Dals & Pulses",
//     name: "Masoor Dal (Masoor Paruppu)",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/masoor%20dal/1kg.png?updatedAt=1768806253558", // matches PDF SL 8
//     // image: "/groceries/8.png", // matches PDF SL 8
//     prices: [
//       { weight: "500g", price: "₹55" }, //
//       { weight: "1kg", price: "₹109" },
//     ],
//   },
//   {
//     id: "dp-9",
//     category: "Dals & Pulses",
//     name: "White Chickpeas (White Sundal Big)",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/white%20chick%20peas/1kg.png?updatedAt=1768806169256", // matches PDF SL 9
//     // image: "/groceries/9.png", // matches PDF SL 9
//     prices: [
//         { weight: "250g", price: "₹60" }, //
//         { weight: "500g", price: "₹110" },
//         { weight: "1kg", price: "₹215" },
//     ]
//   },
//   {
//     id: "dp-10",
//     category: "Dals & Pulses",
//     name: "Black Chickpeas (Black Sundal)",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/BLACK%20CHICKPEAS/1kg.png?updatedAt=1768806257788", // matches PDF SL 10
//     // image: "/groceries/10.png", // matches PDF SL 10
//     prices: [
//         { weight: "250g", price: "₹39" }, //
//         { weight: "500g", price: "₹74" },
//         { weight: "1kg", price: "₹125" },
//     ]
//   },
//   {
//     id: "dp-11",
//     category: "Dals & Pulses",
//     name: "Horse Gram (Black Kanam)",
//     image: "/groceries/11.png", // matches PDF SL 11
//     // image: "/groceries/11.png", // matches PDF SL 11
//     prices: [
//         { weight: "250g", price: "₹30" }, //
//         { weight: "500g", price: "₹60" },
//         { weight: "1kg", price: "₹120" },
//     ]
//   },
//   {
//     id: "dp-12",
//     category: "Dals & Pulses",
//     name: "Rajma Beans",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/RAJMA/1KG.png?updatedAt=1768806238789", // matches PDF SL 12
//     // image: "/groceries/12.png", // matches PDF SL 12
//     prices: [
//         { weight: "250g", price: "₹39" }, //
//         { weight: "500g", price: "₹78" },
//     ]
//   },
//   {
//     id: "dp-13",
//     category: "Dals & Pulses",
//     name: "White Rajma",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/white%20chick%20peas/500g.png?updatedAt=1768806169616", // matches PDF SL 13
//     // image: "/groceries/13.png", // matches PDF SL 13
//     prices: [
//         { weight: "250g", price: "₹45" }, //
//     ]
//   },
//   {
//     id: "dp-14",
//     category: "Dals & Pulses",
//     name: "Wheat (Kothumai)",
//     image: "", // matches PDF SL 14
//     prices: [
//         { weight: "500g", price: "₹29" }, //
//     ]
//   },

//   // ==========================================
//   // 3. SPICES (SL.NO 15-30)
//   // ==========================================
//   {
//     id: "sp-1",
//     category: "Spices",
//     name: "Cumin Seeds (Seeragam)",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/Dgrocer%20sticker%20mockup%20for%20website/12.png", // matches PDF SL 15
//     prices: [
//       { weight: "50g", price: "₹25" }, //
//       { weight: "100g", price: "₹45" },
//       { weight: "250g", price: "₹150" },
//     ],
//   },
//   {
//     id: "sp-2",
//     category: "Spices",
//     name: "Black Pepper (Milagu)",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/SPICES/BLACK%20PEPPER/100G.png?updatedAt=1768806272377", // matches PDF SL 16
//     // image: "/groceries/16.png", // matches PDF SL 16
//     prices: [
//       { weight: "50g", price: "₹50" }, //
//       { weight: "100g", price: "₹99" },
//     ],
//   },
//   {
//     id: "sp-3",
//     category: "Spices",
//     name: "Fennel Seeds (Sombu)",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/SPICES/FENNEL%20SEEDS/100%20(2).png?updatedAt=1768806280668", // matches PDF SL 13
//     // image: "/groceries/13.png", // matches PDF SL 13

//     // Image 1-16 used. No image provided for 17+. Using placeholder/none.
//     prices: [
//       { weight: "50g", price: "₹25" }, //
//       { weight: "100g", price: "₹30" },
//     ],
//   },
//   {
//     id: "sp-4",
//     category: "Spices",
//     name: "Mustard Seeds (Kadugu)",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/SPICES/MUSTARD/100G.png?updatedAt=1768806268508", // matches PDF SL 16
//     // image: "/groceries/13.png", // matches PDF SL 13

//     prices: [
//       { weight: "100g", price: "₹13" }, //
//     ],
//   },
//   {
//     id: "sp-5",
//     category: "Spices",
//     name: "Dry Chillies (Vathal)",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/Dgrocer%20sticker%20mockup%20for%20website/dry%20chilli.png", // matches PDF SL 13
//     // image: "/groceries/13.png", // matches PDF SL 13

//     prices: [
//       { weight: "100g", price: "₹25" }, //
//       { weight: "250g", price: "₹60" },
//     ],
//   },
//   {
//     id: "sp-6",
//     category: "Spices",
//     name: "Round Chillies (Gundu Vathal)",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/ROUND%20RE%20CHILLI/ROUND%20RED%20CHILLI%20250G.jpeg?updatedAt=1768806173058", // matches PDF SL 13
//     // image: "/groceries/13.png", // matches PDF SL 13

//     prices: [
//       { weight: "100g", price: "₹41" }, //
//       { weight: "250g", price: "₹98" },
//     ],
//   },
//   {
//     id: "sp-7",
//     category: "Spices",
//     name: "Cardamon",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/Dgrocer%20sticker%20mockup%20for%20website/3.png?updatedAt=1768812656703", // matches PDF SL 13
//     // image: "/groceries/13.png", // matches PDF SL 13
//     prices: [
//       { weight: "10g", price: "₹37" }, //
//     ],
//   },
//   {
//     id: "sp-8",
//     category: "Spices",
//     name: "Poppy Seeds (Kasakasa)",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/SPICES/POPPY/100.png?updatedAt=1768806277178", // matches PDF SL 13
//     prices: [
//       { weight: "25g", price: "₹50" }, //
//       { weight: "50g", price: "₹76" },
//       { weight: "100g", price: "₹150" },
//     ],
//   },
//   {
//     id: "sp-9",
//     category: "Spices",
//     name: "Mace (Jathi Pathiri)",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/SPICES/MACE/100.png?updatedAt=1768806276446", // matches PDF SL 13
//     prices: [
//       { weight: "25g", price: "₹60" }, //
//       { weight: "50g", price: "₹120" },
//       { weight: "100g", price: "₹240" },
//     ],
//   },
//   {
//     id: "sp-10",
//     category: "Spices",
//     name: "Nutmeg (Jathikai)",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/SPICES/NUT%20MEG/50G.png?updatedAt=1768806234885", // matches PDF SL 13
//     prices: [
//       { weight: "25g", price: "₹24" }, //
//       { weight: "50g", price: "₹48" },
//     ],
//   },
//   {
//     id: "sp-11",
//     category: "Spices",
//     name: "Dry Ginger (Sukku)",
//     image: "", // matches PDF SL 13
//     prices: [
//       { weight: "25g", price: "₹14" }, //
//       { weight: "50g", price: "₹28" },
//       { weight: "100g", price: "₹54" },
//     ],
//   },
//   {
//     id: "sp-12",
//     category: "Spices",
//     name: "Stone Flower (Kalpasi)",
//     image: "", // matches PDF SL 13
    
//     prices: [
//       { weight: "25g", price: "₹31" }, //
//     ]
//   },
//   {
//     id: "sp-13",
//     category: "Spices",
//     name: "Star Anise (Annachi Poo)",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/Dgrocer%20sticker%20mockup%20for%20website/4.png?updatedAt=1768812662972", // matches PDF SL 13
//     // image: "/groceries/13.png", // matches PDF SL 13
    
//     prices: [
//       { weight: "25g", price: "₹25" }, //
//     ],
//   },
//   {
//     id: "sp-14",
//     category: "Spices",
//     name: "Biryani Leaf",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/Dgrocer%20sticker%20mockup%20for%20website/16.png?updatedAt=1768812656549", // matches PDF SL 13
//     // image: "/groceries/13.png", // matches PDF SL 13
    
//     prices: [
//       { weight: "25g", price: "₹35" }, //
//     ],
//   },
//   {
//     id: "sp-15",
//     category: "Spices",
//     name: "Cloves (Kirampu)",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/Dgrocer%20sticker%20mockup%20for%20website/15.png?updatedAt=1768812661717", // matches PDF SL 13
//     // image: "/groceries/13.png", // matches PDF SL 13
    
//     prices: [
//       { weight: "25g", price: "₹35" }, //
//     ],
//   },
//   {
//     id: "sp-16",
//     category: "Spices",
//     name: "Marathi Moggu",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/SPICES/MARATHI%20MOGGU/100g.png?updatedAt=1768806241412", // matches PDF SL 13
    
//     prices: [
//       { weight: "100g", price: "₹18" }, //
//     ],
//   },

//   // ==========================================
//   // 4. SWEETENERS (SL.NO 31-33)
//   // ==========================================
//   {
//     id: "sw-1",
//     category: "Sweeteners",
//     name: "Sugar",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/WHITE%20SUGAR/1KG.png?updatedAt=1768806213788", // matches PDF SL 13
    
//     prices: [
//       { weight: "250g", price: "₹14" }, //
//       { weight: "500g", price: "₹30" },
//       { weight: "1kg", price: "₹60" },
//     ],
//   },
//   {
//     id: "sw-2",
//     category: "Sweeteners",
//     name: "Jaggery",
//     image: "/groceries/13.png", // matches PDF SL 13
    
//     prices: [
//       { weight: "250g", price: "₹20" }, //
//       { weight: "500g", price: "₹42" },
//       { weight: "1kg", price: "₹75" },
//     ],
//   },
//   {
//     id: "sw-3",
//     category: "Sweeteners",
//     name: "Brown Sugar (Nattu Sarkkarai)",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/BROWN%20SUGAR/1KG.png?updatedAt=1768806222909", // matches PDF SL 13
    
//     prices: [
//       { weight: "500g", price: "₹45" }, //
//       { weight: "1kg", price: "₹85" },
//     ],
//   },
// ];

// export interface Product {
//   id: string
//   name: string
//   category: "Dals & Pulses" | "Spices" | "Sweeteners" | "Gift Boxes"
//   image?: string
//   badge?: string
  
//   // For Gift Boxes (single price)
//   price?: string
//   weight?: string
  
//   // For Dal/Spices/Sweeteners (multiple pricing options)
//   prices?: Array<{
//     weight: string
//     price: string
//   }>
  
//   // For Gift Boxes
//   items?: string[]
//   popular?: boolean
// }

// export const products: Product[] = [
//   // ==========================================
//   // 1. GIFT BOXES
//   // ==========================================
//   {
//     id: "gb-1",
//     category: "Gift Boxes",
//     name: "Economy",
//     weight: "300g",
//     price: "₹199",
//     items: ["Almond", "Cashew", "Black Raisins", "Fig"],
//     image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/9.png?updatedAt=1766849966367",
//     popular: true,
//   },
//   {
//     id: "gb-2",
//     category: "Gift Boxes",
//     name: "Standard",
//     weight: "400g",
//     price: "₹299",
//     badge: "Popular",
//     items: ["Almond", "Cashew", "Black Raisins", "Fig"],
//     image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/7.png?updatedAt=1766849965838",
//     popular: true,
//   },
//   {
//     id: "gb-3",
//     category: "Gift Boxes",
//     name: "Standard Plus",
//     weight: "400g",
//     price: "₹399",
//     items: ["Almond", "Cashew", "Raisins", "Pista"],
//     image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/2.png?updatedAt=1766849968531",
//   },
//   {
//     id: "gb-4",
//     category: "Gift Boxes",
//     name: "Premium",
//     weight: "560g",
//     price: "₹499",
//     items: ["Almond", "Cashew", "Black Raisins", "Fig", "Pista", "Pumpkin Seed"],
//     image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/6.png?updatedAt=1766849968568",
//     popular: true,
//   },
//   {
//     id: "gb-5",
//     category: "Gift Boxes",
//     name: "Classic",
//     weight: "750g",
//     price: "₹599",
//     items: ["Almond", "Cashew", "Black Raisins", "Fig", "Pista", "Pumpkin Seed", "Raisins"],
//     image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/5.png?updatedAt=1766849966756",
//   },
//   {
//     id: "gb-6",
//     category: "Gift Boxes",
//     name: "Royal",
//     weight: "600g",
//     price: "₹699",
//     items: ["Almond", "Cashew", "Raisins", "Walnut", "Pista", "Pumpkin Seed"],
//     image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/1.png?updatedAt=1766849968324",
//   },
//   {
//     id: "gb-7",
//     category: "Gift Boxes",
//     name: "Royal Plus",
//     weight: "700g",
//     price: "₹699",
//     items: ["Almond", "Cashew", "Raisins", "Pista"],
//     image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/8.png?updatedAt=1766849965157",
//     popular: true,
//   },
//   {
//     id: "gb-8",
//     category: "Gift Boxes",
//     name: "Delight",
//     weight: "Gift Hamper",
//     price: "₹799",
//     badge: "New",
//     items: ["Edenberg Wine (375ml)", "Biscoff", "Kinder Creamy", "Dairy Milk", "Munch", "Gems"],
//     image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/Delight.png?updatedAt=1767258946402",
//     popular: true,
//   },
//   {
//     id: "gb-9",
//     category: "Gift Boxes",
//     name: "Elite",
//     weight: "1000g",
//     price: "₹999",
//     items: ["Almond", "Cashew", "Black Raisins", "Pumpkin Seed", "Raisins", "Pista", "Fig"],
//     image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/elite.png?updatedAt=1767258946375",
//   },
//   {
//     id: "gb-10",
//     category: "Gift Boxes",
//     name: "Supreme",
//     weight: "Gift Hamper",
//     price: "₹1099",
//     badge: "New",
//     items: ["Edenberg Wine (375ml)", "Biscoff", "Dairy Milk", "Nestle", "Kitkat", "Imported Chocolates"],
//     image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/supreme.png?updatedAt=1767258936964",
//   },
//   {
//     id: "gb-11",
//     category: "Gift Boxes",
//     name: "Luxury",
//     weight: "1100g",
//     price: "₹1499",
//     badge: "Premium",
//     items: ["Almond", "Cashew", "Black Raisins", "Fig", "Pista", "Pumpkin Seed", "Raisins", "Walnut"],
//     image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/luxury.png?updatedAt=1767258948073",
//   },

//   // ==========================================
//   // 2. DALS, PULSES & BEANS
//   // ==========================================
//   {
//     id: "dp-1",
//     category: "Dals & Pulses",
//     name: "Premium Toor Dal",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/toordal/1kg.png?updatedAt=1768806210136",
//     prices: [
//       { weight: "500g", price: "₹85" },
//       { weight: "1kg", price: "₹170" },
//     ],
//   },
//   {
//     id: "dp-2",
//     category: "Dals & Pulses",
//     name: "Standard Toor Dal",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/toordal/1kg.png?updatedAt=1768806210136",
//     prices: [
//       { weight: "250g", price: "₹38" },
//       { weight: "500g", price: "₹75" },
//       { weight: "1kg", price: "₹150" },
//     ],
//   },
//   {
//     id: "dp-3",
//     category: "Dals & Pulses",
//     name: "Premium Urad Dal",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/urad/500g.png?updatedAt=1768806259239",
//     prices: [
//       { weight: "250g", price: "₹40" },
//       { weight: "500g", price: "₹80" },
//       { weight: "1kg", price: "₹165" },
//     ],
//   },
//   {
//     id: "dp-4",
//     category: "Dals & Pulses",
//     name: "Standard Urad Dal",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/urad/500g.png?updatedAt=1768806259239",
//     prices: [
//       { weight: "250g", price: "₹34" },
//       { weight: "500g", price: "₹67" },
//       { weight: "1kg", price: "₹130" },
//     ],
//   },
//   {
//     id: "dp-5",
//     category: "Dals & Pulses",
//     name: "Premium Moong Dal",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/Dgrocer%20sticker%20mockup%20for%20website/8.png?updatedAt=1768812663157",
//     prices: [
//       { weight: "250g", price: "₹35" },
//       { weight: "500g", price: "₹67" },
//       { weight: "1kg", price: "₹133" },
//     ],
//   },
//   {
//     id: "dp-6",
//     category: "Dals & Pulses",
//     name: "Premium Green Gram",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/pasi%20parupu(moong%20dal,green%20gram)/500g.png?updatedAt=1768806261397",
//     prices: [
//       { weight: "250g", price: "₹44" },
//       { weight: "500g", price: "₹85" },
//       { weight: "1kg", price: "₹180" },
//     ],
//   },
//   {
//     id: "dp-7",
//     category: "Dals & Pulses",
//     name: "Premium Chana Dal",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/kadala%20dal%20(chana)/1kg.png?updatedAt=1768806171971",
//     prices: [
//       { weight: "250g", price: "₹30" },
//       { weight: "500g", price: "₹50" },
//       { weight: "1kg", price: "₹95" },
//     ],
//   },
//   {
//     id: "dp-8",
//     category: "Dals & Pulses",
//     name: "Premium Masoor Dal",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/masoor%20dal/1kg.png?updatedAt=1768806253558",
//     prices: [
//       { weight: "500g", price: "₹55" },
//       { weight: "1kg", price: "₹109" },
//     ],
//   },
//   {
//     id: "dp-9",
//     category: "Dals & Pulses",
//     name: "Premium White Chickpeas",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/white%20chick%20peas/1kg.png?updatedAt=1768806169256",
//     prices: [
//       { weight: "250g", price: "₹60" },
//       { weight: "500g", price: "₹110" },
//       { weight: "1kg", price: "₹215" },
//     ],
//   },
//   {
//     id: "dp-10",
//     category: "Dals & Pulses",
//     name: "Premium Black Chickpeas",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/BLACK%20CHICKPEAS/1kg.png?updatedAt=1768806257788",
//     prices: [
//       { weight: "250g", price: "₹39" },
//       { weight: "500g", price: "₹74" },
//       { weight: "1kg", price: "₹125" },
//     ],
//   },
//   {
//     id: "dp-11",
//     category: "Dals & Pulses",
//     name: "Premium Horse Gram",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/11.png?updatedAt=1768806257788",
//     prices: [
//       { weight: "250g", price: "₹30" },
//       { weight: "500g", price: "₹60" },
//       { weight: "1kg", price: "₹120" },
//     ],
//   },
//   {
//     id: "dp-12",
//     category: "Dals & Pulses",
//     name: "Premium Rajma Beans",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/RAJMA/1KG.png?updatedAt=1768806238789",
//     prices: [
//       { weight: "250g", price: "₹39" },
//       { weight: "500g", price: "₹78" },
//     ],
//   },
//   {
//     id: "dp-13",
//     category: "Dals & Pulses",
//     name: "Premium Whole Moong",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/13.png?updatedAt=1768806257788",
//     prices: [
//       { weight: "250g", price: "₹35" },
//       { weight: "500g", price: "₹70" },
//       { weight: "1kg", price: "₹135" },
//     ],
//   },
//   {
//     id: "dp-14",
//     category: "Dals & Pulses",
//     name: "Premium Black Beans",
//     image: "https://ik.imagekit.io/j0xzq9pns/groceries/14.png?updatedAt=1768806257788",
//     prices: [
//       { weight: "250g", price: "₹34" },
//       { weight: "500g", price: "₹68" },
//     ],
//   },

//   // ==========================================
//   // 3. SWEETENERS
//   // ==========================================
//   {
//     id: "sw-1",
//     category: "Sweeteners",
//     name: "Premium White Sugar",
//     prices: [
//       { weight: "250g", price: "₹14" },
//       { weight: "500g", price: "₹30" },
//       { weight: "1kg", price: "₹60" },
//     ],
//   },
//   {
//     id: "sw-2",
//     category: "Sweeteners",
//     name: "Premium Jaggery",
//     prices: [
//       { weight: "250g", price: "₹20" },
//       { weight: "500g", price: "₹42" },
//       { weight: "1kg", price: "₹75" },
//     ],
//   },
//   {
//     id: "sw-3",
//     category: "Sweeteners",
//     name: "Premium Brown Sugar",
//     prices: [
//       { weight: "500g", price: "₹45" },
//       { weight: "1kg", price: "₹85" },
//     ],
//   },

//   // ==========================================
//   // 4. SPICES
//   // ==========================================
//   {
//     id: "sp-1",
//     category: "Spices",
//     name: "Premium Cumin Seeds",
//     prices: [
//       { weight: "50g", price: "₹25" },
//       { weight: "100g", price: "₹45" },
//       { weight: "250g", price: "₹150" },
//     ],
//   },
//   {
//     id: "sp-2",
//     category: "Spices",
//     name: "Premium Black Pepper",
//     prices: [
//       { weight: "50g", price: "₹50" },
//       { weight: "100g", price: "₹99" },
//     ],
//   },
//   {
//     id: "sp-3",
//     category: "Spices",
//     name: "Premium Fennel Seeds",
//     prices: [
//       { weight: "50g", price: "₹25" },
//       { weight: "100g", price: "₹30" },
//     ],
//   },
//   {
//     id: "sp-4",
//     category: "Spices",
//     name: "Premium Mustard Seeds",
//     prices: [
//       { weight: "100g", price: "₹13" },
//     ],
//   },
//   {
//     id: "sp-5",
//     category: "Spices",
//     name: "Premium Dry Chillies",
//     prices: [
//       { weight: "100g", price: "₹25" },
//       { weight: "250g", price: "₹60" },
//     ],
//   },
//   {
//     id: "sp-6",
//     category: "Spices",
//     name: "Premium Round Chillies",
//     prices: [
//       { weight: "100g", price: "₹41" },
//       { weight: "250g", price: "₹98" },
//     ],
//   },
//   {
//     id: "sp-7",
//     category: "Spices",
//     name: "Premium Poppy Seeds",
//     prices: [
//       { weight: "25g", price: "₹50" },
//       { weight: "50g", price: "₹76" },
//       { weight: "100g", price: "₹150" },
//     ],
//   },
//   {
//     id: "sp-8",
//     category: "Spices",
//     name: "Premium Mace",
//     prices: [
//       { weight: "25g", price: "₹60" },
//       { weight: "50g", price: "₹120" },
//       { weight: "100g", price: "₹240" },
//     ],
//   },
//   {
//     id: "sp-9",
//     category: "Spices",
//     name: "Premium Nutmeg",
//     prices: [
//       { weight: "25g", price: "₹24" },
//       { weight: "50g", price: "₹48" },
//     ],
//   },
//   {
//     id: "sp-10",
//     category: "Spices",
//     name: "Premium Dry Ginger",
//     prices: [
//       { weight: "25g", price: "₹14" },
//       { weight: "50g", price: "₹28" },
//       { weight: "100g", price: "₹54" },
//     ],
//   },
//   {
//     id: "sp-11",
//     category: "Spices",
//     name: "Premium Star Anise",
//     prices: [
//       { weight: "25g", price: "₹25" },
//     ],
//   },
//   {
//     id: "sp-12",
//     category: "Spices",
//     name: "Premium Biryani Leaf",
//     prices: [
//       { weight: "25g", price: "₹35" },
//     ],
//   },
//   {
//     id: "sp-13",
//     category: "Spices",
//     name: "Premium Cloves",
//     prices: [
//       { weight: "25g", price: "₹35" },
//     ],
//   },
// ]


export interface Product {
  id: string
  name: string
  category: "Dals & Pulses" | "Spices" | "Sweeteners" | "Gift Boxes"
  image?: string
  badge?: string

  // For Gift Boxes (single price)
  price?: string
  weight?: string

  // For Dal/Spices/Sweeteners (multiple pricing options)
  prices?: Array<{
    weight: string
    price: string
  }>

  // For Gift Boxes
  items?: string[]
  popular?: boolean
}

export const products: Product[] = [
  // ==========================================
  // 1. GIFT BOXES
  // ==========================================
  {
    id: "gb-1",
    category: "Gift Boxes",
    name: "Economy",
    weight: "300g",
    price: "₹199",
    items: ["Almond", "Cashew", "Black Raisins", "Fig"],
    // image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/9.png?updatedAt=1766849966367",
    image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/Dry%20Fruits/1.jpeg",
    popular: true,
  },
  {
    id: "gb-2",
    category: "Gift Boxes",
    name: "Standard",
    weight: "400g",
    price: "₹299",
    badge: "Popular",
    items: ["Almond", "Cashew", "Black Raisins", "Fig"],
    // image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/7.png?updatedAt=1766849965838",
    image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/Dry%20Fruits/2.jpeg",
    popular: true,
  },
  {
    id: "gb-3",
    category: "Gift Boxes",
    name: "Standard Plus",
    weight: "400g",
    price: "₹399",
    items: ["Almond", "Cashew", "Raisins", "Pista"],
    // image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/2.png?updatedAt=1766849968531",
    image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/Dry%20Fruits/3.jpeg",
  },
  {
    id: "gb-4",
    category: "Gift Boxes",
    name: "Premium",
    weight: "560g",
    price: "₹499",
    items: ["Almond", "Cashew", "Black Raisins", "Fig", "Pista", "Pumpkin Seed"],
    // image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/6.png?updatedAt=1766849968568",
    image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/Dry%20Fruits/4.jpeg",
    popular: true,
  },
  {
    id: "gb-5",
    category: "Gift Boxes",
    name: "Classic",
    weight: "750g",
    price: "₹599",
    items: ["Almond", "Cashew", "Black Raisins", "Fig", "Pista", "Pumpkin Seed", "Raisins"],
    // image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/5.png?updatedAt=1766849966756",
    image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/Dry%20Fruits/5.jpeg",
  },
  {
    id: "gb-6",
    category: "Gift Boxes",
    name: "Royal",
    weight: "600g",
    price: "₹699",
    items: ["Almond", "Cashew", "Raisins", "Walnut", "Pista", "Pumpkin Seed"],
    // image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/1.png?updatedAt=1766849968324",
    image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/Dry%20Fruits/6.jpeg",
  },
  {
    id: "gb-7",
    category: "Gift Boxes",
    name: "Royal Plus",
    weight: "700g",
    price: "₹699",
    items: ["Almond", "Cashew", "Raisins", "Pista"],
    // image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/8.png?updatedAt=1766849965157",
    image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/Dry%20Fruits/7.jpeg",
    popular: true,
  },
  {
    id: "gb-8",
    category: "Gift Boxes",
    name: "Delight",
    weight: "Gift Hamper",
    price: "₹799",
    badge: "New",
    items: ["Edenberg Wine (375ml)", "Biscoff", "Kinder Creamy", "Dairy Milk", "Munch", "Gems"],
    // image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/Delight.png?updatedAt=1767258946402",
    image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/Dry%20Fruits/8.jpeg",
    popular: true,
  },
  {
    id: "gb-9",
    category: "Gift Boxes",
    name: "Elite",
    weight: "1000g",
    price: "₹999",
    items: ["Almond", "Cashew", "Black Raisins", "Pumpkin Seed", "Raisins", "Pista", "Fig"],
    // image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/elite.png?updatedAt=1767258946375",
    image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/Dry%20Fruits/9.jpeg",
  },
  {
    id: "gb-10",
    category: "Gift Boxes",
    name: "Supreme",
    weight: "Gift Hamper",
    price: "₹1099",
    badge: "New",
    items: ["Edenberg Wine (375ml)", "Biscoff", "Dairy Milk", "Nestle", "Kitkat", "Imported Chocolates"],
    // image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/supreme.png?updatedAt=1767258936964",
    image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/Dry%20Fruits/10.jpeg",
  },
  {
    id: "gb-11",
    category: "Gift Boxes",
    name: "Luxury",
    weight: "1100g",
    price: "₹1499",
    badge: "Premium",
    items: ["Almond", "Cashew", "Black Raisins", "Fig", "Pista", "Pumpkin Seed", "Raisins", "Walnut"],
    // image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/luxury.png?updatedAt=1767258948073",
    image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/Dry%20Fruits/11.jpeg",
  },

  // ==========================================
  // 2. DALS, PULSES & BEANS
  // ==========================================
  {
    id: "dp-1",
    category: "Dals & Pulses",
    name: "Premium Toor Dal",
    // image: "https://ik.imagekit.io/j0xzq9pns/groceries/toordal/1kg.png?updatedAt=1768806210136",
    image: "https://ik.imagekit.io/j0xzq9pns/groceries/Dry%20Fruits%20&%20Pulses/5.jpeg",
    prices: [
      { weight: "500g", price: "₹85" },
      { weight: "1kg", price: "₹170" },
    ],
  },
  {
    id: "dp-2",
    category: "Dals & Pulses",
    name: "Standard Toor Dal",
    // image: "https://ik.imagekit.io/j0xzq9pns/groceries/toordal/1kg.png?updatedAt=1768806210136",
    image: "https://ik.imagekit.io/j0xzq9pns/groceries/Dry%20Fruits%20&%20Pulses/5.jpeg",
    prices: [
      { weight: "250g", price: "₹38" },
      { weight: "500g", price: "₹75" },
      { weight: "1kg", price: "₹150" },
    ],
  },
  {
    id: "dp-3",
    category: "Dals & Pulses",
    name: "Premium Urad Dal",
    // image: "https://ik.imagekit.io/j0xzq9pns/groceries/urad/500g.png?updatedAt=1768806259239",
    image: "https://ik.imagekit.io/j0xzq9pns/groceries/Dry%20Fruits%20&%20Pulses/4.jpeg",
    prices: [
      { weight: "250g", price: "₹40" },
      { weight: "500g", price: "₹80" },
      { weight: "1kg", price: "₹165" },
    ],
  },
  {
    id: "dp-4",
    category: "Dals & Pulses",
    name: "Standard Urad Dal",
    // image: "https://ik.imagekit.io/j0xzq9pns/groceries/urad/500g.png?updatedAt=1768806259239",
    image: "https://ik.imagekit.io/j0xzq9pns/groceries/Dry%20Fruits%20&%20Pulses/4.jpeg",
    prices: [
      { weight: "250g", price: "₹34" },
      { weight: "500g", price: "₹67" },
      { weight: "1kg", price: "₹130" },
    ],
  },
  {
    id: "dp-5",
    category: "Dals & Pulses",
    name: "Premium Moong Dal",
    // image: "https://ik.imagekit.io/j0xzq9pns/groceries/Dgrocer%20sticker%20mockup%20for%20website/8.png?updatedAt=1768812663157",
    image: "https://ik.imagekit.io/j0xzq9pns/groceries/Dry%20Fruits%20&%20Pulses/1.jpeg",
    prices: [
      { weight: "250g", price: "₹35" },
      { weight: "500g", price: "₹67" },
      { weight: "1kg", price: "₹133" },
    ],
  },
  {
    id: "dp-6",
    category: "Dals & Pulses",
    name: "Premium Green Gram",
    // image: "https://ik.imagekit.io/j0xzq9pns/groceries/pasi%20parupu(moong%20dal,green%20gram)/500g.png?updatedAt=1768806261397",
    image: "https://ik.imagekit.io/j0xzq9pns/groceries/Dry%20Fruits%20&%20Pulses/6.jpeg",
    prices: [
      { weight: "250g", price: "₹44" },
      { weight: "500g", price: "₹85" },
      { weight: "1kg", price: "₹180" },
    ],
  },
  {
    id: "dp-7",
    category: "Dals & Pulses",
    name: "Premium Chana Dal",
    // image: "https://ik.imagekit.io/j0xzq9pns/groceries/kadala%20dal%20(chana)/1kg.png?updatedAt=1768806171971",
    image: "https://ik.imagekit.io/j0xzq9pns/groceries/Dry%20Fruits%20&%20Pulses/7.jpeg",
    prices: [
      { weight: "250g", price: "₹30" },
      { weight: "500g", price: "₹50" },
      { weight: "1kg", price: "₹95" },
    ],
  },
  {
    id: "dp-8",
    category: "Dals & Pulses",
    name: "Premium Masoor Dal",
    // image: "https://ik.imagekit.io/j0xzq9pns/groceries/masoor%20dal/1kg.png?updatedAt=1768806253558",
    image: "https://ik.imagekit.io/j0xzq9pns/groceries/Dry%20Fruits%20&%20Pulses/8.jpeg",
    prices: [
      { weight: "500g", price: "₹55" },
      { weight: "1kg", price: "₹109" },
    ],
  },
  {
    id: "dp-9",
    category: "Dals & Pulses",
    name: "Premium White Chickpeas",
    // image: "https://ik.imagekit.io/j0xzq9pns/groceries/white%20chick%20peas/1kg.png?updatedAt=1768806169256",
    image: "https://ik.imagekit.io/j0xzq9pns/groceries/Dry%20Fruits%20&%20Pulses/9.jpeg",
    prices: [
      { weight: "250g", price: "₹60" },
      { weight: "500g", price: "₹110" },
      { weight: "1kg", price: "₹215" },
    ],
  },
  {
    id: "dp-10",
    category: "Dals & Pulses",
    name: "Premium Black Chickpeas",
    // image: "https://ik.imagekit.io/j0xzq9pns/groceries/BLACK%20CHICKPEAS/1kg.png?updatedAt=1768806257788",
    image: "https://ik.imagekit.io/j0xzq9pns/groceries/Dry%20Fruits%20&%20Pulses/10.jpeg",
    prices: [
      { weight: "250g", price: "₹39" },
      { weight: "500g", price: "₹74" },
      { weight: "1kg", price: "₹125" },
    ],
  },
  {
    id: "dp-11",
    category: "Dals & Pulses",
    name: "Premium Horse Gram",
    image: "https://ik.imagekit.io/j0xzq9pns/groceries/Dry%20Fruits%20&%20Pulses/11.jpeg",
    prices: [
      { weight: "250g", price: "₹30" },
      { weight: "500g", price: "₹60" },
      { weight: "1kg", price: "₹120" },
    ],
  },
  {
    id: "dp-12",
    category: "Dals & Pulses",
    name: "Premium Rajma Beans",
    // image: "https://ik.imagekit.io/j0xzq9pns/groceries/RAJMA/1KG.png?updatedAt=1768806238789",
    image: "https://ik.imagekit.io/j0xzq9pns/groceries/Dry%20Fruits%20&%20Pulses/12.jpeg",
    prices: [
      { weight: "250g", price: "₹39" },
      { weight: "500g", price: "₹78" },
    ],
  },
  {
    id: "dp-13",
    category: "Dals & Pulses",
    name: "Premium Whole Moong",
    // image: "https://ik.imagekit.io/j0xzq9pns/groceries/13.png?updatedAt=1768806257788",
    image: "https://ik.imagekit.io/j0xzq9pns/groceries/Dry%20Fruits%20&%20Pulses/6.jpeg",
    prices: [
      { weight: "250g", price: "₹35" },
      { weight: "500g", price: "₹70" },
      { weight: "1kg", price: "₹135" },
    ],
  },
  {
    id: "dp-14",
    category: "Dals & Pulses",
    name: "Premium Black Beans",
    image: "https://ik.imagekit.io/j0xzq9pns/groceries/Dry%20Fruits%20&%20Pulses/14.jpeg",
    prices: [
      { weight: "250g", price: "₹34" },
      { weight: "500g", price: "₹68" },
    ],
  },

  // ==========================================
  // 3. SWEETENERS
  // ==========================================
  {
    id: "sw-1",
    category: "Sweeteners",
    name: "Premium White Sugar",
    image: "https://ik.imagekit.io/j0xzq9pns/groceries/WHITE%20SUGAR/1KG.png?updatedAt=1768806213788",
    prices: [
      { weight: "250g", price: "₹14" },
      { weight: "500g", price: "₹30" },
      { weight: "1kg", price: "₹60" },
    ],
  },
  {
    id: "sw-2",
    category: "Sweeteners",
    name: "Premium Jaggery",
    prices: [
      { weight: "250g", price: "₹20" },
      { weight: "500g", price: "₹42" },
      { weight: "1kg", price: "₹75" },
    ],
  },
  {
    id: "sw-3",
    category: "Sweeteners",
    name: "Premium Brown Sugar",
    image: "https://ik.imagekit.io/j0xzq9pns/groceries/BROWN%20SUGAR/1KG.png?updatedAt=1768806222909",
    prices: [
      { weight: "500g", price: "₹45" },
      { weight: "1kg", price: "₹85" },
    ],
  },

  // ==========================================
  // 4. SPICES
  // ==========================================
  {
    id: "sp-1",
    category: "Spices",
    name: "Premium Cumin Seeds",
    image: "https://ik.imagekit.io/j0xzq9pns/groceries/Dgrocer%20sticker%20mockup%20for%20website/12.png",
    prices: [
      { weight: "50g", price: "₹25" },
      { weight: "100g", price: "₹45" },
      { weight: "250g", price: "₹150" },
    ],
  },
  {
    id: "sp-2",
    category: "Spices",
    name: "Premium Black Pepper",
    image: "https://ik.imagekit.io/j0xzq9pns/groceries/SPICES/BLACK%20PEPPER/100G.png?updatedAt=1768806272377",
    prices: [
      { weight: "50g", price: "₹50" },
      { weight: "100g", price: "₹99" },
    ],
  },
  {
    id: "sp-3",
    category: "Spices",
    name: "Premium Fennel Seeds",
    image: "https://ik.imagekit.io/j0xzq9pns/groceries/SPICES/FENNEL%20SEEDS/100%20(2).png?updatedAt=1768806280668",
    prices: [
      { weight: "50g", price: "₹25" },
      { weight: "100g", price: "₹30" },
    ],
  },
  {
    id: "sp-4",
    category: "Spices",
    name: "Premium Mustard Seeds",
    image: "https://ik.imagekit.io/j0xzq9pns/groceries/SPICES/MUSTARD/100G.png?updatedAt=1768806268508",
    prices: [
      { weight: "100g", price: "₹13" },
    ],
  },
  {
    id: "sp-5",
    category: "Spices",
    name: "Premium Dry Chillies",
    image: "https://ik.imagekit.io/j0xzq9pns/groceries/Dgrocer%20sticker%20mockup%20for%20website/dry%20chilli.png",
    prices: [
      { weight: "100g", price: "₹25" },
      { weight: "250g", price: "₹60" },
    ],
  },
  {
    id: "sp-6",
    category: "Spices",
    name: "Premium Round Chillies",
    image: "https://ik.imagekit.io/j0xzq9pns/groceries/ROUND%20RE%20CHILLI/ROUND%20RED%20CHILLI%20250G.jpeg?updatedAt=1768806173058",
    prices: [
      { weight: "100g", price: "₹41" },
      { weight: "250g", price: "₹98" },
    ],
  },
  {
    id: "sp-7",
    category: "Spices",
    name: "Premium Poppy Seeds",
    image: "https://ik.imagekit.io/j0xzq9pns/groceries/SPICES/POPPY/100.png?updatedAt=1768806277178",
    prices: [
      { weight: "25g", price: "₹50" },
      { weight: "50g", price: "₹76" },
      { weight: "100g", price: "₹150" },
    ],
  },
  {
    id: "sp-8",
    category: "Spices",
    name: "Premium Mace",
    image: "https://ik.imagekit.io/j0xzq9pns/groceries/SPICES/MACE/100.png?updatedAt=1768806276446",
    prices: [
      { weight: "25g", price: "₹60" },
      { weight: "50g", price: "₹120" },
      { weight: "100g", price: "₹240" },
    ],
  },
  {
    id: "sp-9",
    category: "Spices",
    name: "Premium Nutmeg",
    image: "https://ik.imagekit.io/j0xzq9pns/groceries/SPICES/NUT%20MEG/50G.png?updatedAt=1768806234885",
    prices: [
      { weight: "25g", price: "₹24" },
      { weight: "50g", price: "₹48" },
    ],
  },
  {
    id: "sp-10",
    category: "Spices",
    name: "Premium Dry Ginger",
    prices: [
      { weight: "25g", price: "₹14" },
      { weight: "50g", price: "₹28" },
      { weight: "100g", price: "₹54" },
    ],
  },
  {
    id: "sp-11",
    category: "Spices",
    name: "Premium Star Anise",
    image: "https://ik.imagekit.io/j0xzq9pns/groceries/Dgrocer%20sticker%20mockup%20for%20website/4.png?updatedAt=1768812662972",
    prices: [
      { weight: "25g", price: "₹25" },
    ],
  },
  {
    id: "sp-12",
    category: "Spices",
    name: "Premium Biryani Leaf",
    image: "https://ik.imagekit.io/j0xzq9pns/groceries/Dgrocer%20sticker%20mockup%20for%20website/16.png?updatedAt=1768812656549",
    prices: [
      { weight: "25g", price: "₹35" },
    ],
  },
  {
    id: "sp-13",
    category: "Spices",
    name: "Premium Cloves",
    image: "https://ik.imagekit.io/j0xzq9pns/groceries/Dgrocer%20sticker%20mockup%20for%20website/15.png?updatedAt=1768812661717",
    prices: [
      { weight: "25g", price: "₹35" },
    ],
  },
]