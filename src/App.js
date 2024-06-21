import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './App.css'

import Task from './components/Task'

import Tags from './components/Tags'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here

class App extends Component {
  state = {
    inputText: '',
    activeOption: tagsList[0].optionId,
    tasks: [],
    isFilterActive: 'initial',
  }

  onChangeInputText = event => {
    this.setState({inputText: event.target.value})
  }

  onChangeOption = event => {
    this.setState({activeOption: event.target.value})
  }

  onSubmitBtn = event => {
    event.preventDefault()

    const {inputText, activeOption} = this.state

    const newTask = {
      id: uuidv4(),
      task: inputText,
      category: activeOption,
    }

    if (inputText !== '') {
      this.setState(previousState => ({
        tasks: [...previousState.tasks, newTask],
        inputText: '',
        activeOption: '',
      }))
    }
  }

  clickTagBtn = id => {
    this.setState(previousState => ({
      isFilterActive: previousState.isFilterActive === id ? 'initial' : id,
    }))
  }

  render() {
    const {inputText, activeOption, tasks, isFilterActive} = this.state

    console.log(isFilterActive)

    const filteredTask =
      isFilterActive === 'initial'
        ? tasks
        : tasks.filter(eachItem => eachItem.category === isFilterActive)

    console.log(filteredTask)

    return (
      <div className="app-container">
        <div className="main-task-container">
          <form className="main-task-container" onSubmit={this.onSubmitBtn}>
            <div className="task-container">
              <h1 className="heading">Create a task!</h1>
              <label htmlFor="task">Task</label>
              <input
                id="task"
                type="text"
                placeholder="Enter the task here"
                onChange={this.onChangeInputText}
                value={inputText}
              />
            </div>
            <div className="task-container">
              <label htmlFor="tags">Tags</label>
              <select
                id="tags"
                onChange={this.onChangeOption}
                value={activeOption}
              >
                {tagsList.map(eachItem => (
                  <option value={eachItem.optionId} key={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
              <div className="btn-container">
                <button type="submit" className="add-text">
                  Add Text
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="container">
          <h1>Tags</h1>
          <ul className="tags-list-container">
            {tagsList.map(eachItem => (
              <Tags
                tag={eachItem}
                key={eachItem.optionId}
                clickTagBtn={this.clickTagBtn}
                activeBtn={isFilterActive === eachItem.optionId}
              />
            ))}
          </ul>
          <div>
            <h1>Tasks</h1>
            {tasks.length > 0 ? (
              <div>
                <Task tasks={filteredTask} />
              </div>
            ) : (
              <h1>No Tasks Added Yet</h1>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
