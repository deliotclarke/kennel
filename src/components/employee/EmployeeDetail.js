import React, { Component } from 'react'

export default class Employee extends Component {
  state = {
    saveDisabled: false
  }

  render() {
    return (
      <section className="employee">
        <div key={this.props.employee.id} className="card detail-card mx-auto mt-4">
          <div className="card-body">
            <h4 className="card-title">
              {this.props.employee.name}
            </h4>
            <h6 className="card-title">Employee #: {this.props.employee.id}</h6>
            <h6 className="card-title">Phone: {this.props.employee.phoneNumber}</h6>
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