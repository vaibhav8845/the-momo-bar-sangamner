import React, { useState } from 'react';
import './OrderForm.css'; // External CSS for styling
import axios from 'axios'; // Import axios for HTTP requests
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OrderForm = () => {
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [momosType, setMomosType] = useState('');
  const [rate, setRate] = useState('');
  const [dish, setDish] = useState('');
  const [quantity, setQuantity] = useState(1);

  const momosOptions = [
    { type: 'Veg Momos', rate: '₹80', dish: 'Steamed Veg Momos' },
    { type: 'Veg peri peri momos', rate: '₹90', dish: 'Steamed Veg Momos' },
    { type: 'Paneer Momos', rate: '₹90', dish: 'Steamed Paneer Momos' },
    { type: 'Paneer peri peri momos', rate: '₹100', dish: 'Steamed Paneer Momos' },
    { type: 'Paneer Kurkure momos', rate: '₹100', dish: 'Steamed Paneer Momos' },
    { type: 'Cheesy burst momos', rate: '₹110', dish: 'Steamed Cheesy Momos' },
  ];

  const handleMomosChange = (event) => {
    const selectedMomos = event.target.value;
    setMomosType(selectedMomos);

    const selectedOption = momosOptions.find(option => option.type === selectedMomos);

    if (selectedOption) {
      let newRate = parseInt(selectedOption.rate.replace('₹', ''), 10); // Ensure base rate is numeric
      setRate(`₹${newRate}`);

      if (selectedMomos.includes("Fried")) {
        setDish('Fried');
        newRate -= 10; // Discount for Fried
      } else {
        setDish('Steamed');
      }

      setRate(`₹${newRate}`);
    } else {
      setRate('');
      setDish('');
    }
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderData = {
      customerName,
      phoneNumber: phoneNumber || null,
      momosType,
      rate,
      dish,
      quantity,
    };

    // Ensure numeric value for rate
    const numericRate = parseInt(rate.replace('₹', ''), 10) || 0;
    const totalPrice = numericRate * quantity; // Calculate total price

    console.log('Order Data:', orderData); // Log data being sent

    // Send the order to the backend using Axios
    axios.post('https://shop-8f8o.onrender.com/api/orders', orderData)
      .then(response => {
        console.log('Response:', response); // Check response for debugging
        toast.success(`Order placed successfully! Total Price: ₹${totalPrice}`, {
          autoClose: 10000, // Show the toast for 10 seconds
        });
        handleReset();
      })
      .catch(error => {
        console.error('API Error:', error); // Log full error object
        if (error.response) {
          console.error('Error Response Data:', error.response.data); // Log the response data from API
          toast.error(`Failed to place order: ${error.response.data.message || 'Unknown error'}`);
        } else {
          toast.error('Failed to place order');
        }
      });
  };

  const handleReset = () => {
    setCustomerName('');
    setPhoneNumber('');
    setMomosType('');
    setRate('');
    setDish('');
    setQuantity(1);
  };

  return (
    <>
      <ToastContainer />
      <div className='pt-5'>
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
                  <option key={index} value={option.type}>{option.type}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="dish">Select Dish Type</label>
              <select id="dish" value={dish} onChange={(e) => setDish(e.target.value)} required>
                <option value="">Select Dish Type</option>
                <option value="Fried">Fried</option>
                <option value="Steamed">Steamed</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="rate">Rate</label>
              <input
                type="text"
                id="rate"
                value={rate}
                readOnly
                placeholder="Rate will auto-fill"
              />
            </div>

            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                required
              />
            </div>

            <button type="submit" className="submit-button">Submit Order</button>
            <button type="button" className="reset-button" onClick={handleReset}>Reset</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default OrderForm;
