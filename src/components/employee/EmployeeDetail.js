import React, { Component } from 'react'

export default class Employee extends Component {
  state = {
    saveDisabled: false
  }

  render() {
    return (
      <section className="employee">
        <div key={this.props.employee.id} className="card detail-card mx-auto m-1">
          <div className="card-body">
            <h4 className="card-title">
              {this.props.employee.name}
            </h4>
            <h6 className="card-title">Employee #: {this.props.employee.id}</h6>
            <h6 className="card-title">Phone: {this.props.employee.phoneNumber}</h6>
            <h5>Caretaker for:</h5>
            <ul>
              {

                this.props.animals
                  .filter(anml => anml.employeeId === this.props.employee.id)
                  .map(anml => (
                    <li key={anml.id}>{anml.name}</li>
                  ))

              }</ul>
            <button onClick={
              () => {
                this.setState(
                  { saveDisabled: true },
                  () => this.props.deleteEmployee(this.props.employee.id)
                )
              }
            }
              disabled={this.state.saveDisabled}
              className="card-link btn-danger">Remove</button>
          </div>
        </div>
      </section>
    )
  }

}