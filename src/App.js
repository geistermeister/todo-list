import React, { Component } from 'react'
import ToDo from './components/ToDo.jsx'
import {css} from 'emotion'

export default class App extends Component {

  state = {
    todos: [],
    input: '',
    counter: -1
  }

  handleOncssAdd = () => {
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
      <div className={cssContainer}>
        <div>
          <h1>ToDo-List</h1>
          <div className={cssNewToDoContainer}>
            <input type='text' onChange={this.handleOnChange} value={this.state.input} className={cssNewToDo}></input>
            <div className={cssAddContainer}>
              <i className={`${cssAdd} material-icons`} onClick={this.handleOncssAdd}>add</i>
            </div>
          </div>
          {this.state.todos.map((item, index) => 
            <ToDo key={index} id={index} value={item} handleOnDelete={this.handleOnDelete}/>)
          }
        </div> 
      </div>
    )
  }
}

const cssContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
`

const cssNewToDoContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  margin-bottom: 10px;
`

const cssNewToDo = css`
  height: 30px;
  width: 300px;
  padding-left: 5px;
  border: 1px solid #007777;
  border-right: 0px;
  &:focus{
    outline: none;
  }
`

const cssAdd = css`
  line-height: 30px;
  font-size: 30px;
  color: white;
  &:hover {
    cursor: pointer;
  }
`

const cssAddContainer = css`
  display: flex;
  align-itmes: center;
  border: 2px solid #158e8e;
  background: #158e8e;
  &:hover {
    background: #019e9e;
    border: 2px solid #019e9e;
  }
`