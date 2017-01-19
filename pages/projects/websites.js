// @flow
import React from 'react'
import Project from './';

export default class Websites extends React.Component {
  render () {
    return (
      <Project
        content={[
          {
            title: "Front-end",
            list: [
              "React (Isomorphic)",
              "Redux",
              "HTML5",
              "CSS3",
              "jQuery",
              "Modernizr",
              "SEO friendly HTML semantics"
            ]
          },
          {
            title: "Back-end",
            list: [
              "WordPress custom post types and fields (using ACF)",
              "WordPress Rest Api"
            ]
          }
        ]}
        images={[
          ["locomotion.png", "Custom JS grid opener"],
          ["shaddok.png", "Mobile-first navigation"],
          ["tandala.png", "Single Page Experience"],
          ["tandala-2.png", "Custom Mobile version"],
          ["virage.png", "Seo friendly modal windows"],
          ["virage-2.png", "iPad size adapatations"],
          ["construire.png", "Extra care for iPad version"],
          ["kaleido.png", "Complex grid responsiveness"],
          ["kaleidoscopeye-admin.png", "Clean editor admin"],
          ["kaleidoscopeye-admin2.png", "Custom post fields"]
        ]}
        links={[
          ["Chloé Bodart","http://www.chloe-bodart.fr"],
          ["Kaleidoscopeye","http://www.kaleidoscopeye.com"],
          ["Locomotion","http://www.locomotion.fr"],
          ["Shaddok (React)","http://www.shaddok.com"],
          ["Tandala","http://www.tandala.com"],
          ["Virage énergie (React)","http://www.virage-energie-npdc.org"]
        ]}
        seoTitle="Wordpress and React websites"
        seoDescription="Front-end development with WordPress and React"
        subTitle="As a contractor, on my own or for design agency ClDesign, I created high-end responsive websites for clients in Architecture, Travel and Design."
        title="Wordpress and React websites"
      />);
  }
}
