import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increment, decrement, reset} from '../actions/actionsCounter';


class Counter extends Component {
    state = {
        count: 1000   // never seen
    }

    resetZero = () => {
        this.setState({
            count: 0
        })


    }



    render() {
        return (
            <div className = 'counterContainer'>
                <h6> Local count state: {this.state.count} </h6>
                <h6> Redux Counter value: {this.props.countProp} </h6>
                <div className = 'counterControls'>
                    <button onClick = {() => {this.props.increment() }}>incremement</button>
                    <button onClick = {() => {this.props.decrement() }}>decrement</button>
                    <button onClick = {() => {this.props.reset() }} >Reset</button>
                    <button onClick = {this.resetZero}>reset to 0</button>
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
