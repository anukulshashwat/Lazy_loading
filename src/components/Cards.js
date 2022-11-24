import React from "react";

const Cards = ({ item }) => {
  return (
    <div className="card-container">
      <img
        className="card-avatar"
        src={`https://avatars.dicebear.com/api/male/${item.title}.svg?`}
        alt={item.title}
      />
      <p className="card-title">{item.title}</p>
    </div>
  );
};

export default Cards;
