export const initialState = {
    item: '',
    completed: false,
    id: 1
}


export const todoReducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                item: action.payload,
                completed: false
            }
        case 'DELETE_TASK':
            return {
                ...state,
                item: action.payload,
                completed: false
            }
    }
}