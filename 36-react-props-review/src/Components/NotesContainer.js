import React, { Component } from 'react'
import Note from './Note'
class NotesContainer extends Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }
    renderNotes = () => {
        return this.apiResponse().map((el) => <Note note={el} khalid="another one" />)
    }

    render() {
        return (
            <ul>{this.renderNotes()}</ul >
            // <Note />
        )
    }

}

export default NotesContainer
