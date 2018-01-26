// todo actions

const ADD_TODO = 'ADD_TODO'
const CHANGE_DONE = 'CHANGE_DONE'
const FETCH_TODOS = 'FETCH_TODOS'

export const addTodo = value => {
    return {
        type: ADD_TODO,
        value
    }
}

export const changeDone = value => {
    return {
        type: CHANGE_DONE,
        value
    }
}

export const fetchTodos = value => {
    return {
        type: FETCH_TODOS,
        value
    }
}