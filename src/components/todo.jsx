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
        <div type='text' onChange={this.handleOnChange} className={todoStyle}>{this.props.value}</div>
        <img src='./icons/baseline_delete_black_48dp.png' alt='Add' className={deleteStyle} onClick={() => this.props.handleOnDelete(this.props.id)}></img>
      </div>
    )
  }
}
const todoStyle = css`
  height: 30px;
  width: 300px;
  line-height: 30px;
  border-style: solid;
  border-color: transparent;
  border-bottom: 2px solid black;
  user-select: none;
`

const deleteStyle= css`
  height: 30px;
  width: 30px;
  margin-left: 5px;
  &:hover {
    cursor: pointer;
  }
`

const todoContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`