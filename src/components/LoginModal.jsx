import React, { useState } from 'react';
import { X } from 'lucide-react';

const LoginModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('login');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex justify-center items-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative shadow-2xl">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-gray-800">
          <X size={24} />
        </button>
        
        <div className="flex border-b mb-6">
          <button 
            className={`flex-1 pb-2 font-semibold ${activeTab === 'login' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button 
            className={`flex-1 pb-2 font-semibold ${activeTab === 'register' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}
            onClick={() => setActiveTab('register')}
          >
            Register
          </button>
        </div>

        <h3 className="text-xl font-bold mb-4">{activeTab === 'login' ? 'Welcome Back!' : 'Create an Account'}</h3>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email/Username</label>
            <input type="text" className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-primary outline-none" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-primary outline-none" placeholder="Enter password" />
          </div>
          <button type="button" className="w-full bg-primary hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-md transition duration-300">
            {activeTab === 'login' ? 'Login' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;