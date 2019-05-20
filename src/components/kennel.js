import React, { Component } from 'react';
import EmployeeList from './employee/EmployeeList'
import LocationList from './location/LocationsList'
import './kennel.css'

class Kennel extends Component {


  employeesFromAPI = [
    { id: 1, name: "Jessica Younker" },
    { id: 2, name: "Jordan Nelson" },
    { id: 3, name: "Zoe LeBlanc" },
    { id: 4, name: "Blaise Roberts" }
  ]

  locationsFromAPI = [
    { id: 1, name: "Nashville North", address: "500 Circle Way" },
    { id: 2, name: "Nashville South", address: "10101 Binary Court" }
  ]

  state = {
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI
  }

  setNewJokeState = (jokeObj) => {
    this.setState({
      id: jokeObj.id,
      type: jokeObj.type,
      setup: jokeObj.setup,
      punchline: jokeObj.punchline
    })
  }


  render() {
    return (
      <article className="kennel">
        <LocationList locations={this.state.locations} />
        <EmployeeList employees={this.state.employees} />
      </article>
    )
  }
}


export default Kennel