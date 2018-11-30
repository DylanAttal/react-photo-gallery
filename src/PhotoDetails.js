import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import template from './template'
import myData from './myData.json'

const PhotoDetails = props => {
  return (
    <div>
      <h3>
        {
          myData[props.match.params.category].photos[props.match.params.id]
            .title
        }
      </h3>
      <img
        src={
          myData[props.match.params.category].photos[props.match.params.id]
            .imageURL
        }
      />
    </div>
  )
}

export default PhotoDetails
