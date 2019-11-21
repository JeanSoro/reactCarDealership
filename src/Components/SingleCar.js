import React, { Component } from 'react'
import defaultBcg from '../images/car-2.jpg';
import Hero from './HeroBackground'
import Banner from './Banner'
import { Link } from 'react-router-dom';
import { CarContext } from '../context';
import StyledHeroBackground from './StyledHeroBackground';

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
    const [mainImg, ...defaultImg] = images;

    // console.log(car)
    return (
      <>
        <StyledHeroBackground img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} car`}>
            <Link to='/cars' className="btn-primary">
              Back to cars
          </Link>
          </Banner>
        </StyledHeroBackground>

        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: ${price}</h6>
              <h6>size: {size} SQFT</h6>
              <h6>
                capacity: {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>
                {pets ? "push to start engine" : "no push to start"}
              </h6>
              <h6>{breakfast && "sport package included"}</h6>
            </article>
          </div>
        </section>

        <section className="car-extras">
          <h6>premium features</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>
            })}
          </ul>
        </section>
      </>
    )
  }
}


