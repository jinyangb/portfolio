import React from 'react'

const Home = (props) => {
  return (
    <div>
      <div className="greeting">
        <h1>Hi I'm Jin and I am a Full Stack Software Developer</h1>
      </div>
      <div className="about">
        <p>
          I am a well-rounded full-stack developer with a rich background
          experience in customer-facing roles and scaling businesses. Through
          starting my own business, I had to learn many aspects of building a
          company website to marketing and sales, and eventually became
          interested in development. One of my favorite parts of being a
          software engineer is helping a team come together and finding the most
          effective way to work. With my strong communication skills, I believe
          in treating all people with utmost respect and kindness.
        </p>
      </div>
      <div className="projects">
        <h2 className="ind-projects">Projects</h2>
        <div>Project One</div>
        <div>Project Two</div>
        <div>Project Three</div>
        <div>Project Four</div>
      </div>
      <div>
        <h2>Contact</h2>
      </div>
      <div>
        <ul>
          <li>Email: jinyangb@gmail.com</li>
          <li>
            GitHub: https://github.com/jinyangb or
            <a href="https://www.example.com"> Click here!</a>
          </li>
          <li>
            LinkedIn: https://www.linkedin.com/in/jinyangb/ or
            <a href="https://www.linkedin.com/in/jinyangb/"> Click here!</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
