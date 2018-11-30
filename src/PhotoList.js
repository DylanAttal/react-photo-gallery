import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import template from './template.json'
import CategoryList from './CategoryList'

const PhotoList = props => {
  console.log(props)
  console.log(props.match.params.category)
  return (
    <div>
      {template[props.match.params.category].photos.map((photo, index) => {
        return (
          <div key={index}>
            <Link to={`/${props.match.params.category}/${index}`}>
              <img src={photo.imageURL} />
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default PhotoList
