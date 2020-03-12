import React from "react"
import "../Style/searchbar.css"

const SearchBar = ({ handleSubmit, handleChange, value, name }) => {
  return (
    <div className='search-container'>
      <form className="search-bar" action="" onSubmit={handleSubmit}>
          <input
            className="search-bar-input"
            placeholder="Search..."
            type="text"
            onChange={handleChange}
            value={value}
            name={name}
          />
      </form>
    </div>
  )
}

export default SearchBar
