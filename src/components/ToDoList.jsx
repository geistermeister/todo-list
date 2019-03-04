import React, { Component } from 'react'
import ToDo from '../components/ToDo.jsx'

export default class ToDoList extends Component {

  state = {
    todos: this.props.todos
  }

  render() {
    return (
      this.state.todos.map((item, index) => <ToDo key={`${item}_${index}_${Date.now()}`} value={item} handleOnDelete={this.handleOnDelete}/>)
    )
  }
}
