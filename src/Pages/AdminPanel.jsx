import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { ShieldAlert, Users, Package, MailPlus, Trash2 } from 'lucide-react';

export default function AdminPanel() {
  const { user, token } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('platform');
  
  const [dashboardData, setDashboardData] = useState(null);
  const [adminEmails, setAdminEmails] = useState([]);
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const backendUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/profile');
      return;
    }
    fetchDashboardData();
    fetchAdminEmails();
  }, [user, navigate]);

  const fetchDashboardData = async () => {
    try {
      const res = await fetch(`${backendUrl}/api/admin/dashboard`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!res.ok) throw new Error('Failed to fetch stats');
      const data = await res.json();
      setDashboardData(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const fetchAdminEmails = async () => {
    try {
      const res = await fetch(`${backendUrl}/api/admin/emails`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setAdminEmails(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddAdmin = async (e) => {
    e.preventDefault();
    if (!newAdminEmail) return;
    try {
      const res = await fetch(`${backendUrl}/api/admin/emails`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify({ email: newAdminEmail })
      });
      if (res.ok) {
        setNewAdminEmail('');
        fetchAdminEmails();
      } else {
        const err = await res.json();
        alert(err.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleRemoveAdmin = async (email) => {
    if(!window.confirm(`Remove admin access for ${email}?`)) return;
    try {
      const res = await fetch(`${backendUrl}/api/admin/emails/${email}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        fetchAdminEmails();
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-[#F5F1E8]">Loading Secure Dashboard...</div>;

  return (
    <div className="min-h-screen bg-[#F5F1E8] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 fredoka-big flex items-center gap-3">
              <ShieldAlert className="w-10 h-10 text-orange-500" /> Administrative Panel
            </h1>
            <p className="text-slate-600 mt-2">Manage stocks, monitor users, and configure access.</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 border-b-2 border-slate-200 mb-8 overflow-x-auto">
          <button 
            onClick={() => setActiveTab('platform')}
            className={`px-6 py-3 font-bold text-lg rounded-t-lg transition flex items-center gap-2 ${activeTab === 'platform' ? 'bg-orange-500 text-white' : 'bg-transparent text-slate-600 hover:bg-slate-200'}`}
          >
            <Package /> Own Products
          </button>
          <button 
            onClick={() => setActiveTab('marketplace')}
            className={`px-6 py-3 font-bold text-lg rounded-t-lg transition flex items-center gap-2 ${activeTab === 'marketplace' ? 'bg-orange-500 text-white' : 'bg-transparent text-slate-600 hover:bg-slate-200'}`}
          >
            <Package className="text-orange-200" /> Marketplace
          </button>
          <button 
            onClick={() => setActiveTab('users')}
            className={`px-6 py-3 font-bold text-lg rounded-t-lg transition flex items-center gap-2 ${activeTab === 'users' ? 'bg-orange-500 text-white' : 'bg-transparent text-slate-600 hover:bg-slate-200'}`}
          >
            <Users /> Users DB
          </button>
          <button 
            onClick={() => setActiveTab('access')}
            className={`px-6 py-3 font-bold text-lg rounded-t-lg transition flex items-center gap-2 ${activeTab === 'access' ? 'bg-orange-500 text-white' : 'bg-transparent text-slate-600 hover:bg-slate-200'}`}
          >
            <ShieldAlert /> Admin Access
          </button>
        </div>

        {/* Tab Contents */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          
          {(() => {
            if (!dashboardData) return null;
            let allProducts = dashboardData.products || [];
            if (allProducts.length === 0 && dashboardData.categories) {
              Object.values(dashboardData.categories).forEach(arr => allProducts.push(...arr));
            }
            const ownProducts = allProducts.filter(p => p.source === 'own');
            const marketplaceProducts = allProducts.filter(p => p.source === 'marketplace');

            const ProductTable = ({ title, productsList, colorClass }) => (
              <div className="mb-10 animate-fade-in">
                <div className="flex items-center justify-between mb-4 border-b pb-2 text-slate-800">
                  <h2 className="text-2xl font-bold">{title}</h2>
                  <span className={`px-4 py-1 rounded-full text-sm font-bold shadow-sm ${colorClass}`}>
                    Items Count: {productsList.length}
                  </span>
                </div>
                <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-slate-600 border-b border-slate-200">
                        <th className="py-3 px-4 font-semibold">Title</th>
                        <th className="py-3 px-4 font-semibold">Category</th>
                        <th className="py-3 px-4 font-semibold">Features/Types</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                      {productsList.length === 0 && (
                        <tr><td colSpan="3" className="py-6 px-4 text-center text-slate-500 italic">No products found in this section.</td></tr>
                      )}
                      {productsList.map(p => (
                        <tr key={p._id} className="hover:bg-slate-50 transition-colors">
                          <td className="py-4 px-4 font-bold text-slate-900 border-r border-slate-100">{p.title}</td>
                          <td className="py-4 px-4 text-slate-600 border-r border-slate-100">{p.categoryLabel || p.category}</td>
                          <td className="py-4 px-4">
                            <div className="flex gap-2">
                              {p.type.map((t, idx) => (
                                <span key={idx} className="bg-slate-200 text-slate-800 px-2.5 py-1 rounded text-xs uppercase font-bold tracking-wide">{t}</span>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );

            return (
              <>
                {activeTab === 'platform' && (
                  <ProductTable title="Our Platform Inventory" productsList={ownProducts} colorClass="bg-orange-100 text-orange-800 border border-orange-200" />
                )}
                {activeTab === 'marketplace' && (
                  <ProductTable title="Marketplace User Listings" productsList={marketplaceProducts} colorClass="bg-blue-100 text-blue-800 border border-blue-200" />
                )}
              </>
            );
          })()}

          {/* USERS TAB */}
          {activeTab === 'users' && dashboardData && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-slate-800 border-b pb-2">Registered Users ({dashboardData.users.length})</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="py-3 px-4 rounded-tl-lg">Name</th>
                      <th className="py-3 px-4">Email</th>
                      <th className="py-3 px-4">Role</th>
                      <th className="py-3 px-4 rounded-tr-lg">Joined</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {dashboardData.users.map((u) => (
                      <tr key={u._id} className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-medium flex items-center gap-3">
                          {u.picture && <img src={u.picture} className="w-8 h-8 rounded-full" alt="" referrerPolicy="no-referrer" />}
                          {u.name}
                        </td>
                        <td className="py-3 px-4 text-slate-600">{u.email}</td>
                        <td className="py-3 px-4">
                          <span className={`px-3 py-1 text-xs font-bold rounded-full ${u.role === 'admin' ? 'bg-orange-100 text-orange-700' : 'bg-slate-200 text-slate-700'}`}>
                            {u.role.toUpperCase()}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-500 text-sm">
                          {new Date(u.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ACCESS TAB */}
          {activeTab === 'access' && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-slate-800 border-b pb-2">Manage Administrator Roles</h2>
              <p className="text-slate-600 mb-8 max-w-3xl">
                Add specific email addresses here. When a user logs in with an email on this list, they will instantly be granted an Admin dashboard and bypass normal limits. Removing an email instantly revokes access.
              </p>

              <form onSubmit={handleAddAdmin} className="flex gap-4 mb-10 max-w-xl">
                <input 
                  type="email" 
                  value={newAdminEmail}
                  onChange={(e) => setNewAdminEmail(e.target.value)}
                  placeholder="Enter email address..." 
                  className="flex-1 p-3 border border-slate-300 rounded-lg focus:outline-none focus:border-orange-500"
                  required
                />
                <button type="submit" className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-lg flex items-center gap-2">
                  <MailPlus className="w-5 h-5" /> Add Admin
                </button>
              </form>

              <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden max-w-3xl">
                <div className="bg-slate-200 px-6 py-3 font-bold text-slate-700">Authorized Emails</div>
                <div className="divide-y divide-slate-200">
                  {adminEmails.length === 0 && <p className="px-6 py-4 text-slate-500 italic">No dynamic admins added yet. (Super-admin is defined in .env)</p>}
                  {adminEmails.map((item) => (
                    <div key={item._id} className="px-6 py-4 flex justify-between items-center hover:bg-white transition-colors">
                      <span className="font-medium text-slate-900">{item.email}</span>
                      <button 
                        onClick={() => handleRemoveAdmin(item.email)}
                        className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"
                        title="Revoke Access"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
