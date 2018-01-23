import React from 'react'
import uuid from 'uuid/v1'
import TodoList from './TodoList'

class TodoContainer extends React.Component {
    
    state = {
        todos: [],
        newTodoValue: ''
    };

    handleInput = (e) => {
        this.setState({ newTodoValue: e.target.value })
    }

    handleSubmit = () => {
        const newTodo = {
            id: uuid(),
            value: this.state.newTodoValue,
            done: false
        }

        this.setState({ todos: [...this.state.todos, newTodo] }) 
        this.setState({ newTodoValue: '' })
    }

    handleChangeDone = (taskId) => {
        this.setState({
            ...this.state,
            todos: this.state.todos.map(todo => 
            todo.id === taskId ? {...todo, done: !todo.done} : todo
        )})
    }

    render() {
        return (
          <TodoList
            todos={this.state.todos}
            inputValue={this.state.newTodoValue} 
            handleInput={this.handleInput} 
            handleSubmit={this.handleSubmit} 
            handleChangeDone={this.handleChangeDone}
          />
        )
    }
}

export default TodoContainer