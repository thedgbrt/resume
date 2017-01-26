// @flow
import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Isvg from 'react-inlinesvg'
import { MorphReplace } from 'react-svg-morph'
import { easeOutQuint } from 'react-svg-morph/lib/utils/easing'
import Helmet from 'react-helmet'
import { config } from 'config'
import CustomLink from './_CustomLink'

class Checked extends React.Component {
  render() {
    return (
      <svg width="100" height="100" viewBox="0 0 100 100">
        <path d="M0,0v100h100V0H0z M50,50C50,50,50,50,50,50C50,50,50,50,50,50C50,50,50,50,50,50C50,50,50,50,50,50z"/>
      </svg>
    );
  }
}

class CheckBox extends React.Component {
  render() {
    return (
      <svg width="100" height="100" viewBox="0 0 100 100">
        <path d="M0,0v100h100V0H0z M50,97C24,97,3,76,3,50S24,3,50,3s47,21,47,47S76,97,50,97z"/>
      </svg>
    );
  }
}

export default class Index extends React.Component {
  state: {
    animating: boolean,
    scrollTop: number
  };

  constructor (props) {
    super (props);
    this.state = {
      animating: false,
      scrollTop: 0
    };
  }

  updateScrollPosition = (y: number) => {
    this.setState({
      scrollTop: y
    });
  };

  componentWillLeave(callback) {
    this.setState({animating: true});
    setTimeout(callback, 500);
  }

  render () {
    return (
      <div className="page page-home">
        <MorphReplace
          className={this.state.animating ? "outer-frame animating" : "outer-frame"}
          duration={300}
          easing={easeOutQuint}
          height={100}
          preserveAspectRatio="none"
          rotation="none"
          width={100}
        >
          {this.state.animating ? <Checked key="checked" /> : <CheckBox key="checkbox" />}
        </MorphReplace>

        <div className={this.state.animating ? "inner animating" : "inner"} style={{top: "-" + this.state.scrollTop + "px"}}>
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
              <CustomLink
                className="react-native"
                to={prefixLink('/projects/lachronique/')}
                setScrollPosition={(pos) => this.updateScrollPosition(pos)}
              >
                <li>
                  <Isvg className="icon" src="./img/icon-react-native.svg"></Isvg>
                  <strong>La Chronique </strong>
                  <span>React native app</span>
                </li>
              </CustomLink>
              <CustomLink
                className="web"
                setScrollPosition={(pos) => this.updateScrollPosition(pos)}
                to={prefixLink('/projects/euratalent/')}
              >
                <li>
                  <Isvg className="icon" src="./img/icon-websites.svg"></Isvg>
                  <strong>Euratalent </strong>
                  <span>Web app</span>
                </li>
              </CustomLink>
              <CustomLink
                className="react"
                setScrollPosition={(pos) => this.updateScrollPosition(pos)}
                to={prefixLink('/projects/websites/')}
              >
                <li>
                  <Isvg className="icon" src="./img/icon-react-websites.svg"></Isvg>
                  <strong>Websites </strong>
                  <span>React / WordPress</span>
                </li>
              </CustomLink>
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
              <Isvg className="skill-chart" src="./img/skill-chart.svg"></Isvg>
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
      </div>
    )
  }
}
