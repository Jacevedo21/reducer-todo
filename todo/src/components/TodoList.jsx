import React from 'react'

class TodoList extends React.Component {
    state = {
        newTask: '',
        tasks: [
            { item: 'Achive victory in Fall Guys', completed: false },
            { item: 'Be The Very Best', completed: false }
        ]
    }

    handleChanges = e => {
        this.setState({ newTask: e.target.value });
    }

    render() {
        return (
            <React.Fragment>
                <div className='todo-list'>
                    {this.state.tasks.map((task, index) => (
                        <h4 key={index}>
                            {task.name}
                            {task.dragonStatus && <i className="completed" />}
                        </h4>
                    ))}
                </div>
                <input
                    type="text"
                    value={this.state.newTask}
                    onChange={this.handleChanges}
                    placeholder="Enter new task"
                />
                <button>Add Task</button>
            </React.Fragment>
        )
    }
}

export default TodoList