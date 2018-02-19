import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { EMAIL, TELEPHONE } from '../constants'

class PortfolioContact extends React.Component {

  render() {
    const { contact = {} } = this.props
    const { email = '', phone = '', github_link, linkedin_link } = contact
    return (
      <div className = "portfolio-contact">
        <div className = "portfolio-contact-email">{EMAIL} {email}</div>
        <div className = "portfolio-contact-phone">{TELEPHONE} {phone}</div>
        <div className = "portfolio-contact-social-btn">
          {
            !_.isEmpty(github_link) &&
            <a className="m-2" href={github_link} alt="github-btn" target="_blank">
              <i className="fab fa-github"></i>
            </a>
          }
          {
            !_.isEmpty(linkedin_link) &&
            <a className="m-2" href={linkedin_link} alt="linkedin-btn" target="_blank">
              <i className="fab fa-linkedin"></i>
            </a>
          }
        </div>
      </div>
    )
  }
}
PortfolioContact.defaultProps = {
  contact: {}
}
PortfolioContact.propTypes = {
  contact: PropTypes.object.isRequired
}
export default PortfolioContact
