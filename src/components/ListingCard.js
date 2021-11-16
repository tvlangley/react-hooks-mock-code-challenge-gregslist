import React from "react";
import { useState } from "react";

function ListingCard({
  listing: { id, description, image, location },
  deleteListing
}) {
  const [favorite, setFavorite] = useState(false)

  const handleListingDelete = () => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    deleteListing(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={() => setFavorite(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setFavorite(true)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleListingDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
