import React from 'react'
import { array, string, func } from 'prop-types'
import TodoItem from './TodoItem'

class TodoList extends React.Component {
    
  static propTypes = {
    todos: array,
    inputValue: string,
    handleInputChange: func,
    handleSubmit: func,
    handleChangeDone: func
  }

  static defaultProps = {
    todos: [],
    inputValue: '',
    handleInputChange: () => {},
    handleSubmit: () => {},
    handleChangeDone: () => {}
  }

  render() {

    const {
      todos,
      inputValue,
      handleInputChange,
      handleSubmit,
      handleChangeDone
    } = this.props

    const pendingList = todos.filter(todo => !todo.done)
    const doneList = todos.filter(todo => todo.done)
    
    return (
      <div>
        <div>
          <input onChange={handleInputChange} type="text" value={inputValue} />
          <button onClick={handleSubmit} className="btn btn-outline-primary">Add Todo</button>
        </div>
        <ul>
          {pendingList.map(todo => {
            return <TodoItem key={todo.id} id={todo.id} value={todo.value} done={todo.done} handleChangeDone={handleChangeDone} />
          })}   
        </ul>
        <h1>Done:</h1>
        <ul>
          {doneList.map(todo => {
            return <TodoItem key={todo.id} id={todo.id} value={todo.value} done={todo.done} handleChangeDone={handleChangeDone} />
          })}   
        </ul>
      </div>
    )
  }
}

export default TodoList