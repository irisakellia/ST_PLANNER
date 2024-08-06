import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();

  const[data,setData] = useState({
    name:'',
    email:'',
    password:'',
  })


  const handleInputChange = (event)=>{
    const{name , value} = event.target ;
    setData({
      ...data,
      [name]:value,
    })

  }

  const handleSubmit = async(e)=>{

    try {
      
      const result = await fetch('http://localhost:6000/api/register',{
        method:"POST",
        headers:{
          "Content-Type":"application/json",

        },
        body:JSON.stringify(data),

      })

      const response = await result.json();
      console.log(response)
      navigate('/login')
    } catch (error) {
      console.log("can not login", error);
    }

  }

  return (
    <>
   
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
         <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2"></label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter your name"
              required
              value={data.name}
              onClick={handleInputChange}
            />
            <label  className="block text-gray-700 mb-2"></label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter your email"
              required
              value={data.email}
              onClick={handleInputChange}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2"></label>
            <input
              type="text"
              id="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter your password"
              required
              value={data.password}
              onClick={handleInputChange}
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
