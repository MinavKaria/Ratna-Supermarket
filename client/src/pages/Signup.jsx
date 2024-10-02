import React from "react";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Input, Typography } from "@mui/material";
import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../configs/firebase.js";
import { signInWithPopup } from "firebase/auth";
// import { GithubAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// import {provider} from '../configs/firebase.js';
import { useCart } from "../actions/CartControl.jsx";
import { GoogleLoginButton } from "react-social-login-buttons";
import axios from "axios";

const UserDataContainer = styled("form")({
  height: "80vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
});

const UserSignContainer = styled("div")({
  height: "80vh",
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
});

function areAllCharactersNumbers(inputString) {
  const characters = inputString.split("");
  const allNumbers = characters.every((char) => !isNaN(char));
  return allNumbers;
}

function Signup() {
  const [isSignup, setIsSignup] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [validPhone, setValidPhone] = useState(false);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      // Sign in with Google
      const result = await signInWithPopup(auth, googleProvider);

      const user = result.user;
      setIsLogin(true);
      setName(user.displayName);
      setUserDetails(user);
      const uid = user.uid;
      localStorage.setItem("user", JSON.stringify(user));
      console.log("Google sign-in success:", user);

      navigate("/");
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  const { isLogin, setIsLogin, name, setName, userDetails, setUserDetails } =
    useCart();

  // const handleGithubSignIn = async () => {
  //   const auth = getAuth();
  //   signInWithPopup(auth, GithubAuthProvider)
  //     .then((result) => {
  //       // Handle successful GitHub sign-in
  //       const user = result.user;
  //       console.log("GitHub sign-in success:", user);
  //       // Navigate to the desired page or update UI accordingly
  //       navigate("/");
  //     })
  //     .catch((error) => {
  //       // Handle GitHub sign-in error
  //       console.error("GitHub sign-in error:", error);
  //     });
  // };
  const createUser = async () => {
    console.log(user);
    try {
      const response = await axios.post(
        "https://ratna-supermarket.vercel.app/signUp",
        user
      );
      console.log(response.result);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("User created");
      navigate("/");
    }
  };
  const signInUser = async () => {
    console.log("user");
    const response = await axios.post(
      "https://ratna-supermarket.vercel.app/signIn",
      { email: user.email, password: user.password }
    );
    console.log(response);
    const data = response.data;
    const name = data.result.name;
    const token = data.token;
    setIsLogin(true);
    setName(user.name);
    localStorage.setItem("user", JSON.stringify(data.result));
    navigate("/");
  };

  return (
    <div className="mt-5 px-10">
      <div className="container mx-auto flex justify-start items-center">
        <Box sx={{ flexGrow: 1, marginTop: "100px" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <UserDataContainer
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (!isSignup) {
                    if (user.password !== user.confirmPassword) {
                      alert("Passwords don't match");
                      return;
                    } else if (user.password.length < 6) {
                      alert("Password must be at least 6 characters long");
                      return;
                    } else {
                      await createUser();
                    }
                  } else {
                    if (user.password.length < 6) {
                      alert("Password must be at least 6 characters long");
                      return;
                    } else {
                      await signInUser();
                    }
                  }
                }}
              >
                <Typography variant="h4" gutterBottom>
                  {isSignup ? "Sign In" : "Sign Up"}
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
                      onChange={(e) => {
                        setUser({ ...user, firstName: e.target.value });
                      }}
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
                      onChange={(e) => {
                        setUser({ ...user, lastname: e.target.value });
                      }}
                    />
                    <br />
                  </>
                )}

                {validPhone && (
                  <div className="bg-red-500 w-96 text-white">
                    Please enter a valid 10-digit Phone Number
                  </div>
                )}

                <Input
                  type="email"
                  className="w-96"
                  placeholder="Email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  title="Please enter a valid Email Address"
                  onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                  }}
                ></Input>
                <div className="bg-red-500 w-96 text-white hidden">
                  Please enter a valid Email Address
                </div>
                <br />
                <Input
                  type="password"
                  className="w-96"
                  placeholder="Password"
                  pattern=".{6,}"
                  title="Password must be at least 6 characters long"
                  onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                  }}
                ></Input>
                <br />

                {!isSignup && (
                  <>
                    <Input
                      type="password"
                      className="w-96"
                      placeholder="Confirm Password"
                      pattern=".{6,}"
                      title="Password must be at least 6 characters long"
                      onChange={(e) => {
                        setUser({ ...user, confirmPassword: e.target.value });
                      }}
                    ></Input>
                    <br />
                  </>
                )}
                <button
                  className=" text-left text-blue-800"
                  onClick={() => {
                    setIsSignup(!isSignup);
                  }}
                  type="button"
                >
                  {isSignup ? "Create an Account" : "Already have an account?"}
                </button>
                <br />
                <button
                  className=" bg-green-600 w-32 p-2  rounded-2xl text-white"
                  type="submit"
                  onClick={(e) => {
                    // e.preventDefault();
                    // navigate('/');
                  }}
                >
                  {isSignup ? "Sign Up" : "Sign In"}
                </button>
                <br />
                {/* <GoogleLogin
                  onSuccess={()=>{
                    
                  }}
                  onError={()=>{}}
                  size='large'
                  text='signup_with'

            /> */}

                {/* <button
                    className="bg-red-500 w-52 p-2 mt-3  text-white"
                    type="button"
                    onClick={handleGoogleSignIn}
                  >
                    Firebase Google Sign In
                  </button> */}
                <div className="w-72">
                  <GoogleLoginButton
                    type="button"
                    onClick={handleGoogleSignIn}
                    size="50px"
                  />
                </div>

                {/* 
                  <button onClick={handleGithubSignIn} type="button" className="bg-red-500 w-32 p-2 mt-3 rounded-2xl">
                    Sign In with GitHub
                  </button> */}
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
      </div>
    </div>
  );
}

export default Signup;
