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

      <nav className="md:p-2 shadow-md fixed justify-center z-50 flex bg-white w-screen">
        <div className="md:flex items-center w-full lg:p-4 justify-between gap-0 relative">
          {/* Left section with logo and location */}
          <div className="flex items-center p-2 gap-2">
            <div
              className="text-white text-2xl font-bold mb-4 md:mb-0 cursor-pointer flex justify-center items-center"
              onClick={() => {
                navigate("/");
              }}
            >
              <img
                src="/logo.svg"
                alt=""
                className="md:w-[0] lg:w-[150px] w-[100px]"
              />
            </div>
            
            {/* Location button - hidden on small screens to save space */}
            <div className="hidden md:flex gap-2 md:gap-1 md:justify-center md:scale-90 lg:scale-100 md:items-center md:w-fit">
              <button
                className="h-12 flex px-4 lg:h-fit py-2 flex-row justify-between items-center lg:scale-100 md:px-2 bg-gray-100 shadow-md rounded-full"
                onClick={handleClickOpen}
              >
                <div className="flex flex-row items-center justify-center gap-2">
                  <img src="/location.svg" alt="Location" />
                  <div className="relative flex flex-col justify-start text-left mt-[-3px] text-base leading-4 group">
                    <span className="text-base text-blue-400">
                      {localStorage.getItem("orderType") || "Delivery"}
                    </span>
                    <span className="m-0">
                      {localStorage
                        .getItem("userArea")
                        ?.split(" ")
                        .slice(0, 2)
                        .join(" ") || "Mumbai"}
                    </span>

                    <div className="absolute top-12 left-0 text-lg hidden bg-gray-100 group-hover:flex items-center justify-center w-max p-2 text-black border border-gray-300 rounded-lg shadow-xl z-10 transition-transform duration-300 ease-out transform translate-y-0 group-hover:translate-y-2 opacity-0 group-hover:opacity-100">
                      <span className="text-base">
                        {localStorage.getItem("userPincode") || "400001"}
                      </span>
                    </div>
                  </div>
                </div>
                <img src="/dropdown_nav.svg" alt="Dropdown arrow" />
              </button>
            </div>
            
            {/* Mobile menu button */}
            <button
              className="text-gray-600 focus:outline-none md:hidden ml-auto"
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
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>

          {/* Search bar - full width on mobile, constrained on larger screens */}
          <div className="flex-grow md:max-w-md lg:max-w-[600px] mx-2 md:mx-5 bg-slate-100 mb-4 md:mb-0 flex flex-row items-center rounded-r-full rounded-l-full shadow-md h-12 md:h-14 pl-6 md:pl-10 pr-6 md:pr-10 relative">
            <FaSearch className="-ml-3 md:-ml-7 mr-2 text-lime-400 text-sm md:text-base" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full py-2 rounded relative bg-transparent text-black focus:outline-none text-sm md:text-base"
            />

            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 mt-1 p-2 bg-white shadow-lg rounded w-full z-50">
                {searchResults.map((result) => (
                  <div
                    key={result.label}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      setSearchTerm(`${result.label}`);
                      setSearchResults([]);
                      navigate(`/product/${result.id}`);
                    }}
                  >
                    {result.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Desktop navigation items */}
          <div className="hidden md:flex items-center gap-3 lg:gap-5 w-fit relative">
            {!isLogin ? (
              <div
                className="flex items-center cursor-pointer"
                onClick={() => {
                  navigate("/sign");
                }}
              >
                <img src="user.svg" alt="" className="mr-1" />
                <button className="text-sm lg:text-base">Login</button>
              </div>
            ) : (
              <div
                className="flex items-center w-fit cursor-pointer"
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
                  className="rounded-full h-8 lg:h-10 border-2 border-blue-50 w-8 lg:w-10 mr-2"
                />
                <button className="text-sm lg:text-base max-w-20 truncate">
                  {userDetail.displayName || userDetail.name}
                </button>
              </div>
            )}

            <div
              className="flex relative w-fit bg-gray-100 pl-2 lg:px-4 py-2 shadow-md rounded-full cursor-pointer"
              onClick={() => {
                navigate("/cart");
              }}
            >
              <img src="cart.svg" alt="" className="w-4 lg:w-5" />
              <button className="pr-4 lg:pr-5 text-sm lg:text-base">Cart</button>
              <div className="absolute top-0 right-0 w-4 bg-lime-400 rounded-full h-4 text-xs text-center">
                {cartItems.length}
              </div>
            </div>

            <div className="flex bg-gray-100 rounded-full shadow-md px-2 lg:px-4 gap-2 cursor-pointer">
              <img src="my-orders-icon.svg" alt="" className="w-4 lg:w-5" />
              <button
                className="leading-4 lg:leading-6 text-xs lg:text-sm text-center"
                onClick={() => {
                  if (!isLogin) {
                    navigate("/sign");
                  } else {
                    navigate("/orders");
                  }
                }}
              >
                My Orders
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t z-40">
            <div className="p-4 space-y-4">
              {/* Location button for mobile */}
              <button
                className="w-full flex px-4 py-3 flex-row justify-between items-center bg-gray-100 shadow-md rounded-full"
                onClick={() => {
                  handleClickOpen();
                  setIsMobileMenuOpen(false);
                }}
              >
                <div className="flex flex-row items-center justify-center gap-2">
                  <img src="/location.svg" alt="Location" />
                  <div className="flex flex-col justify-start text-left text-base leading-4">
                    <span className="text-base text-blue-400">
                      {localStorage.getItem("orderType") || "Delivery"}
                    </span>
                    <span className="m-0">
                      {localStorage
                        .getItem("userArea")
                        ?.split(" ")
                        .slice(0, 2)
                        .join(" ") || "Mumbai"}
                    </span>
                  </div>
                </div>
                <img src="/dropdown_nav.svg" alt="Dropdown arrow" />
              </button>

              {/* Login/User for mobile */}
              {!isLogin ? (
                <div
                  className="flex items-center justify-center py-3 bg-gray-100 rounded-full cursor-pointer"
                  onClick={() => {
                    navigate("/sign");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <img src="user.svg" alt="" className="mr-2" />
                  <span>Login</span>
                </div>
              ) : (
                <div
                  className="flex items-center justify-center py-3 bg-gray-100 rounded-full cursor-pointer"
                  onClick={() => {
                    setOpen3(true);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <img
                    src={
                      userDetail.photoURL ||
                      "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                    }
                    alt=""
                    className="rounded-full h-8 border-2 border-blue-50 w-8 mr-2"
                  />
                  <span className="truncate max-w-32">
                    {userDetail.displayName || userDetail.name}
                  </span>
                </div>
              )}

              {/* Cart for mobile */}
              <div
                className="flex items-center justify-center relative py-3 bg-gray-100 rounded-full cursor-pointer"
                onClick={() => {
                  navigate("/cart");
                  setIsMobileMenuOpen(false);
                }}
              >
                <img src="cart.svg" alt="" className="mr-2" />
                <span>Cart</span>
                <div className="absolute top-1 right-4 w-4 bg-lime-400 rounded-full h-4 text-xs text-center flex items-center justify-center">
                  {cartItems.length}
                </div>
              </div>

              {/* My Orders for mobile */}
              <div
                className="flex items-center justify-center py-3 bg-gray-100 rounded-full cursor-pointer"
                onClick={() => {
                  if (!isLogin) {
                    navigate("/sign");
                  } else {
                    navigate("/orders");
                  }
                  setIsMobileMenuOpen(false);
                }}
              >
                <img src="my-orders-icon.svg" alt="" className="w-5 mr-2" />
                <span>My Orders</span>
              </div>
            </div>
          </div>
        )}
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