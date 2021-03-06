import React, { Component } from 'react'
import OwnerItem from './OwnerItem'


export default class OwnerList extends Component {

  render() {
    return (
      <section className="ownerList">

        <div className="ownerButton">
          <button type="button"
            className="btn btn-success"
            onClick={() => {
              this.props.history.push("/owners/new")
            }
            }>Add Owner</button>
        </div>

        <h2>Owners:</h2>
        <div>
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