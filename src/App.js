import React, { Component } from 'react'
import PortfolioPage from './containers/PortfolioPage'
import NoMatch from './components/NoMatch'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { ROOT, PORTFOLIO_ROUTE, API_HOST_URL } from './constants'
import Img from 'react-image'
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
      .catch((err) => {
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
      ? <Img src='/images/spinner.gif' className = "api-loading" />
      : <MuiThemeProvider>
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
  }
}
export default App
