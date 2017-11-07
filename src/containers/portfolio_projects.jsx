import React from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'
import ChevronLeftContainer from './chevron_left'
import ChevronRightContainer from './chevron_right'
import ExpandLess from 'material-ui-icons/ExpandLess'
import { FontIcon, RaisedButton } from 'material-ui'
import { Row, Col } from 'react-bootstrap'


class PortfolioProjects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: 0,
      selected_data: {}
    }
  }

  handleOpen = (item) => {
    this.setState({ 
      open: item.id,
      selected_data: item
    })
    this.props.handleExtend(item.id)
  }
  handleClose = () => {
    this.setState({ 
      open: 0,
      selected_data: {}
    })
  }

  render() {
    const { individual } = this.props.projects
    const { selected_data = {} } = this.state
    const { details = [], scenes = [], code_images = [] } = selected_data
    return (
      <div className = "portfolio-projects">
        <div className = "portfolio-projects-individual">
          <div className = "portfolio-individual-title">{individual.title}</div>
          <div className = "portfolio-projects-ios">
            { 
              individual.ios_app.map((item, index) =>
                <div 
                  key = {index} 
                  className = {`portfolio-ios-icon icon-hover ${item.short_name}`}
                  onClick = {this.handleOpen.bind(this, item)}
                >
                </div>
              )
            }
          </div>
          {
            this.state.open === 0 &&
              <div className = "portfolio-individual-title">
                <FontIcon className = "material-icons" color = "rgba(30%, 30%, 30%, 1)" >
                  touch_app
                </FontIcon>
                <span> Click for details</span>
              </div>
          } 
        </div>
        {
          this.state.open !== 0 &&
            <Row className = "portfolio-projects-details">
              <Col xsHidden sm={4} md={3} className = {`portfolio-ios-icon ${selected_data.short_name}`} ></Col>
              <Col xs={12} sm={8} md={9} className = "portfolio-details-info">
                <div className = "portfolio-info-name">
                  Project name: {selected_data.name}
                </div>
                <div className = "portfolio-info-type">
                  Project type: {selected_data.type}
                </div>
                <div className = "portfolio-info-site">
                  <div>Project site: </div>
                  <a href={selected_data.site} target="_blank">{selected_data.site}</a>
                </div>
              </Col>
              {
                details.map((detail, index) =>
                  <Col key={index} xs={12} sm={12} className = "portfolio-details-box">
                    <div className = "portfolio-details-caption">{detail}</div>
                    {
                      index === 0 &&
                        <div className = "portfolio-details-scenes">
                          {
                            scenes.map((scene , index) =>
                              <img key={`scene-${index + 1}`} className = "portfolio-details-scene" src={`/images/${scene}`} alt={scene} />
                            )
                          }
                        </div>
                    }
                    {
                      index === 0 &&
                        <Slider
                          dots = {true}
                          infinite = {true}
                          speed = {500}
                          slidesToShow = {1}
                          slidesToScroll = {1}
                          prevArrow = {<ChevronLeftContainer />}
                          nextArrow = {<ChevronRightContainer />}
                        >
                          {
                            scenes.map((scene , index) => 
                              <img key={`scene-${index + 1}`} src={`/images/${scene}`} alt={scene} />
                            )
                          } 
                        </Slider>
                    }
                    {
                      index !== 0 &&
                        <img key={`image-${index}`} className = "portfolio-details-image" src={`/images/${code_images[index - 1]}`} alt={code_images[index - 1]} />
                    }
                  </Col>
                )
              }
            </Row>
        }
      </div>
    )
  }
}
PortfolioProjects.defaultProps = {
  projects: {},
  handleExtend: () => {}
}
PortfolioProjects.propTypes = {
  projects: PropTypes.object.isRequired,
  handleExtend: PropTypes.func.isRequired
}
export default PortfolioProjects
