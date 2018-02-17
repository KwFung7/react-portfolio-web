import React from 'react'
import PropTypes from 'prop-types'
import Face from 'material-ui-icons/Face'
import moment from 'moment'
import { TIMER_INTERVAL } from '../constants'

class PortfolioHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current_date: moment().format('LL'),
      current_time: moment().format('LTS')
    }
  }
  render() {
    let { name, position } = this.props.user
    return (
      <div className = "portfolio-header-container">
        <Face className = "portfolio-header-face" color = "white" />
        <div className = "portfolio-header-name">{name}</div>
        <div className = "portfolio-header-pos">{position}</div>
        <div className = "portfolio-header-date">{this.state.current_date}</div>
        <div className = "portfolio-header-time">{this.state.current_time}</div>
      </div>
    )
  }
  componentDidMount() {
    this._timer = setInterval(() => { 
      this.setState({
        current_date: moment().format('LL'), 
        current_time: moment().format('LTS') 
      })
    }, TIMER_INTERVAL)
  }
  componentWillUnmount() {
    clearInterval(this._timer)
  }
}
PortfolioHeader.defaultProps = {
  user: {}
}
PortfolioHeader.propTypes = {
  user: PropTypes.object.isRequired
}
export default PortfolioHeader
