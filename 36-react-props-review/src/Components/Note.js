import React from 'react'

// Start with functional first 
function Note({ note, khalid }) {
    // destructuring 
    // let { note } = props
    console.log("note from props:", khalid)
    return <li>{note}</li>
}

export default Note