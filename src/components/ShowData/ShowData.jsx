import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable'; // Import the autoTable plugin
import './ShowData.css';
import {  FaTrash } from 'react-icons/fa'; // Import icons for edit and delete

function ShowData() {
  const [orders, setOrders] = useState([]);

  // Fetch orders from the backend
  useEffect(() => {
    axios
      .get('https://shop-8f8o.onrender.com/api/show') // Replace with your API URL
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => console.error('Error fetching orders:', error));
  }, []);

  // Calculate the final total
  const finalTotal = orders.reduce((sum, order) => {
    const rateValue = parseFloat(order.rate.replace(/[₹,]/g, '')) || 0;
    return sum + rateValue * order.quantity;
  }, 0);

  // Function to download table as PDF
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text('Customer Orders', 14, 10);

    const tableRows = orders.map((order, index) => {
      const rateValue = parseFloat(order.rate.replace(/[₹,]/g, '')) || 0;
      const total = rateValue * order.quantity;
      return [
        index + 1,
        order.customerName,
        order.phoneNumber,
        order.momosType,
        order.rate,
        order.dish,
        order.quantity,
        `₹${total.toFixed(2)}`,
      ];
    });

    const headers = ['Serial No.', 'Customer Name', 'Phone Number', 'Momos Type', 'Rate', 'Dish', 'Quantity', 'Total'];
    doc.autoTable({
      head: [headers],
      body: tableRows,
      startY: 20,
    });

    doc.text(`Total Amount: ₹${finalTotal.toFixed(2)}`, 14, doc.lastAutoTable.finalY + 10);
    doc.save('customer_orders.pdf');
  };

  // Function to handle delete order
  const handleDelete = (orderId) => {
    axios
      .delete(`https://shop-8f8o.onrender.com/api/order/${orderId}`)
      .then((response) => {
        setOrders(orders.filter(order => order._id !== orderId)); // Remove the deleted order from the state
        alert('Order deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting order:', error);
        alert('Error deleting order');
      });
  };

  // Function to handle edit order (you can redirect to an edit page or open a modal)


  return (
    <div className="container table-container mt-5">
      <h2 className="text-center text-dark">Customer Orders</h2>
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
              <th>Actions</th> {/* Added Actions column */}
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => {
              const rateValue = parseFloat(order.rate.replace(/[₹,]/g, '')) || 0;
              const total = rateValue * order.quantity;
              return (
                <tr key={order._id}>
                  <td>{index + 1}</td>
                  <td>{order.customerName}</td>
                  <td>{order.phoneNumber}</td>
                  <td>{order.momosType}</td>
                  <td>{order.rate}</td>
                  <td>{order.dish}</td>
                  <td>{order.quantity}</td>
                  <td>₹{total.toFixed(2)}</td>
                  <td>
                  

                      <FaTrash onClick={() => handleDelete(order._id)} className="delete-btn" /> {/* Delete icon */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="final-total text-dark">Total Amount: ₹{finalTotal.toFixed(2)}</div>

      <div className="download-btn-container">
        <button className="download-btn" onClick={downloadPDF}>
          Download PDF
        </button>
      </div>
    </div>
  );
}

export default ShowData;
