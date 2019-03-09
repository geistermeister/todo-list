import React, { Component } from 'react'
import ToDo from './components/ToDo.jsx'
import {css} from 'emotion'
import './css/reset.css'

export default class App extends Component {

  state = {
    todos: [
      'Einkaufen',
      'Gassi gehen',
      'Abwaschen',
      'Duschen',
      'Aufräumen'
  ],
    input: '',
    pageNumber: 1
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

  handleOnDelete = id => {
    this.setState({todos: this.state.todos.filter((_, index) => id !== index)}, this.checkPageNumberNeedReduce)
  }

  checkPageNumberNeedReduce = () => {
    if(this.state.pageNumber > 1 && (this.state.todos.length % 5) === 0){
      this.setState({pageNumber: this.state.pageNumber - 1})
    }
  }
  
  handleOnNextPage = () => {
    this.state.pageNumber < (this.state.todos.length / 5) && this.setState({pageNumber: this.state.pageNumber + 1})
  }

  handleOnPreviousPage = () => {
    this.state.pageNumber > 1 && this.setState({pageNumber: this.state.pageNumber - 1})
  }

  render() {
    return (
      <>
      <header className={cssHeader}>
        <h1>ToDo-List</h1>
      </header>
      <div className={cssToDoListContainer}>
        <div>
          <div className={cssNewToDoContainer}>
            <input type='text' onChange={this.handleOnChange} value={this.state.input} className={cssNewToDo}></input>
            <div className={cssAddContainer}>
              <i className={`${cssAdd} material-icons`} onClick={this.handleOnAdd}>add</i>
            </div>
          </div>
          {this.state.todos.length < 6 
            ?
            this.state.todos.map((item, index) => 
              <ToDo key={index} id={index} value={item} handleOnDelete={this.handleOnDelete}/>
            )
            :
            <>
              {this.state.todos.map((item, index) => {
                if(index >= ((this.state.pageNumber - 1) * 5) && index < this.state.pageNumber * 5){
                  return <ToDo key={index} id={index} value={item} handleOnDelete={this.handleOnDelete}/>
                }
                return ''
              })}
              <div className={cssSwitchContainer}>
                <i className={`${cssSwitch} material-icons`} onClick={this.handleOnPreviousPage}>keyboard_arrow_left</i>
                <span className={cssPageNumber}>{this.state.pageNumber}</span>
                <i className={`${cssSwitch} material-icons`} onClick={this.handleOnNextPage}>keyboard_arrow_right</i>
              </div>
            </>
          }
        </div> 
      </div>
      </>
    )
  }
}

const cssHeader = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  font-size: 24px;
  color: white;
  background: #158e8e;
`

const cssToDoListContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
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
  border: 1px solid #158e8e;
  background: #158e8e;
  user-select: none;
  &:hover {
    cursor: pointer;
    background: #019e9e;
  }
`

const cssSwitchContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  user-select: none;
`

const cssSwitch = css`
  line-height: 30px;
  font-size: 30px;
  color: #007777;
  cursor: pointer;
  &:hover {
    color: #006060;
  }
`

const cssPageNumber = css`
  font-weight: bold;
  color: #007777;
  margin: 0 5px;
`
