import {Component} from 'react'
import './index.css'
import TodoItems from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {todoList: initialTodosList}

  onDelete = id => {
    const {todoList} = this.state
    const updateTodo = todoList.filter(eachList => eachList.id !== id)

    this.setState({todoList: updateTodo})
  }

  render() {
    const {todoList} = this.state
    return (
      <div className="simple-todos-app-container">
        <div className="simple-todos-container">
          <h1 className="heading">Simple Todos</h1>
          <ul className="todos-list">
            {todoList.map(eachList => (
              <TodoItems
                key={eachList.id}
                todoDetails={eachList}
                onDelete={this.onDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
