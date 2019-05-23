import React, { Component } from 'react'
import './owner.css'

export default class OwnerItem extends Component {

  handleClick = (event) => {

    this.props.ownerDelete(this.props.owner.id)
  }

  render() {
    return (
      <div className="card m-2 p-2">
        <h5>{this.props.owner.name}</h5>
        <p>Phone: {this.props.owner.phoneNumber}</p>
        <button className="ownerButton btn-danger" onClick={this.handleClick}>Remove</button>
      </div>
    )
  }
}

