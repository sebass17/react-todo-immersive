import React from 'react'
import ReactDOM from 'react-dom'

class TodoItem extends React.Component {
    render() {
        const isDone = this.props.done
        
        return (
            <div>
              {isDone ? (
                <li><label>{this.props.value}</label><button onClick={() => this.props.handleChangeDone(this.props.id)}>Pending</button></li>
              ) : (
                <li><label>{this.props.value}<input type="checkbox" onClick={() => this.props.handleChangeDone(this.props.id)}/></label></li> 
              )}
            </div>
        );
    }
}

export default TodoItem

// <li><label>{this.props.value}<input type="checkbox"/></label></li> 