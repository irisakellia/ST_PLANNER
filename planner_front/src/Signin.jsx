import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <>
   
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
         <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2"></label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter your name"
              required
            />
            <label htmlFor="email" className="block text-gray-700 mb-2"></label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2"></label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Sign In
          </button>
        </form>
        <p className='text-xs mt-6 ml-4'>If you have already registered , please <span className='text-blue-950'><Link to={'/login'}>LogIn</Link></span></p>
      </div>
      
    </div>
   
    </>
  );
};

export default Signin;
