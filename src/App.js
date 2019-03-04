import React, { Component } from 'react'
import ToDo from './components/todo'
import {css} from 'emotion'

export default class App extends Component {

  state = {
    todos: [],
    input: ''
  }

  renderToDos = () => {
    return this.state.todos.map((item, index) => <ToDo key={`key_${index}`} value={item} handleOnDelete={this.handleOnDelete}/>)
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
    console.log(this.state.todos.filter(item => item !== removeItem))
    this.setState({todos: this.state.todos.filter(item => item !== removeItem)})
  }

  render() {
    return (
      <div className={container}>
        <h1>ToDo-List</h1>
        {this.renderToDos()}
        <div className={newToDoContainerStyle}>
          <input type='text' onChange={this.handleOnChange} className={newToDoStyle}></input>
          <img src='./icons/baseline_add_circle_outline_black_48dp.png' alt='Add' className={addStyle} onClick={this.handleOnAdd}></img>
        </div>
      </div>
    )
  }
}

const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: sans-serif;
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