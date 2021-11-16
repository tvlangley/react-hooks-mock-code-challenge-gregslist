import React, { useState } from "react";

function ListingCard({
  listing: { image, description, location, id },
  updatedListings
}) {
  const [favorite, setFavorite] = useState(false)
  
  const deleteLisitng = () => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    updatedListings(id)
  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={() => {setFavorite(!favorite)}} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => {setFavorite(!favorite)}} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={deleteLisitng} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
