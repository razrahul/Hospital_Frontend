import React, { useState } from "react";

function HeaderMain() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownNavbarOpen, setIsDropdownNavbarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleNavbarDropdown = () => {
    setIsDropdownNavbarOpen(!isDropdownNavbarOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-black">
      {/* Single Flex Container */}
      <div className="mx-auto max-w-screen-xl p-4">
        {/* Container for Logo, Navbar, and Hamburger (Mobile View) */}
        <div className="flex justify-between items-center">
          {/* Left: Logo */}
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/logo/loonalogo.webp"
              className="h-16"
              alt="Loonahospital Logo"
            />
          </a>

          {/* Middle: Navbar Links (visible on larger screens) */}
          <div className="hidden sm:flex flex-grow justify-center">
            <ul className="flex space-x-8">
              <li>
                <a
                  href="/about"
                  className="block py-2 px-3 text-black rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                  aria-current="page"
                >
                  About
                </a>
              </li>
              <li>
                <button
                  onClick={toggleDropdown}
                  className="flex items-center justify-between w-full py-2 px-3 text-black rounded-sm md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0"
                >
                  Treatment{" "}
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              </li>

              {/* Navbar Dropdown for Desktop */}
          
              <li>
                <button
                  onClick={toggleNavbarDropdown}
                  className="flex items-center justify-between w-full py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Media
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-200 ${
                      isDropdownNavbarOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {/* Navbar Dropdown Menu */}
                <div
                  className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 absolute mt-2 ${
                    isDropdownNavbarOpen ? "block" : "hidden"
                  }`}
                >
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Youtube
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Pictures
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Other Activity
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-black rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Articles
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-black rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Book Appointment Button (only visible on desktop) */}
          <div className="hidden md:block">
            <button className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-600 transition duration-300">
              Book Appointment
            </button>
          </div>

          {/* Right: Hamburger Icon (for Mobile) */}
          <button
            className="block md:hidden text-black"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links for Mobile (shown when mobile menu is open) */}
        <div
          className={`mt-4 md:hidden justify-between items-center ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row space-x-8 space-y-4 md:space-y-0">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-black rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full py-2 px-3 text-black rounded-sm md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0"
              >
                Treatment{" "}
                <svg
                  className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>
            <li>
                <button
                  onClick={toggleNavbarDropdown}
                  className="flex items-center justify-between w-full py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Dropdown
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-200 ${
                      isDropdownNavbarOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {/* Navbar Dropdown Menu */}
                <div
                  className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 absolute mt-2 ${
                    isDropdownNavbarOpen ? "block" : "hidden"
                  }`}
                >
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Marketplace
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Dropdown Menu for Treatment on Mobile */}
      <div
        id="mega-menu-full-dropdown"
        className={`mt-1 border-gray-200 shadow-xs bg-gray-50  md:bg-white border-y ${
          isDropdownOpen ? "block" : "hidden"
        }`}
      >
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 sm:grid-cols-2 md:px-6">
          <ul>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                <div className="font-semibold">Online Stores</div>
                <span className="text-sm text-gray-500">
                  Connect with third-party tools that you're already using.
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                <div className="font-semibold">Segmentation</div>
                <span className="text-sm text-gray-500">
                  Connect with third-party tools that you're already using.
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                <div className="font-semibold">Marketing CRM</div>
                <span className="text-sm text-gray-500">
                  Connect with third-party tools that you're already using.
                </span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                <div className="font-semibold">Online Stores</div>
                <span className="text-sm text-gray-500">
                  Connect with third-party tools that you're already using.
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                <div className="font-semibold">Segmentation</div>
                <span className="text-sm text-gray-500">
                  Connect with third-party tools that you're already using.
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                <div className="font-semibold">Marketing CRM</div>
                <span className="text-sm text-gray-500">
                  Connect with third-party tools that you're already using.
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HeaderMain;
