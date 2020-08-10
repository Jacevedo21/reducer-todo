import React from 'react';
import Task from './components/Task'
import TodoList from './components/TodoList'
import './App.css';

function App() {
  return (
    <div className="App">
      <Task />
      <TodoList />
    </div>
  );
}

export default App;
