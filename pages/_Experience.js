// @flow
import React, { Component } from 'react'
import Page from './_Page'
import type { Data } from '../wrappers/json'

export default class Experience extends Component {
  props: {
    data: Data
  }

  renderHtml = (str: string) => {
    return {
      __html: str
    }
  }

  render () {
    const { data } = this.props;
    return (
      <Page {...this.props}>
        {data.content && typeof data.content === "string" && (
          <section key={1} className="copy">
            <div dangerouslySetInnerHTML={this.renderHtml(data.content)} />
          </section>
        )}
      </Page>
    );
  };
}
