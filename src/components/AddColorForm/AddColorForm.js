import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
class AddColorForm extends Component {

    submit = () => {
        const { _title, _color } = this.refs
        console.log(_title, _color)
    }

    render() {
        return (
            <div>
                <FontAwesomeIcon icon='coffee' />
                <FontAwesomeIcon icon='times' spin />
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
            </div>
        )
    }
}

export default AddColorForm;