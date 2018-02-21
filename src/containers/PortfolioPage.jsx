import React, { Component } from 'react'
import axios from 'axios'
import _ from 'lodash'
import { API_HOST_URL, PORTFOLIO_TITLE } from '../constants'
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
    const params = this.props.match.params
    const config = {
      method: 'GET',
      url: `${API_HOST_URL}/api/v1/portfolio/${params.id}`
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
        ? <Img src='/images/spinner.gif' className = "api-loading" />
        : <div className = "portfolio-page">
            <h1 className="hidden">{PORTFOLIO_TITLE}</h1>
            <h2 className="hidden">{PORTFOLIO_TITLE}</h2>
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