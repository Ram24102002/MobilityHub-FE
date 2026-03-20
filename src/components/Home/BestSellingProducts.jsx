import React, { useState, useEffect } from "react";
import Card2 from "../../assets/Util/Card2";

export default function BestSellingProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const backendUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
        const response = await fetch(`${backendUrl}/api/products`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const ownProducts = products.filter((p) => p.source === "own" && p.type.includes("buy"));
  const marketplaceProducts = products.filter((p) => p.source === "marketplace" && p.type.includes("buy"));

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

        {/* Loading / Error States */}
        {loading && <div className="text-center text-xl font-bold py-10">Loading products from Database...</div>}
        {error && <div className="text-center text-red-500 font-bold py-10">Error: {error}</div>}

        {/* Our Own Products Grid */}
        {!loading && !error && (
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-orange-500 inline-block pb-2">
              Our Own Products
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ownProducts.length > 0 ? (
                ownProducts.map((product) => (
                  <Card2 key={product._id || product.id || product.slug} product={product} />
                ))
              ) : (
                <p className="text-gray-500 italic">No own products available.</p>
              )}
            </div>
          </div>
        )}

        {/* Marketplace Products Grid */}
        {!loading && !error && (
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-orange-500 inline-block pb-2">
              Marketplace Products
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {marketplaceProducts.length > 0 ? (
                marketplaceProducts.map((product) => (
                  <Card2 key={product._id || product.id || product.slug} product={product} />
                ))
              ) : (
                <p className="text-gray-500 italic">No marketplace products available.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
