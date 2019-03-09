import React, { Component } from 'react'
import {css} from 'emotion'

export default class ToDo extends Component {

  state = {
    value: '',
    showDelete: false
  }

  handleOnChange = item => {
    this.setState({value: item.target.value})
  }

  handleOnMouseOver = () => {
    this.setState({showDelete: true})
  }

  handleOnMouseOut = () => {
    this.setState({showDelete: false})
  }

  render() {
    return(
      <div className={cssToDoContainer} 
        onMouseOver={this.handleOnMouseOver}
        onMouseOut={this.handleOnMouseOut}>
        <div
          className={cssToDo}
          >
          {this.props.value}
        </div>
        {<i 
          className={`${this.state.showDelete ? cssDelete : cssDeleteHide} material-icons`} 
          onClick={() => this.props.handleOnDelete(this.props.id)}>
          delete
        </i>}
      </div>
    )
  }
}

const cssToDoContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  user-select: none;
  border-bottom: 1px solid white;
  background: #158e8e;
  &:hover {
    background: #019e9e;
  }
`

const cssToDo = css`
  width: 300px;
  padding-left: 5px;
  line-height: 30px;
  color: white;
  user-select: none;
  overflow-wrap: break-word;
`

const cssDelete = css`
  font-size: 30px;
  color: #007777;
  &:hover {
    cursor: pointer;
    color: #006060;
  }
`

const cssDeleteHide = css`
  font-size: 30px; 
  display: none;
`