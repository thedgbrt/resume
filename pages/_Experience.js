// @flow
import React, { Component } from 'react'
import Page from './_Page'
import type { Data } from '../wrappers/json'

export default class Experience extends Component {
  props: {
    data: Data
  }

  render () {
    const { data } = this.props;
    return (
      <Page {...this.props}>
        {data.content && typeof data.content === "string" && (
          <section key={1} className="column">
            {data.content}
          </section>
        )}
      </Page>
    );
  };
}
