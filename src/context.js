import React, { Component } from 'react'

const CarContext = React.createContext();
class CarProvider extends Component {

  state = {
    greeting: 'hello',
    name: 'john'
  }


  render() {
    return (
      <CarContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </CarContext.Provider>
    )
  }
}

const CarConsumer = CarContext.Consumer;

export { CarProvider, CarConsumer, CarContext }