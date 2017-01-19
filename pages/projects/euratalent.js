// @flow
import React from 'react'
import Project from './';

export default class Euratalent extends React.Component {
  render () {
    return (
      <Project
        content={[
          {
            title: "Front-end",
            list: [
              "HTML5",
              "CSS3",
              "jQuery",
              "Modernizr",
              "Mapbox",
              "Leaflet",
              "SEO friendly HTML semantics"
            ]
          },
          {
            title: "Product",
            list: [
              "Defined features, information architecture and UX flow based on founder goals",
              "Set-up user-testing sessions at mock-up stage to validate and improve our v1",
              "Facilitated UI design by providing the designer with responsive design best practices",
              "Helped recruit initial engineering team"
            ]
          },
          {
            title: "Team",
            list: [
              "Was front-end lead in team of backend engineers",
              "Followed SCRUM agile methodology"
            ]
          }
        ]}
        images={[
          ["euratalent.png", "Homepage"],
          ["euratalent-2.png", "MapBox Integration"],
          ["euratalent-3.png", "Mobile adaptations"],
          ["euratalent-4.png", "Form"],
          ["euratalent-5.png", "Content reflow on mobile"]
        ]}
        links={[["Euratalent", "http://app.euratalent.com"]]}
        seoTitle="Euratalent - Responsive Web App"
        seoDescription="Front-end development for a web app."
        subTitle="Dating site for companies and job seekers."
        title="Euratalent"
      />);
  }
}
