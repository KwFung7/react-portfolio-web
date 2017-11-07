import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PortfolioHeader from './portfolio_header'
import PortfolioNav from './portfolio_nav'
import store from './portfolio_store'

const PortfolioPage = props => {
  return (
    <div className = "portfolio-page">
      <PortfolioHeader user = {store.header} />
      <PortfolioNav 
        intro = {store.intro}
        projects = {store.projects}
        contact = {store.contact}
      />
    </div>
  )
}

ReactDOM.render(
  <MuiThemeProvider>
    <PortfolioPage />
  </MuiThemeProvider>,
  document.body.appendChild(document.createElement('div'))
)
