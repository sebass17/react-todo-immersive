import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import TodoContainer from './todo/TodoContainer'

class App extends Component {
    
    render() {
        return (
            <div>
                <h1>Things ToDo:</h1>
                <TodoContainer></TodoContainer>
            </div>
        )
    }
}

export default App