import React from 'react'
import '../Style/searchbar.css'

const SearchBar = (props) => {
    return (
        <div>
            <form action="" onSubmit={props.handleSubmit}>
            <div>
                <input className="search-bar" placeholder="Search..." type="text" onChange={props.handleChange}/>
            </div>
            </form>
        </div>
    )
}

export default SearchBar;