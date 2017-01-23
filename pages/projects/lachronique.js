// @flow
import React from 'react'
import Project from './';

export default class LaChronique extends React.Component {
  render () {
    return (
      <Project
        content={[
          {
            title: "Front-end",
            list: [
              "React Native (App Linking, Animated, Async Storage, Form, ListView, Scrollable TabView, WebView)",
              "Redux",
              "OneSignal (Push Notifications)",
              "Google analytics"
            ]
          },
          {
            title: "Back-end",
            list: [
              "Firebase",
              "OneSignal",
              "WordPress",
              "Amazon S3",
              "Cron for WordPress->Firebase sync and triggering push notifications"
            ]
          },
          {
            title: "Product",
            list: [
              "Helped balance pros and cons of making an app vs making a website",
              "Helped gain clarity on editorial content focus",
              "Defined main features and UX",
              "Facilitated UI design by providing set of mobile best practices"
            ]
          }
        ]}
        images={[
          {file:"lachronique-launch.png",title:"Launch Screen",screen:1},
          {file:"lachronique-day.png",title:"Day View",screen:1},
          {file:"lachronique-favorites.png",title:"Local favorites",screen:1},
          {file:"lachronique-form.png",title:"Contest form",screen:1},
          {file:"lachronique-webview.png",title:"Webview",screen:1},
          {file:"lachronique-android.png",title:"Android version",screen:1},
          {file:"lachronique-admin.png",title:"Posts admin",screen:2},
          {file:"lachronique-admin2.png",title:"Posts Schedule",screen:2}
        ]}
        links={[["Play Store", "https://play.google.com/store/apps/details?id=com.lachronique"],["App Store", "https://appsto.re/fr/Gf5Zab.i"]]}
        seoTitle="La Chronique - React Native App"
        seoDescription="React Native development for iOS and Android app."
        subTitle="Daily news and prizes related to local cultural events."
        title="La Chronique"
      />);
  }
}
