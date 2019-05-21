import React, { Component } from 'react'



export default class SearchList extends Component {

  render() {
    return (
      <section className="searchList">
        <div className="card">
          {
            <h5>{this.props.search}</h5>

          }
        </div>
      </section>
    )
  }
}