import React from 'react';
import './App.css';
import TodoList from './TodoList';


class App extends React.Component {
	constructor() {
		super()
		this.state = {
			items: [],
			currentItem: { text: '', key: '' }
		}
	}

	handleInput = e => {
		const itemText = e.target.value;
		const currentItem = { text: itemText, key: Date.now() }
		this.setState({ currentItem, })
	}

	addItem = e => {
		e.preventDefault()
		const newItem = this.state.currentItem
		if (newItem.text !== '') {
			console.log(newItem)
			const items = [...this.state.items, newItem]
			this.setState({
				items: items,
				currentItem: { text: '', key: '' }
			})
		}
	}

	deleteItem = key => {
		const filteredItems = this.state.items.filter(item => {
			return item.key !== key
		})
		this.setState({ items: filteredItems })
	}

	inputElement = React.createRef()

	render () {
		return (
			<div className="App">
				<TodoList
					entries={this.state.items}
					addItem={this.addItem}
					deleteItem={this.deleteItem}
					inputElement={this.inputElement}
					handleInput={this.handleInput}
					currentItem={this.state.currentItem} />
			</div >
		);
	}
}

export default App;
