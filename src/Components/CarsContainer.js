import React from 'react'
import CarsFilter from './CarsFilter'
import CarsList from './CarsList'
import { withCarConsumer } from '../context'
import Loading from './Loading'

function CarsContainer({ context }) {

  const { loading, sortedCars, cars } = context;

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <CarsFilter cars={cars} />
      <CarsList cars={sortedCars} />
    </>
  );

}


export default withCarConsumer(CarsContainer)



// import React from 'react'
// import CarsFilter from './CarsFilter'
// import CarsList from './CarsList'
// import { CarConsumer } from '../context'
// import Loading from './Loading'

// export default function CarsContainer() {
//   return (
//     <CarConsumer>
//       {value => {
//         {/* console.log(value) */}
//         const {loading, sortedCars, cars} = value;

//         if(loading){
//           return <Loading/>;
//         }

//         return (
//           <div>
//             Hello from Cars CarsContainer
//             <CarsFilter cars={cars}/>
//             <CarsList Cars={sortedCars}/>
//           </div>
//         );
//       }}
//     </CarConsumer>

//   )
// }

