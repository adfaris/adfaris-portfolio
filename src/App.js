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
        <main>
          <section className='section-about'>
            <div className='u-center-text u-margin-bottom-large'>
              <h2 className='heading-secondary'>About ADFaris</h2>
            </div>

            <div className='row'>
              <div className='col-1-of-2'>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  {' '}
                  You are going to love this page.
                </h3>
                <p className='paragraph'>
                  In nulla
                  posuere sollicitudin aliquam ultrices. Ante in nibh mauris
                  cursus. Enim neque volutpat ac tincidunt vitae semper.
                  Fringilla phasellus faucibus scelerisque eleifend donec. A
                  arcu cursus vitae congue mauris. Consequat nisl vel pretium
                  lectus quam id leo in. Lobortis scelerisque fermentum dui
                  faucibus.
                </p>

                <h3 className='heading-tertiary u-margin-bottom-small'>
                  Live adventurue slike you have never lived before.
                </h3>
                <p className='paragraph'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Arcu bibendum at varius vel pharetra vel turpis.
                </p>
                <a href='#' className='btn-text'> Learn more &rarr;</a>
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
