import React, { Component } from 'react'

export default class OwnerForm extends Component {

  // Set initial state
  state = {
    name: "",
    phoneNumber: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {

    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
  constructNewOwner = evt => {

    const owner = {
      name: this.state.name,
      phoneNumber: this.state.phoneNumber
    };

    this.props.addOwner(owner)
  }

  render() {
    return (
      <React.Fragment>
        <form className="ownerForm">
          <div className="form-group">
            <label htmlFor="ownerName">Owner Name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="name"
              placeholder="Owner Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="phoneNumber"
              placeholder="Phone Number"
            />
          </div>
          <button
            type="button"
            onClick={this.constructNewOwner}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form >
      </React.Fragment >
    );
  }
}