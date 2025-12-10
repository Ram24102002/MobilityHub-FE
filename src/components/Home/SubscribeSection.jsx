import React, { useState } from 'react';

export default function SubscribeSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing email:', email);
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <div className="flex items-center justify-center px-4 py-30" style={{ backgroundColor: '#2D4F4F' }}>
      <div className="container mx-auto max-w-4xl text-center">
        {/* Header */}
        <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
          Subscribe and Save!
        </h1>
        
        {/* Description */}
        <p className="text-lg text-white mb-8 max-w-2xl mx-auto leading-relaxed">
          Subscribe to the Mobility Hub mailing list to receive updates on new arrivals,
          special offers and other discount information.
        </p>

        {/* Subscribe Form */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@email.com"
            className="w-full sm:flex-1 px-6 py-4 rounded-full text-gray-700 text-lg focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all bg-white"
          />
          <button
            onClick={handleSubmit}
            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}