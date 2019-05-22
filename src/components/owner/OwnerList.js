import React, { Component } from 'react'
import OwnerItem from './OwnerItem'


export default class OwnerList extends Component {

  render() {
    return (
      <section className="ownerList">
        <h2>Owners:</h2>
        <div className="card">
          {
            this.props.owners.map((item) =>
              <OwnerItem className="ownerItem" key={item.id} owner={item} ownerDelete={this.props.ownerDelete} />
            )
          }
        </div>
      </section>
    )
  }
}