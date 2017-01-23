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
          {file:"locomotion.png",title:"Custom JS grid opener",screen:2},
          {file:"shaddok.png",title:"Mobile-first navigation",screen:1},
          {file:"tandala.png",title:"Single Page Experience",screen:2},
          {file:"tandala-2.png",title:"Custom Mobile version",screen:1},
          {file:"virage.png",title:"Seo friendly modal windows",screen:3},
          {file:"virage-2.png",title:"iPad size adapatations",screen:4},
          {file:"construire.png",title:"Extra care for iPad version",screen:4},
          {file:"kaleido.png",title:"Complex grid responsiveness",screen:2},
          {file:"kaleidoscopeye-admin.png",title:"Clean editor admin",screen:2},
          {file:"kaleidoscopeye-admin2.png",title:"Custom post fields",screen:2}
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
