import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'

const Number = (props) => {
    return (
        <div>
            <button onClick={props.decrement}>-</button>
            <span>{props.number}</span>
            <button onClick={props.increment}>+</button>
        </div>
    )
}
 
const mapStateToProps = state => ({
    number: state.number.number
})

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(actions.increment()),
    decrement: () => dispatch(actions.decrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(Number);