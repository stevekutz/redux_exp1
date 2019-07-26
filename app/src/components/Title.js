import React from 'react';
import {connect} from 'react-redux';

import {updateTitle} from '../actions/actions';

class Title extends React.Component {
    state = {
        newTitleText: ''
    }

    handleChange = ev => {
        this.setState({
            [ev.target.name] : ev.target.value
        });
    }

    updateTitle = ev => {
        ev.preventDefault();
        this.props.updateTitle(this.state.newTitleText);
        this.setState({newTitleText: ''});
    }    

    render() {
        return (
            <div>
               <h2> {this.props.title}</h2> 
               <input 
                type = 'text'
                name = 'newTitleText'
                value = {this.state.newTitleText}
                onChange = {this.handleChange}
               />
            <button onClick = {this.updateTitle}> Update Title</button>
            </div>

        );


    }

}


// 1) Don't FORGET this first
const mapStateToProps = state => {
    return {
        title: state.title
    };
};

// 2) NEXT THIS !!!
export default connect(
    mapStateToProps,
    {updateTitle}   // could be written {updateTitle: updateTitle}
)(Title);
