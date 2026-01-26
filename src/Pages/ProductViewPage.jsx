import React, { useState } from "react";
import { formatPrice } from "../assets/Util/formatPrice";

// Mock product data (FINAL MODEL)
const productData = {
  id: 1,
  slug: "ergonomic-office-chair",
  title: "Modern Ergonomic Office Chair",

  category: "furniture",
  categoryLabel: "Furniture",

  images: {
    primary:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&h=600&fit=crop",
  },

  available: true,

  type: ["buy", "rent"],

  pricing: {
    buy: {
      mrp: 45000,
      offer: 32000,
    },
    rent: {
      monthly: 2500,
    },
  },

  description:
    "Experience ultimate comfort with our premium ergonomic office chair. Designed for long hours of work, featuring adjustable height, lumbar support, and breathable mesh fabric.",

  features: [
    "360-degree swivel rotation",
    "Adjustable armrests and seat height",
    "Premium mesh backrest for breathability",
    "Heavy-duty nylon base with smooth-rolling casters",
    "Weight capacity: 120 kg",
  ],

  specifications: {
    Material: "Mesh & Steel Frame",
    Dimensions: "65 × 65 × 120 cm",
    Weight: "15 kg",
    Color: "Black",
    Warranty: "2 Years",
  },
};

function ProductViewPage() {
  const product = productData;

  const hasBuy = product.type?.includes("buy");
  const hasRent = product.type?.includes("rent");

  const [selectedOption, setSelectedOption] = useState(hasBuy ? "buy" : "rent");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button className="text-gray-600 hover:text-gray-900 font-medium">
            ← Back to Products
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT: Image */}
          <div>
            {!product.available && (
              <div className="bg-gray-900 text-white text-sm font-semibold px-4 py-2 rounded-full inline-block mb-4">
                Currently Unavailable
              </div>
            )}

            <div className="bg-white rounded-2xl shadow-md p-6">
              <img
                src={product.images.primary}
                alt={product.title}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* RIGHT: Details */}
          <div className="space-y-6">
            {/* Title */}
            <div>
              <p className="text-orange-500 font-bold text-sm tracking-wide mb-2">
                {product.categoryLabel}
              </p>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Buy / Rent Tabs */}
            <div className="bg-white rounded-2xl p-6 shadow-md space-y-4">
              <div className="flex gap-4">
                <button
                  disabled={!hasBuy}
                  onClick={() => setSelectedOption("buy")}
                  className={`flex-1 py-3 rounded-lg font-semibold transition-all
                    ${
                      selectedOption === "buy"
                        ? "bg-orange-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }
                    ${!hasBuy && "opacity-50 cursor-not-allowed"}
                  `}
                >
                  Buy
                </button>

                <button
                  disabled={!hasRent}
                  onClick={() => setSelectedOption("rent")}
                  className={`flex-1 py-3 rounded-lg font-semibold transition-all
                    ${
                      selectedOption === "rent"
                        ? "bg-orange-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }
                    ${!hasRent && "opacity-50 cursor-not-allowed"}
                  `}
                >
                  Rent
                </button>
              </div>

              {/* Pricing */}
              {selectedOption === "buy" ? (
                hasBuy ? (
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-bold text-gray-900">
                        {formatPrice(product.pricing.buy.offer)}
                      </span>
                      <span className="text-lg text-gray-400 line-through">
                        {formatPrice(product.pricing.buy.mrp)}
                      </span>
                      <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                        {Math.round(
                          ((product.pricing.buy.mrp -
                            product.pricing.buy.offer) /
                            product.pricing.buy.mrp) *
                            100,
                        )}
                        % OFF
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      One-time payment
                    </p>
                  </div>
                ) : (
                  <p className="text-gray-400 font-medium">Buy: NA</p>
                )
              ) : hasRent ? (
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-gray-900">
                      {formatPrice(product.pricing.rent.monthly)}
                    </span>
                    <span className="text-gray-600">/ month</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Flexible monthly rental
                  </p>
                </div>
              ) : (
                <p className="text-gray-400 font-medium">Rent: NA</p>
              )}
            </div>

            {/* CTA */}
            <div className="space-y-3">
              <button
                disabled={!product.available}
                className={`w-full font-bold py-4 rounded-lg text-lg shadow-md transition-all
                  ${
                    product.available
                      ? "bg-orange-500 hover:bg-orange-600 text-white"
                      : "bg-gray-300 text-gray-600 cursor-not-allowed"
                  }
                `}
              >
                {product.available
                  ? selectedOption === "buy"
                    ? "Add to Cart – Buy"
                    : "Add to Cart – Rent"
                  : "Currently Unavailable"}
              </button>

              {product.available && (
                <button className="w-full font-semibold py-4 rounded-lg border-2 border-orange-500 text-orange-500 hover:bg-orange-50">
                  Send Message to Seller
                </button>
              )}
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="font-bold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex gap-2 text-gray-700">
                    <span className="text-orange-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="font-bold text-gray-900 mb-4">Specifications</h3>
              <dl className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b pb-2">
                    <dt className="text-gray-600">{key}</dt>
                    <dd className="text-gray-900">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductViewPage;
