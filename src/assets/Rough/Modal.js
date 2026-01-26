const products = [
  {
    id: 1,
    slug: "wheelchair",
    title: "Wheelchair",

    category: "mobility-aid",
    categoryLabel: "Mobility Aid",

    images: {
      primary: wheelchair,
    },

    available: true,

    type: ["buy", "rent"],

    pricing: {
      buy: {
        mrp: 15000,
        offer: 12000,
      },
      rent: {
        monthly: 1000,
      },
    },

    description:
      "Reliable and comfortable wheelchair designed for daily mobility support.",

    features: [
      "Lightweight and durable frame",
      "Comfortable seating",
      "Easy maneuverability",
    ],

    specifications: {
      Category: "Mobility Aid",
    },
  },

  {
    id: 2,
    slug: "mobility-bed",
    title: "Mobility Bed",

    category: "mobility-aid",
    categoryLabel: "Mobility Aid",

    images: {
      primary: Mobility_bed,
    },

    available: false,

    type: ["buy"],

    pricing: {
      buy: {
        mrp: 78550,
        offer: 72550,
      },
    },

    description:
      "Hospital-grade mobility bed with adjustable positions for patient comfort.",

    features: [
      "Adjustable height and angles",
      "Strong metal frame",
      "Suitable for long-term care",
    ],

    specifications: {
      Category: "Mobility Aid",
    },
  },

  {
    id: 3,
    slug: "walking-stick",
    title: "Walking Stick",

    category: "mobility-aid",
    categoryLabel: "Mobility Aid",

    images: {
      primary: WalkingStick,
    },

    available: true,

    type: ["buy", "rent"],

    pricing: {
      buy: {
        mrp: 1999.85,
        offer: 1799.85,
      },
      rent: {
        monthly: 300,
      },
    },

    description:
      "Compact and sturdy walking stick for everyday balance support.",

    features: ["Lightweight design", "Comfortable grip", "Anti-slip tip"],

    specifications: {
      Category: "Mobility Aid",
    },
  },

  {
    id: 4,
    slug: "walker",
    title: "Walker",

    category: "mobility-aid",
    categoryLabel: "Mobility Aid",

    images: {
      primary: walker,
    },

    available: true,

    type: ["rent"],

    pricing: {
      rent: {
        monthly: 500,
      },
    },

    description:
      "Stable walker providing enhanced balance and support for mobility.",

    features: ["Foldable frame", "Height adjustable", "Non-slip rubber tips"],

    specifications: {
      Category: "Mobility Aid",
    },
  },
];
