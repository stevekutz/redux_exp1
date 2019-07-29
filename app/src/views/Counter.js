import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increment, decrement, reset} from '../actions/actionsCounter';


class Counter extends Component {
    state = {
        count: 1010   
    }

    resetTenTen = () => {
        this.setState({
            count: 1010,
        })
    }

    addTenSteps = () => {
        
        for(let i = 0; i < 10; i++){
//            this.setState({count: this.props.countProp})
/*
            this.setState((prevState, props) => ({
                count: prevState.count + 1
            })  )
*/
/* 
            setTimeout( () =>  (
                this.props.increment(),
                this.setState((prevState, props) => ({
                    count: prevState.count + 1
                })  )
                ), 2000 );  
*/               
                setTimeout( () => this.props.increment(), 1000);

                this.setState((prevState, props) => ({
                    count: prevState.count + 1
                })  )
        }
    }

    render() {
        return (
            <div className = 'counterContainer'>
                <h6> Local count state: {this.state.count} </h6>
                <h6> Redux Counter value: {this.props.countProp} </h6>
                <div className = 'counterControls'>
                    <button onClick = {() => {this.props.increment() }}>incremement</button>
                    <button onClick = {() => {this.props.decrement() }}>decrement</button>
                    <button onClick = {() => {this.props.reset() }} >Reset to 10</button>
                    <button onClick = {this.resetTenTen}>reset local to 1010</button>
                    <button onClick = {this.addTenSteps}>Add 10 in steps {this.state.count} </button>
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
