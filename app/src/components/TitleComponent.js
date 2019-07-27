import React from 'react';
import {connect} from 'react-redux';

const TitleComponent = (props) => {
    return (
        <div>
            <h6> <span>FC Shared state</span> {props.title}</h6>
        </div>

    )
}

const mapStateToProps = state => {
    return{
        title: state.titleReducer.title
    }
}

export default connect(
    mapStateToProps
)(TitleComponent);