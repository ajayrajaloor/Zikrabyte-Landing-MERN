import React, { useState } from 'react';
import { postLogin } from '../../Services/apiMethod';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Form submitted:', formData);

    const datas = {
      email: formData.email,
      password: formData.password,
    };
    console.log(datas, "datasssssss");
    const response = await postLogin(datas);
    console.log(response, "response");
    localStorage.setItem("UserAuth", response.token);
    navigate('/home')
  };

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('/path/to/your/background-image.jpg')` }}>
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button type="submit" className="bg-blue-950 text-white py-2 px-4 rounded-md w-full hover:bg-blue-900">
            Login
          </button>
        </form>
        <p className="text-sm mt-4">
          No Account?{' '}
          <Link to="/register" className="text-blue-500 hover:underline">
           Register Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
