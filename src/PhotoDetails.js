import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import template from './template'

const PhotoDetails = props => {
  return (
    <div>
      <h3>
        {
          template[props.match.params.category].photos[props.match.params.id]
            .title
        }
      </h3>
      <img
        src={
          template[props.match.params.category].photos[props.match.params.id]
            .imageURL
        }
      />
    </div>
  )
}

export default PhotoDetails
