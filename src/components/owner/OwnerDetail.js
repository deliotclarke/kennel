import React, { Component } from 'react'

export default class OwnerDetail extends Component {

  state = {
    saveDisabled: false
  }

  render() {
    return (
      <section className="owner">
        <div key={this.props.owner.id} className="card detail-card mx-auto m-4">
          <div className="card-body">
            <h4 className="card-title">
              {this.props.owner.name}
            </h4>
            <h6 className="card-title">Phone Number:</h6>
            <h6 className="card-title">{this.props.owner.phoneNumber}</h6>
            <h5>Pets:</h5>
            <ul>
              {
                this.props.animals
                  .filter(animal => animal.ownerId === this.props.owner.id)
                  .map(animal => (
                    <li key={animal.id}>{animal.name}</li>
                  ))
              }
            </ul>
            <button onClick={
              () => {
                this.setState(
                  { saveDisabled: true },
                  () => this.props.deleteOwnerl(this.props.owner.id)
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