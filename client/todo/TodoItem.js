import React from 'react'
import { number, string, bool, func } from 'prop-types'

class TodoItem extends React.Component {

  static propTypes = {
    id: number,
    value: string,
    done: bool,
    handleChangeDone: func
  }

  static defaultProps = {
    id: 0,
    value: '',
    done: false,
    handleChangeDone: () => {}
  }

  render() {
    const isDone = this.props.done
    
    return (
      <div>
        {isDone ? (
          <li>{this.props.value}<button onClick={() => this.props.handleChangeDone(this.props.id)}>Pending</button></li>
          ) : (
            <li>{this.props.value}<input type="checkbox" onClick={() => this.props.handleChangeDone(this.props.id)} /></li> 
          )}
      </div>
    );
  }
}

export default TodoItem