import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addTask, toggleTask} from '../actions';

// 1) 
class Tasks extends Component {
    state = {
        newTask: 'add something'
    }

    changeHandler = ev => {
        this.setState({
            //[ev.target.name] : ev.target.value
             newTask: ev.target.value
        })
    }

    addNewTask_h = ev => {
        ev.preventDefault();
        this.props.addTask(this.state.newTask);

        this.setState({
            newTask: 'add something else'
        })

    }

    toggleTask_h = id => {
        this.props.toggleTask(id);
    }


    // 3) 
    render() {
        return(
            <div>    
                <div className = 'taskListContainer'>
                    {this.props.tasks.map((taskItem, index) => (
                        <h7 onClick = { () => this.toggleTask_h(taskItem.id)} key = {taskItem.id}>
                            {taskItem.description}
                            {taskItem.completed && <i className="fas fa-atom" />}
                        </h7>
                    ))}
                </div> 
                <form>
                    <input 
                        type = 'text'
                        value = {this.state.newTask}
                        onChange = {this.changeHandler}
                        placeholder = 'placeholder'
                    />
                </form> 
                <button onClick = {this.addNewTask_h}></button>          
            </div>            
        );

    }

}





// 2) NEXT !!!!
const mapStateToProps = state => {
    return {
        tasks: state.taskReducer.tasks   // WATCH this wiring to state
    }
}

export default connect(
    mapStateToProps,
    {addTask, toggleTask}

)