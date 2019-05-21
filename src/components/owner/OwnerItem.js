import React, { Component } from 'react'

export default class OwnerItem extends Component {

  handleClick = (event) => {
    console.log("owner click", this.props.owner.id, this.props.owner.name)
  }

  render() {
    return (
      <div className="card">
        <h5>{this.props.owner.name}</h5>
        <p>phone: {this.props.owner.phoneNumber}</p>
        <button className="ownerButton" onClick={this.handleClick}>Owner Button</button>
      </div>
    )
  }
}

