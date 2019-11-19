import React, { Component } from 'react'
import defaultBcg from '../images/car-2.jpg';
import Hero from './HeroBackground'
import Banner from './Banner'
import { Link } from 'react-router-dom';
import { CarContext } from '../context';

export default class SingleCar extends Component {

  constructor(props) {
    super(props)
    // console.log(this.props)

    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    }
  }

  static contextType = CarContext;

  // componentDidMount() {
  // }


  render() {
    const { getCar } = this.context;
    const car = getCar(this.state.slug);

    if (!car) {
      return (

        <div className="error">
          <h3>Car not available...</h3>
          <Link to='/cars' className="btn-primary">
            Back to cars
          </Link>

        </div>

      )
    }
    const { name, description, capacity, size, price, extras, breakfast, pets, images } = car;
    // console.log(car)
    return (
      <Hero hero='carsHero'>
        <Banner title={`${name} car`}>
          <Link to='/cars' className="btn-primary">
            Back to cars
          </Link>
        </Banner>
      </Hero>
    )
  }
}
