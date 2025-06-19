import React from "react";

const Navbar = () => {
  return (
    <div className="fixed w-full  bg-gray-100 p-6 shadow-md">
      <header className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-blue-800">My College</h2>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-blue-600 hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-blue-600 hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/courses" className="text-blue-600 hover:underline">
                Courses
              </a>
            </li>
            <li>
              <a href="/contact" className="text-blue-600 hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="/admission" className="text-blue-600 hover:underline">
                Admission
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
