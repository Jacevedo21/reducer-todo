import React, { useReducer } from 'react';
import Task from './components/Task'
import TodoList from './components/TodoList'
import { initialState, todoReducer } from '../src/reducers/todoReducer';
import styled from 'styled-components'
import './App.css';

const StyledApp = styled.div`
    .todo{
      background-color: #e64944;
      width: 45%;
      text-align: left;
      margin: 4px;
      padding-left: 8px;
      cursor: pointer;
    }

    .todo.completed{
      background-color: #d17d7c;
      /* background-color: blue; */
      text-decoration: line-through;
    }
    `
function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <StyledApp className="App">
      <Task
        dispatch={dispatch}
      />
      <TodoList
        state={state}
        dispatch={dispatch}

      />
    </StyledApp>
  );
}

export default App;
