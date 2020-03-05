import React from 'react';
import HeroBackground from './HeroBackground';
import Banner from './Banner'
import { Link } from 'react-router-dom';
import Services from './Services'
import FeaturedCars from './FeaturedCars'


const Home = () => {
  return (

    <>
      <HeroBackground>
        <Banner title="mdrn dealership" subtitle="find your dream car here">
          <Link to="/cars" className="btn-primary">
            Our Cars
        </Link>
        </Banner>
      </HeroBackground>
      <Services />
      <FeaturedCars />
    </>
  )
}



export default Home;