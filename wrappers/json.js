// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Project from '../pages/_Project';
// $FlowFixMe
import { config } from 'config'

export type Data = {
  seoDescription: string,
  seoTitle: string,
  title: string,
  subTitle: string,
  type: "project",
  links: [[string, string]],
  images: [{file: string, title: string, screen: number}],
  content: [{title: string, list: [string]}] | string
}

type Props = { route: { page: { data: Data } } };

export default class JsonWrapper extends Component {
  props: Props;

  renderPage = (data: Data) => {
    if(data.type === "project") {
      return <Project {...data} />;
    }
    return null;
  };

  render () {
    const data = this.props.route.page.data
    return (
      <div>
        <Helmet
          title={`${data.seoTitle} | ${config.siteTitle}`}
          meta={[{"name": "description", "content": data.seoDescription}]}
        />
        {this.renderPage(data)}
      </div>
    )
  }
};
