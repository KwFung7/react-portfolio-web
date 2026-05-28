import React, { Component } from 'react'
import { PAWWELL_PRIVACY_POLICY_TITLE, PAWWELL_PRIVACY_POLICY_CONTENT } from '../constants'

class PrivacyPolicy extends Component {
  render() {
    return (
      <div className="privacy-policy-container">
        <h1>{PAWWELL_PRIVACY_POLICY_TITLE}</h1>
        <p>{PAWWELL_PRIVACY_POLICY_CONTENT}</p>
      </div>
    )
  }
}

PrivacyPolicy.propTypes = {}

PrivacyPolicy.defaultProps = {}

export default PrivacyPolicy
