// @flow
import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import Helmet from 'react-helmet'
import { ViewPager, Frame, Track, View } from 'react-view-pager'

type Props = {
  content: [{title: string, list: [string]}],
  images: [{file: string, title: string, screen: number}],
  links: [[string, string]],
  seoDescription: string,
  seoTitle: string,
  subTitle: string,
  title: string
};

export default class Project extends Component {
  props: Props;

  getScreenClassName = (id: number) => {
    switch (id) {
      case 1:
        return 'iphone';
      case 2:
        return 'pc';
      case 3:
        return 'ipad';
      default:
        return 'ipad-v';
    }
  };

  render () {
    return (
      <div className="page page-project">
        <Helmet
          seo_title={this.props.seoTitle}
          meta={[
            {"name": "description", "content": this.props.seoDescription}
          ]}
        />

        <button className="close" onClick={() => browserHistory.goBack()}>Back</button>

        <div className="container">
          <header className="project-title">
            <h1>{this.props.title}</h1>
            <p className="subtitle">{this.props.subTitle}</p>
            <ul className="links">
              {this.props.links.map((link, i) => (
                <li key={i}><a className="external" href={link[1]}>{link[0]}</a></li>
              ))}
            </ul>
          </header>

          {this.props.content.map((c, i) => (
            <section key={i}>
              <h3>{c.title}</h3>
              <ul className="arrows arrows-white">
                {c.list.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <ViewPager tag="section">
          <Frame className="slideshow">
            <Track
              align={0.5}
              infinite
              viewsToShow={"auto"}
            >
              {this.props.images.map((img, i) => (
                <View key={i}>
                  <figure className={this.getScreenClassName(img.screen)}>
                    <div className="frame">
                      <img src={"/projects/img/" + img.file} />
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
  }
}
