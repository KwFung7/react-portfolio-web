import React from 'react'
import { ChevronLeft } from 'material-ui-icons'

export default class ChevronLeftContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {className, style, onClick} = this.props
    return(
      <ChevronLeft
        className={className}
        style={{width: '50px', height: '50px', left: '-50px'}}
        onClick={onClick}
      />
    )
  }
}
