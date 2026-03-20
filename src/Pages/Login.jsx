import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSuccess = async (credentialResponse) => {
    try {
      const backendUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      // Send the Google-signed token to our backend for mathematical verification
      const res = await fetch(`${backendUrl}/api/auth/google`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: credentialResponse.credential }),
      });
      
      const data = await res.json();
      if (res.ok) {
        // Backend generated a session token and sent user details back!
        login(data.token, data.user);
        navigate('/'); // Redirect to home
      } else {
        console.error('Login failed:', data.message);
        alert('Login failed: ' + data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Network error during login');
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md mt-[-100px]">
        <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900 fredoka-big">
          Sign in to MobilityHub
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or <a href="/" className="font-medium text-orange-600 hover:text-orange-500">browse the marketplace anonymously</a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-12 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-200 text-center">
          <div className="mb-6">
            <p className="text-gray-700 font-medium mb-8">Continue with Google to securely sync your orders and listings.</p>
            <div className="flex justify-center">
              <GoogleLogin
                onSuccess={handleSuccess}
                onError={() => console.log('Login Failed')}
                theme="outline"
                size="large"
                shape="rectangular"
                text="continue_with"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
