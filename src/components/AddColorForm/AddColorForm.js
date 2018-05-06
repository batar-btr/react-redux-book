import React, { Component } from 'react';

class AddColorForm extends Component {

    submit = () => {
        const {_title, _color} = this.refs
        console.log(_title, _color)
    }
    
    render() {
        return (
            <form onSubmit={e => e.preventDefault()}>
                <input
                    ref="_title"
                    type="text"
                    placeholder="color title..." required />
                <input
                    ref="_color"
                    type="color"
                    required />
                <button onClick={this.submit}>ADD</button>
            </form>
        )
    }
}

export default AddColorForm;