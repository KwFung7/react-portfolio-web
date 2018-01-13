import React, { Component } from 'react'
import PortfolioPage from './containers/PortfolioPage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.scss'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Route exact path='/' component={PortfolioPage} />
            <Route path='/portfolio' component={PortfolioPage} />
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}
export default App
