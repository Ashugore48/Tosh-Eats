// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-5 mb-0 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <div className="text-4xl">
          <Link to = {"/"}><p className="font-body text-red-400">ToshEats</p></Link>
        </div>
        <div className="mb-4 md:mb-0">
          <ul className="flex gap-6">
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About Us</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
          </ul>
        </div>
        <div className="flex gap-4">
          <Link to={"https://github.com/Ashugore48"}><i className="fab fa-github text-2xl"></i></Link>
          <Link to={"https://www.facebook.com/ashutosh.gore.98/"}><i className="fab fa-facebook text-2xl"></i></Link>
          <Link to={"https://www.instagram.com/ashutoshgore21/"}><i className="fab fa-instagram text-2xl"></i></Link>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; {new Date().getFullYear()} ToshEats. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

