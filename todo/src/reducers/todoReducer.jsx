
export const initialState = {
    todo: [
        {
            name: 'Achieve victory in fall guys',
            completed: false,
            id: 1
        },
        {
            name: 'Be the very best no one ever was',
            completed: false,
            id: 2
        }
    ]
}


export const todoReducer = (state, action) => {
    console.log(state.todo, 'ooga');
    console.log(state, 'this is state')
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                todo: [
                    ...state.todo,
                    {
                        name: action.payload,
                        completed: false,
                        id: new Date()
                    }
                ]
            }
        case 'TOGGLE_TASK':
            // return state
            return {
                ...state,
                todo:
                    state.todo.map(obj => {

                        // console.log(obj,'this is objects')
                        if (obj.id === action.payload.id) {
                            return {
                                name: action.payload.name,
                                completed: !action.payload.completed,
                                id: action.payload.id
                            }
                        }
                        return obj
                    })
            }
            case 'DELETE_TASK':
                return {
                    ...state,
                    todo: 
                    state.todo.filter(obj => obj.completed === false) 
                }
        // ...state,
        // todo: [
        //     ...state.todo,
        //     {
        //         completed: !state.completed,
        //     }
        // ]
        default:
            return state;
    }
}