import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increment, decrement, reset} from '../actions/actionsCounter';

class Counter extends Component {
    state = {
        count: 0   // never seen
    }



    render() {
        return (
            <div className = 'counterContainer'>
                <h6> Counter value: {this.state.count} </h6>
                <h6> Redux Counter value: {this.props.countProp} </h6>
                <div className = 'counterControls'>
                    <button onClick = {() => {this.props.increment() }}>incremement</button>
                    <button onClick = {() => {this.props.decrement() }}>decrement</button>
                    <button>Reset</button>
                </div>
            </div>
        )
    }
}





const mapStateToProps = state => {
    return {
        // countProp:  state.countVal
        countProp: state.counterReducer.countVal
    }
}

export default connect(
    mapStateToProps,
    {increment, decrement, reset}
)(Counter);
