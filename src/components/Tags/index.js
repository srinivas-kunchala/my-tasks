import {Component} from 'react'
import './index.css'

class Tags extends Component {
  onClickTagBtn = () => {
    const {tag, clickTagBtn} = this.props

    clickTagBtn(tag.optionId)
  }

  render() {
    const {tag, activeBtn} = this.props

    const activeButton = activeBtn ? 'active-button' : 'tag-button'

    return (
      <li>
        <button
          className={`tag-button ${activeButton}`}
          type="button"
          onClick={this.onClickTagBtn}
        >
          <p>{tag.displayText}</p>
        </button>
      </li>
    )
  }
}

export default Tags
