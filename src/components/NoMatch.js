import React from 'react'
import { NO_MATCH_STATUS, NOT_FOUND, NO_MATCH_FOR } from '../constants'

const textStyle = {
  color: 'lightgrey',
  textAlign: 'center'
}
const NoMatch = ({ location }) =>
<div className="container-fluid justify-content-center align-items-center">
  <div style={{ ...textStyle, fontSize: '100px', fontFamily: 'harabara' }}>{NO_MATCH_STATUS}</div>
  <div style={{ ...textStyle, fontSize: '40px', fontFamily: 'harabara' }}>{NOT_FOUND}</div>
  <div style={{ ...textStyle, fontSize: '15px' }}>{NO_MATCH_FOR}{location.pathname}</div>
</div>

export default NoMatch