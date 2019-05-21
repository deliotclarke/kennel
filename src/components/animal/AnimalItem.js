import React, { Component } from 'react'

export default class AnimalItem extends Component {

  handleClick = (event) => {
    console.log("click", event)
    this.props.deleteAnimal(this.props.animal.id)
  }

  render() {
    return (
      <div className="animalItem card">
        <h5>{this.props.animal.name} <button onClick={this.handleClick}>Adopted</button></h5>
      </div>
    )
  }
}
