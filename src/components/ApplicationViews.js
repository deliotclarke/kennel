import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationsList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import SearchList from './search/SearchList'

import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from "../modules/EmployeeManager"
import LocationManager from "../modules/LocationManager"
import OwnerManager from '../modules/OwnerManager'
import SearchManager from '../modules/SearchManager'




class ApplicationViews extends Component {

  // state = {
  //   owners: this.ownersFromAPI,
  //   employees: this.employeesFromAPI,
  //   locations: this.locationsFromAPI,
  //   animals: this.animalsFromAPI,
  //   relationships: this.animalOwnerRel
  // }

  state = {
    locations: [],
    animals: [],
    employees: [],
    owners: [],
    search: []
  }

  deleteAnimal = (id) => {
    const newState = {};

    AnimalManager.delete(id)
      .then(() => AnimalManager.getAll())
      .then(animals => newState.animals = animals)
      .then(() => this.setState(newState))
  }

  search = () => {

    let userInput = document.querySelector("#input")

    SearchManager.getResults(userInput.value)
      .then(results => { console.log(results) })
  }

  componentDidMount() {

    const newState = {}

    AnimalManager.getAll()
      .then(animals => newState.animals = animals)
      .then(() => EmployeeManager.getAll())
      .then(employees => newState.employees = employees)
      .then(() => LocationManager.getAll())
      .then(locations => newState.locations = locations)
      .then(() => OwnerManager.getAll())
      .then(owners => newState.owners = owners)
      .then(() => this.setState(newState))


  }

  //so i need when someone types into the search bar and hits enter for it to display things that match what they entered
  //i need to grab the value of the input

  render() {

    return (
      <React.Fragment >
        <Route exact path="/" render={(props) => {
          return <LocationList locations={this.state.locations} />
        }} />
        <Route path="/animals" render={(props) => {
          return <AnimalList animals={this.state.animals} deleteAnimal={this.deleteAnimal} />
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeeList employees={this.state.employees} />
        }} />
        <Route path="/owners" render={(props) => {
          return <OwnerList owners={this.state.owners} />
        }} />
        <Route path="/search" render={(props) => {
          return <SearchList search={this.state.search} />
        }} />
      </React.Fragment >
    )
  }
}

export default ApplicationViews