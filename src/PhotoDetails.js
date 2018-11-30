import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import template from './template'
import myData from './myData.json'

const PhotoDetails = props => {
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
            to={'/:category'}
            style={{
              textDecoration: 'none',
              listStyle: 'none',
              color: 'darkblue'
            }}
          >
            <li>{myData[props.match.params.category].title}</li>
          </Link>
          <Link
            to={'/:category/:id'}
            style={{
              textDecoration: 'none',
              listStyle: 'none',
              color: 'darkblue'
            }}
          >
            <li>
              {
                myData[props.match.params.category].photos[
                  props.match.params.id
                ].title
              }
            </li>
          </Link>
        </ul>
      </div>
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
    </div>
  )
}

export default PhotoDetails
