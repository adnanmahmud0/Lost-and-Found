import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-8 font-sans tracking-wide">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 max-w-sm">
            <h4 className="text-base font-semibold mb-6 text-white">About Us</h4>
            <p className="text-gray-400 text-sm">
              We are a team of professionals who are dedicated to helping people find their lost items.
            </p>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              <li><Link to="#" className="text-gray-400 hover:text-white text-sm">Home</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white text-sm">Lost & Found</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white text-sm">Add Item</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-base font-semibold mb-6 text-white">Contact Us</h4>
            <p className="text-gray-400 text-sm">123 Main Street</p>
            <p className="text-gray-400 text-sm">City, State, Country</p>
            <p className="text-gray-400 text-sm">contact@example.com</p>
            <p className="text-gray-400 text-sm">+1 234 567 890</p>
          </div>
        </div>

        <div className="mt-12">
          <p className='text-gray-400 text-sm'>© ReadymadeUI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
