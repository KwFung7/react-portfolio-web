import React, { Component } from 'react'
import moment from 'moment'
import { PAWWELL_PRIVACY_POLICY_TITLE, PAWWELL_PRIVACY_POLICY_CONTENT, COPYRIGHT } from '../constants'
import '../assets/stylesheets/privacy_policy.scss'

class PrivacyPolicy extends Component {
  render() {
    const copyright = COPYRIGHT.replace('[currentYear]', moment().year())
    const blocks = PAWWELL_PRIVACY_POLICY_CONTENT
      .trim()
      .split(/\n(?=\d+\.\s)/)
      .filter(Boolean)

    return (
      <div className="privacy-policy">
        <div className="privacy-policy-header">
          <h1 className="privacy-policy-title">{PAWWELL_PRIVACY_POLICY_TITLE}</h1>
        </div>
        <div className="privacy-policy-content">
          <p className="privacy-policy-updated">Last Updated: April 2026</p>
          <p className="privacy-policy-intro">
            Welcome to PawWell. We are committed to protecting your personal information and your right to privacy.
          </p>
          {blocks.map((block, i) => {
            const lines = block.trim().split('\n')
            const heading = lines[0]
            const body = lines.slice(1).filter(Boolean)
            return (
              <section key={i} className="privacy-policy-section">
                <h3 className="privacy-policy-section-heading">{heading}</h3>
                {body.map((text, j) => (
                  <p key={j} className="privacy-policy-text">{text}</p>
                ))}
              </section>
            )
          })}
        </div>
        <div className="privacy-policy-footer">
          <div className="privacy-policy-copyright">{copyright}</div>
        </div>
      </div>
    )
  }
}

PrivacyPolicy.propTypes = {}
PrivacyPolicy.defaultProps = {}

export default PrivacyPolicy
