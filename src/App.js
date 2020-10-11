import React, { Component } from 'react'
import PortfolioPage from './containers/PortfolioPage'
import NoMatch from './components/NoMatch'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { ROOT, PORTFOLIO_ROUTE, API_HOST_URL, MAINTAINANCE_MSG } from './constants'
import axios from 'axios'
import _ from 'lodash'
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setting: {}
    }
  }

  componentDidMount() {
    const config = {
      method: 'GET',
      url: `${API_HOST_URL}/api/v1/setting`
    };
    axios(config)
      .then((res) => {
        const { data = [] } = res;
        this.setState({ setting: _.head(data) })
      })
      .catch(() => {
        console.log('Fail to load system settings.')
      })
  }

  redirectToPortfolio = () => {
    const { setting = {} } = this.state;
    const { selected_portfolio } = setting;
    return <Redirect to={`${PORTFOLIO_ROUTE}/${selected_portfolio}`} />
  };
  render() {
    const { setting = {} } = this.state;
    return (
      _.isEmpty(setting)
        ? (
          <div className="api-loading">
            <img src="/images/spinner.gif" className="loading-img" alt="loading" />
            <div className="desc">{MAINTAINANCE_MSG}</div>
          </div>
        ) : (
          <MuiThemeProvider>
            <Router>
              <Switch>
                <Route exact path={ROOT} render={this.redirectToPortfolio} />
                <Route exact path={PORTFOLIO_ROUTE} render={this.redirectToPortfolio} />
                <Route path={`${PORTFOLIO_ROUTE}/:id`} component={PortfolioPage} />
                <Route component={NoMatch} />
              </Switch>
            </Router>
          </MuiThemeProvider>
        )
    )
  }
}
export default App
