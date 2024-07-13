import axios from "axios";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);
  const [availableCount, setAvailableCount] = useState(0);
  const [fileName, setFileName] = useState("")
  const navigate = useNavigate();
  const fileInputRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log("name:", name);
    console.log("price:", price);
    console.log("image", image)
    formData.append("name", name);
    formData.append("price", price);
    formData.append("image", image);
    formData.append("count", availableCount);
    // const res= await fetch("http://localhost:6005/api/v1/orders/upload/food-details", {
    //   method: "POST",
    //   body: formData,
    //   headers: {'Content-Type': 'multipart/form-data'}
    // })
    //const config = {headers: {'Content-Type': 'multipart/form-data'}}
    try {
      const data = await axios.post(
        "http://localhost:6005/api/v1/orders/upload/food-details",
        formData
      );
      const result = await data.json();
    console.log("data", result);
    } catch (err) {
      console.log(err);
    }

  };

  const handleClick = (event) => {
    fileInputRef.current.click()
    const file = event.target.files[0]
    setImage(file)
    console.log('image',image)
  }

  const handleFileChange = (event) => {
    if(event.target.files[0]){
      setFileName(event.target.files[0].name)
    }
  }
  useEffect(() => {
    const token = localStorage.getItem("AdminToken");
    if (!token) {
      navigate("/login");
      return;
    }
  });
  return (
    <div>
      {/* <h1 className="main-header-name">QuickServe</h1> */}
      <div className="main-header-box">
        <div className="food-border-head-bold-main-ttl q">Q</div>
        <div className="food-border-head-nrml-ttl q">uick</div>
        <div className="food-border-head-bold-main-ttl s">S</div>
        <div className="food-border-head-nrml-ttl s">erve</div>
      </div>
      <div className="food-book-order-box-main">
        <div className="food-book-order-box">
          <h2 className="heading-menu-breakfast">Breakfast Menu</h2>
          <form onSubmit={handleSubmit} className="form-class">
            <label for="food-name" className="food-name-label">Food Name<span className="required">*</span></label>
            <input
              type="text"
              id="food-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="food-name-ipt"
            />
            
            <label for="food-price" className="food-price-label">Food Price<span className="required">*</span></label>
            <input
              type="number"
              id="food-price"
              value={price==0? '' : price}
              onChange={(e) => setPrice(e.target.value)}
              className="food-price-ipt"
            />

            <label for="food-availability" className="food-count-label">Availability</label>
            <input
              type="number"
              id="food-availability"
              value={availableCount}
              onChange={(e) => setAvailableCount(e.target.value)}
            />

            <div className="file-upload">
            <label htmlFor="file-input" className="file-ipt-label">Upload the image for the food</label>
            <input type="file" className="file-ipt" ref={fileInputRef} onChange={handleFileChange}></input>
            <button className="custom-file-upload" onClick={handleClick}>{fileName && `${fileName} is uploaded` || "Click to upload"}</button>
           
            {/* <input type="file" id="file-input" ref={fileInputRef}  className="file-ipt" onChange={handleFileChange} /> */}
            </div>

            <button type="submit" className="food-ordr-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
