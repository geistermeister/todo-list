import React, { Component } from 'react'
import ToDo from './components/ToDo.jsx'
import {css} from 'emotion'

export default class App extends Component {

  state = {
    todos: [],
    input: '',
    counter: -1
  }

  handleOnAdd = () => {
    if(this.state.input !== ''){
      this.setState({todos: [...this.state.todos, this.state.input]})
      this.setState({input: ''})
    }
  }

  handleOnChange = item => {
    this.setState({input: item.target.value})
  }
s
  handleOnDelete = id => {
    this.setState({todos: this.state.todos.filter((_, index) => id !== index)})

  }

  render() {
    return (
      <div className={container}>
        <div className={todoListContainer}>
          <h1>ToDo-List</h1>
          {this.state.todos.map((item, index) => 
            <ToDo key={index} id={index} value={item} handleOnDelete={this.handleOnDelete}/>)
          }
          <div className={newToDoContainerStyle}>
            <input type='text' onChange={this.handleOnChange} value={this.state.input} className={newToDoStyle}></input>
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
  margin-left: 5px;
  &:hover {
    cursor: pointer;
  }
`