// @flow
import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { ViewPager, Frame, Track, View } from 'react-view-pager'
import { getScreenClassName } from '../helpers'
import type { Data } from '../wrappers/json'

export default class Page extends Component {
  props: {
    children?: any,
    data: Data
  };

  render () {
    const { data } = this.props;
    return (
      <div className="page page-project">
        <button className="close" onClick={() => browserHistory.goBack()}>Back</button>

        <div className="container">
          <header className="content-title">
            <h1>{data.title}</h1>
            <p className="subtitle">{data.subTitle}</p>
            <ul className="links">
              {data.links && data.links.map((link, i) => (
                <li key={i}><a className="external" href={link[1]}>{link[0]}</a></li>
              ))}
            </ul>
          </header>

          <article className="content-details">
            {this.props.children}
          </article>
        </div>

        <ViewPager tag="section">
          <Frame className="slideshow">
            <Track
              align={0.5}
              infinite
              viewsToShow={"auto"}
            >
              {data.images && data.images.map((img, i) => (
                <View key={i}>
                  <figure className={getScreenClassName(img.screen)}>
                    <div className="frame">
                      <img
                        src={"/" + data.type + "s/img/" + img.file + ".jpg"}
                        srcSet={"/" + data.type + "s/img/" + img.file + "@2x.jpg 2x"} />
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
