import React from 'react'
import PropTypes from 'prop-types'
import { EMAIL, TELEPHONE } from '../constants'

class PortfolioContact extends React.Component {

  render() {
    const { contact = {} } = this.props
    const { email = '', phone = '' } = contact
    return (
      <div className = "portfolio-contact">
        <div className = "portfolio-contact-email">{EMAIL} {email}</div>
        <div className = "portfolio-contact-phone">{TELEPHONE} {phone}</div>
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
