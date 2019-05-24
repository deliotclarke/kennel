import React, { Component } from 'react'
import DogIcon from './DogIcon.svg'
import { Link } from 'react-router-dom'

export default class AnimalItem extends Component {

  state = {
    saveDisabled: false
  }

  handleClick = () => {
    this.setState(
      { saveDisabled: true },
      this.props.deleteAnimal(this.props.animal.id)
    )
  }

  render() {
    return (
      <div className="animalItem card">
        <div className="card-body">
          <div className="card-title">
            <img src={DogIcon} alt="dog icon" className="icon--dog" />
            <h5>{this.props.animal.name}</h5>
            <Link className="link flex-item m-1" to={`/animals/${this.props.animal.id}`}>Details</Link>

            <div className="button-div flex-d flex-row">
              <button
                //delete button
                onClick={this.handleClick}
                className="btn btn-warning flex-item m-1"
                disabled={this.state.saveDisabled}>Adopted</button>

              <button
                type="button"
                className="btn btn-success m-1"
                onClick={() => {
                  this.props.history.push(`/animals/${this.props.animal.id}/edit`);
                }}
              >
                Edit
</button></div>
          </div>
        </div>
      </div>
    )
  }
}
