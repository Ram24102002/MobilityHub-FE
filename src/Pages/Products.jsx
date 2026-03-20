import React from "react";
import Card2 from "../assets/Util/Card2";
import { products } from "../data/products";

export default function Products() {

  return (
    <div
      className="min-h-screen  bg-[#F5F1E8] py-16 px-4"
      id="BestSellingProducts"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 fredoka-big">
            Products
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore Our Products that you can Rent or Buy
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
