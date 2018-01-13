import React from 'react'
import PortfolioHeader from './PortfolioHeader'
import PortfolioNav from './PortfolioNav'
import ParticlesContainer from './ParticlesContainer'
import store from '../store'

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