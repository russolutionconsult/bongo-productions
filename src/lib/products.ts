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
}

export const products: Product[] = [
  {
    id: "1",
    name: "Stratocaster Electric Guitar",
    description: "Professional-grade electric guitar with rich, warm tones and exceptional playability.",
    price: 15600,
    rentalPrice: 540,
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&auto=format&fit=crop&q=80",
    category: "Guitars",
    categoryLabel: "GUITARS",
    featured: true,
  },
  {
    id: "2",
    name: "Pro Series Drum Kit",
    description: "Complete 5-piece drum kit with cymbals, hardware, and premium drumheads.",
    price: 30000,
    rentalPrice: 1020,
    image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=600&auto=format&fit=crop&q=80",
    category: "Drums & Percussion",
    categoryLabel: "DRUMS & PERCUSSION",
    featured: true,
  },
  {
    id: "3",
    name: "Stage Keyboard 88-Key",
    description: "Weighted 88-key keyboard with authentic piano feel and versatile sound library.",
    price: 22800,
    rentalPrice: 720,
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&auto=format&fit=crop&q=80",
    category: "Keyboards & Pianos",
    categoryLabel: "KEYBOARDS & PIANOS",
    featured: true,
  },
  {
    id: "4",
    name: "Tenor Saxophone",
    description: "Professional tenor saxophone with exceptional intonation and rich tone.",
    price: 26400,
    rentalPrice: 900,
    image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=600&auto=format&fit=crop&q=80",
    category: "Wind & Brass",
    categoryLabel: "WIND & BRASS",
    featured: true,
  },
  {
    id: "5",
    name: "Concert Violin",
    description: "Hand-crafted concert violin with warm, resonant tone and superior projection.",
    price: 10800,
    rentalPrice: 360,
    image: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=600&auto=format&fit=crop&q=80",
    category: "Strings",
    categoryLabel: "STRINGS",
    featured: false,
  },
  {
    id: "6",
    name: "Precision Bass Guitar",
    description: "Classic bass guitar delivering deep, punchy low-end and smooth playability.",
    price: 12600,
    rentalPrice: 480,
    image: "https://images.unsplash.com/photo-1558098329-a11cff621064?w=600&auto=format&fit=crop&q=80",
    category: "Guitars",
    categoryLabel: "GUITARS",
    featured: false,
  },
];

export const categories = ["All", "Guitars", "Drums & Percussion", "Keyboards & Pianos", "Wind & Brass", "Strings"];
