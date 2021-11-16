import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, setListings}) {

  const updatedListings = (deletedLisitingID) => {
    const newListings = listings.filter(listing => listing.id !== deletedLisitingID)
    setListings(newListings)
  }

  const displayListings = listings.map(listing => <ListingCard key={listing.id} listing={listing} updatedListings={updatedListings} /> )

  return (
    <main>
      <ul className="cards">
        {displayListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
