import React, {Component} from 'react';

class Tasks extends Component {
    state = {
        newTask: 'add something'
    }

    changeHandler = ev => {
        this.setState({
            [ev.target.name] : ev.target.value
            // newTask: ev.target.value
        })
    }

    addTask = ev => {
        ev.preventDefault();
        

    }

}