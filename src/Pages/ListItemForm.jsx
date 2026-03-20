import React, { useState } from "react";
import { Upload, X, Plus, Check } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ListItemForm() {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "",
    available: true,
    type: [],
    buyMrp: "",
    buyOffer: "",
    rentMonthly: "",
    description: "",
    features: [""],
    images: [],
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "type") {
      const updatedTypes = checked
        ? [...formData.type, value]
        : formData.type.filter((t) => t !== value);
      setFormData({ ...formData, type: updatedTypes });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData({ ...formData, features: newFeatures });
  };

  const addFeature = () => {
    setFormData({ ...formData, features: [...formData.features, ""] });
  };

  const removeFeature = (index) => {
    const newFeatures = formData.features.filter((_, i) => i !== index);
    setFormData({ ...formData, features: newFeatures });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData({ ...formData, images: [file] });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    setFormData({ ...formData, images: [] });
  };

  const handleSubmit = async () => {
    const categoryLabelMappings = {
      "wheelchair": "Wheelchair",
      "bed": "Bed",
      "walker": "Walker",
      "cane": "Cane",
      "other": "Other"
    };
    
    const finalCategoryLabel = categoryLabelMappings[formData.category] || "Other";
    const finalTitle = formData.category === "other" ? formData.title : finalCategoryLabel;

    // Active Validation Feedback
    if (!formData.category) return alert("Validation Failed: Please select a Category.");
    if (formData.category === "other" && !formData.title.trim()) return alert("Validation Failed: Please enter a Product Name for your custom item.");
    if (formData.type.length === 0) return alert("Validation Failed: Please select at least one option under 'Available For' (Buy or Rent).");
    if (formData.type.includes("buy")) {
      if (!String(formData.buyMrp).trim()) return alert("Validation Failed: Please enter the MRP price.");
      if (!String(formData.buyOffer).trim()) return alert("Validation Failed: Please enter the Offer Price.");
    }
    if (formData.type.includes("rent")) {
      if (!String(formData.rentMonthly).trim()) return alert("Validation Failed: Please enter the Monthly Rent amount.");
    }
    if (!formData.description.trim()) return alert("Validation Failed: Please provide a Product Description.");
    
    if (!token) {
      return alert("You must be logged in to list an item.");
    }

    setIsSubmitting(true);

    const productData = {
      slug: finalTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-" + Date.now().toString().slice(-4),
      title: finalTitle,
      category: formData.category,
      categoryLabel: finalCategoryLabel,
      images: {
        primary: imagePreview || null,
      },
      available: formData.available,
      type: formData.type,
      pricing: {
        ...(formData.type.includes("buy") && {
          buy: {
            mrp: parseFloat(formData.buyMrp),
            offer: parseFloat(formData.buyOffer),
          },
        }),
        ...(formData.type.includes("rent") && {
          rent: {
            monthly: parseFloat(formData.rentMonthly),
          },
        }),
      },
      description: formData.description,
      features: formData.features.filter((f) => f.trim() !== ""),
      specifications: {
        Category: "Mobility Aid",
      },
    };

    try {
      const backendUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const res = await fetch(`${backendUrl}/api/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(productData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to list item");
      }

      alert("🎉 Item successfully listed in the Marketplace!");
      navigate("/admin"); // Optional: Navigate them somewhere else like their profile or admin panel
    } catch (err) {
      console.error(err);
      alert("Error listing item: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5F1E8" }}>
      {/* Hero */}
      <section className="bg-white py-12 px-6 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            List Your <span className="text-orange-500">Mobility Aid</span>
          </h1>
          <p className="text-lg text-gray-600">
            Share your mobility equipment with others who need it. Fill in the
            details below.
          </p>
        </div>
      </section>

      <div className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 border border-gray-200 space-y-8">
            {/* Basic Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Basic Information
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Item Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                  >
                    <option value="" disabled>Select a Category...</option>
                    <option value="wheelchair">Wheelchair</option>
                    <option value="bed">Hospital Bed</option>
                    <option value="walker">Walker</option>
                    <option value="cane">Cane / Crutch</option>
                    <option value="other">Other Mobility Aids</option>
                  </select>
                </div>

                {formData.category === 'other' && (
                  <div className="animate-fade-in">
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Custom Product Name *
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="e.g., Electric Stair Climber"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">
                    Availability Status
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="available"
                      checked={formData.available}
                      onChange={handleChange}
                      className="w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                    />
                    <span className="text-gray-900">
                      Item is currently available
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Listing Type & Pricing */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Listing Type & Pricing
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">
                    Available For *
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="type"
                        value="buy"
                        checked={formData.type.includes("buy")}
                        onChange={handleChange}
                        className="w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                      />
                      <span className="text-gray-900">Available to Buy</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="type"
                        value="rent"
                        checked={formData.type.includes("rent")}
                        onChange={handleChange}
                        className="w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                      />
                      <span className="text-gray-900">Available to Rent</span>
                    </label>
                  </div>
                </div>

                {formData.type.includes("buy") && (
                  <div className="grid md:grid-cols-2 gap-6 p-6 bg-orange-50 rounded-lg border border-orange-200">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        MRP (₹) *
                      </label>
                      <input
                        type="number"
                        name="buyMrp"
                        value={formData.buyMrp}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="15000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Offer Price (₹) *
                      </label>
                      <input
                        type="number"
                        name="buyOffer"
                        value={formData.buyOffer}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="12000"
                      />
                    </div>
                  </div>
                )}

                {formData.type.includes("rent") && (
                  <div className="p-6 bg-orange-50 rounded-lg border border-orange-200">
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Monthly Rent (₹) *
                    </label>
                    <input
                      type="number"
                      name="rentMonthly"
                      value={formData.rentMonthly}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="1000"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Product Details
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                    placeholder="Describe the product, its condition, and key benefits..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">
                    Key Features
                  </label>
                  <div className="space-y-3">
                    {formData.features.map((feature, index) => (
                      <div key={index} className="flex gap-3">
                        <input
                          type="text"
                          value={feature}
                          onChange={(e) =>
                            handleFeatureChange(index, e.target.value)
                          }
                          className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="e.g., Lightweight design"
                        />
                        {formData.features.length > 1 && (
                          <button
                            onClick={() => removeFeature(index)}
                            className="px-4 py-3 border border-gray-200 rounded-lg hover:border-red-500 hover:text-red-500 transition-colors"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      onClick={addFeature}
                      className="flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-lg shadow-md transition-all bg-orange-500 hover:bg-orange-600 hover:scale-105 text-white"
                    >
                      <Plus className="w-5 h-5" />
                      <span>Add Feature</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Upload */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Product Image
              </h2>

              {!imagePreview ? (
                <label className="block cursor-pointer w-64 h-64 mx-auto">
                  <div className="w-full h-full border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center text-center hover:border-orange-500 hover:bg-orange-50 transition-all">
                    <Upload className="w-10 h-10 text-gray-400 mb-3" />
                    <p className="text-gray-900 font-bold mb-1 text-sm">
                      Upload Image
                    </p>
                    <p className="text-xs text-gray-500">Square dimension</p>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              ) : (
                <div className="relative w-64 h-64 mx-auto group">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-xl border-2 border-orange-200 shadow-md"
                  />
                  <button
                    onClick={removeImage}
                    className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg scale-90 group-hover:scale-100"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Submit */}
            <div className="flex gap-4 pt-6 border-t border-gray-200">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`flex-1 flex items-center justify-center gap-2 font-semibold py-4 px-6 rounded-lg transition-all shadow-md ${
                  isSubmitting ? "bg-orange-400 cursor-not-allowed opacity-70" : "bg-orange-500 hover:bg-orange-600 hover:scale-[1.01]"
                } text-white`}
              >
                <Check className="w-5 h-5" />
                {isSubmitting ? "Listing Item..." : "List Item"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
