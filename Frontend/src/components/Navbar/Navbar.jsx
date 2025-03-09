import React, { useEffect, useState } from "react";
import { Dumbbell, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import PrimaryBtn from "../Button/PrimaryBtn";
import { handleSuccess } from "../../utils/toast";
import { ToastContainer } from "react-toastify";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const updateUser = () => {
      setUser(localStorage.getItem("LoggedInUser"));
    };

    window.addEventListener("storage", updateUser);
    updateUser(); 

    return () => {
      window.removeEventListener("storage", updateUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("LoggedInUser");
    setUser(null); 
    handleSuccess("User Logged Out"); 

    setTimeout(() => {
      navigate("/login");
    }, 1000); 
  };

  const defaultNavItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/#about" },
    { name: "Services", link: "/#services" },
    { name: "Plan", link: "/#plan" },
    { name: "Contact", link: "/#contact" },
  ];

  const userNavItems = [
    { name: "Track Workout", link: "/track" },
    { name: "Generate Workout", link: "/generateWorkout" },
  ];

  const handleNavLinkClick=()=>{
    setNavbar(false)
  }

  return (
    <>
      <nav className="w-full h-auto fixed z-50 md:block bg-[#1d1d1d] lg:px-24 md:px-16 sm:px-6 px-4 py-3">
        <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between py-1 md:py-1 md:block">
              <Link className="text-3xl text-indigo-600 font-semibold flex items-end gap-x-1 relative">
                G<span className="text-xl font-bold text-gray-300">Y</span>M
                <Dumbbell className="w-5 h-4 text-indigo-600 -rotate-45 absolute top-0 left-[46%] translate-x-[-50%]" />
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md focus:border-gray-400"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <X size={24} className="text-gray-400" />
                  ) : (
                    <Menu size={24} className="text-gray-400" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div
            className={`fixed top-0 right-0 w-full h-full bg-[#1d1d1d] flex flex-col items-center justify-center transition-transform duration-300 z-50 md:relative md:block md:w-auto md:h-auto md:bg-transparent md:translate-x-0 ${
              navbar ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              onClick={() => setNavbar(false)}
              className="mb-16 md:hidden block"
            >
              <X className="text-gray-600" size={30} />
            </button>
            <ul className="flex flex-col md:flex-row items-center gap-8 text-center">
              {user
                ? userNavItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.link}
                        onClick={handleNavLinkClick} // Close menu on click
                        className="text-gray-500 text-lg font-semibold hover:text-indigo-600"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))
                : defaultNavItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.link}
                        onClick={handleNavLinkClick} // Close menu on click
                        className="text-gray-500 text-xl font-semibold hover:text-indigo-600"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
              {user ? (
                <>
                  <li className="text-gray-500 text-xl font-semibold uppercase">
                    {user}
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        handleLogout();
                        handleNavLinkClick(); // Close menu when logging out
                      }}
                      className="text-gray-200 bg-red-600 font-medium text-xl hover:bg-red-700 px-3 py-1.5 rounded ease-out duration-500"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/login"
                      onClick={handleNavLinkClick} // Close menu on click
                      className="text-gray-500 text-xl font-semibold hover:text-indigo-600"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="text-xl">
                    <Link to="/register" onClick={handleNavLinkClick}>
                      <PrimaryBtn>Sign Up</PrimaryBtn>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <ToastContainer />
    </>
  );
};

export default Navbar;
