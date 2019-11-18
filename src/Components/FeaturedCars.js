import React, { Component } from 'react'
import { CarContext } from '../context';

export default class FeaturedCars extends Component {

  static contextType = CarContext;


  render() {
    const value = this.context;
    console.log(value)
    return (
      <div>
        Hello from featured Cars
      </div>
    )
  }
}
