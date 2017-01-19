// @flow
import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import Helmet from 'react-helmet'

type Props = {
  content: [{title: string, list: [string]}],
  images: [[string, string]],
  links: [[string, string]],
  seoDescription: string,
  seoTitle: string,
  subTitle: string,
  title: string
};

export default class Project extends Component {
  props: Props;

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

        <section>
          {this.props.images.map((img, i) => (
            <figure key={i}>
              <img src={"/projects/img/" + img[0]} />
              <figcaption>{img[1]}</figcaption>
            </figure>
          ))}
        </section>
      </div>
    );
  }
}
