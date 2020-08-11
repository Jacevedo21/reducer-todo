// import React from 'react'

// // class TodoList extends React.Component {
// //     state = {
// //         newTask: '',
// //         tasks: [
// //             { item: 'Achive victory in Fall Guys', completed: true },
// //             { item: 'Be The Very Best', completed: false }
// //         ]
// //     }

//     handleChanges = e => {
//         this.setState({ newTask: e.target.value });
//     }

//     render() {
//         return (
//             // <React.Fragment>
//             //     <div className='todo-list'>
//             //         {this.state.tasks.map((task, index) => (
//             //             <h4 key={index}>
//             //                 {task.item}
//             //                 {task.completed && <i className="completed" />}
//             //             </h4>
//             //         ))}
//             //     </div>
//             //     <input
//             //         type="text"
//             //         value={this.state.newTask}
//             //         onChange={this.handleChanges}
//             //         placeholder="Enter new task"
//             //     />
//             //     <button>Add Task</button>
//             // </React.Fragment>
//         )
//     }
// }

// export default TodoList

import React from 'react'

export default function todoList(props) {
    const { state } = props;
    console.log(state, 'is this changing')
    const { dispatch } = props

    console.log('this is ooga', state)
    return (
        <div>
            {
                state.todo.map(obj => {
                    return <div
                        onClick={() => {
                            dispatch({ type: 'TOGGLE_TASK', payload: obj }) 
                        }}
                        className={`todo${obj.completed ? ' completed' : ''}`}>
                        <p>{obj.name}</p>
                    </div>
                })
            }
        </div>

    )
}


{/* {
            state.todo.map(task =>{
                
              //   console.log(task.completed)
                return <div 
                      onClick={()=>{
                          dispatch({type: 'TOGGLE_COMPLETED', payload: task})
                      }}  
                       className={`todo${task.completed ? ' completed' : ''}`}>

                  <p>{task.name}</p>
                </div>
          })  
        } */}