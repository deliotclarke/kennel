import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationsList'
import EmployeeList from './employee/EmployeeList'


class ApplicationViews extends Component {
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

  animalsFromAPI = [
    { id: 1, name: "Doodles" },
    { id: 2, name: "Jack" },
    { id: 3, name: "Angus" },
    { id: 4, name: "Henley" },
    { id: 5, name: "Derkins" },
    { id: 6, name: "Checkers" }
  ]

  ownersFromAPI = [
    { id: 1, name: "Ryan Tanay" },
    { id: 2, name: "Emma Beaton" },
    { id: 3, name: "Dani Adkins" },
    { id: 4, name: "Adam Oswalt" },
    { id: 5, name: "Fletcher Bangs" },
    { id: 6, name: "Angela Lee" }
  ]

  animalOwnerRel = [
    { id: 1, animalId: 1, ownerId: 1 },
    { id: 2, animalId: 2, ownerId: 2 },
    { id: 3, animalId: 3, ownerId: 3 },
    { id: 4, animalId: 4, ownerId: 5 },
    { id: 5, animalId: 5, ownerId: 5 },
    { id: 6, animalId: 6, ownerId: 6 }
  ]

  state = {
    owners: this.ownersFromAPI,
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI,
    animals: this.animalsFromAPI,
    relationships: this.animalOwnerRel
  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <LocationList locations={this.state.locations} />
        }} />
        <Route path="/animals" render={(props) => {
          return <AnimalList animals={this.state.animals} owners={this.state.owners} relationships={this.state.relationships} />
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeeList employees={this.state.employees} />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews