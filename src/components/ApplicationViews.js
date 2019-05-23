import React, { Component } from "react"
import { withRouter } from 'react-router'
import { Route, Redirect } from "react-router-dom"

import Login from './authentication/Login'

import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationsList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import SearchList from './search/SearchList'

import AnimalDetail from './animal/AnimalDetail'
import EmployeeDetail from './employee/EmployeeDetail'

import AnimalForm from './animal/AnimalForm'
import AnimalEditForm from './animal/AnimalEditForm'
import EmployeeForm from './employee/EmployeeForm'
import OwnerForm from './owner/OwnerForm'

import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from "../modules/EmployeeManager"
import LocationManager from "../modules/LocationManager"
import OwnerManager from '../modules/OwnerManager'



class ApplicationViews extends Component {

  state = {
    locations: [],
    animals: [],
    employees: [],
    owners: [],
    search: []
  }

  // Check if credentials are in local storage
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  deleteAnimal = (id) => {
    const newState = {};

    AnimalManager.delete(id)
      .then(() => AnimalManager.getAll())
      .then(animals => newState.animals = animals)
      .then(() => {
        this.props.history.push("/animals")
        this.setState(newState)
      })
  }

  addAnimal = (animalObj) => {
    AnimalManager.addAnimal(animalObj)
      .then(() => AnimalManager.getAll())
      .then(animals =>
        this.setState({ animals: animals }))
      .then(() => this.props.history.push("/animals"))
  }

  updateAnimal = (editedAnimalObject) => {
    return AnimalManager.put(editedAnimalObject)
      .then(() => AnimalManager.getAll())
      .then(animals => {
        this.props.history.push("/animals")
        this.setState({ animals: animals })
      })


  };

  deleteEmployee = (id) => {
    const newState = {}

    EmployeeManager.delete(id)
      .then(() => EmployeeManager.getAll())
      .then(employees => newState.employees = employees)
      .then(() => {
        this.props.history.push("/employees")
        this.setState(newState)
      })
  }

  addEmployee = employeeObj => {

    EmployeeManager.addEmployee(employeeObj)
      .then(() => EmployeeManager.getAll())
      .then(employees =>
        this.setState({ employees: employees }))
      .then(() => this.props.history.push("/employees"))
  }

  deleteOwner = (id) => {
    const newState = {}

    OwnerManager.delete(id)
      .then(() => OwnerManager.getAll())
      .then(owners => newState.owners = owners)
      .then(() => {
        this.props.history.push("/owners")
        this.setState(newState)
      })
  }

  addOwner = id => {
    const newState = {}

    OwnerManager.addOwner(id)
      .then(() => OwnerManager.getAll())
      .then(owners => newState.owners = owners)
      .then(() => {
        this.props.history.push("/owners")
        this.setState(newState)
      })
  }

  // search = () => {

  //   let userInput = document.querySelector("#input")

  //   SearchManager.getResults(userInput.value)
  //     .then(results => { console.log(results) })
  // }

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

  render() {

    return (
      <React.Fragment >
        <Route path="/login" component={Login} />

        <Route exact path="/employees" render={props => {
          if (this.isAuthenticated()) {
            return <EmployeeList deleteEmployee={this.deleteEmployee}
              employees={this.state.employees} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route exact path="/" render={(props) => {
          return <LocationList locations={this.state.locations} />
        }} />
        <Route exact path="/animals" render={(props) => {
          return <AnimalList animals={this.state.animals} {...props} deleteAnimal={this.deleteAnimal} />
        }} />
        < Route exact path="/animals/:animalId(\d+)" render={(props) => {

          //find the animal with the id of the route paramerter
          let animal = this.state.animals.find(animal =>
            animal.id === parseInt(props.match.params.animalId)
          )

          //if the animal wasn't found create a default one
          if (!animal) {
            animal = { id: 404, name: "404", breed: "dog not found" }
          }
          return <AnimalDetail animal={animal}
            deleteAnimal={this.deleteAnimal} />
        }} />
        <Route path="/animals/new" render={(props) => {

          //route for the animal form
          return <AnimalForm {...props}
            addAnimal={this.addAnimal}
            employees={this.state.employees} />
        }} />
        <Route
          path="/animals/:animalId(\d+)/edit" render={props => {
            return <AnimalEditForm {...props} employees={this.state.employees} updateAnimal={this.updateAnimal} />
          }}
        />
        <Route path="/employees/:employeeId(\d+)" render={(props) => {

          let employee = this.state.employees.find(employee =>
            employee.id === parseInt(props.match.params.employeeId))

          if (!employee) {
            employee = { id: 404, name: "404", phoneNumber: "employee not found" }
          }
          return <EmployeeDetail employee={employee}
            deleteEmployee={this.deleteEmployee} />
        }}
        />
        < Route path="/employees/new" render={(props) => {
          return <EmployeeForm {...props}
            addEmployee={this.addEmployee} />
        }} />
        <Route exact path="/owners" render={(props) => {
          return <OwnerList {...props} owners={this.state.owners} ownerDelete={this.deleteOwner} />
        }} />
        <Route path="/owners/new" render={(props) => {

          //route for the animal form
          return <OwnerForm {...props}
            addOwner={this.addOwner} />
        }} />
        <Route path="/search" render={(props) => {
          return <SearchList search={this.state.search} />
        }} />
      </React.Fragment >
    )
  }
}

export default withRouter(ApplicationViews)