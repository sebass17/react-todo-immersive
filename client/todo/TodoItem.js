import React from 'react'
import { string, bool, func } from 'prop-types'

class TodoItem extends React.Component {

  static propTypes = {
    id: string,
    value: string,
    done: bool,
    handleChangeDone: func
  }

  static defaultProps = {
    id: '',
    value: '',
    done: false,
    handleChangeDone: () => {}
  }

  render() {

    const {
      id,
      value,
      done,
      handleChangeDone
    } = this.props

    return (
      <div>
        {done ? (
          <li>{value}<button className="btn btn-outline-primary" onClick={() => handleChangeDone(id)}>Pending</button></li>
          ) : (
            <li>{value}<input type="checkbox" onClick={() => handleChangeDone(id)} /></li> 
          )}
      </div>
    )
  }
}

export default TodoItem