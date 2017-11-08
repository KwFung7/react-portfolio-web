import React from 'react'
import PropTypes from 'prop-types'

class PortfolioContact extends React.Component {

  render() {
    const { contact = {} } = this.props
    const { email = '', phone = '' } = contact
    return (
      <div className = "portfolio-contact">
        <div className = "portfolio-contact-email">Email: {email}</div>
        <div className = "portfolio-contact-phone">Tel: {phone}</div>
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
