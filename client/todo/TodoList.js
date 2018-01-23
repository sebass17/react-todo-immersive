import React from 'react'
import { array, string, func } from 'prop-types'
import TodoItem from './TodoItem'

class TodoList extends React.Component {
    
  static propTypes = {
    todos: array,
    inputValue: string,
    handleInput: func,
    handleSubmit: func,
    handleChangeDone: func
  }

  static defaultProps = {
    todos: [],
    inputValue: '',
    handleInput: () => {},
    handleSubmit: () => {},
    handleChangeDone: () => {}
  }

  render() { 
    const pendingList = this.props.todos.filter(todo => !todo.done)
    const doneList = this.props.todos.filter(todo => todo.done)
    
    return (
      <div>
        <div className="ctas">
          <input onChange={this.props.handleInput} type="text" value={this.props.inputValue} />
          <button onClick={this.props.handleSubmit} className="button-secondary pure-button">Add Todo</button>
        </div>
        <ul>
          {pendingList.map(todo => {
                    return <TodoItem key={todo.id} id={todo.id} value={todo.value} done={todo.done} handleChangeDone={this.props.handleChangeDone} />
                })}   
        </ul>
        <h1>Done:</h1>
        <ul>
          {doneList.map(todo => {
                    return <TodoItem key={todo.id} id={todo.id} value={todo.value} done={todo.done} handleChangeDone={this.props.handleChangeDone} />
                })}   
        </ul>
      </div>
    )
  }
}

export default TodoList