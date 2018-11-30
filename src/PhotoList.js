import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import template from './template.json'
import myData from './myData.json'
import CategoryList from './CategoryList'

const PhotoList = props => {
  console.log(props)
  console.log(props.match.params.category)
  return (
    <div>
      <div className="breadcrumb-navigation">
        <ul>
          <Link
            to={'/'}
            style={{
              textDecoration: 'none',
              listStyle: 'none',
              color: 'darkblue'
            }}
          >
            <li>Home</li>
          </Link>
          <Link
            to={`/:category`}
            style={{
              textDecoration: 'none',
              listStyle: 'none',
              color: 'darkblue'
            }}
          >
            <li>{myData[props.match.params.category].title}</li>
          </Link>
        </ul>
      </div>
      <div>
        {myData[props.match.params.category].photos.map((photo, index) => {
          return (
            <div key={index}>
              <Link to={`/${props.match.params.category}/${index}`}>
                <img src={photo.imageURL} />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PhotoList
