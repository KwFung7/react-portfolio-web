import React from 'react'
import PortfolioHeader from './portfolio_header'
import PortfolioNav from './portfolio_nav'
import store from './portfolio_data'
import ParticlesContainer from './particles_container'

const PortfolioPage = props => {
  return (
    <div className = "portfolio-page">
      <ParticlesContainer />
      <PortfolioHeader user = {store.header} />
      <PortfolioNav 
        intro = {store.intro}
        projects = {store.projects}
        contact = {store.contact}
      />
    </div>
  )
}

export default PortfolioPage