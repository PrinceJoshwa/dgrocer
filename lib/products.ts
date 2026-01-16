// // data/products.ts

// export type ProductPrice = {
//   weight: string;
//   price: string;
// };

// export type Product = {
//   id: string;
//   category: "Gift Box" | "Sweeteners" | "Spices" | "Dals & Pulses";
//   name: string;
//   items?: string[]; // For gift boxes
//   prices?: ProductPrice[]; // For groceries with multiple weights
//   price?: string; // For single price items (Gift boxes)
//   weight?: string; // For single weight items
//   image?: string;
//   badge?: string;
//   popular?: boolean; // Determines if it shows on the Home Page
// };

// export const products: Product[] = [
//   // ==========================================
//   // 1. GIFT BOXES (Total 11 Items)
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
//   },

//   // ==========================================
//   // 2. SWEETENERS (From PDF)
//   // ==========================================
//   {
//     id: "sw-1",
//     category: "Sweeteners",
//     name: "Sugar",
//     prices: [
//       { weight: "250g", price: "₹14" },
//       { weight: "500g", price: "₹30" },
//       { weight: "1kg", price: "₹60" },
//     ],
//   },
//   {
//     id: "sw-2",
//     category: "Sweeteners",
//     name: "Jaggery",
//     prices: [
//       { weight: "250g", price: "₹20" },
//       { weight: "500g", price: "₹42" },
//       { weight: "1kg", price: "₹75" },
//     ],
//   },
//   {
//     id: "sw-3",
//     category: "Sweeteners",
//     name: "Brown Sugar (Nattu Sarkkarai)",
//     prices: [
//       { weight: "500g", price: "₹45" },
//       { weight: "1kg", price: "₹85" },
//     ],
//   },

//   // ==========================================
//   // 3. SPICES (From PDF)
//   // ==========================================
//   {
//     id: "sp-1",
//     category: "Spices",
//     name: "Cumin Seeds (Seeragam)",
//     prices: [
//       { weight: "50g", price: "₹25" },
//       { weight: "100g", price: "₹45" },
//       { weight: "250g", price: "₹150" },
//     ],
//   },
//   {
//     id: "sp-2",
//     category: "Spices",
//     name: "Black Pepper (Milagu)",
//     prices: [
//       { weight: "50g", price: "₹50" },
//       { weight: "100g", price: "₹99" },
//     ],
//   },
//   {
//     id: "sp-3",
//     category: "Spices",
//     name: "Fennel Seeds (Sombu)",
//     prices: [
//       { weight: "50g", price: "₹25" },
//       { weight: "100g", price: "₹30" },
//     ],
//   },
//   {
//     id: "sp-4",
//     category: "Spices",
//     name: "Mustard Seeds (Kadugu)",
//     prices: [
//       { weight: "100g", price: "₹13" },
//     ],
//   },
//   {
//     id: "sp-5",
//     category: "Spices",
//     name: "Dry Chillies (Vathal)",
//     prices: [
//       { weight: "100g", price: "₹25" },
//       { weight: "250g", price: "₹60" },
//     ],
//   },
//   {
//     id: "sp-6",
//     category: "Spices",
//     name: "Round Chillies (Gundu Vathal)",
//     prices: [
//       { weight: "100g", price: "₹41" },
//       { weight: "250g", price: "₹98" },
//     ],
//   },
//   {
//     id: "sp-7",
//     category: "Spices",
//     name: "Poppy Seeds (Kasakasa)",
//     prices: [
//       { weight: "25g", price: "₹50" },
//       { weight: "50g", price: "₹76" },
//       { weight: "100g", price: "₹150" },
//     ],
//   },
//   {
//     id: "sp-8",
//     category: "Spices",
//     name: "Mace (Jathi Pathiri)",
//     prices: [
//       { weight: "25g", price: "₹60" },
//       { weight: "50g", price: "₹120" },
//       { weight: "100g", price: "₹240" },
//     ],
//   },
//   {
//     id: "sp-9",
//     category: "Spices",
//     name: "Nutmeg (Jathikai)",
//     prices: [
//       { weight: "25g", price: "₹24" },
//       { weight: "50g", price: "₹48" },
//     ],
//   },
//   {
//     id: "sp-10",
//     category: "Spices",
//     name: "Dry Ginger (Sukku)",
//     prices: [
//       { weight: "25g", price: "₹14" },
//       { weight: "50g", price: "₹28" },
//       { weight: "100g", price: "₹54" },
//     ],
//   },
//   {
//     id: "sp-11",
//     category: "Spices",
//     name: "Star Anise (Annachi Poo)",
//     prices: [
//       { weight: "25g", price: "₹25" },
//     ],
//   },
//   {
//     id: "sp-12",
//     category: "Spices",
//     name: "Biryani Leaf",
//     prices: [
//       { weight: "25g", price: "₹35" },
//     ],
//   },
//   {
//     id: "sp-13",
//     category: "Spices",
//     name: "Cloves (Kirampu)",
//     prices: [
//       { weight: "25g", price: "₹35" },
//     ],
//   },

//   // ==========================================
//   // 4. DALS & PULSES (From PDF)
//   // ==========================================
//   {
//     id: "dp-1",
//     category: "Dals & Pulses",
//     name: "Toor Dal Premium ",
//     prices: [
//       { weight: "500g", price: "₹85" },
//       { weight: "1kg", price: "₹170" },
//     ],
//   },
//   {
//     id: "dp-2",
//     category: "Dals & Pulses",
//     name: "Standard Toor Dal ",
//     prices: [
//       { weight: "250g", price: "₹38" },
//       { weight: "500g", price: "₹75" },
//       { weight: "1kg", price: "₹150" },
//     ],
//   },
//   {
//     id: "dp-3",
//     category: "Dals & Pulses",
//     name: "Premium Urad Dal ",
//     prices: [
//       { weight: "250g", price: "₹40" },
//       { weight: "500g", price: "₹80" },
//       { weight: "1kg", price: "₹165" },
//     ],
//   },
//   {
//     id: "dp-4",
//     category: "Dals & Pulses",
//     name: "Standard Urad Dal ",
//     prices: [
//         { weight: "250g", price: "₹34" },
//         { weight: "500g", price: "₹67" },
//         { weight: "1kg", price: "₹130" },
//     ]
//   },
//   {
//     id: "dp-5",
//     category: "Dals & Pulses",
//     name: "Moong Dal (Pasi Paruppu) ",
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
//     prices: [
//         { weight: "250g", price: "₹44" },
//         { weight: "500g", price: "₹85" },
//         { weight: "1kg", price: "₹180" },
//     ]
//   },
//   {
//     id: "dp-7",
//     category: "Dals & Pulses",
//     name: "Chana Dal (Kadalai Paruppu)",
//     prices: [
//       { weight: "250g", price: "₹30" },
//       { weight: "500g", price: "₹50" },
//       { weight: "1kg", price: "₹95" },
//     ],
//   },
//   {
//     id: "dp-8",
//     category: "Dals & Pulses",
//     name: "Masoor Dal ",
//     prices: [
//       { weight: "500g", price: "₹55" },
//       { weight: "1kg", price: "₹109" },
//     ],
//   },
//   {
//     id: "dp-9",
//     category: "Dals & Pulses",
//     name: "White Chickpeas (White Sundal) ",
//     prices: [
//         { weight: "250g", price: "₹60" },
//         { weight: "500g", price: "₹110" },
//         { weight: "1kg", price: "₹215" },
//     ]
//   },
//   {
//     id: "dp-10",
//     category: "Dals & Pulses",
//     name: "Black Chickpeas (Black Sundal) ",
//     prices: [
//         { weight: "250g", price: "₹39" },
//         { weight: "500g", price: "₹74" },
//         { weight: "1kg", price: "₹125" },
//     ]
//   },
//   {
//     id: "dp-11",
//     category: "Dals & Pulses",
//     name: "Horse Gram (Black Kanam) ",
//     prices: [
//         { weight: "250g", price: "₹30" },
//         { weight: "500g", price: "₹60" },
//         { weight: "1kg", price: "₹120" },
//     ]
//   },
//   {
//     id: "dp-12",
//     category: "Dals & Pulses",
//     name: "Rajma Beans ",
//     prices: [
//         { weight: "250g", price: "₹39" },
//         { weight: "500g", price: "₹78" },
//     ]
//   }
// ];

// data/products.ts

export type ProductPrice = {
  weight: string;
  price: string;
};

export type Product = {
  id: string;
  category: "Gift Box" | "Sweeteners" | "Spices" | "Dals & Pulses";
  name: string;
  items?: string[]; 
  prices?: ProductPrice[];
  price?: string; 
  weight?: string; 
  image?: string;
  badge?: string;
  popular?: boolean;
};

export const products: Product[] = [
  // ==========================================
  // 1. GIFT BOXES (Existing)
  // ==========================================
  {
    id: "gb-1",
    category: "Gift Box",
    name: "Economy",
    weight: "300g",
    price: "₹199",
    items: ["Almond", "Cashew", "Black Kismiss", "Fig"],
    image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/9.png?updatedAt=1766849966367",
    popular: true,
  },
  {
    id: "gb-2",
    category: "Gift Box",
    name: "Standard",
    weight: "400g",
    price: "₹299",
    badge: "Popular",
    items: ["Almond", "Cashew", "Black Kismiss", "Fig"],
    image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/7.png?updatedAt=1766849965838",
    popular: true,
  },
  {
    id: "gb-3",
    category: "Gift Box",
    name: "Standard Plus",
    weight: "400g",
    price: "₹399",
    items: ["Almond", "Cashew", "Kismiss", "Pista"],
    image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/2.png?updatedAt=1766849968531",
  },
  {
    id: "gb-4",
    category: "Gift Box",
    name: "Premium",
    weight: "560g",
    price: "₹499",
    items: ["Almond", "Cashew", "Black Kismiss", "Fig", "Pista", "Pumpkin Seed"],
    image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/6.png?updatedAt=1766849968568",
    popular: true,
  },
  {
    id: "gb-5",
    category: "Gift Box",
    name: "Classic",
    weight: "750g",
    price: "₹599",
    items: ["Almond", "Cashew", "Black Kismiss", "Fig", "Pista", "Pumpkin Seed", "Kismiss"],
    image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/5.png?updatedAt=1766849966756",
  },
  {
    id: "gb-6",
    category: "Gift Box",
    name: "Royal",
    weight: "600g",
    price: "₹699",
    items: ["Almond", "Cashew", "Kismiss", "Walnut", "Pista", "Pumpkin Seed"],
    image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/1.png?updatedAt=1766849968324",
  },
  {
    id: "gb-7",
    category: "Gift Box",
    name: "Royal Plus",
    weight: "700g",
    price: "₹699",
    items: ["Almond", "Cashew", "Kismiss", "Pista"],
    image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/8.png?updatedAt=1766849965157",
    popular: true,
  },
  {
    id: "gb-8",
    category: "Gift Box",
    name: "Delight",
    weight: "Gift Hamper",
    price: "₹799",
    badge: "New",
    items: ["Edenberg Wine (375ml)", "Biscoff", "Kinder Creamy", "Dairy Milk", "Munch", "Gems"],
    image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/Delight.png?updatedAt=1767258946402",
    popular: true,
  },
  {
    id: "gb-9",
    category: "Gift Box",
    name: "Elite",
    weight: "1000g",
    price: "₹999",
    items: ["Almond", "Cashew", "Black Kismiss", "Pumpkin Seed", "Kismiss", "Pista", "Fig"],
    image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/elite.png?updatedAt=1767258946375",
    popular: true,
  },
  {
    id: "gb-10",
    category: "Gift Box",
    name: "Supreme",
    weight: "Gift Hamper",
    price: "₹1099",
    badge: "New",
    items: ["Edenberg Wine (375ml)", "Biscoff", "Dairy Milk", "Nestle", "Kitkat", "Imported Chocolates"],
    image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/supreme.png?updatedAt=1767258936964",
    popular: true,
  },
  {
    id: "gb-11",
    category: "Gift Box",
    name: "Luxury",
    weight: "1100g",
    price: "₹1499",
    badge: "Premium",
    items: ["Almond", "Cashew", "Black Kismiss", "Fig", "Pista", "Pumpkin Seed", "Kismiss", "Walnut"],
    image: "https://ik.imagekit.io/j0xzq9pns/GIFT%20HAMPERS/luxury.png?updatedAt=1767258948073",
    popular: true,
  },

  // ==========================================
  // 2. DALS, PULSES & BEANS (SL.NO 1-14)
  // ==========================================
  {
    id: "dp-1",
    category: "Dals & Pulses",
    name: "Toor Dal Premium",
    image: "/groceries/1.png", // matches PDF SL 1
    prices: [
      { weight: "500g", price: "₹85" }, //
      { weight: "1kg", price: "₹170" },
    ],
  },
  {
    id: "dp-2",
    category: "Dals & Pulses",
    name: "Standard Toor Dal",
    image: "/groceries/2.png", // matches PDF SL 2
    prices: [
      { weight: "250g", price: "₹38" }, //
      { weight: "500g", price: "₹75" },
      { weight: "1kg", price: "₹150" },
    ],
  },
  {
    id: "dp-3",
    category: "Dals & Pulses",
    name: "Premium Urad Dal",
    image: "/groceries/3.png", // matches PDF SL 3
    prices: [
      { weight: "250g", price: "₹40" }, //
      { weight: "500g", price: "₹80" },
      { weight: "1kg", price: "₹165" },
    ],
  },
  {
    id: "dp-4",
    category: "Dals & Pulses",
    name: "Standard Urad Dal",
    image: "/groceries/4.png", // matches PDF SL 4
    prices: [
        { weight: "250g", price: "₹34" }, //
        { weight: "500g", price: "₹67" },
        { weight: "1kg", price: "₹130" },
    ]
  },
  {
    id: "dp-5",
    category: "Dals & Pulses",
    name: "Moong Dal (Pasi Paruppu)",
    image: "/groceries/5.png", // matches PDF SL 5
    prices: [
      { weight: "250g", price: "₹35" }, //
      { weight: "500g", price: "₹67" },
      { weight: "1kg", price: "₹133" },
    ],
  },
  {
    id: "dp-6",
    category: "Dals & Pulses",
    name: "Premium Green Gram",
    image: "/groceries/6.png", // matches PDF SL 6
    prices: [
        { weight: "250g", price: "₹44" }, //
        { weight: "500g", price: "₹85" },
        { weight: "1kg", price: "₹180" },
    ]
  },
  {
    id: "dp-7",
    category: "Dals & Pulses",
    name: "Chana Dal (Kadalai Paruppu)",
    image: "/groceries/7.png", // matches PDF SL 7
    prices: [
      { weight: "250g", price: "₹30" }, //
      { weight: "500g", price: "₹50" },
      { weight: "1kg", price: "₹95" },
    ],
  },
  {
    id: "dp-8",
    category: "Dals & Pulses",
    name: "Masoor Dal (Masoor Paruppu)",
    image: "/groceries/8.png", // matches PDF SL 8
    prices: [
      { weight: "500g", price: "₹55" }, //
      { weight: "1kg", price: "₹109" },
    ],
  },
  {
    id: "dp-9",
    category: "Dals & Pulses",
    name: "White Chickpeas (White Sundal Big)",
    image: "/groceries/9.png", // matches PDF SL 9
    prices: [
        { weight: "250g", price: "₹60" }, //
        { weight: "500g", price: "₹110" },
        { weight: "1kg", price: "₹215" },
    ]
  },
  {
    id: "dp-10",
    category: "Dals & Pulses",
    name: "Black Chickpeas (Black Sundal)",
    image: "/groceries/10.png", // matches PDF SL 10
    prices: [
        { weight: "250g", price: "₹39" }, //
        { weight: "500g", price: "₹74" },
        { weight: "1kg", price: "₹125" },
    ]
  },
  {
    id: "dp-11",
    category: "Dals & Pulses",
    name: "Horse Gram (Black Kanam)",
    image: "/groceries/11.png", // matches PDF SL 11
    prices: [
        { weight: "250g", price: "₹30" }, //
        { weight: "500g", price: "₹60" },
        { weight: "1kg", price: "₹120" },
    ]
  },
  {
    id: "dp-12",
    category: "Dals & Pulses",
    name: "Rajma Beans",
    image: "/groceries/12.png", // matches PDF SL 12
    prices: [
        { weight: "250g", price: "₹39" }, //
        { weight: "500g", price: "₹78" },
    ]
  },
  {
    id: "dp-13",
    category: "Dals & Pulses",
    name: "White Rajma",
    image: "/groceries/13.png", // matches PDF SL 13
    prices: [
        { weight: "250g", price: "₹45" }, //
    ]
  },
  {
    id: "dp-14",
    category: "Dals & Pulses",
    name: "Wheat (Kothumai)",
    image: "/groceries/14.png", // matches PDF SL 14
    prices: [
        { weight: "500g", price: "₹29" }, //
    ]
  },

  // ==========================================
  // 3. SPICES (SL.NO 15-30)
  // ==========================================
  {
    id: "sp-1",
    category: "Spices",
    name: "Cumin Seeds (Seeragam)",
    image: "/groceries/15.png", // matches PDF SL 15
    prices: [
      { weight: "50g", price: "₹25" }, //
      { weight: "100g", price: "₹45" },
      { weight: "250g", price: "₹150" },
    ],
  },
  {
    id: "sp-2",
    category: "Spices",
    name: "Black Pepper (Milagu)",
    image: "/groceries/16.png", // matches PDF SL 16
    prices: [
      { weight: "50g", price: "₹50" }, //
      { weight: "100g", price: "₹99" },
    ],
  },
  {
    id: "sp-3",
    category: "Spices",
    name: "Fennel Seeds (Sombu)",
    image: "/groceries/13.png", // matches PDF SL 13

    // Image 1-16 used. No image provided for 17+. Using placeholder/none.
    prices: [
      { weight: "50g", price: "₹25" }, //
      { weight: "100g", price: "₹30" },
    ],
  },
  {
    id: "sp-4",
    category: "Spices",
    name: "Mustard Seeds (Kadugu)",
    image: "/groceries/13.png", // matches PDF SL 13

    prices: [
      { weight: "100g", price: "₹13" }, //
    ],
  },
  {
    id: "sp-5",
    category: "Spices",
    name: "Dry Chillies (Vathal)",
    image: "/groceries/13.png", // matches PDF SL 13

    prices: [
      { weight: "100g", price: "₹25" }, //
      { weight: "250g", price: "₹60" },
    ],
  },
  {
    id: "sp-6",
    category: "Spices",
    name: "Round Chillies (Gundu Vathal)",
    image: "/groceries/13.png", // matches PDF SL 13

    prices: [
      { weight: "100g", price: "₹41" }, //
      { weight: "250g", price: "₹98" },
    ],
  },
  {
    id: "sp-7",
    category: "Spices",
    name: "Cardamon",
    image: "/groceries/13.png", // matches PDF SL 13
    prices: [
      { weight: "10g", price: "₹37" }, //
    ],
  },
  {
    id: "sp-8",
    category: "Spices",
    name: "Poppy Seeds (Kasakasa)",
    image: "/groceries/13.png", // matches PDF SL 13
    prices: [
      { weight: "25g", price: "₹50" }, //
      { weight: "50g", price: "₹76" },
      { weight: "100g", price: "₹150" },
    ],
  },
  {
    id: "sp-9",
    category: "Spices",
    name: "Mace (Jathi Pathiri)",
    image: "/groceries/13.png", // matches PDF SL 13
    prices: [
      { weight: "25g", price: "₹60" }, //
      { weight: "50g", price: "₹120" },
      { weight: "100g", price: "₹240" },
    ],
  },
  {
    id: "sp-10",
    category: "Spices",
    name: "Nutmeg (Jathikai)",
    image: "/groceries/13.png", // matches PDF SL 13
    prices: [
      { weight: "25g", price: "₹24" }, //
      { weight: "50g", price: "₹48" },
    ],
  },
  {
    id: "sp-11",
    category: "Spices",
    name: "Dry Ginger (Sukku)",
    image: "/groceries/13.png", // matches PDF SL 13
    prices: [
      { weight: "25g", price: "₹14" }, //
      { weight: "50g", price: "₹28" },
      { weight: "100g", price: "₹54" },
    ],
  },
  {
    id: "sp-12",
    category: "Spices",
    name: "Stone Flower (Kalpasi)",
    image: "/groceries/13.png", // matches PDF SL 13
    
    prices: [
      { weight: "25g", price: "₹31" }, //
    ]
  },
  {
    id: "sp-13",
    category: "Spices",
    name: "Star Anise (Annachi Poo)",
    image: "/groceries/13.png", // matches PDF SL 13
    
    prices: [
      { weight: "25g", price: "₹25" }, //
    ],
  },
  {
    id: "sp-14",
    category: "Spices",
    name: "Biryani Leaf",
    image: "/groceries/13.png", // matches PDF SL 13
    
    prices: [
      { weight: "25g", price: "₹35" }, //
    ],
  },
  {
    id: "sp-15",
    category: "Spices",
    name: "Cloves (Kirampu)",
    image: "/groceries/13.png", // matches PDF SL 13
    
    prices: [
      { weight: "25g", price: "₹35" }, //
    ],
  },
  {
    id: "sp-16",
    category: "Spices",
    name: "Marathi Moggu",
    image: "/groceries/13.png", // matches PDF SL 13
    
    prices: [
      { weight: "100g", price: "₹18" }, //
    ],
  },

  // ==========================================
  // 4. SWEETENERS (SL.NO 31-33)
  // ==========================================
  {
    id: "sw-1",
    category: "Sweeteners",
    name: "Sugar",
    image: "/groceries/13.png", // matches PDF SL 13
    
    prices: [
      { weight: "250g", price: "₹14" }, //
      { weight: "500g", price: "₹30" },
      { weight: "1kg", price: "₹60" },
    ],
  },
  {
    id: "sw-2",
    category: "Sweeteners",
    name: "Jaggery",
    image: "/groceries/13.png", // matches PDF SL 13
    
    prices: [
      { weight: "250g", price: "₹20" }, //
      { weight: "500g", price: "₹42" },
      { weight: "1kg", price: "₹75" },
    ],
  },
  {
    id: "sw-3",
    category: "Sweeteners",
    name: "Brown Sugar (Nattu Sarkkarai)",
    image: "/groceries/13.png", // matches PDF SL 13
    
    prices: [
      { weight: "500g", price: "₹45" }, //
      { weight: "1kg", price: "₹85" },
    ],
  },
];