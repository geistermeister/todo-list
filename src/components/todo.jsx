import React, { Component } from 'react'
import {css} from 'emotion'

export default class ToDo extends Component {

  state = {
    value: this.props.value
  }

  handleOnChange = item => {
    this.setState({value: item.target.value})
  }

  render() {
    return(
      <div className={todoContainer}>
        <input type='text' value={this.state.value} onChange={this.handleOnChange} className={todoStyle}></input>
        <img src='./icons/baseline_delete_black_48dp.png' alt='Add' className={deleteStyle} onClick={this.props.handleOnDelete}></img>
      </div>
    )
  }
}
const todoStyle = css`
  height: 30px;
  width: 300px;
`

const deleteStyle= css`
  height: 30px;
  width: 30px;
  &:hover {
    cursor: pointer;
  }
`

const todoContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`