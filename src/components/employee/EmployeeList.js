import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AnimalItem from '../animal/AnimalItem'


class EmployeeList extends Component {

  state = {
    saveDisabled: false
  }

  handleClick = id => this.props.deleteEmployee(id)

  render() {
    return (
      <section className="employees">

        <div className="employeeButton">
          <button type="button" className="btn btn-success" onClick={() => {

            this.props.history.push("/employees/new")

          }}> New Employee</button>

        </div>
        <h3>Employee List:</h3>
        <div className="d-flex flex-row flex-wrap mx-auto mt-4">
          {
            this.props.employees.map(employee =>
              <div key={employee.id} className="card m-2">
                <div className="card-body p-2">
                  <h3 className="card-title">{employee.name}</h3>

                  <button onClick={
                    () => {
                      this.setState(
                        { saveDisabled: true },
                        () => this.handleClick(employee.id)
                      )
                    }}
                    className="card-link"
                    disabled={this.state.saveDisabled}>Remove</button>


                  <Link className="card-link" to={`/employees/${employee.id}`}>Details</Link>

                </div>
                <h6 className="card-subtitle mb-2 text-muted">Caretaker For</h6>
                <div className="animals--caretaker">
                  {
                    this.props.animals
                      .filter(anml => anml.employeeId === employee.id)
                      .map(anml => <AnimalItem key={anml.id} animal={anml} {...this.props} />)
                  }
                </div>
              </div>
            )
          }
        </div>
      </section>
    )
  }
}

export default EmployeeList