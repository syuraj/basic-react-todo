import React, { Component } from 'react'
import TodoItems from './TodoItems'

class TodoList extends Component {
	componentDidUpdate () {
		this.props.inputElement.current.focus()
	}

	render () {
		return (
			<div className='todoListMain'>
				<div className='header'>
					<form onSubmit={this.props.addItem}>
						<input placeholder='Task'
							ref={this.props.inputElement}
							value={this.props.currentItem.text}
							onChange={this.props.handleInput} />
						<button type='submit'>Add Task</button>
					</form>

					<TodoItems entries={this.props.entries} deleteItem={this.props.deleteItem} />
				</div>
			</div>
		)
	}
}

export default TodoList