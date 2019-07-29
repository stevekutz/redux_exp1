import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from '../actions/actionsCounter';

class Counter extends React.Component {
    state = {
        count: 0   // never seen
    }


    render() {
        return (
            <div className = 'counterContainer'>
                <h6> Counter value: {this.state.count} </h6>
                <div className = 'counterControls'>
                    <button >incremement</button>
                    <button>decrement</button>
                </div>

            </div>
        )


    }



}





const mapStateToProps = state => {
    return {
        countProp:  state.count
    }
}

export default connect(
    mapStateToProps,
    {increment, decrement}
)(Counter);
