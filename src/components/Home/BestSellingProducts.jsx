import React from "react";
import wheelchair from "../../assets/Products/Wheelchair.png";
import Mobility_bed from "../../assets/Products/Mobility_bed.png";
import WalkingStick from "../../assets/Products/WalkingStick.png";
import walker from "../../assets/Products/walker.png";
import Card2 from "../../assets/Util/Card2";

export default function BestSellingProducts() {
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

  return (
    <div
      className="min-h-screen  bg-[#F5F1E8] py-16 px-4"
      id="BestSellingProducts"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-6xl font-black text-gray-900 mb-4 fredoka-big">
            Our Best-Selling
          </h1>
          <p>&</p>
          <h2 className="text-2xl md:text-6xl font-black text-gray-900 mb-4 fredoka-big">
            Frequently Rented Mobility Essentials
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            These top picks deliver exceptional performance for everyday use.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card2 key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
