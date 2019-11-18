import React, { Component } from 'react'
import Title from './Title';
import { FaCar, FaChartLine, FaBusinessTime, FaRoad } from 'react-icons/fa';

export default class Services extends Component {

  state = {
    services: [
      {
        icon: <FaCar />,
        title: 'Test drive our cars!',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, illum?'

      },
      {
        icon: <FaChartLine />,
        title: 'Performance enhancements',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, illum?'

      },
      {
        icon: <FaBusinessTime />,
        title: 'Open 24/7 for our gold members',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, illum?'

      },
      {
        icon: <FaRoad />,
        title: 'Test drive our cars!',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, illum?'

      }
    ]
  }

  render() {

    let { services } = this.state;

    const servicesList = services.map((service, index) => {
      let { icon, title, info } = service;

      return (
        <article key={index} className="service">
          <span>{icon}</span>
          <h6>{title}</h6>
          <p>{info}</p>
        </article>
      )
    });

    return (
      <section className="services">
        <Title title='Our Services' />
        <div className="services-center">
          {servicesList}
        </div>
      </section>
    )
  }
}
