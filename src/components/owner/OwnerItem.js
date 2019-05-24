import React, { Component } from 'react'
import './owner.css'

export default class OwnerItem extends Component {

  state = { saveDisabled: false }

  handleClick = () => {
    this.setState(
      { saveDisabled: true },
      this.props.ownerDelete(this.props.owner.id)
    )
  }



  render() {
    return (
      <div className="card m-2 p-2">
        <h5>{this.props.owner.name}</h5>
        <p>Phone: {this.props.owner.phoneNumber}</p>
        <button onClick={this.handleClick}
          disabled={this.state.saveDisabled}
          className="ownerButton btn-danger">Remove</button>
      </div >
    )
  }
}

