import React from "react";

const QuickMenu = ({ onCardClick }) => {
  const cards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5", "Card 6"];

  return (
    <div className="card-container">
      {cards.map((card) => (
        <div key={card} className="card" onClick={() => onCardClick(card)}>
          {card}
        </div>
      ))}
    </div>
  );
};

export default QuickMenu;
