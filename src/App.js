import React, { Component } from 'react';
// import logo from './logo.svg';
import '../src/sass/main.scss';

class App extends Component {
  render () {
    return (
      <header className='header'>
        <div className='header__text-box'>
          <h1 className='heading-primary'>A.D.Faris
          <span className='heading-primary--main'> seasoned programmer</span>
          <span className='heading-primary--sub'> with great skills</span>
          </h1>
        </div>
      </header>
    )
  }
}

export default App
