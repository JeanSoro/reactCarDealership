import React from 'react'
//react hook for functional component
import { useContext } from 'react'
import { CarContext } from '../context'
import Title from './Title'

//get unique values: items = cars array, value =car type
const uniqueValues = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}

const CarsFilter = ({ cars }) => {

  const context = useContext(CarContext)
  const {
    handleChange,
    type,
    carMake,
    price,
    minPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  // get unique types
  let types = uniqueValues(cars, 'type');

  // add 'all' type to array
  types = ['all', ...types];

  //JSX MARKUP for types of cars
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>{item}</option>
    )
  });

  //JSX MARKUP for cars capacity(car make-manufacturer)

  let manufacturers = uniqueValues(cars, 'carMake');
  // add 'all' type to array
  manufacturers = ['all', ...manufacturers];
  manufacturers = manufacturers.map((item, index) => {
    return <option key={index} value={item}>{item}</option>
  })

  return (
    <section className="filter-container">
      <Title title="Search Cars" />
      <form className="filter-form">
        {/* select type input*/}
        <div className="form-group">
          <label htmlFor="type">Car type</label>
          <select onChange={handleChange} name="type" id="type" value={type} className="form-control">
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* capacity input*/}
        <div className="form-group">
          <label htmlFor="capacity">Brand</label>
          <select onChange={handleChange} name="carMake" id="carMake" value={carMake} className="form-control">
            {manufacturers}
          </select>
        </div>
        {/* end of capacity select type */}
        {/* cars price select type */}

        {/* end of cars price select type */}
      </form>
    </section>
  )
}

export default CarsFilter
