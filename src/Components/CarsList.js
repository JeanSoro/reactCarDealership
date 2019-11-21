import React from 'react'
import Car from './Car'

const CarsList = ({ cars }) => {

  if (cars.length === 0) {
    return (
      <div className="empty-search">
        <h3>no cars match this search query</h3>
      </div>
    )
  }


  return (
    <section className="carslist">
      <div className="carslist-center">
        {
          cars.map(item => {
            return <Car key={item.id} car={item} />
          })
        }
      </div>
    </section>
  )
}

export default CarsList
