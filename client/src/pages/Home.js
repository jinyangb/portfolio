import React from 'react'
import Projects from '../components/Projects'
import cards from '../photos/cards.png'
import simon from '../photos/simon.png'
import filmzilla from '../photos/filmzilla.png'
import movie from '../photos/movie.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
  return (
    <div id="name" className="site scroller">
      <div className="about">
        <div className="greeting">
          <h1 className="name">HELLO!</h1>
        </div>
        <p className="paragraph">
          My name is Jin and I am a well-rounded full-stack developer with a
          rich background experience in customer-facing roles and scaling
          businesses. Through starting my own business, I had to learn many
          aspects of building a company website to marketing and sales, and
          eventually became interested in development. One of my favorite parts
          of being a software engineer is helping a team come together and
          finding the most effective way to work. With my strong communication
          skills, I believe in treating all people with utmost respect and
          kindness.
        </p>
        <div>
          <div className="footer-iconss">
            <a href="https://github.com/jinyangb">
              <img
                src="https://img.icons8.com/carbon-copy/50/000000/github-squared.png"
                alt=""
              />
            </a>
            <a href="https://www.linkedin.com/in/jinyangb/">
              <img
                src="https://img.icons8.com/ios-glyphs/50/000000/linkedin.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <div className="p">
        <div className="t">
          <h2 id="projects" className="section-heading scroller">
            Projects
          </h2>
        </div>
        <div className="a" className="projects">
          <div>
            <Projects name="Expanding Cards" />
            <a href="https://github.com/jinyangb/Expanding-Cards">
              <img src={cards} className="photos" alt="" />
            </a>
            <Projects info="JavaScript, HTML, CSS" />
          </div>
          <div className="a">
            <Projects name="Simon" />
            <a href="https://github.com/jinyangb/Simon">
              <img src={simon} className="photos" alt="" />
            </a>
            <Projects info="JavaScript, HTML, CSS" />
          </div>
        </div>
        <div className="projectss">
          <div className="a">
            <Projects name="FilmZilla" />
            <a href="https://github.com/jinyangb/Filmzilla">
              <img src={filmzilla} className="photos" alt="" />
            </a>
            <Projects info="Authentication, PostgresQL, Redux, Express" />
          </div>
          <div>
            <Projects name="Movie API" />
            <a href="https://github.com/jinyangb/movie-app">
              <img src={movie} className="photos" alt="" />
            </a>
            <Projects info="TMBD API, JavaScript, HTML, CSS" />
          </div>
        </div>
      </div>
      <div className="skillz">
        <h2 id="skills" className="section-heading scroller">
          Skills
        </h2>
      </div>
      <div className="skillz">
        <p className="skill">
          Python, Flask, React, Vue, Sequelize, Express, PostgreSQL, MongoDB,
          Mongoose, HTML, CSS
        </p>
      </div>
      <h2 className="section-heading">Contact</h2>
      <div id="contact" className="contact-area">
        <div className="profile-pic">
          <img
            src="https://avatars.githubusercontent.com/u/87675602?v=4"
            alt=""
            className="profile-pic"
          />
        </div>
        <div className="contact-list">
          <h3>Email: jinyangb@gmail.com</h3>
          <h3>GitHub: https://github.com/jinyangb</h3>
          <h3>LinkedIn: https://www.linkedin.com/in/jinyangb/</h3>
        </div>
      </div>
      <footer className="footer-icons">
        <div>
          <a href="https://github.com/jinyangb">
            <img
              src="https://img.icons8.com/carbon-copy/50/000000/github-squared.png"
              alt=""
            />
          </a>
          <a href="https://www.linkedin.com/in/jinyangb/">
            <img
              src="https://img.icons8.com/ios-glyphs/50/000000/linkedin.png"
              alt=""
            />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Home
