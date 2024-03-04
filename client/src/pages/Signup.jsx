import React from "react";
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Input, Typography } from "@mui/material";
import { useState } from "react";
import { GoogleLogin } from '@react-oauth/google';

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

function Signup() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>

          <UserDataContainer>
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
                />
                <br />
                <Input
                  type="text"
                  placeholder="Last Name"
                  className=" w-96"
                  pattern="[A-Za-z]+"
                  title="Please enter a valid Last Name"
                />
                <br />
              </>
            )}
            <Input
              type="tel"
              placeholder="Phone Number"
              className=" w-96"
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit Phone Number"
            />
            <br />
            <button
              className=" text-left text-blue-800"
              onClick={() => {
                setIsSignup(!isSignup);
              }}
              type="button"
            >
              {isSignup ? 'Create an Account' : 'Already have an account?'} </button>
              <button className=" bg-green-600 w-32 p-2  mt-7 rounded-2xl text-white" type='submit'>
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
