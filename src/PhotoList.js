import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import myData from './myData.json'

const PhotoList = props => {
  if (!myData[props.match.params.category]) {
    return <h2 className="not-found">Page not found</h2>
  }
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
            to={`/${[props.match.params.category]}`}
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
      <div className="photo-list">
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
