import React from 'react'

const SearchBar = (props) => {
    return (
        <div>
            <form action="" onSubmit={props.handleSubmit}>
            <div>
                <input placeholder="Search..." type="text" onChange={props.handleChange}/>
            </div>
            </form>
        </div>
    )
}

export default SearchBar;