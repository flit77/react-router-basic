import React, { Component } from 'react'
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/address' component={Address} />
        </div>
      </Router>
    )
  }
}

const Home = () => <h1>Hello from Home!</h1>
const Address = () => <h1>We are located at 555 Jackson St.</h1>
export default App