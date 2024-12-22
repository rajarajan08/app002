// App.js
import React from "react";
import AppHeader from "./components/AppHeader/AppHeader";
import QuickMenu from "./components/QuickMenu/QuickMenu";
import Restaurants from "./components/Restaurants/Restaurants";
import BottomAppBar from "./components/BottomAppBar/BottomAppBar";
import "./App.css"; // Import your styles

function App() {
  const handleCardClick = (name) => {
    alert(`You clicked on ${name}!`);
  };
  // const phoneNumber = "7708577606"; // Replace with the recipient's phone number
  // const message = "Hello! I'm interested in your services."; // Replace with your message

  // const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  //   message
  // )}`;

  return (
    <div>
      <AppHeader />

      <div className="container">
        <h4>Favourite menu</h4>
        {/* <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          Send Message on WhatsApp
        </a> */}
        <QuickMenu onCardClick={handleCardClick} />

        <h4>Available Hotels list</h4>
        <p>Select one to see the menu</p>
        <Restaurants onCardClick={handleCardClick} />
      </div>
      <BottomAppBar onNavClick={handleCardClick} />
    </div>
  );
}

export default App;
