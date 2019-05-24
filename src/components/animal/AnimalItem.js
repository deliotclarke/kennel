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
          <div className="card-title">
            <img src={DogIcon} alt="dog icon" className="icon--dog" />
            <h5>{this.props.animal.name}</h5>

            <div className="button-div flex-d flex-row">
              <button
                //delete button
                onClick={this.handleClick}
                className="card-link btn-warning flex-item"
                disabled={this.state.saveDisabled}>Adopted</button>
              <Link className="card-link flex-item m-1" to={`/animals/${this.props.animal.id}`}>Details</Link>

              <button
                type="button flex-item"
                className="btn btn-success"
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
