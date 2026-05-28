import React, { Component } from 'react'
import PortfolioPage from './containers/PortfolioPage'
import PrivacyPolicy from './containers/PrivacyPolicy'
import NoMatch from './components/NoMatch'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ROOT, PORTFOLIO_ROUTE, PAWWELL_ROUTE, PRIVACY_ROUTE } from './constants'
import './App.scss'

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <Switch>
            <Route exact path={ROOT} component={PrivacyPolicy} />
            <Route exact path={`${PAWWELL_ROUTE}${PRIVACY_ROUTE}`} component={PrivacyPolicy} />
            <Route exact path={PORTFOLIO_ROUTE} render={PortfolioPage} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    )
  }
}
export default App
