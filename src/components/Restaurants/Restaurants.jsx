import React from "react";

const Restaurants = ({ onCardClick }) => {
  const gridCards = [
    "Grid Card 1",
    "Grid Card 2",
    "Grid Card 3",
    "Grid Card 4",
    "Grid Card 5",
    "Grid Card 6",
    "Grid Card 7",
    "Grid Card 8",
  ];

  // Divide cards into chunks of 4 (representing pages)
  const chunkedCards = [];
  for (let i = 0; i < gridCards.length; i += 4) {
    chunkedCards.push(gridCards.slice(i, i + 4));
  }

  return (
    <div className="grid-container">
      {chunkedCards.map((page, pageIndex) => (
        <div className="grid-page" key={pageIndex}>
          {page.map((card) => (
            <div
              className="grid-card"
              key={card}
              onClick={() => onCardClick(card)}
            >
              {card}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Restaurants;
