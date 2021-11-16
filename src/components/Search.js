import React from "react";
import { useState } from "react";

function Search({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    handleSearch(searchTerm)
    console.log("submitted")
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
