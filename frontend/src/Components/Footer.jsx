import React from 'react'
import {
    FaFacebook,
    FaLinkedin,
    FaTwitter,
    FaYoutube,
    FaInstagram,
  } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="h-auto px-20 py-6 bg-gray-300 justify-between  flex flex-col">
        <div className="flex flex-row justify-between">
          <div className="mt-2">
            <p>©2023 Landing</p>
          </div>

          <div>
            <span className="text-2xl font-bold text-blue-950">Landing</span>
          </div>

          <div>
            <Link to='/purchase'>
            <button className="bg-blue-950 text-white p-2 px-8 rounded-md">
              Purchase Now
            </button>
            </Link>
          </div>
        </div>
        <div>
          <hr className="my-8 border-0 border-t h-4 " />
        </div>

        <div className="flex flex-row justify-between">
          <div className="flex  md:justify-start space-x-8">
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaFacebook size={24} color="#888" />
            <FaLinkedin size={24} color="#888" />
            <FaTwitter size={24} color="#888" />
            <FaYoutube size={24} color="#888" />
            <FaInstagram size={24} color="#888" />
          </div>
        </div>
      </div>
  )
}

export default Footer
