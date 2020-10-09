import React from 'react'

class CreateForm extends React.Component {
    state = {
        name: "",
        breed: "",
        img: ""
    }
    changeHandler = (e) => {
        console.log("changing")
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" name="name" value={this.state.name} onChange={this.changeHandler} />
                <input type="text" name="breed" value={this.state.breed} onChange={this.changeHandler} />
                <input type="text" name="img" value={this.state.img} onChange={this.changeHandler} />
                <button>Add Dog</button>

            </form>
        )
    }
}

export default CreateForm