import React, { Component } from 'react'
import items from './data';

const CarContext = React.createContext();
class CarProvider extends Component {

  state = {
    cars: [],
    sortedCars: [],
    featuredCars: [],
    loading: true
  };

  // Get data
  componentDidMount() {
    let cars = this.formatData(items);
    console.log(cars)
    let featuredCars = cars.filter(car => car.featured === true);
    this.setState({
      cars,
      featuredCars,
      sortedCars: cars,
      loading: false
    });
  }

  // Flattening data.js Array
  formatData = (items) => {
    let tempItems = items.map(item => {

      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      // Copy of fields object from data.js and return
      let car = { ...item.fields, images, id }
      return car;

    });

    return tempItems
  }

  // getCar function

  getCar = (slug) => {
    let tempCars = [...this.state.cars];
    const car = tempCars.find(tempCar => tempCar.slug === slug)
    return car;
  }


  render() {
    return (
      <CarContext.Provider value={{ ...this.state, getCar: this.getCar }}>
        {this.props.children}
      </CarContext.Provider>
    )
  }
}

const CarConsumer = CarContext.Consumer;

export { CarProvider, CarConsumer, CarContext }

