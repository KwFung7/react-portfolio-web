import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import _ from 'lodash'
import { FontIcon, RaisedButton } from 'material-ui'
import { purple500 } from 'material-ui/styles/colors'
import ExpandLess from 'material-ui-icons/ExpandLess'
import Typed from 'typed.js'

class PortfolioIntro extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const { message } = this.props.intro
    const options = {
      strings: message,
      contentType: 'html',
      typeSpeed: 30,
      startDelay: 1500,
      shuffle: true
    }
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options)
  }

  componentWillUnmount() {
  	// Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy()
  }
  render() {
    let { intro = {}, handleScroll = () => {} } = this.props
    let { general, experience, skill, education, language } = intro
    return (
      <div className = "portfolio-intro">
        <div className = "portfolio-web-message">
          <FontIcon className = "material-icons" color = {purple500} >
           stars
          </FontIcon>
          <div className = "portfolio-message-body" ><span ref={(el) => { this.el = el }}/></div>
        </div>
        <div className = "portfolio-intro-container">
          <div className = "portfolio-intro-general">
            <div className = "portfolio-general-title">
              {general.type}
            </div>
            <div className = "portfolio-general-name">
              {`Name: ${general.name}`}
            </div>
            <div className = "portfolio-general-gender">
              {`Gender: ${general.gender}`}
            </div>
            <div className = "portfolio-general-age">
              {`Age: ${moment().format("YYYY") - general.year}`}
            </div>
            <div className = "portfolio-general-birth">
              {`Date of birth: ${general.birth}`}
            </div>
            <div className = "portfolio-general-position">
              {`Current Position: ${general.position}`}
            </div>
          </div>
          <div className = "portfolio-intro-experience">
            <div className = "portfolio-experience-title">
              {experience.type}
            </div>
            <div className = "portfolio-experience-details">
              {experience.jobs.map(((job, index) => 
                <div key = {index} className = "portfolio-experience-job">
                  <div className = "portfolio-experience-period">
                    {`${job.start} – ${job.end}`}
                  </div>
                  <div className = "portfolio-experience-company">
                    {job.company}
                  </div>
                  <div className = "portfolio-experience-position">
                    {job.position}
                    {job.current && ` ( ${_.replace(moment(job.start_for_moment, 'YYYYMMDD').fromNow(), "ago", " ")})`}
                  </div>
                  <div className = "portfolio-experience-info">
                    {job.info}<br />
                    <ul>
                      {job.details.map((detail, index) =>
                        <li key = {index} >{detail}</li>
                      )}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className = "portfolio-intro-skill">
            <div className = "portfolio-skill-title">
              {skill.type}
            </div>
            <div className = "portfolio-skill-details">
              <ul>
                {skill.details.map((detail, index) =>
                  <li key = {index}>{detail}</li>
                )}
              </ul>
            </div>
          </div>
          <div className = "portfolio-intro-education">
            <div className = "portfolio-education-title">
              {education.type}
            </div>
            <div className = "portfolio-education-details">
              {education.details.map((detail, index) =>
                <div key = {index} className = "portfolio-education-detail">
                  <div className = "portfolio-education-programme">
                    {`${detail.period}, ${detail.programme}`}
                  </div>
                  <div className = "portfolio-education-school">
                    {detail.school}
                  </div>
                  <br />
                </div>
              )}
            </div>
          </div>
          <div className = "portfolio-intro-language">
            <div className = "portfolio-language-title">
              {language.type}
            </div>
            <div className = "portfolio-language-details">
              {language.details.map((detail, index) =>
                <div key = {index} className = "portfolio-language-detail">{detail}</div>
              )}
            </div>
          </div>
        </div>
        <RaisedButton
          label = "Top"
          secondary = {true}
          icon = {<ExpandLess />}
          className = "portfolio-button"
          onClick = {() => { handleScroll() } }
          labelStyle = {{fontFamily: 'harabara', letterSpacing: '3px'}}
        />
      </div>
    )
  }
}
PortfolioIntro.defaultProps = {
  intro: {},
  handleScroll: () => {}
}
PortfolioIntro.propTypes = {
  intro: PropTypes.object.isRequired,
  handleScroll: PropTypes.func.isRequired
}
export default PortfolioIntro
