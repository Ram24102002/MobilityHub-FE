import React, { useState } from 'react';
import { useParams, useSearchParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { formatPrice } from '../assets/Util/formatPrice';

export default function Checkout() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type') || 'buy';
  const navigate = useNavigate();

  const product = products.find(p => p.id === parseInt(id));

  // Form states
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zip: ''
  });

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <Link to="/products" className="text-orange-500 hover:text-orange-600 font-semibold">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const price = type === 'buy' ? product.pricing.buy.offer : product.pricing.rent.monthly;
  const shipping = type === 'buy' ? 500 : 200; // Mock shipping costs
  const total = price + shipping;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    alert(`Checkout successful for ${product.title}! (Mock)`);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Form */}
        <div className="lg:col-span-7 xl:col-span-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Checkout Details</h2>
            
            <form onSubmit={handleCheckout} className="space-y-8">
              {/* Personal Info */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input required name="firstName" value={formData.firstName} onChange={handleInputChange} type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input required name="lastName" value={formData.lastName} onChange={handleInputChange} type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:outline-none" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:outline-none" />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Shipping Address</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                    <input required name="address" value={formData.address} onChange={handleInputChange} type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:outline-none" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                      <input required name="city" value={formData.city} onChange={handleInputChange} type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">ZIP / Postal Code</label>
                      <input required name="zip" value={formData.zip} onChange={handleInputChange} type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-orange-500 focus:outline-none" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl text-lg transition-colors shadow-lg">
                  Proceed to Payment – {formatPrice(total)}
                  {type === 'rent' && " + Monthly"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-5 xl:col-span-4 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:sticky lg:top-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
            
            <div className="flex gap-4 mb-6 border-b border-gray-100 pb-6">
              <div className="w-24 h-24 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0">
                <img src={product.images.primary} alt={product.title} className="w-full h-full object-contain p-2" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="bg-gray-100 text-xs font-semibold px-2 py-1 rounded text-gray-600 uppercase tracking-wider mb-2 self-start inline-block">
                  {type === 'buy' ? 'Purchase' : 'Rental'}
                </span>
                <h3 className="font-bold text-gray-900 leading-tight">{product.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{product.categoryLabel}</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal {type === 'rent' ? '(First Month)' : ''}</span>
                <span className="font-medium text-gray-900">{formatPrice(price)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Estimated Shipping</span>
                <span className="font-medium text-gray-900">{formatPrice(shipping)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Taxes</span>
                <span className="font-medium text-gray-900">Calculated at checkout</span>
              </div>
            </div>

            <div className="flex justify-between items-center border-t border-gray-200 pt-6 mt-6">
              <span className="text-xl font-bold text-gray-900">Total Due Today</span>
              <div className="text-right">
                <span className="text-2xl font-black text-orange-500">{formatPrice(total)}</span>
              </div>
            </div>
            
            {type === 'rent' && (
              <div className="mt-4 p-4 bg-orange-50 rounded-lg border border-orange-100">
                <p className="text-sm font-semibold text-orange-800 flex justify-between">
                  <span>Recurring Monthly:</span>
                  <span>{formatPrice(price)}</span>
                </p>
              </div>
            )}

            <p className="text-xs text-center text-gray-400 mt-6 pt-6 border-t border-gray-100">
              <span className="inline-block mb-2 text-gray-500 font-medium">Secure Checkout</span>
              <br />
              All transactions are secure and encrypted.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
