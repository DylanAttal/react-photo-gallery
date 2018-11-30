import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import template from './template.json'
import myData from './myData.json'

import PhotoList from './PhotoList'
import PhotoDetails from './PhotoDetails'

const CategoryList = props => {
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
        </ul>
      </div>
      <div>
        <div className="category-list">
          {Object.keys(myData).map(category => {
            return (
              <div className="preview">
                <h2 key={category}>
                  <Link
                    to={`/${category}`}
                    style={{ textDecoration: 'none', color: 'darkblue' }}
                  >
                    {myData[category].title}
                  </Link>
                </h2>
                <p>{myData[category].description}</p>
                <img src={myData[category].photos[0].imageURL} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CategoryList
