import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import template from './template.json'

import PhotoList from './PhotoList'
import PhotoDetails from './PhotoDetails'

const CategoryList = props => {
  return (
    <div>
      {Object.keys(template).map(category => {
        return (
          <h3 key={category}>
            <Link to={`/${category}`}>{template[category].title}</Link>
          </h3>
        )
      })}
    </div>
  )
}

export default CategoryList
