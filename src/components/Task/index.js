import './index.css'

const Task = props => {
  const {tasks} = props

  return (
    <div className="container">
      <ul>
        {tasks.map(eachItem => (
          <li key={eachItem.id}>
            <div className="add-task-container">
              <p className="task-name">{eachItem.task}</p>
              <p className="category">{eachItem.category}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Task
