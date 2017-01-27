// @flow
import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { ViewPager, Frame, Track, View } from 'react-view-pager'
import { getScreenClassName } from '../helpers'
import type { Data } from '../wrappers/json'

export default class Project extends Component {
  props: Data;

  render () {
    return (
      <div className="page page-project">
        <button className="close" onClick={() => browserHistory.goBack()}>Back</button>

        <div className="container">
          <header className="project-title">
            <h1>{this.props.title}</h1>
            <p className="subtitle">{this.props.subTitle}</p>
            <ul className="links">
              {this.props.links && this.props.links.map((link, i) => (
                <li key={i}><a className="external" href={link[1]}>{link[0]}</a></li>
              ))}
            </ul>
          </header>

          <article className="project-details">
            {/* $FlowFixMe */}
            {this.props.content && this.props.content.constructor === Array && this.props.content.map((c, i) => (
              <section key={i} className="column">
                <h3>{c.title}</h3>
                <ul className="arrows arrows-white">
                  {c.list.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </article>
        </div>

        <ViewPager tag="section">
          <Frame className="slideshow">
            <Track
              align={0.5}
              infinite
              viewsToShow={"auto"}
            >
              {this.props.images && this.props.images.map((img, i) => (
                <View key={i}>
                  <figure className={getScreenClassName(img.screen)}>
                    <div className="frame">
                      <img
                        src={"/projects/img/" + img.file + ".jpg"}
                        srcSet={"/projects/img/" + img.file + "@2x.jpg 2x"} />
                    </div>
                    <figcaption><p>{img.title}</p></figcaption>
                  </figure>
                </View>
              ))}
            </Track>
          </Frame>
        </ViewPager>
      </div>
    );
  };
}