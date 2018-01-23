import React, { Component } from 'react'
import TodoContainer from './todo/TodoContainer'

class App extends Component {
    
    render() {
        return (
          <div>
            <h1>Things ToDo:</h1>
            <TodoContainer />
          </div>
        )
    }
}

export default App