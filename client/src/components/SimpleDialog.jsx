import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Input } from '@mui/material';
import { useState,useEffect } from 'react';
import { toast } from 'react-hot-toast';
function SimpleDialog(props) {
    const { onClose, open } = props;
    const [pincode, setPincode] = useState('');
    const [suggestions, setSuggestions] = useState([]);
  
    const handleClose = () => {
      if(pincode.length === 6 && localStorage.getItem('userArea')){
      onClose();
      }
      else
      {
        toast.error("Please enter a valid pincode & select an area from the list.");
      }
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
          <div className=" p-6">
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
                className="mb-3"
              />
  
             
  
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </form>
  
            <div>
                <ul className="absolute z-50 p-1 bg-white w-10/12 shadow-lg">
                  {suggestions.map((suggestion, index) => (
                    <>
                      <button key={index} onClick={(e)=>{
                        localStorage.setItem('userArea', suggestion);
                        localStorage.setItem('userPincode', pincode);
                        setSuggestions([]);
                      }}>
                        {suggestion}
                      </button>
                    <br />
                    </>
                  ))}
                </ul>
              </div>
          </div>
        </Dialog>
      </>
    );
  }

export default SimpleDialog;