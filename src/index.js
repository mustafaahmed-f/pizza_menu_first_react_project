import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { pizzaData } from "./data.js";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Welcome to our restaurant</h1>
    </header>
  );
}

function Menu() {
  let pizzas = pizzaData;
  // let pizzas = [];
  let numOfPizza = pizzas.length;

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {numOfPizza > 0 ? (
        <ul className="pizzas">
          {/* list rendering */}
          {pizzaData.map((pizza) => {
            return <Pizza pizzaObject={pizza} key={pizza.name} />;
          })}
        </ul>
      ) : (
        <p style={{ color: "Red" }}>
          We are working on our menu. Be patient please !
        </p>
      )}
    </div>
  );
}

function Pizza({ pizzaObject }) {
  return (
    <li className={`pizza${pizzaObject.soldOut ? " sold-out" : ""}`}>
      <img alt={pizzaObject.name} src={pizzaObject.photoName}></img>
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span>{pizzaObject.soldOut ? "SOLD OUT" : pizzaObject.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const timeNow = new Date().getHours();
  const openTime = 9;
  const closeTime = 23;

  return timeNow >= openTime && timeNow <= closeTime ? (
    <Open closeTime={closeTime} />
  ) : (
    <Close />
  );
}

function Open({ closeTime }) {
  return (
    <footer className="footer">We are now open till {closeTime}:00</footer>
  );
}
function Close() {
  return <footer className="footer">We are now closed !</footer>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
