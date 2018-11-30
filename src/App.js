import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg'
import template from './template.json'
import './App.css'
import CategoryList from './CategoryList'
import PhotoList from './PhotoList'
import PhotoDetails from './PhotoDetails'

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <header>
            <Link to={'/'}>
              <h1>Photo Gallery</h1>
            </Link>
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
