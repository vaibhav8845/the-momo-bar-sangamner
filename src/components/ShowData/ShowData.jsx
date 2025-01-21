import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ShowData.css';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable'; // Import the autoTable plugin

function ShowData() {
  const [orders, setOrders] = useState([]); // State to store fetched orders

  // Fetch orders data from the backend
  useEffect(() => {
    axios
      .get('https://shop-8f8o.onrender.com/api/show') // Replace with your API URL
      .then((response) => {
        setOrders(response.data); // Set the fetched data to the state
      })
      .catch((error) => {
        console.error('Error fetching orders:', error);
      });
  }, []);

  // Calculate the final total amount
  const finalTotal = orders.reduce((sum, order) => {
    const rateValue = parseFloat(order.rate.replace(/[₹,]/g, '')) || 0; // Handle NaN gracefully
    const total = rateValue * order.quantity;
    return sum + total;
  }, 0);

  // Function to download the table as PDF
  const downloadPDF = () => {
    const doc = new jsPDF();

    // Add title
    doc.text('Customer Orders', 14, 10);

    // Generate table rows
    const tableRows = orders.map((order, index) => {
      const rateValue = parseFloat(order.rate.replace(/[₹,]/g, '')) || 0; // Handle NaN gracefully
      const total = rateValue * order.quantity;
      return [
        index + 1,
        order.customerName,
        order.phoneNumber,
        order.momosType,
        order.rate,
        order.dish,
        order.quantity,
        '₹' + total.toFixed(2), // Format total to 2 decimal places
      ];
    });

    // Set up the table headers and generate the table
    const headers = ['Serial No.', 'Customer Name', 'Phone Number', 'Momos Type', 'Rate', 'Dish', 'Quantity', 'Total'];
    doc.autoTable({
      head: [headers],
      body: tableRows,
      startY: 20, // Starting Y position for the table
    });

    // Add the final total amount to the PDF
    doc.text(`Total Amount: ₹${finalTotal.toFixed(2)}`, 14, doc.lastAutoTable.finalY + 10);

    // Save the PDF
    doc.save('customer_orders.pdf');
  };

  return (
    <>
      <div className="container table-container mt-5 pt-5 pb-5">
        <h2 className="text-center">Customer Orders</h2>

        {/* Wrap table in div for horizontal scrolling on smaller screens */}
        <div className="table-responsive">
          <table className="table order-table">
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>Customer Name</th>
                <th>Phone Number</th>
                <th>Momos Type</th>
                <th>Rate</th>
                <th>Dish</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => {
                const rateValue = parseFloat(order.rate.replace(/[₹,]/g, '')) || 0; // Handle NaN gracefully
                const total = rateValue * order.quantity; // Calculate total
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{order.customerName}</td>
                    <td>{order.phoneNumber}</td>
                    <td>{order.momosType}</td>
                    <td>{order.rate}</td>
                    <td>{order.dish}</td>
                    <td>{order.quantity}</td>
                    <td>₹{total.toFixed(2)}</td> {/* Display the total cost */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Total Amount */}
        <div className="final-total">
          <h3 className="text-center">Total Amount: ₹{finalTotal.toFixed(2)}</h3> {/* Display the final total amount */}
        </div>

        {/* Download PDF Button */}
        <div className="download-btn-container">
          <button onClick={downloadPDF} className="download-btn">Download PDF</button>
        </div>
      </div>
    </>
  );
}

export default ShowData;
