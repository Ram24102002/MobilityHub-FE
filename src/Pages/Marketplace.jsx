import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import Card2 from "../assets/Util/Card2";
import MarketplaceHero from "../components/Marketplace/MarketplaceHero";

export default function Marketplace() {
  const [activeTab, setActiveTab] = useState("buy");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [dbProducts, setDbProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMarketplaceProducts();
  }, []);

  const fetchMarketplaceProducts = async () => {
    try {
      setIsLoading(true);
      const backendUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const res = await fetch(`${backendUrl}/api/products`);
      if (res.ok) {
        const data = await res.json();
        const marketplaceItems = data.filter(p => p.source === 'marketplace');
        setDbProducts(marketplaceItems);
      }
    } catch (err) {
      console.error("Failed to fetch marketplace products:", err);
    } finally {
      setIsLoading(false);
    }
  };

  /* CATEGORY FILTER CONFIG (UI) */
  const categories = [
    { id: "all", name: "All" },
    { id: "wheelchair", name: "Wheelchairs" },
    { id: "bed", name: "Beds" },
    { id: "walker", name: "Walkers" },
    { id: "cane", name: "Canes" },
  ];

  /* FILTER LOGIC (CORRECT & FINAL) */
  const filteredListings = dbProducts.filter((product) => {
    if (
      selectedCategory !== "all" &&
      product.category !== selectedCategory && 
      product.subCategory !== selectedCategory
    ) {
      return false;
    }

    if (!product.type || !product.type.includes(activeTab)) {
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
        {isLoading ? (
          <div className="text-center py-20 text-gray-500 font-medium">Loading marketplace listings...</div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredListings.map((product) => (
                <Card2 key={product._id || product.id} product={product} />
              ))}
            </div>

            {/* EMPTY STATE */}
            {filteredListings.length === 0 && (
              <div className="text-center text-gray-500 mt-16 py-10 bg-white rounded-2xl border border-gray-200">
                <p className="font-bold text-gray-900 text-xl mb-2">No listings found</p>
                <p>There are no marketplace items available for this category right now.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
