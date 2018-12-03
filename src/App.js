import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg'
import template from './template.json'
import './App.css'
import CategoryList from './CategoryList'
import PhotoList from './PhotoList'
import PhotoDetails from './PhotoDetails'
import myData from './myData.json'

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <header>
            <Link
              to={'/'}
              style={{ textDecoration: 'none', color: 'darkblue' }}
            >
              <h1>Classic Holiday Dishes</h1>
            </Link>
            <p>A Photo Gallery Intended to Make You Hungry</p>
          </header>
          <Route path="/" exact component={CategoryList} />
          <Route path="/:category" exact component={PhotoList} />
          <Route path="/:category/:id" exact component={PhotoDetails} />
        </main>
      </Router>
    )
  }
}

export default App
