import React, { useState, useReducer } from 'react'
import { initialState, todoReducer } from '../reducers/todoReducer';

const Task = (props) => {
    const [newTask, setNewTask] = useState();
    const { dispatch } = props
    // console.log(state, 'this is state')

    const handleChange = e => {
        setNewTask(e.target.value);
    }

    return (
        <div>
            <input 
                name='name'
                type='text'
                value={newTask}
                onChange={handleChange}
            />
            <button onClick={() =>{
                dispatch({ type: 'ADD_TASK', payload: newTask })
            }}>Add Task</button>
            <button onClick={() => {
                dispatch({ type: 'DELETE_TASK'})
            }}>Clear Completed</button>
        </div>
    )
}
export default Task