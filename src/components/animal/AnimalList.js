import React, { Component } from 'react'


export default class AnimalList extends Component {
  render() {

    return (
      <section className="animalList" >
        <h3>Animals:</h3>
        <ul>
          {
            this.props.animals.map(animal =>
              <li key={animal.id}>
                <h3>{animal.name}</h3>
                <p>{<Owners />}</p>
              </li>
            )
          }
        </ul>
      </section>
    )
  }
}