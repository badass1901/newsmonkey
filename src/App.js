import React, { Component } from 'react'
import Navbar2 from './components/Navbar/Navbar2'
import News from './components/News'


export default class App extends Component {
 
  render() {
    return (
      <div>
        <Navbar2 />
        <News/>
      </div>
    )
  }
}
