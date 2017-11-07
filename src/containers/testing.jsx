import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import TestingExtend from './testing_extend'

const Testing = props =>
<div>
    <h1>Testing for react</h1>
    <TestingExtend />
</div>

ReactDOM.render(
    <Testing />,
    document.body.appendChild(document.createElement('div'))
)
