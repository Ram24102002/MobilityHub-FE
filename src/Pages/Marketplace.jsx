import React, { useState } from "react";
import { Search } from "lucide-react";
import Card2 from "../assets/Util/Card2";
import wheelchair from "../assets/Products/Wheelchair.png";
import Mobility_bed from "../assets/Products/Mobility_bed.png";
import WalkingStick from "../assets/Products/WalkingStick.png";
import walker from "../assets/Products/walker.png";
import MarketplaceHero from "../components/Marketplace/MarketplaceHero";

export default function Marketplace() {
  const [activeTab, setActiveTab] = useState("buy");
  const [selectedCategory, setSelectedCategory] = useState("all");

  /* CATEGORY FILTER CONFIG (UI) */
  const categories = [
    { id: "all", name: "All" },
    { id: "wheelchair", name: "Wheelchairs" },
    { id: "bed", name: "Beds" },
    { id: "walker", name: "Walkers" },
    { id: "cane", name: "Canes" },
  ];

  /* PRODUCTS (FINAL MODEL + subCategory ADDED) */
  const products = [
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

      description:
        "Reliable and comfortable wheelchair designed for daily mobility support.",
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

      description:
        "Hospital-grade mobility bed with adjustable positions for patient comfort.",
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

      description:
        "Compact and sturdy walking stick for everyday balance support.",
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

      description:
        "Stable walker providing enhanced balance and support for mobility.",
    },
  ];

  /* FILTER LOGIC (CORRECT & FINAL) */
  const filteredListings = products.filter((product) => {
    if (
      selectedCategory !== "all" &&
      product.subCategory !== selectedCategory
    ) {
      return false;
    }

    if (!product.type.includes(activeTab)) {
      return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* HERO */}
      <MarketplaceHero />

      {/* MARKETPLACE BODY */}
      <div className="max-w-6xl mx-auto px-6 py-12" id="MarketPlaceBody">
        {/* BUY / RENT TABS */}
        <div className="flex gap-1 mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("buy")}
            className={`px-4 py-3 text-sm font-medium transition ${
              activeTab === "buy"
                ? "text-gray-900 border-b-2 border-gray-900"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Buy
          </button>

          <button
            onClick={() => setActiveTab("rent")}
            className={`px-4 py-3 text-sm font-medium transition ${
              activeTab === "rent"
                ? "text-gray-900 border-b-2 border-gray-900"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Rent
          </button>
        </div>

        {/* SEARCH (UI only for now) */}
        {/* <div className="mb-8">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search mobility aids..."
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none text-sm"
            />
          </div>
        </div> */}

        {/* CATEGORY FILTERS */}
        <div className="flex gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition ${
                selectedCategory === cat.id
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* PRODUCT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((product) => (
            <Card2 key={product.id} product={product} />
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredListings.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No products found for this category.
          </p>
        )}
      </div>
    </div>
  );
}
