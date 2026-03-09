export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  rentalPrice: number;
  image: string;
  imageFit?: "cover" | "contain";
  category: string;
  categoryLabel: string;
  featured: boolean;
  specs?: string[];
  subcategory?: string;
}

export const products: Product[] = [
  {
    id: "7",
    name: "StageCraft Pro Drum Kit",
    description: "Premium professional-grade drum kit engineered for concert hall acoustics and high-performance recording sessions. Also available for bulk orders, custom configurations, or institutional pricing — request a personalized quote.",
    price: 38400,
    rentalPrice: 1500,
    image: "/StageCraft Pro Drum Kit.png",
    imageFit: "cover",
    category: "Drum & Percussion",
    categoryLabel: "DRUM & PERCUSSION",
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
    name: "PFX 4CH Audio Professional Amplifier",
    description: "Professional high-performance 4-channel power amplifier engineered for crystal clear audio reproduction in concert venues, churches, and outdoor events. Features advanced protection circuitry and efficient cooling for sustained high-output performance. Also available for bulk orders, custom installations, or institutional pricing — request a personalized quote.",
    price: 18500,
    rentalPrice: 800,
    image: "/PFX 4CH Audio Professional Amplifier.png",
    imageFit: "contain",
    category: "Live Sound",
    categoryLabel: "LIVE SOUND",
    subcategory: "Amplifiers",
    featured: true,
    specs: [
      "4-Channel Class D Power Amplification",
      "4 x 1500 Watts @ 8 Ohms Output",
      "Advanced Low-Noise Cooling System",
      "Comprehensive Circuit Protection (Short, Heat, Clipping)",
      "Balanced XLR Inputs & Speakon Outputs",
      "Rack-Mountable 2U Chassis Design"
    ]
  },
];

export const categories = [
  "All",
  "Studio & Recording",
  "Live Sound",
  "Keyboard",
  "Bass",
  "Guitar",
  "Drum & Percussion",
  "Brass & Winds",
  "DJ & Karaoke",
];

// Subcategories for each parent category
export const subcategories: Record<string, string[]> = {
  "Studio & Recording": [
    "Audio Interfaces",
    "Condenser Microphones",
    "Headphones",
    "Studio Monitors",
    "MIDI Controllers",
    "MIDI Interfaces",
    "Recording Accessories",
  ],
  "Live Sound": [
    "Microphones",
    "Mixers",
    "Speakers",
    "Amplifiers",
    "PA Systems",
    "Personal Monitoring",
    "Sound Processors",
    "Racks & Cases",
    "Live Sound Accessories",
  ],
  "Keyboard": [
    "Digital Pianos",
    "Arranger Keyboards",
    "Keyboard Workstations",
    "Midi Controllers",
    "Acoustic Pianos",
    "Keyboard Amplification",
    "Keyboard Accessories",
  ],
  "Bass": [
    "Bass Guitars",
    "Bass Amplification",
    "Bass Accessories",
  ],
  "Guitar": [
    "Acoustic Semi Acoustic",
    "Electric Guitars",
    "Guitar Amplification",
    "Guitar Effects",
    "Guitar Accessories",
  ],
  "Drum & Percussion": [
    "Drum Sets",
    "Percussion & Accessories",
    "Cymbals & Accessories",
    "Sticks & Accessories",
    "Drum Accessories",
    "Drum Cages",
    "Electronic Drums",
    "Pads and Triggers",
  ],
  "Brass & Winds": [
    "Trumpets",
    "Trombones",
    "Saxophones",
    "Flutes",
    "Clarinets",
    "Brass & Wind Accessories",
  ],
  "DJ & Karaoke": [
    "Controllers",
    "Mixers",
    "DJ Headphones",
    "Accessories",
  ],
};

