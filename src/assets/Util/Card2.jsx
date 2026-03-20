import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "./formatPrice";

function Card2({ product }) {
  const isAvailable = product.available;

  const hasBuy = product.type?.includes("buy");
  const hasRent = product.type?.includes("rent");

  return (
    <div className="relative bg-gray-50 rounded-2xl overflow-hidden shadow-md transition-shadow h-full flex flex-col">
      {/* Unavailable Badge */}
      {!isAvailable && (
        <div className="absolute top-4 left-4 z-10 bg-gray-900 text-white text-xs font-semibold px-3 py-1 rounded-full">
          Currently Unavailable
        </div>
      )}

      {/* Product Image */}
      <div className="bg-white p-6">
        <img
          src={product.images.primary}
          alt={product.title}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      {/* Product Info */}
      <div className="p-6 text-center flex flex-col flex-grow">
        <p className="text-orange-500 font-bold text-sm mb-2 tracking-wide">
          {product.categoryLabel}
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {product.title}
        </h3>

        {/* Pricing Block */}
        <div className="space-y-2 mb-6">
          {/* Buy */}
          <p className="text-sm">
            <span className="font-medium">Buy:</span>{" "}
            {hasBuy ? (
              <>
                {formatPrice(product.pricing.buy.offer)}{" "}
                <span className="text-xs text-gray-500">
                  <del>{formatPrice(product.pricing.buy.mrp)}</del>
                </span>
              </>
            ) : (
              <span className="text-gray-400">NA</span>
            )}
          </p>

          {/* Rent */}
          <p className="text-sm">
            <span className="font-medium">Rent:</span>{" "}
            {hasRent ? (
              <>
                {formatPrice(product.pricing.rent.monthly)}
                <span className="text-gray-500 text-xs"> / Month</span>
              </>
            ) : (
              <span className="text-gray-400">NA</span>
            )}
          </p>
        </div>

        {/* CTA pinned to bottom */}
        {isAvailable ? (
          <Link to={`/product/${product._id || product.id}`} className="mt-auto block w-full">
            <button
              className="w-full font-bold py-3 px-6 rounded-lg text-lg shadow-md transition-all bg-orange-500 hover:bg-orange-600 hover:scale-[1.02] text-white"
            >
              View Product
            </button>
          </Link>
        ) : (
          <button
            disabled
            className="mt-auto w-full font-bold py-3 px-6 rounded-lg text-lg shadow-md transition-all bg-gray-300 text-gray-600 cursor-not-allowed"
          >
            Unavailable
          </button>
        )}
      </div>
    </div>
  );
}

export default Card2;
