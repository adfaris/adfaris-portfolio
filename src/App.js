import React, { Component } from 'react'
// import logo from './logo.svg';
// import './App.css';
import '../src/sass/main.scss'

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
        <main>
          <section className='section-about'>
            <div className='u-center-text u-margin-bottom-8'>
              <h2 className='heading-secondary'>
              About ADFaris
              </h2>
            </div>

            <div className='row'>
              <div className='col-1-of-2'><h3 className='heading-tertiary'> You are going to love this page.</h3>
                              <p className='paragraph'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
              <div className='col-1-of-2'>Image goes here</div>
            </div>
          </section>
        </main>
        {/* <div>
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
            <div className='col-1-of-4'>Col 1 of 4</div>
            <div className='col-1-of-4'>Col 1 of 4</div>
          </div>

          <div className='row'>
            <div className='col-1-of-4'>Col 1 of 4</div>
            <div className='col-1-of-4'>Col 1 of 4</div>
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
