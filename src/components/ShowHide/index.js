// Write your code here
import './index.css'

import {Component} from 'react'

class ShowHide extends Component {
  state = {fn: 'hide', ln: 'hide'}

  changefn = () => {
    const {fn} = this.state

    if (fn === 'show') {
      this.setState(() => ({fn: 'hide'}))
    } else {
      this.setState(() => ({fn: 'show'}))
    }
  }

  changeln = () => {
    const {ln} = this.state

    if (ln === 'show') {
      this.setState(() => ({ln: 'hide'}))
    } else {
      this.setState(() => ({ln: 'show'}))
    }
  }

  render() {
    const {fn, ln} = this.state

    return (
      <div className="mainContainer">
        <h1 className="heading">Show/Hide</h1>
        <div className="cardsContainer">
          <div className="card">
            <button type="button" onClick={this.changefn} className="button">
              Show/Hide Firstname
            </button>
            {fn === 'show' && <p className="names">Joe</p>}
            {fn !== 'show' && null}
          </div>
          <div className="card">
            <button type="button" onClick={this.changeln} className="button">
              Show/Hide Lastname
            </button>
            {ln === 'show' && <p className="names">Jonas</p>}
            {ln !== 'show' && null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
