import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import '../src/sass/main.scss';

class App extends Component {
  render () {
    return (
      <div>
        <div>
          <header className='header'>
            <div className='header__text-box'>
              <h1 className='heading-primary'>
                A.D.Faris
                <span className='heading-primary--main'>
                  {' '}
                  seasoned programmer
                </span>
                <span className='heading-primary--sub'> with great skills</span>
              </h1>
            </div>
          </header>
        </div>

        {/* <div> */}
        <section className='grid-test'>
          <div className='row'>
            <div className='col-1-of-2'>Col 1 of 2</div>
            <div className='col-1-of-2'>Col 1 of 2</div>
          </div>

          <div className='row'>
            <div className='col-1-of-3'>Col 1 of 3</div>
            <div className='col-1-of-3'>Col 1 of 3</div>
            <div className='col-1-of-3'>Col 1 of 3</div>
          </div>

          <div className='row'>
            <div className='col-1-of-3'>Col 1 of 3</div>
            <div className='col-2-of-3'>Col 2 of 3</div>
          </div>

          <div className='row'>
            <div className='col-1-of-4'>Col 1 of 4</div>
            <div className='col-1-of-4'>Col 1 of 4</div>
          </div>

          <div className='row'>
            <div className='col-1-of-4'>Col 1 of 4</div>
            <div className='col-1-of-4'>Col 1 of 4</div>
          </div>

          <div className='row'>
            <div className='col-1-of-4'>Col 1 of 4</div>
            <div className='col-1-of-4'>Col 1 of 4</div>
          </div>

          <div className='row'>
            <div className='col-2-of-4'>Col 2 of 4</div>
          </div>

          <div className='row'>
            <div className='col-1-of-4'>Col 1 of 4</div>
            <div className='col-3-of-4'>Col 3 of 4</div>
          </div>
        </section>
        {/* </div> */}
      </div>
    )
  }
}

export default App
