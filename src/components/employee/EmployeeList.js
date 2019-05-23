import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class EmployeeList extends Component {

  handleClick = (id) => {

    this.props.deleteEmployee(id)
  }

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
                  <button onClick={() => this.handleClick(employee.id)}
                    className="card-link">Remove</button>
                  <Link className="card-link" to={`/employees/${employee.id}`}>Details</Link>
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