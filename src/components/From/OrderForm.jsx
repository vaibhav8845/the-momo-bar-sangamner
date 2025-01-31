import React, { useState } from "react";
import "./OrderForm.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrderForm = () => {
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [momosType, setMomosType] = useState("");
  const [rate, setRate] = useState(0);
  const [dish, setDish] = useState("");
  const [quantity, setQuantity] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const momosOptions = [
    { type: "Veg Momos", rate: 60 },
    { type: "Veg peri peri momos", rate: 70 },
    { type: "Paneer Momos", rate: 70 },
    { type: "Paneer peri peri momos", rate: 80 },
    { type: "Paneer Kurkure momos", rate: 80 },
    { type: "Cheesy burst momos", rate: 90 },
    { type: "Veg cheese momos", rate: 90 },
    { type: "Paneer cheese Momos", rate: 100 },


  ];

  // जब Momos type चेंज करें
  const handleMomosChange = (event) => {
    const selectedMomos = event.target.value;
    setMomosType(selectedMomos);

    const selectedOption = momosOptions.find((option) => option.type === selectedMomos);
    if (selectedOption) {
      setRate(selectedOption.rate);
      setDish(""); // डिफ़ॉल्ट रूप से Dish को खाली रखना
    } else {
      setRate(0);
    }
  };

  // जब Quantity बढ़ाएं या घटाएं
  const handleQuantityChange = (e) => {
    let value = Number(e.target.value);
    if (value >= 1) {
      setQuantity(value);
    } else {
      setQuantity();
    }
  };

  // जब Dish Type चेंज करें
  const handleDishChange = (e) => {
    const selectedDish = e.target.value;
    setDish(selectedDish);

    const selectedOption = momosOptions.find((option) => option.type === momosType);
    if (selectedOption) {
      const baseRate = selectedOption.rate;
      const finalRate = selectedDish === "Fried" ? baseRate + 10 : baseRate;
      setRate(finalRate);
    } else {
      toast.error("Please select a Momos type first.");
    }
  };

  // मोबाइल नंबर वेरिफिकेशन
  const validatePhoneNumber = (number) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(number);
  };

  // फॉर्म सबमिट करना
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!momosType || !dish || quantity < 1) {
      toast.error("Please fill out all required fields correctly.");
      return;
    }

    if (phoneNumber && !validatePhoneNumber(phoneNumber)) {
      toast.error("Invalid phone number format.");
      return;
    }

    const orderData = {
      customerName: customerName || "Anonymous",
      phoneNumber: phoneNumber || 8862088631,
      momosType,
      rate,
      dish,
      quantity,
    };

    setIsSubmitting(true);

    try {
      const response = await axios.post("https://shop-8f8o.onrender.com/api/order", orderData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status >= 200 && response.status < 300) {
        toast.success(`Order placed successfully! Total Price: ₹${rate * quantity}`);
        handleReset();
      } else {
        throw new Error(`Unexpected response: ${response.status}`);
      }
    } catch (error) {
      toast.error(`Failed to place order. Error: ${error.response?.data?.message || error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // फॉर्म रिसेट करना
  const handleReset = () => {
    setCustomerName("");
    setPhoneNumber("");
    setMomosType("");
    setRate(0);
    setDish("");
    setQuantity();
  };

  return (
    <>
      <ToastContainer />
      <div className="pt-5">
        <div className="order-form-container mt-3">
          <h2 className="order-form-title mt-3">Place Your Order</h2>
          <form onSubmit={handleSubmit} className="order-form">
            <div className="form-group">
              <label htmlFor="customerName">Customer Name (Optional)</label>
              <input
                type="text"
                id="customerName"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Enter your name (Optional)"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number (Optional)</label>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number (Optional)"
              />
            </div>
            <div className="form-group">
              <label htmlFor="momosType">Select Momos Type</label>
              <select id="momosType" value={momosType} onChange={handleMomosChange} required>
                <option value="">Select Momos Type</option>
                {momosOptions.map((option, index) => (
                  <option key={index} value={option.type}>
                    {option.type}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="dish">Select Dish Type</label>
              <select id="dish" value={dish} onChange={handleDishChange} required>
                <option value="">Select Dish Type</option>
                <option value="Fried">Fried</option>
                <option value="Steamed">Steamed</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="rate">Rate</label>
              <input type="text" id="rate" value={`₹${rate}`} readOnly placeholder="Rate will auto-fill" />
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                min=""
                required
              />
            </div>
            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Order"}
            </button>
            <button type="button" className="reset-button" onClick={handleReset}>
              Reset
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default OrderForm;
