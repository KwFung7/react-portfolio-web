import React from 'react'
import { ChevronRight } from 'material-ui-icons'

export default class ChevronRightContainer extends React.Component {
  
  render() {
    const {className, onClick} = this.props
    return(
      <ChevronRight 
        className={className}
        style={{width: '50px', height: '50px', right: '-50px'}}
        onClick={onClick}
      />
    )
  }
}
