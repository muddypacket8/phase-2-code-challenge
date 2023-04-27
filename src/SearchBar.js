import React, { useState } from "react";
import PropTypes from "prop-types";

function SearchBar({ onSearch }) {
const [searchTerm, setSearchTerm] = useState("");

const handleSearch = () => {
if (typeof onSearch === "function") {
    // e.preventDefault();
onSearch(searchTerm);
}
};

return (
<div className="search-bar">
<h2>Search Transactions</h2>
<input
type="text"
placeholder="Search by description"
value={searchTerm}
onChange={(event) => setSearchTerm(event.target.value)}
/>
<button onClick={handleSearch}>Search</button>
</div>
);
}

SearchBar.propTypes = {
onSearch: PropTypes.func.isRequired,
};

export default SearchBar;