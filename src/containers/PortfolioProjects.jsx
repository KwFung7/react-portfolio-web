import React from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'
import ChevronLeftComponent from '../components/ChevronLeftComponent'
import ChevronRightComponent from '../components/ChevronRightComponent'
import TouchApp from 'material-ui-icons/TouchApp'
import { Grid, Row, Col } from 'react-bootstrap'
import Img from 'react-image'
import { 
  CLICK_FOR_DETAILS,
  PROJECT_NAME,
  PROJECT_TYPE,
  PROJECT_SITE
} from '../constants'

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
    const { projects = {} } = this.props
    const { selected_data = {} } = this.state
    const { details = [], scenes = [], code_images = [] } = selected_data
    return (
      <div className = "portfolio-projects">
        <div className = "portfolio-projects-individual">
          <div className = "portfolio-individual-title">{projects.title}</div>
          <div className = "portfolio-projects-ios">
            { 
              projects.ios_app.map((item, index) =>
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
                <TouchApp color='rgba(30%, 30%, 30%, 0.9)' />
                <span>{CLICK_FOR_DETAILS}</span>
              </div>
          } 
        </div>
        {
          this.state.open !== 0 &&
            <Grid>
              <Row className = "portfolio-projects-details">
                <Col md={12} lg={3} className = "d-none d-md-block">
                  <div className = {`portfolio-ios-icon ${selected_data.short_name}`}></div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={9} className = "portfolio-details-info">
                  <div className = "portfolio-info-name">
                    {PROJECT_NAME} {selected_data.name}
                  </div>
                  <div className = "portfolio-info-type">
                    {PROJECT_TYPE} {selected_data.type}
                  </div>
                  <div className = "portfolio-info-site">
                    <div>{PROJECT_SITE} </div>
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
                              scenes.map((scene, index) =>
                                <Img 
                                  key={`scene-${index + 1}`}
                                  className = "portfolio-details-scene"
                                  src={scene}
                                  alt={`scene-${index + 1}`}
                                  loader={<Img src='/images/spinner.gif' alt='spinner' className = "portfolio-scene-loading" />}
                                  unloader={<Img src='/images/spinner.gif' alt='spinner' className = "portfolio-scene-loading" />} 
                                />
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
                            prevArrow = {<ChevronLeftComponent />}
                            nextArrow = {<ChevronRightComponent />}
                          >
                            {
                              scenes.map((scene , index) => 
                                <img key={`scene-${index + 1}`} src={scene} alt={`scene-${index + 1}`} />
                              )
                            } 
                          </Slider>
                      }
                      {
                        index !== 0 &&
                          <Img
                            key={`image-${index}`}
                            className = "portfolio-details-image"
                            src={code_images[index - 1]}
                            alt={`image-${index}`}
                            loader={<Img src='/images/spinner.gif' alt='spinner' className = "portfolio-loading" />}
                            unloader={<Img src='/images/spinner.gif' alt='spinner' className = "portfolio-loading" />}   
                          />
                      }
                    </Col>
                  )
                }
              </Row>
            </Grid>
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
