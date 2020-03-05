import React, { Component } from 'react'
// import items from './data';
// import Client from './Contentful';
import carsData from './data'

const CarContext = React.createContext();

class CarProvider extends Component {

  state = {
    cars: [],
    sortedCars: [],
    featuredCars: [],
    loading: true,
    //controlled input - cars filter component
    type: 'all',
    carMake: 'all',
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    gps: false,
    sportPackage: false
  };

  // Get API data
  // getAPIData = async () => {
  //   try {
  //     let response = await Client.getEntries({
  //       content_type: "carDealershipCars",
  //       order: "sys.createdAt"
  //     });

  //     let cars = this.formatData(response.items);
  //     // return featured cars from array
  //     let featuredCars = cars.filter(car => car.featured === true);
  //     //calculate default maximum price for each item in Array
  //     let maxPrice = Math.max(...cars.map(car => car.price));
  //     //calculate default maximum size for each item in Array
  //     let maxSize = Math.max(...cars.map(car => car.size));

  //     this.setState({
  //       cars,
  //       featuredCars,
  //       sortedCars: cars,
  //       loading: false,
  //       price: maxPrice,
  //       maxPrice,
  //       maxSize,

  //     });
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // Get local data
  componentDidMount() {
    // this.getAPIData()
    let cars = this.formatData(carsData);

    // return featured cars from array
    let featuredCars = cars.filter(car => car.featured === true);

    //calculate default maximum price for each item in Array
    let maxPrice = Math.max(...cars.map(car => car.price));
    //calculate default maximum size for each item in Array
    let maxSize = Math.max(...cars.map(car => car.size));

    this.setState({
      cars,
      featuredCars,
      sortedCars: cars,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize
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

  // getCar function to set up slug parameter via--react router
  getCar = (slug) => {
    let tempCars = [...this.state.cars];
    const car = tempCars.find(tempCar => tempCar.slug === slug)
    return car;
  }

  //form inputs - controlled input
  handleChange = e => {

    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    }, this.filterCars)

    // console.log(`type: ${type}, name: ${name}, value: ${value}`)
  }

  filterCars = () => {
    let {
      cars, price, type, carMake, minSize, maxSize, gps, sportPackage
    } = this.state
    //All cars
    let tempCars = [...cars];


    // -----------------------------------------------

    // filter by type
    if (type !== 'all') {
      tempCars = tempCars.filter(car => car.type === type)
    }

    // ---------------------------------------------------------

    //Filter by manufacturers
    if (carMake !== 'all') {
      tempCars = tempCars.filter(car => car.carMake === carMake)
    }

    // ---------------------------------------------------------
    //Filter by price
    tempCars = tempCars.filter(car => car.price <= price);

    // ---------------------------------------------------------

    // Filter by size
    tempCars = tempCars.filter(car => car.size >= minSize && car.size <= maxSize)

    // ---------------------------------------------------------

    if (gps) {
      tempCars = tempCars.filter(car => car.gps === true)
    }

    if (sportPackage) {
      tempCars = tempCars.filter(car => car.sportPackage === true)
    }

    //alternate state
    this.setState({
      sortedCars: tempCars
    })
  };


  render() {
    return (
      <CarContext.Provider value={{ ...this.state, getCar: this.getCar, handleChange: this.handleChange }}>
        {this.props.children}
      </CarContext.Provider>
    )
  }
}

const CarConsumer = CarContext.Consumer;


//Higher order function that wraps component passed into in(carsContainer)
export function withCarConsumer(Component) {
  return function ConsumerWrapper(props) {
    return <CarConsumer>
      {value => <Component {...props} context={value} />}
    </CarConsumer>
  }
}

export { CarProvider, CarConsumer, CarContext }

