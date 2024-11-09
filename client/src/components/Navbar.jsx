import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCart } from "../actions/CartControl";
import SimpleDialog from "./SimpleDialog";
import SimpleDialog2 from "./SimpleDialog2";
import SimpleDialog3 from "./SimpleDialog3";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const {
    cartItems,
    isLogin,
    setIsLogin,
    startflag,
    setStartFlag,
  } = useCart();
  const [open, setOpen] = useState(startflag === 0 && !localStorage.getItem("userPincode") ? true : false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLogin(true);
    }
  }, [setIsLogin]);

  // Function to handle search input change
  const handleSearch = async (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      try {
        // Send the search query to the Node.js backend
        const response = await axios.post('http://localhost:3000/recommend', {
          query: value,
        });

        // Process the recommendations returned by the Node.js backend
        if (response.data) {
          setSearchResults(response.data.recommendations); // Display recommendations
          console.log("API Response:", response.data);
          console.log(response.data.recommendations);
        }
      } catch (error) {
        console.error("Error fetching recommendations:", error);
        setSearchResults([]); // Clear search results on error
      }
    } else {
      setSearchResults([]); // Clear results if the search term is empty
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClose3 = () => {
    setOpen3(false);
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

  const userDetail = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="relative">
      <div
        className="w-0 h-0 md:flex md:justify-center md:items-center md:h-11 overflow-visible z-[999] mt-2 md:w-full mb-[-10px] lg:w-0 lg:h-0"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src="/logo.svg" alt="Logo" className="lg:w-[150px] z-[99999] md:w-[150px]" />
      </div>

      <nav className="md:p-2 shadow-md fixed justify-center z-50 flex bg-white w-screen">
        <div className="md:flex items-center w-full lg:p-4 justify-between gap-0 relative sm:block">
          <div className="flex items-center p-0 gap-2">
            <div
              className="text-white text-2xl font-bold mb-4 md:mb-0 cursor-pointer sm:w-full md:w-0 lg:w-fit sm:flex sm:justify-center sm:items-center"
              onClick={() => {
                navigate("/");
              }}
            >
              <img src="/logo.svg" alt="" className="md:w-[0] lg:w-[150px] sm:w-[100px]" />
            </div>
            <div className="md:flex gap-2 md:gap-1 md:justify-center md:scale-90 lg:scale-100 md:items-center md:w-fit sm:hidden">
              {/* Combined Location and Delivery/Pickup Div */}
              <button
                className="h-12 flex px-4 lg:h-fit py-2 flex-row justify-between items-center lg:scale-100 md:px-2 bg-gray-100 shadow-md rounded-full"
                onClick={handleClickOpen}
              >
                <div className="flex flex-row items-center justify-center gap-2">
                  <img src="/location.svg" alt="Location" />
                  <div className="relative flex flex-col justify-start text-left mt-[-3px] text-base leading-4 group">
                    <span className="text-base text-blue-400">{localStorage.getItem("orderType") || "Delivery"}</span>
                    <span className="m-0">{localStorage.getItem("userArea")?.split(" ").slice(0, 2).join(" ") || "Mumbai"}</span>
                  </div>
                </div>
                <img src="/dropdown_nav.svg" alt="Dropdown arrow" />
              </button>
            </div>
            <button className="p-2 bg-white shadow-md rounded sm:hidden">
              <img src="/search.svg" alt="" />
            </button>
          </div>
          <div className="flex-grow md:max-w-md lg:max-w-[600px] mx-5 bg-slate-100 mb-4 md:mb-0 flex flex-row items-center rounded-r-full rounded-l-full shadow-md h-14 pl-10 pr-10 relative">
            <FaSearch className="-ml-7 mr-2 text-lime-400" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full py-2 rounded relative bg-transparent text-black focus:outline-none sm:w-full"
            />

            {/* Search Results */}
            {searchTerm && (
              <div className="search-results absolute top-full left-0 mt-1 p-2 bg-white shadow-lg rounded w-full z-[999]">
                {searchResults.length > 0 ? (
                  searchResults.map((result, index) => (
                    <div
                      key={index}
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => {
                        setSearchTerm(result);
                        setSearchResults([]); // Clear results after selection
                        navigate(`/product/${result.id}`);
                      }}
                    >
                      {result}
                    </div>
                  ))
                ) : (
                  <div>No recommendations found</div>
                )}
              </div>
            )}
          </div>
          <div className="flex md:justify-end md:flex gap-5 w-fit relative sm:block">
            {/* Cart and Profile Section */}
            <div className="flex relative w-fit bg-gray-100 pl-2 lg:px-4 py-2 shadow-md rounded-full" onClick={() => navigate("/cart")}>
              <img src="cart.svg" alt="" />
              <button className="pr-5">Cart</button>
              <div className="absolute top-0 right-0 w-4 bg-lime-400 rounded-full h-4 text-xs text-center">{cartItems.length}</div>
            </div>
            <div className="flex bg-gray-100 rounded-full shadow-md px-2 lg:px-4 gap-2">
              <img src="my-orders-icon.svg" alt="" className="w-5" />
              <button className="leading-6 md:text-sm lg:text-base" onClick={() => (isLogin ? navigate("/orders") : navigate("/sign"))}>
                My <br />Orders
              </button>
            </div>
          </div>
        </div>
      </nav>
      <SimpleDialog open={open} onClose={handleClose} />
      <SimpleDialog2 open={open2} onClose={handleClose2} handleOption={(value) => { localStorage.setItem("orderType", value); handleClickOpen2(); }} />
      <SimpleDialog3 open={open3} onClose={handleClose3} setIsLogin={setIsLogin} />
    </div>
  );
};

export default Navbar;
