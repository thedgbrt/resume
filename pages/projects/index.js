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
      <div className="container">
        <Helmet
          seo_title={this.props.seoTitle}
          meta={[
            {"name": "description", "content": this.props.seoDescription}
          ]}
        />

        <button onClick={() => browserHistory.goBack()}>Back</button>

        <h1>{this.props.title}</h1>
        <p>{this.props.subTitle}</p>

        <ul>
          {this.props.links.map((link) => (
            <li><a href={link[1]}>{link[0]}</a></li>
          ))}
        </ul>

        {this.props.content.map((c) => (
          <section>
            <h3>{c.title}</h3>
            <ul>
              {c.list.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </section>
        ))}

        <section>
          {this.props.images.map((img) => (
            <figure>
              <img src={"/projects/img/" + img[0]} />
              <figcaption>{img[1]}</figcaption>
            </figure>
          ))}
        </section>
      </div>
    );
  }
}
