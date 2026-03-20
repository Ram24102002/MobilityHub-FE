import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { LogOut, Package, User, Store } from 'lucide-react';

export default function Profile() {
  const { user, token, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('purchases');
  const [myListings, setMyListings] = useState([]);
  const [loadingListings, setLoadingListings] = useState(false);

  // If somehow accessed without being logged in
  if (!user) {
    return (
      <div className="min-h-screen bg-[#F5F1E8] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">You are not logged in</h2>
        <Link to="/login">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold">Go to Login</button>
        </Link>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  useEffect(() => {
    if (activeTab === 'listings' && myListings.length === 0) {
      fetchMyListings();
    }
  }, [activeTab]);

  const fetchMyListings = async () => {
    try {
      setLoadingListings(true);
      const backendUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const res = await fetch(`${backendUrl}/api/user/listings`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setMyListings(data);
      }
    } catch (err) {
      console.error("Failed to fetch listings", err);
    } finally {
      setLoadingListings(false);
    }
  };

  // Mock history for layout purposes
  const purchaseHistory = [
    { id: 'ORD-84920', date: 'Oct 12, 2025', item: 'Standard Wheelchair', amount: '₹12,000', status: 'Delivered' }
  ];

  const rentalHistory = [
    { id: 'RNT-10294', date: 'Nov 05, 2025', item: 'Basic Walker', amount: '₹500 / month', status: 'Active' }
  ];

  return (
    <div className="min-h-screen bg-[#F5F1E8] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header Profile Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-slate-900 h-32 relative">
            <div className="absolute -bottom-12 left-8">
              {user.picture ? (
                <img src={user.picture} alt="Profile" referrerPolicy="no-referrer" className="w-24 h-24 rounded-full border-4 border-white shadow-md bg-white object-cover" />
              ) : (
                <div className="w-24 h-24 rounded-full border-4 border-white shadow-md bg-orange-500 text-white flex justify-center items-center text-4xl font-bold">
                  {user.name.charAt(0)}
                </div>
              )}
            </div>
          </div>
          <div className="pt-16 pb-8 px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-gray-500 flex items-center gap-2 mt-1">
                <User className="w-4 h-4" /> {user.email}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              {user.role === 'admin' && (
                <Link to="/admin">
                  <button className="w-full sm:w-auto bg-slate-900 text-white hover:bg-slate-800 font-bold py-2.5 px-6 rounded-lg transition-colors border border-slate-700 shadow-md">
                    Admin Dashboard
                  </button>
                </Link>
              )}
              <button 
                onClick={handleLogout}
                className="w-full sm:w-auto flex justify-center items-center gap-2 bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 font-bold py-2.5 px-6 rounded-lg transition-colors border border-red-200"
              >
                <LogOut className="w-5 h-5" />
                Sign Out
              </button>
            </div>
          </div>
        </div>

        {/* Tabs and Content Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          
          <div className="flex border-b border-gray-200 bg-gray-50">
            <button 
              onClick={() => setActiveTab('purchases')}
              className={`flex-1 py-4 px-6 text-center font-bold text-lg transition-colors flex justify-center items-center gap-2 ${
                activeTab === 'purchases' 
                ? 'bg-white text-orange-600 border-b-2 border-orange-500' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Package className="w-5 h-5" /> Purchases
            </button>
            <button 
              onClick={() => setActiveTab('rentals')}
              className={`flex-1 py-4 px-6 text-center font-bold text-lg transition-colors flex justify-center items-center gap-2 ${
                activeTab === 'rentals' 
                ? 'bg-white text-orange-600 border-b-2 border-orange-500' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Package className="w-5 h-5" /> Rentals
            </button>
            <button 
              onClick={() => setActiveTab('listings')}
              className={`flex-1 py-4 px-6 text-center font-bold text-lg transition-colors flex justify-center items-center gap-2 ${
                activeTab === 'listings' 
                ? 'bg-white text-orange-600 border-b-2 border-orange-500' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Store className="w-5 h-5" /> My Listings
            </button>
          </div>

          <div className="p-8">
            {activeTab === 'purchases' && (
              <div className="animate-fade-in">
                {purchaseHistory.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gray-50 text-gray-600 text-sm border-b border-gray-200">
                          <th className="py-3 px-4 font-semibold rounded-tl-lg">Order ID</th>
                          <th className="py-3 px-4 font-semibold">Date</th>
                          <th className="py-3 px-4 font-semibold">Item</th>
                          <th className="py-3 px-4 font-semibold">Amount Paid</th>
                          <th className="py-3 px-4 font-semibold rounded-tr-lg">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-gray-800">
                        {purchaseHistory.map((purchase) => (
                          <tr key={purchase.id} className="hover:bg-orange-50/30 transition-colors">
                            <td className="py-4 px-4 font-medium text-slate-900">{purchase.id}</td>
                            <td className="py-4 px-4 text-gray-500 text-sm">{purchase.date}</td>
                            <td className="py-4 px-4 font-semibold">{purchase.item}</td>
                            <td className="py-4 px-4 font-bold text-slate-900">{purchase.amount}</td>
                            <td className="py-4 px-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                purchase.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                              }`}>
                                {purchase.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <p className="text-gray-500 mb-4">You haven't made any purchases yet.</p>
                    <Link to="/products">
                      <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition-colors">
                        Browse Marketplace
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'rentals' && (
              <div className="animate-fade-in">
                {rentalHistory.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gray-50 text-gray-600 text-sm border-b border-gray-200">
                          <th className="py-3 px-4 font-semibold rounded-tl-lg">Rental ID</th>
                          <th className="py-3 px-4 font-semibold">Date</th>
                          <th className="py-3 px-4 font-semibold">Item</th>
                          <th className="py-3 px-4 font-semibold">Monthly Rate</th>
                          <th className="py-3 px-4 font-semibold rounded-tr-lg">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-gray-800">
                        {rentalHistory.map((rental) => (
                          <tr key={rental.id} className="hover:bg-orange-50/30 transition-colors">
                            <td className="py-4 px-4 font-medium text-slate-900">{rental.id}</td>
                            <td className="py-4 px-4 text-gray-500 text-sm">{rental.date}</td>
                            <td className="py-4 px-4 font-semibold">{rental.item}</td>
                            <td className="py-4 px-4 font-bold text-slate-900">{rental.amount}</td>
                            <td className="py-4 px-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                rental.status === 'Active' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                              }`}>
                                {rental.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <p className="text-gray-500 mb-4">You don't have any active rentals.</p>
                    <Link to="/products">
                      <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition-colors">
                        Browse Rentals
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'listings' && (
              <div className="animate-fade-in">
                {loadingListings ? (
                  <div className="py-10 text-center text-gray-500 font-medium">Loading your items...</div>
                ) : myListings.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gray-50 text-gray-600 text-sm border-b border-gray-200">
                          <th className="py-3 px-4 font-semibold rounded-tl-lg">Item Title</th>
                          <th className="py-3 px-4 font-semibold">Category</th>
                          <th className="py-3 px-4 font-semibold">Available For</th>
                          <th className="py-3 px-4 font-semibold">Date Listed</th>
                          <th className="py-3 px-4 font-semibold rounded-tr-lg">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-gray-800">
                        {myListings.map((listing) => (
                          <tr key={listing._id} className="hover:bg-orange-50/30 transition-colors">
                            <td className="py-4 px-4 font-bold text-slate-900">{listing.title}</td>
                            <td className="py-4 px-4 text-gray-600">{listing.categoryLabel || listing.category}</td>
                            <td className="py-4 px-4">
                              <div className="flex gap-2">
                                {listing.type.map((t, idx) => (
                                  <span key={idx} className="bg-slate-200 text-slate-700 px-2 py-0.5 rounded text-xs uppercase font-bold tracking-wider">
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </td>
                            <td className="py-4 px-4 text-gray-500 text-sm">
                              {new Date(listing.createdAt).toLocaleDateString()}
                            </td>
                            <td className="py-4 px-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                listing.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                              }`}>
                                {listing.available ? 'Active' : 'Sold/Rented'}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-10 flex flex-col items-center">
                    <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mb-4">
                      <Store className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No items listed yet</h3>
                    <p className="text-gray-500 mb-6 max-w-sm">
                      Do you have mobility equipment you no longer need? List it on our marketplace to help others and earn money!
                    </p>
                    <Link to="/ListItemForm">
                      <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-md">
                        List an Item Now
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
