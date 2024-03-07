import React from "react";
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Input, Typography } from "@mui/material";
import { useState } from "react";
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";

const UserDataContainer = styled('form')({
  height: '80vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  padding: '100px',
});

const UserSignContainer = styled('div')({
  height: '80vh',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
});

function areAllCharactersNumbers(inputString) {
  const characters = inputString.split('');
  const allNumbers = characters.every(char => !isNaN(char));
  return allNumbers;
}

function Signup() {
  const [isSignup, setIsSignup] = useState(false);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
  });
  const [validPhone, setValidPhone] = useState(false);
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>

          <UserDataContainer onSubmit={(e)=>{
            e.preventDefault();
            navigate('/')
          }}>
            <Typography variant="h4" gutterBottom>
              {isSignup ? "Sign Up" : "Sign In"}
            </Typography>
            <br />
            {!isSignup && (
              <>
                <Input
                  type="text"
                  placeholder="First Name"
                  className=" w-96"
                  pattern="[A-Za-z]+"
                  title="Please enter a valid First Name"
                  required
                />
                <br />
                <Input
                  required
                  type="text"
                  placeholder="Last Name"
                  className=" w-96"
                  pattern="[A-Za-z]+"
                  title="Please enter a valid Last Name"
                  onChange={(e)=>{
                    setUser({...user, lastName: e.target.value})
                  }}
                />
                <br />
              </>
            )}
            <Input
              type="tel"
              placeholder="Phone Number"
              className=" w-96"
              pattern="[0-9]{10}"
              required={user.phoneNumber.length === 0 ? false : true}
              title="Please enter a valid 10-digit Phone Number"
              onChange={(e)=>{
                setUser({...user, phoneNumber: e.target.value});
                if(e.target.value.length === 10 || e.target.value.length === 0 || typeof e.target.value === 'number'){
                  setValidPhone(false);
                }
                else
                  setValidPhone(true);
                
              }}
            />
            {validPhone && (
            <div className="bg-red-500 w-96 text-white">
              Please enter a valid 10-digit Phone Number
            </div>
            )}
            <br />
            <h1>OR</h1>
            <br />
            <Input 
              type="email" 
              className="w-96"
              placeholder="Email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              title="Please enter a valid Email Address"
              onChange={(e)=>{
                setUser({...user, email: e.target.value});
              }}
            >

            </Input>
            <div className="bg-red-500 w-96 text-white hidden" >
              Please enter a valid Email Address
            </div>
            <br />
            <button
              className=" text-left text-blue-800"
              onClick={() => {
                setIsSignup(!isSignup);
              }}
              type="button"
            >
              {isSignup ? 'Create an Account' : 'Already have an account?'} 
            </button>
              <button className=" bg-green-600 w-32 p-2  mt-7 rounded-2xl text-white" type='submit' onClick={(e)=>{
                // e.preventDefault();
                // navigate('/');
              }}>
                {isSignup ? 'Sign Up' : 'Sign In'}
              </button>
              <br/>
              <GoogleLogin
                  onSuccess={()=>{
                    
                  }}
                  onError={()=>{}}
                  size='large'
                  text='signup_with'

            />

          </UserDataContainer>
      
        </Grid>
        <Grid item xs={6}>
          <UserSignContainer>
            <img src="/sign_in_page.svg" alt="" className=" w-2/4" />
            <br />
          </UserSignContainer>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Signup;
