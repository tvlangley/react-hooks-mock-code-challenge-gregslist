import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, deleteListing }) {

  const displayListings = listings.map(listing => <ListingCard key={listing.id} listing={listing} deleteListing={deleteListing} />)

  return (
    <main>
      <ul className="cards">
        {displayListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
