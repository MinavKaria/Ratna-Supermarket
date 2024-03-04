
import React,{ useState,useEffect } from "react";
import Fuse from "fuse.js";
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { Input } from '@mui/material';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  

  const options = {
    keys: ["label"],
    includeScore: true,
    threshold: 0.4, 
  };

  const data = [
    { label: "Item 1" },
    { label: "Item 2" },
  ];

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
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-start relative">
        <div className="text-white text-2xl font-bold mb-4 md:mb-0 md:mr-4">
          <img src="/logo.svg" alt="" className="w-[175px]" />
        </div>

        <div className="flex justify-start items-start w-6/12">
          <button className="mb-4 md:mb-0 md:mr-4 flex flex-row justify-center items-center gap-3 bg-gray-100 rounded-l-full rounded-r-full p-3" onClick={handleClickOpen}>
            <img src="/location.svg" alt="" />
            <div className="flex justify-start text-left text-base flex-col">
              <span className="font-bold m-0">Mulund, Mumbai </span>
              <span className="m-0">400080</span>
            </div>
            <img src="/dropdown_nav.svg" alt="" />
          </button>
          <button className="mb-4 md:mb-0 md:mr-4 flex flex-row justify-center items-center gap-3 bg-gray-100 rounded-l-full rounded-r-full p-3 h-[70px]">
            <div className="flex justify-start text-left text-base flex-col">
              <span className="font-bold m-0 w-">Delivery</span>
            </div>
            <img src="/dropdown_nav.svg" alt="" />
            <img src="carbon_delivery.svg" alt="" />
          </button>
        </div>

        <button
          className="text-white md:hidden focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        <div
          className={`flex justify-end md:flex gap-5 w-full ${
            isMobileMenuOpen ? "block" : "hidden"
          } relative`}
        >
          <div className="flex-grow bg-slate-100 mb-4 md:mb-0 flex flex-row rounded-r-full rounded-l-full pl-10 pr-10 relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full py-2 rounded bg-transparent text-black focus:outline-none"
            />

            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 mt-1 p-2 bg-white shadow-lg rounded w-full z-50">
                {searchResults.map((result) => (
                  <div key={result.label} className="p-2 hover:bg-gray-200 cursor-pointer" onClick={()=>{
                    setSearchTerm(`${result.label}`);
                    setSearchResults([]);

                  }}>
                    {result.label}
                  </div>
                ))}
              </div>
            )}
          </div>
             <button className="p-2 bg-white shadow-md rounded">
              <img src="/search.svg" alt="" />
            </button>

          <div className="flex items-center space-x-4">
            <button className=" ">Login</button>
            <button className="">Cart</button>
          </div>
        </div>
      </div>
    </nav>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </>
  );
};

export default Navbar;


const emails = ['minavpkaria@gmail.com', 'user02@gmail.com'];


function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  const [pincode, setPincode] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleClose = () => {
    onClose(selectedValue);
  };

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        if (pincode.length === 6) {
          const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
          const data = await response.json();

          if (data[0]?.Status === 'Success') {
            const areaSuggestions = data[0]?.PostOffice?.map((office) => office.Name) || [];
            setSuggestions(areaSuggestions);
          } else {
            setSuggestions([]);
          }
        } else {
          setSuggestions([]);
        }
      } catch (error) {
        console.error('Error fetching suggestions:', error);
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [pincode]);

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const handleInputChange = (e) => {
    setPincode(e.target.value);
  };

  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Enter your Pincode</DialogTitle>
        <div className=" p-5">
          <form
            action="/"
            onSubmit={(e) => {
              e.preventDefault();
              localStorage.setItem('userPincode', pincode);
              setPincode('');
              handleClose();
            }}
          >
            <Input
              type="text"
              placeholder="Enter your Pincode"
              value={pincode}
              onChange={handleInputChange}
              className="mb-5"
            />

            <div>
              <ul className="absolute z-50 bg-white w-10/12 shadow-lg">
                {suggestions.map((suggestion, index) => (
                  <li key={index} onClick={() => handleListItemClick(suggestion)}>
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>

            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </Dialog>
    </>
  );
}
