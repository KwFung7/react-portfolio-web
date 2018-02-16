import React, { Component } from 'react'
import axios from 'axios'
import _ from 'lodash'
import PortfolioHeader from './PortfolioHeader'
import PortfolioNav from './PortfolioNav'
import ParticlesContainer from './ParticlesContainer'
import Img from 'react-image'

class PortfolioPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      portfolio: {}
    }
  }

  componentDidMount() {
    const config = {
      method: 'GET',
      url: 'http://localhost:5000/api/v1/portfolio/5a8644518c4b776715afacd1'
    }
    axios(config)
      .then((res) => {
        const { data = {} } = res
        this.setState({ portfolio: data })
      })
      .catch((err) => {
        console.log('Fail to load portfolio.')
      })
  }

  render () {
    const { portfolio = {} } = this.state
    return (
      _.isEmpty(portfolio)
        ? <Img src='/images/spinner.gif' className = "portfolio-api-loading" />
        : <div className = "portfolio-page">
            <ParticlesContainer />
            <PortfolioHeader user = {portfolio.header} />
            <PortfolioNav 
              intro = {portfolio.intro}
              projects = {portfolio.projects}
              contact = {portfolio.contact}
            />
          </div>
    )
  }
}

export default PortfolioPage