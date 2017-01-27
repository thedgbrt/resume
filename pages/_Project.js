// @flow
import React, { Component } from 'react'
import Page from './_Page'
import type { Data } from '../wrappers/json'

export default class Project extends Component {
  props: {
    data: Data
  }

  render () {
    const { data } = this.props;
    return (
      <Page {...this.props}>
        {/* $FlowFixMe */}
        {data.content && data.content.constructor === Array && data.content.map((c, i) => (
          <section key={i} className="column">
            <h3>{c.title}</h3>
            <ul className="arrows arrows-white">
              {c.list.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </Page>
    );
  };
}
