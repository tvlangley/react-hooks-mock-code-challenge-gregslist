import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")

  // fetch listings from localhost
  // need to use useEffect and useState
  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(data => setListings(data))
  }, [])

  const searchedListings = listings.filter(listing => {
    return listing.description.includes(search)
  })

  return (
    <div className="app">
      <Header setSearch={setSearch} />
      <ListingsContainer listings={searchedListings} setListings={setListings} />
    </div>
  );
}

export default App;
