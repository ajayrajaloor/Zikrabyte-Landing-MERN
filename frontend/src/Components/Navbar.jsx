import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear localStorage
    localStorage.clear();

    // Navigate to the login page
    navigate('/login');
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch pt-2 fixed top-0 left-0 right-0">
      <div className="flex  md:justify-start space-x-8 md:pl-40">
        <span><Link to='/home'>Home</Link></span>
        <span><Link to='/about'>About</Link></span>
        <span><Link to='/contact'>Contact</Link></span>
      </div>
      <div className="text-center mt-4 md:mt-0">
        <span className="text-2xl font-bold text-blue-950">Landing</span>
      </div>
      <div className='flex justify-between md:justify-end pr-4 md:pr-40 mt-4 md:mt-0'>
        
        <div className='ml-4'> {/* Add margin to create space */}
        <button
            onClick={handleLogout}
            className="bg-blue-950 hover:bg-blue-700 text-white font-bold py-1.5 px-10 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
