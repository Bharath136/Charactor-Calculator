import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputText: ''}

  onCount = event => {
    this.setState({
      inputText: event.target.value,
    })
  }

  render() {
    const {inputText} = this.state
    const number = inputText.length
    return (
      <div className="container">
        <div className="text-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="input-container">
            <label className="label" htmlFor="count">
              Enter the phrase
            </label>
            <input
              type="text"
              id="count"
              value={inputText}
              className="input-text"
              placeholder="Enter the phrase"
              onChange={this.onCount}
            />
          </div>
          <p className="no-of-letters">No.of letters: {number}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}

export default LettersCalculator
