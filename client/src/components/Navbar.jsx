import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import { FaSearch } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa"; // Import a location icon
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { Input } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCart } from "../actions/CartControl";
import SimpleDialog from "./SimpleDialog";
import SimpleDialog2 from "./SimpleDialog2";
import SimpleDialog3 from "./SimpleDialog3";
import axios from "axios";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [datas, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLogin(true);
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ratna-supermarket.vercel.app/allProducts"
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const options = {
    keys: ["label"],
    includeScore: true,
    threshold: 0.4,
  };

  const data = [];

  for (let i = 0; i < datas.length; i++) {
    data.push({ label: datas[i].productName, id: datas[i].id });
  }

  const fuse = new Fuse(data, options);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const results = fuse.search(value);
      setSearchResults(results.map((result) => result.item));
    } else {
      setSearchResults([]);
    }
  };
  const {
    cartItems,
    addToCart,
    isLogin,
    setIsLogin,
    name,
    setName,
    userDetails,
    setUserDetails,
    startflag,
    setStartFlag,
  } = useCart();
  const [open, setOpen] = useState(
    startflag === 0 && !localStorage.getItem("userPincode") ? true : false
  );
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose2 = (value) => {
    setOpen2(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
    handleClickOpen2();
  };

  const handleClose = (value) => {
    setOpen(false);

    if (startflag === 0) {
      handleClickOpen2();
      setStartFlag((prev) => prev + 1);
    }
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const userDetail = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="relative">
      {/* Logo for mobile/tablet view */}
      <div
        className="w-0 h-0 md:flex md:justify-center md:items-center md:h-11 overflow-visible z-[999] mt-2 md:w-full mb-[-10px] lg:w-0 lg:h-0"
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          src="/logo.svg"
          alt="Logo"
          className="lg:w-[150px] z-[99999] md:w-[150px]"
        />
      </div>

      {/* Main navbar with gradient background */}
      <nav className="md:p-2 shadow-lg fixed justify-center z-50 flex bg-gradient-to-r from-green-50 via-white to-green-50 border-b border-green-100 w-screen backdrop-blur-sm">
        <div className="md:flex items-center w-full lg:p-4 justify-between gap-0 relative sm:block">
          {/* Left section with logo and location */}
          <div className="flex items-center p-0 gap-3">
            {/* Logo */}
            <div
              className="text-white text-2xl font-bold mb-4 md:mb-0 cursor-pointer sm:w-full md:w-0 lg:w-fit sm:flex sm:justify-center sm:items-center transition-transform hover:scale-105"
              onClick={() => {
                navigate("/");
              }}
            >
              <img
                src="/logo.svg"
                alt=""
                className="md:w-[0] lg:w-[150px] sm:w-[100px] drop-shadow-sm"
              />
            </div>

            {/* Location and delivery section */}
            <div className="md:flex gap-3 md:gap-2 md:justify-center md:scale-90 lg:scale-100 md:items-center md:w-fit sm:hidden">
              <button
                className="h-12 flex px-4 lg:h-fit py-2 flex-row justify-between items-center lg:scale-100 md:px-2 bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 shadow-md hover:shadow-lg rounded-full border border-green-200 transition-all duration-200 hover:scale-105"
                onClick={handleClickOpen}
              >
                <div className="flex flex-row items-center justify-center gap-2">
                  <img src="/location.svg" alt="Location" className="w-5 h-5" />
                  <div className="relative flex flex-col justify-start text-left mt-[-3px] text-base leading-4 group">
                    <span className="text-base text-green-600 font-medium">
                      {localStorage.getItem("orderType") || "Delivery"}
                    </span>
                    <span className="m-0 text-gray-700 text-sm">
                      {localStorage
                        .getItem("userArea")
                        ?.split(" ")
                        .slice(0, 2)
                        .join(" ") || "Mumbai"}
                    </span>

                    {/* Enhanced tooltip */}
                    <div className="absolute top-12 left-0 text-lg hidden bg-gradient-to-r from-green-50 to-green-100 group-hover:flex items-center justify-center w-max p-3 text-green-800 border border-green-200 rounded-lg shadow-xl z-10 transition-all duration-300 ease-out transform translate-y-0 group-hover:translate-y-2 opacity-0 group-hover:opacity-100">
                      <span className="text-base font-medium">
                        {localStorage.getItem("userPincode") || "400001"}
                      </span>
                    </div>
                  </div>
                </div>
                <img src="/dropdown_nav.svg" alt="Dropdown arrow" className="w-4 h-4" />
              </button>

              <button className="p-3 bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 shadow-md hover:shadow-lg rounded-full border border-green-200 transition-all duration-200 hover:scale-105 sm:hidden">
                <img src="/search.svg" alt="" className="w-5 h-5" />
              </button>
            </div>

            <button
              className="text-green-600 focus:outline-none hidden"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Enhanced search bar */}
          <div className="flex-grow md:max-w-md lg:max-w-[600px] mx-5 bg-gradient-to-r from-green-50 via-white to-green-50 mb-4 md:mb-0 flex flex-row items-center rounded-full shadow-lg hover:shadow-xl border border-green-200 h-14 pl-10 pr-10 relative transition-all duration-200">
            <FaSearch className="-ml-7 mr-3 text-green-500 text-lg" />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full py-2 rounded relative bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none sm:w-full font-medium"
            />

            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 mt-2 p-2 bg-white shadow-2xl rounded-lg w-full z-50 border border-green-100">
                {searchResults.map((result) => (
                  <div
                    key={result.label}
                    className="p-3 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 cursor-pointer rounded-md transition-all duration-150 border-b border-gray-100 last:border-b-0"
                    onClick={() => {
                      setSearchTerm(`${result.label}`);
                      setSearchResults([]);
                      navigate(`/product/${result.id}`);
                    }}
                  >
                    <span className="text-gray-700 font-medium">{result.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right section with user actions */}
          <div className="flex md:justify-end md:flex gap-4 w-fit relative sm:block">
            <div className="md:flex items-center sm:hidden gap-4">
              {!isLogin ? (
                <div
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer"
                  onClick={() => {
                    navigate("/sign");
                  }}
                >
                  <img src="user.svg" alt="" className="w-5 h-5 filter brightness-0 invert" />
                  <button className="font-medium">Login</button>
                </div>
              ) : (
                <div
                  className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-full shadow-md hover:shadow-lg border border-green-200 transition-all duration-200 hover:scale-105 cursor-pointer"
                  onClick={() => {
                    setOpen3(true);
                  }}
                >
                  <img
                    src={
                      userDetail.photoURL ||
                      "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                    }
                    alt=""
                    className="rounded-full h-8 w-8 border-2 border-green-200"
                  />
                  <button className="font-medium text-green-700 max-w-24 truncate">
                    {userDetail.displayName || userDetail.name}
                  </button>
                </div>
              )}

              {/* Enhanced cart button */}
              <div
                className="flex items-center gap-2 relative px-4 py-2 bg-gradient-to-r from-green-100 to-green-200 hover:from-green-200 hover:to-green-300 rounded-full shadow-md hover:shadow-lg border border-green-300 transition-all duration-200 hover:scale-105 cursor-pointer"
                onClick={() => {
                  navigate("/cart");
                }}
              >
                <img src="cart.svg" alt="" className="w-5 h-5" />
                <button className="font-medium text-green-700">Cart</button>
                {cartItems.length > 0 && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full text-xs text-white font-bold flex items-center justify-center shadow-md border-2 border-white">
                    {cartItems.length}
                  </div>
                )}
              </div>

              {/* Enhanced orders button */}
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-full shadow-md hover:shadow-lg border border-green-200 transition-all duration-200 hover:scale-105 cursor-pointer">
                <img src="my-orders-icon.svg" alt="" className="w-5 h-5" />
                <button
                  className="font-medium text-green-700 text-sm leading-tight"
                  onClick={() => {
                    if (!isLogin) {
                      navigate("/sign");
                    } else {
                      navigate("/orders");
                    }
                  }}
                >
                  My<br/>Orders
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <SimpleDialog open={open} onClose={handleClose} />

      <SimpleDialog2
        open={open2}
        onClose={handleClose2}
        handleOption={(value) => {
          localStorage.setItem("orderType", value);
          handleClickOpen2();
        }}
      />

      <SimpleDialog3
        open={open3}
        onClose={handleClose3}
        setIsLogin={setIsLogin}
      />
    </div>
  );
};

export default Navbar;