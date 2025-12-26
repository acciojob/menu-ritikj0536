import React from "react";

const Menu = ({ menu }) => {
  return (
    <div className="menu-container">
      {menu.map((item) => {
        return (
          <div key={item.id} className="menu-item">
            <img
              src={item.img}
              className="menu-img"
              alt={item.title}
            />

            <div className="menu-info">
              <h4 className="menu-title">{item.title}</h4>
              <span className="menu-price">₹{item.price}</span>
              <p className="menu-category">{item.category}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
