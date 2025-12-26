import React, { useState } from "react";
import Menu from "./Menu";
import "./App.css";

const App = () => {
  const menuData = [
    {
      id: 1,
      title: "Pancakes",
      category: "Breakfast",
      price: 120,
      img: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b",
    },
    {
      id: 2,
      title: "Omelette",
      category: "Breakfast",
      price: 100,
      img: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    },
    {
      id: 3,
      title: "Veg Thali",
      category: "Lunch",
      price: 250,
      img: "https://images.unsplash.com/photo-1628294895950-9805252327bc",
    },
    {
      id: 4,
      title: "Burger",
      category: "Lunch",
      price: 180,
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    },
    {
      id: 5,
      title: "Chocolate Shake",
      category: "Shakes",
      price: 150,
      img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699",
    },
    {
      id: 6,
      title: "Strawberry Shake",
      category: "Shakes",
      price: 160,
      img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87",
    },
  ];

  const [menu, setMenu] = useState(menuData);

  const handleFilter = (category) => {
    const filteredMenu = menuData.filter((item) => item.category === category);
    setMenu(filteredMenu);
  };

  return (
    <div id="main">
      <h1>Our Menu</h1>

      <div>
        <button onClick={() => setMenu(menuData)}>All</button>

        <button id="filter-btn-1" onClick={() => handleFilter("Breakfast")}>
          Breakfast
        </button>

        <button id="filter-btn-2" onClick={() => handleFilter("Lunch")}>
          Lunch
        </button>

        <button id="filter-btn-3" onClick={() => handleFilter("Shakes")}>
          Shakes
        </button>
      </div>

      {/* MENU COMPONENT */}
      <Menu menu={menu} />
    </div>
  );
};

export default App;
