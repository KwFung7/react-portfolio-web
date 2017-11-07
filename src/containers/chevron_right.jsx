import React from 'react'
import { ChevronRight } from 'material-ui-icons'

export default class ChevronRightContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {className, style, onClick} = this.props
    return(
      <ChevronRight 
        className={className}
        style={{width: '50px', height: '50px', right: '-50px'}}
        onClick={onClick}
      />
    )
  }
}
