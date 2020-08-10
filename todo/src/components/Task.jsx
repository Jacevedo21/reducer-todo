import React, { useState, useReducer } from 'react'
import { initialState, todoReducer } from '../reducers/todoReducer';

const Task = () => {
    const [newTask, setNewTask ] = useState();
    const [state, dispatch] = useReducer(todoReducer, initialState);
    console.log(state, 'this is state')
}