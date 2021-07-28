import './index.css'

const TodoItems = props => {
  const {todoDetails, onDelete} = props
  const {id, title} = todoDetails

  const onDeleteTodo = () => {
    onDelete(id)
  }

  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <button type="button" className="delete-btn" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItems
