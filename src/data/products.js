import wheelchair from "../assets/Products/Wheelchair.png";
import Mobility_bed from "../assets/Products/Mobility_bed.png";
import WalkingStick from "../assets/Products/WalkingStick.png";
import walker from "../assets/Products/walker.png";

export const products = [
  {
    id: 1,
    slug: "wheelchair",
    title: "Wheelchair",
    category: "mobility-aid",
    subCategory: "wheelchair",
    categoryLabel: "Mobility Aid",
    images: { primary: wheelchair },
    available: true,
    type: ["buy", "rent"],
    pricing: {
      buy: { mrp: 15000, offer: 12000 },
      rent: { monthly: 1000 },
    },
    description: "Reliable and comfortable wheelchair designed for daily mobility support.",
    features: [
      "Lightweight and durable frame",
      "Comfortable seating",
      "Easy maneuverability",
    ],
    specifications: {
      Category: "Mobility Aid",
      Weight: "14 kg",
      Material: "Aluminum",
    },
  },
  {
    id: 2,
    slug: "mobility-bed",
    title: "Mobility Bed",
    category: "mobility-aid",
    subCategory: "bed",
    categoryLabel: "Mobility Aid",
    images: { primary: Mobility_bed },
    available: false,
    type: ["buy"],
    pricing: {
      buy: { mrp: 78550, offer: 72550 },
    },
    description: "Hospital-grade mobility bed with adjustable positions for patient comfort.",
    features: [
      "Adjustable height and angles",
      "Strong metal frame",
      "Suitable for long-term care",
    ],
    specifications: {
      Category: "Mobility Aid",
      Dimensions: "200 x 90 cm",
      Material: "Steel",
    },
  },
  {
    id: 3,
    slug: "walking-stick",
    title: "Walking Stick",
    category: "mobility-aid",
    subCategory: "cane",
    categoryLabel: "Mobility Aid",
    images: { primary: WalkingStick },
    available: true,
    type: ["buy", "rent"],
    pricing: {
      buy: { mrp: 1999.85, offer: 1799.85 },
      rent: { monthly: 300 },
    },
    description: "Compact and sturdy walking stick for everyday balance support.",
    features: [
      "Lightweight design",
      "Comfortable grip",
      "Anti-slip tip",
    ],
    specifications: {
      Category: "Mobility Aid",
      Height: "Adjustable 75-95 cm",
      Material: "Wood/Aluminum",
    },
  },
  {
    id: 4,
    slug: "walker",
    title: "Walker",
    category: "mobility-aid",
    subCategory: "walker",
    categoryLabel: "Mobility Aid",
    images: { primary: walker },
    available: true,
    type: ["rent"],
    pricing: {
      rent: { monthly: 500 },
    },
    description: "Stable walker providing enhanced balance and support for mobility.",
    features: [
      "Foldable frame",
      "Height adjustable",
      "Non-slip rubber tips",
    ],
    specifications: {
      Category: "Mobility Aid",
      WeightCapacity: "100 kg",
      Material: "Aluminum alloy",
    },
  },
];
