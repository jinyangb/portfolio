import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = (props) => {
  return (
    <div>
      <div className="greeting">
        <h1>Hi I'm Jin</h1>
      </div>
      <div>
        <h2 className="section-heading">About</h2>
        <div className="about">
          <p>
            I am a well-rounded full-stack developer with a rich background
            experience in customer-facing roles and scaling businesses. Through
            starting my own business, I had to learn many aspects of building a
            company website to marketing and sales, and eventually became
            interested in development. One of my favorite parts of being a
            software engineer is helping a team come together and finding the
            most effective way to work. With my strong communication skills, I
            believe in treating all people with utmost respect and kindness.
          </p>
        </div>
      </div>
      <div className="projects">
        <h2 className="section-heading">Projects</h2>
        <div>
          <div>Project One</div>
          <div>Project Two</div>
          <div>Project Three</div>
          <div>Project Four</div>
        </div>
      </div>
      <div className="section-heading">
        <h2>Contact</h2>
      </div>
      <div className="contact-area">
        <img
          src="https://avatars.githubusercontent.com/u/87675602?v=4"
          alt="display image"
          className="profile-pic"
        />
        <ul className="contact-list">
          <li>Email: jinyangb@gmail.com</li>
          <li>GitHub: https://github.com/jinyangb</li>
          <li>LinkedIn: https://www.linkedin.com/in/jinyangb/</li>
        </ul>
      </div>
      <footer className="footer-icons">
        <div>
          <a href="https://github.com/jinyangb">
            <img src="https://img.icons8.com/carbon-copy/50/000000/github-squared.png" />
          </a>
          <a href="https://www.linkedin.com/in/jinyangb/">
            <img src="https://img.icons8.com/ios-glyphs/50/000000/linkedin.png" />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Home
