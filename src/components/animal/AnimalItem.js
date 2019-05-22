import React, { Component } from 'react'
import DogIcon from './DogIcon.svg'
import { Link } from 'react-router-dom'

export default class AnimalItem extends Component {

  state = {
    saveDisabled: false
  }

  handleClick = (event) => {
    console.log("click", event)

    this.setState({
      saveDisabled: true
    })

    this.props.deleteAnimal(this.props.animal.id)
  }

  render() {
    return (
      <div className="animalItem card">
        <div className="card-body">
          <h5 className="card-title">
            <img src={DogIcon} alt="dog icon" className="icon--dog" />
            {this.props.animal.name}
            <button
              onClick={this.handleClick}
              className="card-link btn-warning"
              disabled={this.state.saveDisabled}>Adopted</button>
            <Link className="card-link" to={`/animals/${this.props.animal.id}`}>Details</Link></h5>
        </div>
      </div>
    )
  }
}
