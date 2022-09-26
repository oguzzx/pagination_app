import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(3);

  function showMoreMeals() {
    setVisible((item) => item + 3);
  }

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=british")
      .then((res) => res.json())
      .then((data) => setItems(data.meals));
  }, []);

  return (
    <div className="App">
      <h1 className="header">British Meals</h1>
      <div className="container">
        {items.slice(0, visible).map((item) => {
          return (
            <div className="card">
              <div className="image">
                <img src={item.strMealThumb} />
              </div>
              <div>{item.strMeal}</div>
            </div>
          );
        })}
        <button onClick={showMoreMeals}>Click for more meals</button>
      </div>
    </div>
  );
}

export default App;
