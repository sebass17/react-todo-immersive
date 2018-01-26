import React from 'react'
import { connect } from 'react-redux'
import { func, array } from 'prop-types'
//import uuid from 'uuid/v1'
import { addTodo, changeDone, fetchTodos } from './TodoActions'
import TodoList from './TodoList'

const API = 'http://localhost:3000/todos'

class TodoContainer extends React.Component {
    
    static propTypes = {
        todos: array,
        addTodo: func,
        changeDone: func,
        fetchTodos: func
    }
    
    static defaultProps = {
        todos: [],
        addTodo: () => {},
        changeDone: () => {},
        fetchTodos: () => {}
    }

    state = {
        newTodoValue: ''
    }

    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => this.props.fetchTodos(data));
    }
    
    handleInputChange = (e) => {
        this.setState({ newTodoValue: e.target.value })
    }
    
    handleSubmit = () => {
        this.props.addTodo(this.state.newTodoValue)
        this.setState({ newTodoValue: '' })
    }

    handleChangeDone = (taskId) => {
        this.props.changeDone(taskId)
        /*this.setState({
            ...this.state,
            todos: this.state.todos.map(todo => 
            todo.id === taskId ? {...todo, done: !todo.done} : todo
        )})*/
    }

    render() {
        return (
          <TodoList
            todos={this.props.todos}
            inputValue={this.state.newTodoValue} 
            handleInputChange={this.handleInputChange} 
            handleSubmit={this.handleSubmit}
            handleChangeDone={this.handleChangeDone}
          />
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}
  
function mapDispatchToProps(dispatch) {
    return {
        addTodo: value => dispatch(addTodo(value)),
        changeDone: value => dispatch(changeDone(value)),
        fetchTodos: value => dispatch(fetchTodos(value))
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)