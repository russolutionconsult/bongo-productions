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
    subcategory: "Drum Sets",
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
    imageFit: "cover",
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
  {
    id: "9",
    name: "Subwoofer Speaker Stack",
    description: "High-output professional subwoofer stack designed for deep, punchy bass reinforcement in large venues and outdoor concerts. Engineered for maximum impact and clarity at extreme volume levels. Also available for bulk orders, tour packages, or institutional pricing — request a personalized quote.",
    price: 28500,
    rentalPrice: 1200,
    image: "/Subwoofer Speaker Stack.png",
    imageFit: "cover",
    category: "Live Sound",
    categoryLabel: "LIVE SOUND",
    subcategory: "Speakers",
    featured: true,
    specs: [
      "Dual 18\" High-Excursion Drivers",
      "4000W Peak / 2000W RMS Power Handling",
      "Frequency Response: 30Hz - 150Hz",
      "Maximum SPL: 138dB",
      "Tour-Grade Birch Plywood Construction",
      "Integrated Fly-Ware for Array Mounting"
    ]
  },
  {
    id: "10",
    name: "HDP-S Multipad 2-in-1",
    description: "Versatile 2-in-1 digital percussion multipad combining realistic drum sounds with expressive sampling capabilities. Ideal for live performances, studio sessions, and practice — offering drummers and percussionists unmatched creative flexibility. Also available for bulk orders, custom configurations, or institutional pricing — request a personalized quote.",
    price: 12500,
    rentalPrice: 600,
    image: "/HDP-S MULTIPAD 2-in1.png",
    imageFit: "cover",
    category: "Drum & Percussion",
    categoryLabel: "DRUM & PERCUSSION",
    subcategory: "Pads and Triggers",
    featured: true,
    specs: [
      "Multi-Zone Velocity-Sensitive Pads",
      "Built-in High-Quality Sound Module",
      "USB/MIDI Connectivity for DAW Integration",
      "Onboard Effects & Looper Function",
      "Lightweight & Portable Design",
      "Headphone Output for Silent Practice"
    ]
  },
  {
    id: "11",
    name: "XD-1080-KM_Black Sparkle.png",
    description: "Experience the perfect blend of style and performance with the XD-1080-KM in Black Sparkle. This professional electronic drum module delivers exceptional sound quality and responsive feel, making it ideal for both stage and studio. Also available for bulk orders or institutional pricing — request a personalized quote.",
    price: 15400,
    rentalPrice: 650,
    image: "/XD-1080-KM_Black Sparkle.png",
    imageFit: "contain",
    category: "Drum & Percussion",
    categoryLabel: "DRUM & PERCUSSION",
    subcategory: "Electronic Drums",
    featured: true,
    specs: [
      "Advanced Sound Modeling Engine",
      "Dynamic Multi-Zone Response",
      "Premium Black Sparkle Finish",
      "USB and MIDI Interface",
      "Preloaded with Professional Kits",
      "Custom Sample Import Support"
    ]
  },
  {
    id: "12",
    name: "XD-2000-KM_Brushed_Silver.png",
    description: "The XD-2000-KM in Brushed Silver is a powerhouse of electronic percussion technology. Featuring a sleek metallic finish and a massive library of high-fidelity percussion sounds, it's designed for the most demanding drummers. Also available for bulk orders or institutional pricing — request a personalized quote.",
    price: 18200,
    rentalPrice: 800,
    image: "/XD-2000-KM_Brushed_Silver.png",
    imageFit: "contain",
    category: "Drum & Percussion",
    categoryLabel: "DRUM & PERCUSSION",
    subcategory: "Electronic Drums",
    featured: true,
    specs: [
      "High-Performance Percussion Engine",
      "Low-Latency Sound Processing",
      "Stunning Brushed Silver Finish",
      "Comprehensive Loop and FX Section",
      "Expandable Sound Library",
      "Professional Touring Hardware Support"
    ]
  },
  {
    id: "13",
    name: "XD-2000B-KM_Natural.png",
    description: "The XD-2000B-KM Natural brings an organic aesthetic to the digital world. With its natural wood-inspired finish and cutting-edge sampling technology, it provides an authentic drumming experience that looks as good as it sounds. Also available for bulk orders or institutional pricing — request a personalized quote.",
    price: 18900,
    rentalPrice: 850,
    image: "/XD-2000B-KM_Natural.png",
    imageFit: "contain",
    category: "Drum & Percussion",
    categoryLabel: "DRUM & PERCUSSION",
    subcategory: "Electronic Drums",
    featured: true,
    specs: [
      "Next-Gen Natural Sound Synthesis",
      "Optimized Resonance Modeling",
      "Elegant Natural Finish",
      "Intuitive Interface with OLED Display",
      "Multi-Track Recording via USB",
      "Responsive Performance Pads"
    ]
  },
  {
    id: "14",
    name: "XD-2000C-KM_White.png",
    description: "The XD-2000C-KM in elegant White combines minimalist aesthetics with maximalist performance. Featuring the full XD-2000 sound engine, it delivers pristine acoustic and electronic percussion sounds in a striking visual package. Also available for bulk orders or institutional pricing — request a personalized quote.",
    price: 18500,
    rentalPrice: 800,
    image: "/XD-2000C-KM_White.png",
    imageFit: "contain",
    category: "Drum & Percussion",
    categoryLabel: "DRUM & PERCUSSION",
    subcategory: "Electronic Drums",
    featured: true,
    specs: [
      "High-Clarity Percussion Engine",
      "Dynamic Mesh Head Response",
      "Elegant Arctic White Finish",
      "Built-in Performance Recorder",
      "Stereo Audio Inputs/Outputs",
      "Onboard Percussion Mix Controls"
    ]
  },
  {
    id: "15",
    name: "XD-2000F-KM_Matte Black.png",
    description: "Stealthy, powerful, and professional — the XD-2000F-KM in Matte Black is the ultimate stage companion. Its anti-glare finish is perfect for live performances under bright lights, while its internal processing ensures every strike is captured with zero latency. Also available for bulk orders or institutional pricing — request a personalized quote.",
    price: 18700,
    rentalPrice: 825,
    image: "/XD-2000F-KM_Matte Black.png",
    imageFit: "contain",
    category: "Drum & Percussion",
    categoryLabel: "DRUM & PERCUSSION",
    subcategory: "Electronic Drums",
    featured: true,
    specs: [
      "Professional Matte Black Finish",
      "Zero-Latency Sound Engine",
      "Optimized for High-Speed Playing",
      "8 Dual-Zone Performance Pads",
      "Advanced EQ and Reverb Engine",
      "Rugged Stage-Ready Construction"
    ]
  },
  {
    id: "16",
    name: "XD-3000-KM_Black_Wood.png",
    description: "The flagship XD-3000-KM in Black Wood represents the pinnacle of electronic drumming. With an expanded sample library, enhanced acoustic modeling, and a premium wood-grain finish, it provides the most authentic drumming experience available today. Also available for flagship installations or institutional pricing — request a personalized quote.",
    price: 24500,
    rentalPrice: 1100,
    image: "/XD-3000-KM_Black_Wood.png",
    imageFit: "contain",
    category: "Drum & Percussion",
    categoryLabel: "DRUM & PERCUSSION",
    subcategory: "Electronic Drums",
    featured: true,
    specs: [
      "Flagship 3000-Series Sound Engine",
      "High-Resolution 24-bit Audio",
      "Premium Black Wood Grain Finish",
      "Multi-Track USB Audio Interface",
      "Advanced Positional Sensing",
      "Full Expansion Support for Extra Pads"
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

