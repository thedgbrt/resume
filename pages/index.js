import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import './styles.scss'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div className="container">
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"}
          ]}
        />

        <header className="identity">
          <img className="avatar" height="175px" width="174px" src="img/avatar.jpg"/>
          <h1>
            Dagobert Renouf, 27<br/>
            <strong>Front-end Engineer</strong>
          </h1>
          <p>I make <strong>responsive websites and apps</strong>. I'm fluent in <strong>React + Redux</strong>.</p>
        </header>

        <nav className="projects">
          <p>Here are some things I made:</p>
          <ul>
            <Link to={prefixLink('/projects/lachronique/')} className="react-native">
              <li><strong>La Chronique </strong><span>React native app</span></li>
            </Link>
            <Link to={prefixLink('/projects/euratalent/')} className="web">
              <li><strong>Euratalent </strong><span>Web app</span></li>
            </Link>
            <Link to={prefixLink('/projects/websites/')} className="react">
              <li><strong>Websites </strong><span>React / WordPress</span></li>
            </Link>
          </ul>
        </nav>

        <section className="timeline">
          <p>Building websites since I was 15, I have acquired a <strong>broad set of skills</strong> as <strong>founder</strong>, <strong>co-founder</strong> and contractor:</p>

          <ul className="timeline">
            <li><span>In 2006</span>, in high school, I <Link to={prefixLink('/experiences/christophe-nouvelle-star/')}>created my first website that made money</Link></li>
            <li><span>In 2008</span>, I dropped out of college and <Link to={prefixLink('/experiences/french-dezign/')}>moved to Moscow to grow an e-commerce website</Link></li>
            <li><span>In 2011 and 2012</span>, I <Link to={prefixLink('/experiences/model-society/')}>led design at ModelSociety</Link></li>
            <li><span>Since 2013</span>, I've <Link to={prefixLink('/experiences/dgbrt/')}>run my own consulting business</Link> that helped companies with <strong>development, strategy and product design</strong></li>
          </ul>

          <p>These experiences have made me <strong>autonomous</strong>, <strong>self-driven</strong> and capable of <strong>leading a product to success</strong>.</p>
        </section>

        <section className="abstract">
          <img className="meditator" src="img/meditator-3x.jpg" height="71px" width="87px"/>
          <p>Involved in <strong>engineering, product and design</strong> decisions, I keep the bottom line in mind. When time to ship a feature runs out, I <strong>find pragmatic ways to keep moving forward</strong>.</p>

          <p>The practice of <a className="external" href="https://en.wikipedia.org/wiki/Nonviolent_Communication">NVC</a>, coupled with my knowledge of the <a className="external" href="https://en.wikipedia.org/wiki/Enneagram_of_Personality">Enneagram</a> and <a className="external" href="http://spiraldynamics.org/">Spiral Dynamics</a> further improve my capacity to <strong>facilitate communication and progress</strong> between all members of a team.</p>

          <p>If you are creating a culture of <strong>curiosity, ambition and constant learning</strong>, then we might be a winning combo.</p>
        </section>

        <section className="skills">
          <div className="col-1">
            <h2>Skills</h2>
            <img className="skill-chart" src="img/skill-chart-3x.gif" height="234px" width="266px"/>
          </div>

          <div className="col-2">
            <h3>Things I've gotten into recently</h3>
            <ul className="arrows">
              <li>Functional programming (<a href="https://en.coursera.org/learn/programming-languages">course</a> & <a href="https://www.coursera.org/account/accomplishments/certificate/DEP4JW4KMZTC">certification</a>)</li>
              <li>Elm (<a href="https://pragmaticstudio.com/elm">pragmatic course</a>)</li>
              <li>Flow and Jest</li>
            </ul>

            <h3>Other interests</h3>
            <ul className="arrows">
              <li>integral theory</li>
              <li>meditation</li>
              <li>holacracy and new forms of organizations</li>
              <li>travel</li>
            </ul>
          </div>
        </section>

        <footer className="contact">
          <p>
            Contact me<br/>
            <a href="mailto:dagobert@dgbrt.fr">dagobert@dgbrt.fr</a><br/>
            Find me<br/>
            <a href="https://www.linkedin.com/in/dgbrt">linkedIn</a>, <a href="https://twitter.com/thedgbrt">twitter</a> or <a href="https://github.com/thedgbrt">github</a>
          </p>
        </footer>
      </div>
    )
  }
}
