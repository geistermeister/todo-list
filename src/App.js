import React, { Component } from 'react'
import ToDoList from './components/ToDoList.jsx'
import {css} from 'emotion'

export default class App extends Component {

  state = {
    todos: [],
    input: ''
  }

  handleOnAdd = () => {
    if(this.state.input !== ''){
      this.setState({todos: [...this.state.todos, this.state.input]})
    }
  }

  handleOnChange = item => {
    this.setState({input: item.target.value})
  }

  handleOnDelete = removeItem => {
    this.setState({todos: this.state.todos.filter(item => item !== removeItem)})
  }

  render() {
    return (
      <div className={container}>
        <div className={todoListContainer}>
          <h1>ToDo-List</h1>
          <ToDoList todos={this.state.todos}/>
          <div className={newToDoContainerStyle}>
            <input type='text' onChange={this.handleOnChange} className={newToDoStyle}></input>
            <img src='./icons/baseline_add_circle_outline_black_48dp.png' alt='Add a new ToDo' className={addStyle} onClick={this.handleOnAdd}></img>
          </div>
        </div> 
      </div>
    )
  }
}

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
`

const todoListContainer = css`
  display: flex;
  flex-direction: column;
  flex-start: left;
`

const newToDoContainerStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`

const newToDoStyle = css`
  height: 30px;
  width: 300px;
`

const addStyle= css`
  height: 30px;
  width: 30px;
  &:hover {
    cursor: pointer;
  }
`