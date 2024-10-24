import React, { useState } from "react";
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Input, Typography, IconButton, InputAdornment } from "@mui/material";
import { GoogleLoginButton, AppleLoginButton } from "react-social-login-buttons";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from '../configs/firebase.js';
import { signInWithPopup } from "firebase/auth";
import { useCart } from "../actions/CartControl.jsx";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const UserDataContainer = styled('form')({
  height: '80vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
});

const UserSignContainer = styled('div')({
  height: '80vh',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  '@media (max-width: 768px)': {
    display:'none '  
  },

  '@media (min-width: 769px) and (max-width: 1024px)': {
    height: '70vh',  
    padding: '12px',  
  },
});

function Signup() {
  const [isSignup, setIsSignup] = useState(false);
  const [user, setUser] = useState({
    firstName: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [validPhone, setValidPhone] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const { isLogin, setIsLogin, name, setName, userDetails, setUserDetails } = useCart();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      setIsLogin(true);
      setName(user.displayName);
      setUserDetails(user);
      localStorage.setItem('user', JSON.stringify(user));
      toast.success('Google sign-in successful!');
      navigate("/");
    } catch (error) {
      toast.error('Google sign-in failed!');
    }
  };

  const handleAppleSignIn = () => {
    // You can implement Apple login functionality here (using Firebase or Apple SDK)
    toast('Apple login is coming soon!', { icon: '🍏' });
  };

  const createUser = async () => {
    try {
      const response = await axios.post('https://ratna-supermarket.vercel.app/signUp', user);
      toast.success('Signup successful!');
    } catch (err) {
      toast.error('Signup failed! Please try again.');
    } finally {
      navigate('/');
    }
  };

  const signInUser = async () => {
    try {
      const response = await axios.post('https://ratna-supermarket.vercel.app/signIn', { email: user.email, password: user.password });
      const data = response.data;
      const name = data.result.name;
      const token = data.token;
      setIsLogin(true);
      setName(user.name);
      localStorage.setItem('user', JSON.stringify(data.result));
      toast.success('Login successful!');
      navigate('/');
    } catch (error) {
      toast.error('Login failed! Please check your credentials.');
    }
  };

  return (
    <div className="mt-5 px-10">
      <div className="container mx-auto flex justify-start items-center">
        <Box sx={{ flexGrow: 3, marginTop:'100px'}}>
          <Grid container spacing={2} sx={{ padding: '20px' }}>
            <Grid item xs={6}>
              <UserSignContainer style={{marginLeft:'5%'}}>
                <img src="/sign_in_page.svg" alt="" className=" w-3/4" />
              </UserSignContainer>
            </Grid>
            <Grid item xs={6}>
              <UserDataContainer onSubmit={async (e) => {
                e.preventDefault();
                if (!isSignup) {
                  if (user.password !== user.confirmPassword) {
                    toast("Passwords don't match", { icon: '🧐' });
                    return;
                  } else if (user.password.length < 6) {
                    toast("Password must be at least 6 characters long", { icon: '🤖' });
                    return;
                  } else {
                    await createUser();
                  }
                } else {
                  if (user.password.length < 6) {
                    toast("Password must be at least 6 characters long", { icon: '🤖' });
                    return;
                  } else {
                    await signInUser();
                  }
                }
              }}>
                <Typography variant="h5" className="flex">
                  {!isSignup ? "Sign Up" : "Welcome Back!"}
                </Typography>
                <hr style={{width:'25%'}}></hr>
                <br />
                {!isSignup && (
                  <>
                    <Input
                      type="text"
                      placeholder="First Name"
                      className=" w-80"
                      onChange={(e) => setUser({...user, firstName: e.target.value})}
                      required
                    />
                    <br />
                    <Input
                      required
                      type="text"
                      placeholder="Last Name"
                      className=" w-80"
                      onChange={(e) => setUser({...user, lastname: e.target.value})}
                    />
                    <br />
                  </>
                )}
                
                <Input 
                  type="email" 
                  className="w-80"
                  placeholder="Email"
                  onChange={(e) => setUser({...user, email: e.target.value})}
                />
                <br />
                <Input
                  type={showPassword ? 'text' : 'password'}
                  className="w-80"
                  placeholder="Password"
                  onChange={(e) => setUser({...user, password: e.target.value})}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <br />
                {!isSignup && (
                  <>
                    <Input
                      type={showConfirmPassword ? 'text' : 'password'}
                      className="w-80"
                      placeholder="Confirm Password"
                      onChange={(e) => setUser({...user, confirmPassword: e.target.value})}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            edge="end"
                          >
                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <br />
                  </>
                )}
                <button
                  className="text-left text-blue-800 mb-2"
                  onClick={() => setIsSignup(!isSignup)}
                  type="button"
                >
                  {isSignup ? 'New User? Create an Account' : 'Already have an account? Sign In Here'} 
                </button>
                
                <button className="w-72 p-2 rounded-2xl text-white mt-2" 
                  style={{backgroundColor:'#3B7721'}}
                  type='submit'
                >
                  {!isSignup ? 'Sign Up' : 'Sign In'}
                </button>

                <p>Or</p>
                <div className="w-72">
                  <GoogleLoginButton onClick={handleGoogleSignIn} />
                  <AppleLoginButton onClick={handleAppleSignIn} />
                </div>
              </UserDataContainer>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default Signup;
