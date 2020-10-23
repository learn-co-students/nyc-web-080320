import React from 'react'

function SearchForm(props) {
    return (
        <input style={{ height: "15px" }} type="text" value={props.searchTerm} onChange={props.changeHandler} />
    )
}

export default SearchForm