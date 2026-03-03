export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  rentalPrice: number;
  image: string;
  category: string;
  categoryLabel: string;
  featured: boolean;
  specs?: string[];
  quoteOnly?: boolean;
}

export const products: Product[] = [
  {
    id: "7",
    name: "StageCraft Pro Drum Kit",
    description: "Premium professional-grade drum kit engineered for concert hall acoustics and high-performance recording sessions.",
    price: 38400,
    rentalPrice: 1500,
    image: "/StageCraft Pro Drum Kit.png",
    category: "Drums & Percussion",
    categoryLabel: "DRUMS & PERCUSSION",
    featured: true,
    specs: [
      "7-Piece Professional Shell Pack",
      "North American Maple Shells (7-ply)",
      "Chrome Plated Die-Cast Hoops",
      "Low-Mass Suspension Mount System",
      "High-Gloss Lacquer Finish",
      "Matching 14\" x 6.5\" Snare Drum included"
    ]
  },
  {
    id: "8",
    name: "StageCraft Pro Drum Kit",
    description: "Premium professional-grade drum kit engineered for concert hall acoustics and high-performance recording sessions. Request a personalized quote for bulk orders, custom configurations, or institutional pricing.",
    price: 38400,
    rentalPrice: 1500,
    image: "/StageCraft Pro Drum Kit.png",
    category: "Drums & Percussion",
    categoryLabel: "DRUMS & PERCUSSION",
    featured: true,
    specs: [
      "7-Piece Professional Shell Pack",
      "North American Maple Shells (7-ply)",
      "Chrome Plated Die-Cast Hoops",
      "Low-Mass Suspension Mount System",
      "High-Gloss Lacquer Finish",
      "Matching 14\" x 6.5\" Snare Drum included"
    ],
    quoteOnly: true,
  },
];

export const categories = ["All", "Drums & Percussion"];
