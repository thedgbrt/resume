import React, { Component } from 'react';
import { Link } from 'react-router';
import Modal from './Modal';

class App extends Component {
  render() {
    return (
      <div className="container">

        <Modal>{this.props.children}</Modal>

        <h1>Dagobert Renouf, 27 - Front-end Engineer</h1>

        <p>I make <strong>responsive websites and apps</strong>. I'm fluent in <strong>React + Redux</strong>.</p>

        <p>Here are some things I made:</p>

        <ul>
          <li><Link to="/projects/lachronique">La Chronique</Link> [React native app]</li>
          <li><Link to="/projects/responsive-websites">Locomotion, Tandala, Kaleidoscopeye, Chloe bodart</Link> [responsive</li> websites]
          <li><Link to="/projects/euratalent">Euratalent</Link> [responsive web app]</li>
          <li><Link to="/projects/react-websites">Virage Énergie, Shaddok</Link> [React websites]</li>
        </ul>

        <p>Building websites since I was 15, I have acquired a <strong>broad set of skills</strong> as <strong>founder</strong>, <strong>co-founder</strong> and contractor:</p>

        <ul>
          <li>In 2006, in high school, I <Link to="/experiences/first-website">created my first website that made money</Link></li>
          <li>In 2008, I dropped out of college and <Link to="/experiences/russia">moved to Moscow to grow an e-commerce website</Link></li>
          <li>In 2011 and 2012, I <Link to="/experiences/model-society">led design at ModelSociety</Link></li>
          <li>Since 2013, I've <Link to="/experiences/dgbrt">run my own consulting business</Link> that helped companies with <strong>development, strategy and product design</strong></li>
        </ul>

        <p>These experiences have made me <strong>autonomous</strong>, <strong>self-driven</strong> and capable of <strong>leading ambitious product goals</strong>.</p>

        <p>Involved in <strong>product, design and marketing</strong> decisions, I keep the bottom line in mind. When time to ship a feature runs out, I <strong>find creative ways to keep moving forward</strong>.</p>

        <p>The practice of <a href="https://en.wikipedia.org/wiki/Nonviolent_Communication">NVC</a>, coupled with my knowledge of the <a href="https://en.wikipedia.org/wiki/Enneagram_of_Personality">Enneagram</a> and <a href="http://spiraldynamics.org/">Spiral Dynamics</a> further improve my capacity to <strong>facilitate communication and progress</strong> between all members of a team.</p>

        <p>If you are creating a culture of <strong>curiosity, ambition and constant learning</strong>, then we might be a winning combo.</p>

        <hr/>

        <h3>Skills</h3>
        <ul>
          <li>React and React Native 8/10</li>
          <li>Redux 8/10</li>
          <li>ES6 Javascript 7/10</li>
          <li>CSS3 9/10</li>
          <li>HTML5 9/10</li>
          <li>Flow 7/10</li>
          <li>Jest 8/10</li>
          <li>SEO 9/10</li>
          <li>product design 8/10</li>
          <li>ux design 8/10</li>
          <li>marketing 7/10</li>
        </ul>

        <h3>Things I've gotten into recently</h3>
        <ul>
          <li>functional programming (<a href="https://en.coursera.org/learn/programming-languages">course</a> & <a href="https://www.coursera.org/account/accomplishments/certificate/DEP4JW4KMZTC">certification</a>)</li>
          <li>elm (<a href="https://pragmaticstudio.com/elm">pragmatic course</a>)</li>
        </ul>

        <h3>Other interest</h3>
        <ul>
          <li>holacracy and new forms of organizations</li>
          <li>integral theory</li>
          <li>meditation</li>
          <li>travel</li>
        </ul>

        <p>Contact me: <a href="mailto:dagobert@dgbrt.fr">dagobert@dgbrt.fr</a></p>

        <p>Find me on <a href="https://www.linkedin.com/in/dgbrt">LinkedIn</a>, <a href="https://github.com/thedgbrt">GitHub</a> or <a href="https://twitter.com/thedgbrt">Twitter</a>.</p>
      </div>
    );
  }
}

export default App;
