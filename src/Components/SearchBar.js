import React from "react"
import "../Style/searchbar.css"

const SearchBar = ({ handleSubmit, handleChange, value, name }) => {
  return (
    <div>
      <form className="search-bar" action="" onSubmit={handleSubmit}>
        <div>
          <input
            className="search-bar-input"
            placeholder="Search..."
            type="text"
            onChange={handleChange}
            value={value}
            name={name}
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar
