import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  styled,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BackgroundContainer = styled("div")({
  backgroundImage: `url('https://assets.bonappetit.com/photos/6491b45d047251c7e5ee269b/16:9/w_2560%2Cc_limit/GettyImages-107806725.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: -1, // Ensure it's behind other content
  backdropFilter: "blur(5px)",
});

function Vendor() {
  const [productData, setProductData] = useState({
    name: "",
    quantity: "",
    price: "",
    image: "",
    discount: "",
    category: "",
  });
  const navigator = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      // Make API call to submit product data
      await axios.post("/api/products", productData);
      // Reset form data after submission
      setProductData({
        name: "",
        quantity: "",
        price: "",
        image: "",
        discount: "",
        category: "",
      });
      // Optionally show success message or redirect
    } catch (error) {
      console.error("Error submitting product data:", error);
      // Optionally show error message
    }
  };

  return (
    <BackgroundContainer>
    <div className="flex gap-5 ">
      <div className="">
        <button className=" bg-cyan-300 rounded-lg p-5" onClick={()=>{
          navigator("/vendor/orders")
        }}>Orders Received</button>
      </div>
      <div>
        <button className=" bg-cyan-300 rounded-lg p-5" onClick={()=>{
          navigator("/vendor/products")
        }}>Products</button>

      </div>
    </div>
      <div className="mt-[120px]">
        <Container>
          <h2 className="text-5xl m-10 text-bold">Vendor Side</h2>
          <br />
          <form
            className="flex flex-col gap-2 w-100"
            noValidate
            autoComplete="off"
          >
            <TextField
              name="name"
              label="Product Name"
              variant="outlined"
              value={productData.name}
              onChange={handleChange}
              className="bg-white"
            />
            <TextField
              name="quantity"
              label="Quantity"
              variant="outlined"
              value={productData.quantity}
              onChange={handleChange}
              className="bg-white"
            />
            <TextField
              name="price"
              label="Price"
              variant="outlined"
              value={productData.price}
              onChange={handleChange}
              className="bg-white"
            />
            <TextField
              name="image"
              label="Image URL"
              variant="outlined"
              value={productData.image}
              onChange={handleChange}
              className="bg-white"
            />
            <TextField
              name="discount"
              label="Discount"
              variant="outlined"
              value={productData.discount}
              onChange={handleChange}
              className="bg-white"
            />
            <Select
              name="category"
              value={productData.category}
              onChange={handleChange}
              variant="outlined"
              displayEmpty
              className="bg-white"
            >
              <MenuItem value="" disabled>
                Select Category
              </MenuItem>
              <MenuItem value="Electronics">Electronics</MenuItem>
              <MenuItem value="Clothing">Clothing</MenuItem>
              <MenuItem value="Home & Kitchen">Home & Kitchen</MenuItem>
            </Select>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </form>
        </Container>
      </div>
    </BackgroundContainer>
  );
}

export default Vendor;
