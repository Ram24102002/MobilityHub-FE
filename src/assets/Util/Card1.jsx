import React from "react";
import { Search, MapPin, Calendar, Star, Plus } from "lucide-react";

function Card1({ listing }) {
  return (
    <div
      key={listing.id}
      className="border border-gray-200 rounded-lg overflow-hidden hover:border-gray-400 transition group  bg-white"
    >
      <div className="bg-gray-100 h-48"></div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-medium text-gray-900">{listing.title}</h3>
          {listing.verified && <span className="text-xs text-gray-500">✓</span>}
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
          <MapPin size={12} />
          <span>{listing.location}</span>
        </div>

        <div className="flex items-center gap-1 text-xs text-gray-700 mb-4">
          <Star size={12} fill="currentColor" />
          <span>{listing.rating}</span>
        </div>

        <div className="border-t border-gray-200 pt-4">
          {listing.type === "both" || listing.type === "rent" ? (
            <div className="mb-2 text-sm">
              <span className="text-gray-500">Rent </span>
              <span className="font-semibold text-gray-900">
                ${listing.price}/day
              </span>
            </div>
          ) : null}

          {listing.type === "both" || listing.type === "sell" ? (
            <div className="text-sm">
              <span className="text-gray-500">Buy </span>
              <span className="font-semibold text-gray-900">
                ${listing.salePrice}
              </span>
            </div>
          ) : null}
        </div>

        <button className="w-full mt-4 bg-gray-900 hover:bg-gray-800 text-white py-2.5 rounded-lg text-sm font-medium transition">
          View Details
        </button>
      </div>
    </div>
  );
}

export default Card1;
