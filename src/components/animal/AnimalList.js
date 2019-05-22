import React, { Component } from 'react'
import AnimalItem from './AnimalItem'
import "./animal.css"

export default class AnimalList extends Component {

  render() {

    return (
      <section className="animalList" >

        <div className="animalButton">
          <button type="button"
            className="btn btn-success"
            onClick={() => {
              this.props.history.push("/animals/new")
            }
            }>Admit Animal</button>
        </div>
        <h2>Animals:</h2>
        {
          this.props.animals.map((item) =>
            <AnimalItem className="animalItem" key={item.id} animal={item} deleteAnimal={this.props.deleteAnimal} />
          )
        }
      </section>
    )
  }
}