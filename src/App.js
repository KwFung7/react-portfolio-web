import React, { Component } from 'react'
import PortfolioPage from './containers/portfolio_page'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.scss'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <PortfolioPage />
      </MuiThemeProvider>
    )
  }
}
export default App
