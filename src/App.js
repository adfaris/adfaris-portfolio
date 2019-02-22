import React, { Component } from 'react'
import logo from './images/logo.svg'
import './App.css';
// import '../src/sass/main.scss'
import image1 from './images/bg.jpg'
import image2 from './images/bg2.jpg'

class App extends Component {
  render () {
    return (
      <div>
        <div>
          <header className='header'>
            <div className='header__text-box'>
              <h1 className='heading-primary'>
                Hello, I am A.D.Faris!
              </h1>
            </div>
          </header>
        </div>
        <main>
          <section className='section-about'>
            <div className='u-center-text u-margin-bottom-large'>
              <h2 className='heading-secondary'>About me.</h2>
            </div>

            <div className='row'>
              <div className='col-1-of-2'>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  {' '}
                  {/* About me. */}
                </h3>
                <p className='paragraph'>
                Hello! My name is A.D.Faris, and I'm a full-stack developer, with the capacity to adapt and learn quickly. I'm well versed in React, Express, SQL, MongoDB.
                </p>

                
              </div>
              <div className='col-1-of-2'>
                <div className='composition'>
                  <img
                    src={image1}
                    alt='pic1'
                    className='composition__photo composition__photo--p1'
                  />
                  {/* <img
                    src={image2}
                    alt='pic2'
                    className='composition__photo composition__photo--p2'
                  />
                  <img
                    src={logo}
                    alt='pic3'
                    className='composition__photo composition__photo--p3'
                  /> */}
                </div>
              </div>
            </div>
          </section>

          <section className='section-features'>
            <div className='row'>
              <div className='col-1-of-4'>
                <div className='feature-box'>
                  <i className='feature-box__icon icon-basic-world' />
                  {/* <FaGlobe/> */}
                  <h3 className='heading-tertiary u-margin-bottom-small'>Explore the world</h3>
                  <p className='feature-box__text'>In nulla posuere sollicitudin aliquam ultrices. Ante in nibh
                  mauris cursus.
                  </p>
                </div>
              </div>

              <div className='col-1-of-4'>
                <div className='feature-box'>
                  <i className='feature-box__icon icon-basic-compass' />
                  {/* <FaGlobe/> */}
                  <h3 className='heading-tertiary u-margin-bottom-small'>Meet nature</h3>
                  <p className='feature-box__text'>In nulla posuere sollicitudin aliquam ultrices. Ante in nibh
                  mauris cursus.
                  </p>
                </div>
              </div>

              <div className='col-1-of-4'>
                <div className='feature-box'>
                  <i className='feature-box__icon icon-basic-map' />
                  {/* <FaGlobe/> */}
                  <h3 className='heading-tertiary u-margin-bottom-small'>Find your way</h3>
                  <p className='feature-box__text'>In nulla posuere sollicitudin aliquam ultrices. Ante in nibh
                  mauris cursus.
                  </p>
                </div>
              </div>

              <div className='col-1-of-4'>
                <div className='feature-box'>
                  <i className='feature-box__icon icon-basic-heart' />
                  {/* <FaGlobe/> */}
                  <h3 className='heading-tertiary u-margin-bottom-small'>Live healthier life</h3>
                  <p className='feature-box__text'>In nulla posuere sollicitudin aliquam ultrices. Ante in nibh
                  mauris cursus.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div>
            github
          </div>
        </main>
      </div>
    )
  }
}

export default App
