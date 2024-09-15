import React from 'react';
import './Menu.css'; // Import the CSS file for styling

const Menu = () => {
  return (
    <div className="menu-container mt-5">
      <h1 className="menu-title container-fluid">OUR MENU</h1>
      {/* <div className="menu-buttons">
        <button className="menu-button active">Steamed Momos</button>
        <button className="menu-button">Fried Momos</button>
        <button className="menu-button">Tandoori Momos</button>
      </div> */}
      <div className="menu-content">

        <div className="menu-item">
          <h2 className="item-title">VEG STEAM MOMOS</h2>
          <ul className="item-list">
            <li>Veg Momo</li>
            <li>Veg Cheese Momo</li>
            <li>Paneer Achari Momo</li>
            <li>Paneer Peri Peri Momo</li>
            <li>Pizza Momo</li>
          </ul>
        </div>
        
        <div className="menu-item">
          <h2 className="item-title">NON-VEG STEAM MOMOS</h2>
          <ul className="item-list">
            <li>Chicken Momo</li>
            <li>Chicken Tikka Momo</li>
            <li>Chicken Peri Peri Momo</li>
            <li>Chicken Shezwan Momo</li>
            <li>Chicken Cheese Peri Peri Momo</li>
          </ul>
        </div>
        <div className="menu-item">
          <h2 className="item-title">VEG FRY MOMOS</h2>
          <ul className="item-list">
            <li>Veg Momo</li>
            <li>Veg Cheese Momo</li>
            <li>Paneer Achari Momo</li>
            <li>Paneer Peri Peri Momo</li>
            <li>Pizza Momo</li>
          </ul>
        </div>




        <div className="menu-item">
          <h2 className="item-title">NON-VEG FRY MOMOS</h2>
          <ul className="item-list">
            <li>Chicken Momo</li>
            <li>Chicken Tikka Momo</li>
            <li>Chicken Peri Peri Momo</li>
            <li>Chicken Shezwan Momo</li>
            <li>Chicken Cheese Peri Peri Momo</li>
          </ul>
        </div>
        


      </div>
    </div>
  );
};

export default Menu;
