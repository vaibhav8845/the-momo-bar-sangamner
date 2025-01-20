import React, { useState } from 'react';
import './OrderForm.css'; // External CSS for styling
import axios from 'axios'; // Import axios for HTTP requests

const OrderForm = () => {
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [momosType, setMomosType] = useState('');
  const [rate, setRate] = useState('');
  const [dish, setDish] = useState('');  // Dish state updated
  const [quantity, setQuantity] = useState(1); // Default quantity is 1

  // List of momos types and their details
  const momosOptions = [
    { type: 'Veg Momos', rate: '₹80', dish: 'Steamed Veg Momos' },
    { type: 'Veg peri peri momos', rate: '₹90', dish: 'Steamed Veg Momos' },
    { type: 'Paneer Momos', rate: '₹90', dish: 'Steamed Paneer Momos' },
    { type: 'Paneer peri peri momos', rate: '₹100', dish: 'Steamed Paneer Momos' },
    { type: 'Paneer Kurkure momos', rate: '₹100', dish: 'Steamed Paneer Momos' },
    { type: 'Cheesy burst momos', rate: '₹110', dish: 'Steamed Cheesy Momos' },
  ];

  // Handle momos type change to auto-fill rate and dish
  const handleMomosChange = (event) => {
    const selectedMomos = event.target.value;
    setMomosType(selectedMomos);

    const selectedOption = momosOptions.find(option => option.type === selectedMomos);

    if (selectedOption) {
      let newRate = parseInt(selectedOption.rate.replace('₹', ''));

      // Set the dish based on the selected momo type
      if (selectedMomos.includes("Fried")) {
        setDish('Steamed');

        newRate -= 10; // Deduct ₹10 for Fried Momos
      } else {
        setDish('Fried');
      }

      setRate(`₹${newRate}`);
    } else {
      setRate('');
      setDish('');
    }
  };

  // Handle quantity change
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  // Handle dish selection (Fried or Steamed)
  const handleDishChange = (e) => {
    const selectedDish = e.target.value;
    setDish(selectedDish);

    // Adjust the rate when dish is changed
    const selectedOption = momosOptions.find(option => option.type === momosType);
    if (selectedOption) {
      let newRate = parseInt(selectedOption.rate.replace('₹', ''));

      if (selectedDish === 'Steamed') {
        newRate -= 10; // Deduct ₹10 for Fried Momos
      }

      // Update the rate based on selected dish
      setRate(`₹${newRate}`);
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the order data
    const orderData = {
      customerName,
      phoneNumber: phoneNumber || null, // Set phoneNumber to null if not provided
      momosType,
      rate,
      dish,
      quantity,
    };

    // Send POST request to the backend API
    axios.post('http://localhost:5000/api/orders', orderData)
      .then(response => {
        alert('Order placed successfully!');
        handleReset();  // Reset the form after successful submission
      })
      .catch(error => {
        alert('Failed to place order');
        console.error(error);
      });
  };

  // Handle form reset
  const handleReset = () => {
    setCustomerName('');
    setPhoneNumber('');
    setMomosType('');
    setRate('');
    setDish('');
    setQuantity(1); // Reset quantity to default value
  };

  return (
    <>
    <div className='pt-5'>
      <div className="order-form-container  mt-5">
        <h2 className="order-form-title mt-4">Place Your Order</h2>
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

          {/* Dish Selection */}
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
