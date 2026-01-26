import React, { useState } from "react";
import { Upload, X, Plus, Check } from "lucide-react";

export default function ListItemForm() {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "mobility-aid",
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

  const handleSubmit = () => {
    const productData = {
      id: Date.now(),
      slug: formData.slug || formData.title.toLowerCase().replace(/\s+/g, "-"),
      title: formData.title,
      category: formData.category,
      categoryLabel: "Mobility Aid",
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

    console.log("Product Data:", JSON.stringify(productData, null, 2));
    alert("Item listed successfully! Check console for product data.");
  };

  const isFormValid =
    formData.title &&
    formData.type.length > 0 &&
    formData.description &&
    ((formData.type.includes("buy") && formData.buyMrp && formData.buyOffer) ||
      (formData.type.includes("rent") && formData.rentMonthly));

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
                    Product Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g., Wheelchair"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Slug (URL-friendly name)
                  </label>
                  <input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g., wheelchair (auto-generated if left empty)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                  >
                    <option value="mobility-aid">Mobility Aid</option>
                  </select>
                </div>

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
                      className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-lg hover:border-orange-500 hover:text-orange-500 transition-colors"
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
                <label className="block cursor-pointer">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-orange-500 transition-colors">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-900 font-medium mb-1">
                      Click to upload image
                    </p>
                    <p className="text-sm text-gray-600">PNG, JPG up to 5MB</p>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              ) : (
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-64 object-cover rounded-lg border border-gray-200"
                  />
                  <button
                    onClick={removeImage}
                    className="absolute top-3 right-3 p-2 bg-white rounded-full border border-gray-200 hover:border-red-500 hover:text-red-500 transition-colors"
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
                disabled={!isFormValid}
                className={`flex-1 flex items-center justify-center gap-2 font-semibold py-4 px-6 rounded-lg transition-colors ${
                  isFormValid
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                <Check className="w-5 h-5" />
                List Item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
