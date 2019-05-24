import React, { Component } from 'react'
import './animal.css'
import dog from './DogIcon.svg'


export default class Animal extends Component {
  state = {
    saveDisabled: false
  }

  render() {
    return (
      <section className="animal">
        <div key={this.props.animal.id} className="card detail-card mx-auto">
          <div className="card-body">
            <h4 className="card-title">
              <img src={dog} alt="dog icon" className="icon--dog" />
              {this.props.animal.name}
            </h4>
            <h6 className="card-title">Breed: {this.props.animal.breed}</h6>
            <h6 className="card-title">Nickname: {this.props.animal.nickname}</h6>
            <h6 className="card-title">Caretaker: {
              this.props.employees
                .filter(emply => emply.id === this.props.animal.employeeId)
                .map(emply => emply.name)
            } </h6>
            <h6 className="card-title">Owner: {
              this.props.owners
                .filter(owner => owner.id === this.props.animal.ownerId)
                .map(owner => owner.name)
            } </h6>
            <button onClick={
              () => {
                this.setState(
                  { saveDisabled: true },
                  () => this.props.deleteAnimal(this.props.animal.id)
                )
              }
            }
              disabled={this.state.saveDisabled}
              type="button"
              className="card-link btn btn-danger">Remove</button>
          </div>
        </div>
      </section>
    )
  }
}