import React from 'react'
import ReactDOM from 'react-dom'
import TodoItem from './TodoItem'

class TodoList extends React.Component {
    
    render() {
        const pendingList = this.props.todos.filter(todo => !todo.done)
        const doneList = this.props.todos.filter(todo => todo.done)
        
        return (
            <div>
                <div className="ctas">
                    <input onChange={this.props.handleInput} type="text" value={this.props.inputValue}/>
                    <button onClick={this.props.handleSubmit} className="button-secondary pure-button">Add Todo</button>
                </div>
                <ul>
                    {pendingList.map(todo => {
                        return <TodoItem key={todo.id} id={todo.id} value={todo.value} done={todo.done} handleChangeDone={this.props.handleChangeDone}></TodoItem>
                    })}   
                </ul>
                <h1>Done:</h1>
                <ul>
                    {doneList.map(todo => {
                        return <TodoItem key={todo.id} id={todo.id} value={todo.value} done={todo.done} handleChangeDone={this.props.handleChangeDone}></TodoItem>
                    })}   
                </ul>
            </div>
        )
    }
}

export default TodoList