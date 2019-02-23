import React, { Component } from "react";
import "./App.css";
// import '../src/sass/main.scss'
import image1 from "./images/bg.jpg";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <header className="header">
            <div className="header__text-box">
              <h1 className="heading-primary">Hello, I am A.D.Faris!</h1>
              <h2 className="heading-primary--sub">
                A Glen Ridge NJ based Full-Stack Web Developer, specializing in
                back-end development.
              </h2>
              <hr />
              <div className="heading-primary--main">
                <a
                  className="heading-primary--main--github"
                  href="https://github.com/adfaris"
                >
                  {" "}
                  <i
                    class="fab fa-github fa-4x"
                    style={{ color: "#eac67a" }}
                  />{" "}
                </a>
                <a
                  className="heading-primary--main--linkedin"
                  href="https://www.linkedin.com/in/ad-faris/"
                >
                  {" "}
                  <i
                    class="fab fa-linkedin-in fa-4x"
                    style={{ color: "#eac67a" }}
                  />{" "}
                </a>
                <a
                  className="heading-primary--main--twitter"
                  href="https://twitter.com/a_dfaris"
                >
                  {" "}
                  <i
                    class="fab fa-twitter fa-4x"
                    style={{ color: "#eac67a" }}
                  />{" "}
                </a>
              </div>
            </div>
          </header>
        </div>

        <main>
          <section className="section-about">
            <div className="u-center-text u-margin-bottom-large">
              <h2 className="heading-secondary">About me.</h2>
            </div>

            <div className="row">
              <div className="col-1-of-2">
                <h3 className="heading-tertiary u-margin-bottom-small"> </h3>
                <p className="paragraph">
                  Hello! My name is A.D.Faris, and I'm a full-stack developer,
                  with the capacity to adapt and learn quickly. I'm well versed
                  in React, Express, SQL, MongoDB.
                </p>
              </div>
              <div className="col-1-of-2">
                <div className="composition">
                  <img
                    src={image1}
                    alt="pic1"
                    className="composition__photo composition__photo--p1"
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

          <section className="section-features">
            <div className="row">
              <div className="col-1-of-3">
                <div className="feature-box">
                  {/* <i className='feature-box__icon icon-basic-world' /> */}
                  {/* <FaGlobe/> */}
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    on the record
                  </h3>
                  <p className="feature-box__text">
                    A website that will allow you to review music
                  </p>
                  <a
                    className="feature-box__link"
                    href="http://www.ontherecord.us"
                  >
                    {" "}
                    ontherecord.us
                  </a>
                </div>
              </div>

              <div className="col-1-of-3">
                <div className="feature-box">
                  {/* <i className='feature-box__icon icon-basic-compass' /> */}
                  {/* <FaGlobe/> */}
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Lambda notes
                  </h3>
                  <p className="feature-box__text">
                    An app that will allow you to take notes.
                  </p>
                </div>
              </div>

              <div className="col-1-of-3">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-map" />
                  {/* <FaGlobe/> */}
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Find your way
                  </h3>
                  <p className="feature-box__text">
                    In nulla posuere sollicitudin aliquam ultrices. Ante in nibh
                    mauris cursus.
                  </p>
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

        <footer className="footer">
          <div className="footer__text-box">
            <div className="footer-primary--main">
              <a
                className="heading-primary--main--github"
                href="https://github.com/adfaris"
              >
                {" "}
                <i
                  class="fab fa-github fa-4x"
                  style={{ color: "#eac67a" }}
                />{" "}
              </a>
              <a
                className="heading-primary--main--linkedin"
                href="https://www.linkedin.com/in/ad-faris/"
              >
                {" "}
                <i
                  class="fab fa-linkedin-in fa-4x"
                  style={{ color: "#eac67a" }}
                />{" "}
              </a>
              <a
                className="heading-primary--main--twitter"
                href="https://twitter.com/a_dfaris"
              >
                {" "}
                <i
                  class="fab fa-twitter fa-4x"
                  style={{ color: "#eac67a" }}
                />{" "}
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
