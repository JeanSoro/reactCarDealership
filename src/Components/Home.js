import React from 'react';
import HeroBackground from './HeroBackground';
import Banner from './Banner'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <HeroBackground>

      <Banner title="luxury dealership" subtitle="find your next toy here">
        <Link to="/cars" className="btn-primary">
          Our Cars
        </Link>
      </Banner>
    </HeroBackground>
  )
}



export default Home;