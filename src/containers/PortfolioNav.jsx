import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Tabs, Tab } from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views'
import PortfolioIntro from './PortfolioIntro'
import PortfolioProjects from './PortfolioProjects'
import PortfolioContact from './PortfolioContact'
import { INTRO, PROJECTS, CONTACT } from '../constants'

class PortfolioNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      slideIndex: 0,
      extend_projects_detail: 0
    }
  }

  handleChange = (value) => {
    let viewNode = ReactDOM.findDOMNode(this.refs.view)
    viewNode.scrollTop = 0
    
    this.setState({ slideIndex: value })
  }
  handleExtend = (project_id) => {
    this.setState({ extend_projects_detail: project_id })
  }
  handleScroll = (event) => {
    let viewNode = ReactDOM.findDOMNode(this.refs.view)
    let scroll = window.setInterval(() => { 
      if (viewNode.scrollTop > 0) {
        viewNode.scrollTop = viewNode.scrollTop - 50
      } else {
        window.clearInterval(scroll)
      }
    }, 10)
  }

  render() {
    let { intro, projects, contact } = this.props
    let { slideIndex = 0, extend_projects_detail = false } = this.state
    return (
      <div>
        <Tabs
          className = "portfolio-tabs"
          onChange = {this.handleChange}
          value = {this.state.slideIndex}
        >
          <Tab className = "portfolio-tab" label = {INTRO} value = {0} />
          <Tab className = "portfolio-tab" label = {PROJECTS} value = {1} />
          <Tab className = "portfolio-tab" label = {CONTACT} value = {2} />
        </Tabs>
        <SwipeableViews
          className = {`portfolio-swipeable-view ${extend_projects_detail !== 0 && slideIndex === 1 ? `view-extend-${extend_projects_detail}` : `view-${slideIndex + 1}` }`}
          ref = 'view'
          index = {this.state.slideIndex}
          onChangeIndex = {this.handleChange}
          animateHeight = {true}
          enableMouseEvents = {true}
        >
          <PortfolioIntro intro = {intro} handleScroll = {this.handleScroll} />
          <PortfolioProjects projects = {projects} handleExtend = {this.handleExtend} />
          <PortfolioContact contact = {contact} />
        </SwipeableViews>
      </div>
    )
  }
}
PortfolioNav.defaultProps = {
  intro: {},
  projects: {},
  contact: {}
}
PortfolioNav.propTypes = {
  intro: PropTypes.object.isRequired,
  projects: PropTypes.object.isRequired,
  contact: PropTypes.object.isRequired
}
export default PortfolioNav
