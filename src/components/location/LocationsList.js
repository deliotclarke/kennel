import React, { Component } from 'react'

export default class LocationList extends Component {
  render() {
    return (
      <section className="locationList">
        <h3>Locations:</h3>
        {
          this.props.locations.map(location =>
            <div key={location.id}>
              {location.name}
              <p>{location.address}</p>
              <hr></hr>
            </div>
          )
        }
      </section>
    )
  }
}