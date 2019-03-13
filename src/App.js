import React, { Component } from 'react'
import './App.css'
// import '../src/sass/main.scss'
import image1 from './images/AMG_6662.jpg'

class App extends Component {
  render () {
    return (
      <div>
        <div>
          <header className='header'>
            <div className='header__logo-box'>
              <a href='#about' className='header__logo-box--nav'> About</a>
              <a href='#project' className='header__logo-box--nav'> Project</a>

              <div className='header__text-box'>
                <h1 className='heading-primary'>Hello, I am A.D. Faris!</h1>
                <h2 className='heading-primary--sub'>
                A NJ based Full-Stack Web Developer, specializing in
                back-end development.
                </h2>
                <hr />
                <div className='heading-primary--main'>
                  <a
                    className='heading-primary--main--github'
                    href='https://github.com/adfaris' rel='noopener noreferrer' target='_blank'
                  >
                    {' '}
                    <i
                      class='fab fa-github fa-4x'
                      style={{ color: '#eac67a' }}
                    />{' '}
                  </a>
                  <a
                    className='heading-primary--main--linkedin'
                    href='https://www.linkedin.com/in/ad-faris/' rel='noopener noreferrer' target='_blank'
                  >
                    {' '}
                    <i
                      class='fab fa-linkedin-in fa-4x'
                      style={{ color: '#eac67a' }}
                    />{' '}
                  </a>
                  {/* <a
                    className='heading-primary--main--twitter'
                    href='https://twitter.com/a_dfaris'
                  >
                    {' '}
                    <i
                      class='fab fa-twitter fa-4x'
                      style={{ color: '#eac67a' }}
                    />{' '}
                  </a> */}
                </div>
              </div>
            </div>
          </header>
        </div>

        <main id='about'>
          <section className='section-about'>
            <div className='u-center-text u-margin-bottom-large'>
              {/* <h2 className="heading-secondary"></h2> */}
            </div>

            <div className='row'>
              <div className='col-1-of-2'>
                {/* <h3 className='heading-tertiary u-margin-bottom-small' /> */}
                <p className='paragraph'>
                  My name is Aregahegn (A.D.) Faris, and I began my journey as a
                  web developer in early 2018 when I joined Lambda school, a
                  Software Engineering and Computer Science acadamy with a
                  hands-on, project based curriculum. Several months later, I am
                  a qualified Full-Stack Web developer with specialies in React,
                  Javascript, Node and Express. Although I have prior
                  education in Computer Science, Lambda gave me the tools I
                  needed to develop complex user-focused applications and you
                  can check out past and current projects on my{' '}
                  <a
                    className='heading-primary--main--github--setting'
                    href='https://github.com/adfaris' rel='noopener noreferrer' target='_blank'
                  >
                    {' '}
                    Github
                  </a>
                  . I'm always looking to connect with others in the tech and
                  developer communities, so feel free to reach out!
                  <p>Contact Details </p>
                  <p> A.D. Faris </p>
                  <p>Glen Ridge,NJ</p>
                  <p>917-443-0014</p>
                  <p> adfaris@gmail.com</p>
                </p>
              </div>
              <div className='col-1-of-2'>
                <div className='composition'>
                  <img
                    src={image1}
                    alt='pic1'
                    className='composition__photo composition__photo--p1'
                  />
                </div>
              </div>
            </div>
          </section>

          <section id='project' className='section-features'>
            <div className='row'>
              <div className='col-1-of-3'>
                <div className='feature-box'>
                  {/* <i className='feature-box__icon icon-basic-world' /> */}
                  {/* <FaGlobe/> */}
                  <h3 className='heading-tertiary u-margin-bottom-small'>
                    on the record
                  </h3>
                  <p className='feature-box__text'>
                    website that will allow you to review music
                  </p>
                  <a
                    className='feature-box__link'
                    href='http://www.ontherecord.us' rel='noopener noreferrer' target='_blank'
                  >
                    {' '}
                    ontherecord.us
                  </a>
                </div>
              </div>

              <div className='col-1-of-3'>
                <div className='feature-box'>
                  {/* <i className='feature-box__icon icon-basic-compass' /> */}
                  {/* <FaGlobe/> */}
                  <h3 className='heading-tertiary u-margin-bottom-small'>
                    Lambda notes
                  </h3>
                  <p className='feature-box__text'>
                    An app that will allow you to take notes.
                  </p>
                  <a
                    className='feature-box__link'
                    href='https://adfaris-note.netlify.com/' rel='noopener noreferrer' target='_blank'
                  >
                    Lambda Notes
                  </a>
                </div>
              </div>

              <div className='col-1-of-3'>
                <div className='feature-box'>
                  {/* <i className="feature-box__icon icon-basic-map" /> */}
                  {/* <FaGlobe/> */}
                  <h3 className='heading-tertiary u-margin-bottom-small'>
                    Blog post
                  </h3>
                  <p className='feature-box__text'>Blog from project week.</p>
                  <a
                    className='feature-box__link'
                    href='https://adfaris.netlify.com/' rel='noopener noreferrer' target='_blank'
                  >
                    Weekly blog
                  </a>
                </div>
              </div>

              {/* <div className='col-1-of-4'>
                <div className='feature-box'>
                  <i className='feature-box__icon icon-basic-heart' />
                  {/* <FaGlobe/>
                  <h3 className='heading-tertiary u-margin-bottom-small'>Live a healthier life</h3>
                  <p className='feature-box__text'>In nulla posuere sollicitudin aliquam ultrices. Ante in nibh
                  mauris cursus.
                  </p>
                </div>
              </div> */}
            </div>
          </section>
        </main>

        <footer className='footer'>
          <div className='footer__text-box'>
            <div className='footer-primary--main'>
              <a
                className='heading-primary--main--github'
                href='https://github.com/adfaris' rel='noopener noreferrer' target='_blank'
              >
                {' '}
                <i
                  class='fab fa-github fa-4x'
                  style={{ color: '#eac67a' }}
                />{' '}
              </a>
              <a
                className='heading-primary--main--linkedin'
                href='https://www.linkedin.com/in/ad-faris/' rel='noopener noreferrer' target='_blank'
              >
                {' '}
                <i
                  class='fab fa-linkedin-in fa-4x'
                  style={{ color: '#eac67a' }}
                />{' '}
              </a>
              {/* <a
                className='heading-primary--main--twitter'
                href='https://twitter.com/a_dfaris'
              >
                {' '}
                <i
                  class='fab fa-twitter fa-4x'
                  style={{ color: '#eac67a' }}
                />{' '}
              </a> */}
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default App
