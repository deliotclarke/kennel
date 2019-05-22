import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {

  //to get search to work i'll have to set the state in the parent of NavBar (kennel) and then pass it down as a property to NavBar
  //basically hoisting it to the parent in order to use it
  //i should be able to write a onChange or keyDown or something function inside of this component for the search input to use

  render() {
    return (
      <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link" to="/">Locations</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/animals">Animals</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/employees">Employees</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/owners">Owners</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/search"><input placeholder="search..."></input>
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar