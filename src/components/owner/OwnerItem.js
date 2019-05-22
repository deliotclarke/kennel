import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class OwnerItem extends Component {

  handleClick = (event) => {
    console.log("owner click", this.props.owner.id, this.props.owner.name)

    this.props.ownerDelete(this.props.owner.id)
  }

  render() {
    return (
      <div className="card">
        <h5>{this.props.owner.name}</h5>
        <p>Phone: {this.props.owner.phoneNumber}</p>
        <button className="ownerButton btn-danger" onClick={this.handleClick}>Remove</button>
      </div>
    )
  }
}

