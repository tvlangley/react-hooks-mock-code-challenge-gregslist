import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import { useEffect, useState } from "react";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(data => setListings(data))
  }, [])

  const deleteListing = (id) => {
    const updatedListings = listings.filter((listing) => listing.id !== id)
    setListings(updatedListings)
  }

  return (
    <div className="app">
      <Header handleSearch={setSearch}/>
      <ListingsContainer listings={listings} deleteListing={deleteListing} />
    </div>
  );
}

export default App;
