import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import { Component } from "react"
import Head from "next/head"

export default class extends Component {
  render() {
    return (
      <>
        <Head key="head">
          <title>Counter Strike Global Offensive  - Quiz</title>
          <meta name="title" content="Counter Strike Global Offensive  - Quiz" key="title"/>
          <meta name="description" content="Teste os seus conhecimentos sobre CSGO e vamos ver o quanto você sabe sobre o jogo"/>

          <meta property="og:type" content="website" key="type"/>
          <meta property="og:url" content="https://csgoquiz.vercel.app/" key="url"/>
          <meta property="og:title" content="Counter Strike Global Offensive  - Quiz" key="ogtitle"/>
          <meta property="og:description" content="Teste os seus conhecimentos sobre CSGO e vamos ver o quanto você sabe sobre o jogo" key="ogdesc"/>
          <meta property="og:image" content="blob:https://vercel.com/a78d2d4b-c628-48d7-9e82-ac03fd5c4d5d" key="ogimg"/>

          <meta property="twitter:card" content="summary_large_image" key="twcard"/>
          <meta property="twitter:url" content="https://csgoquiz.vercel.app/" key="twurl"/>
          <meta property="twitter:title" content="Counter Strike Global Offensive  - Quiz" key="twtittle"/>
          <meta property="twitter:description" content="Teste os seus conhecimentos sobre CSGO e vamos ver o quanto você sabe sobre o jogo" key="twdesc"/>
          <meta property="twitter:image" content="blob:https://vercel.com/a78d2d4b-c628-48d7-9e82-ac03fd5c4d5d" key="twimg"/>

          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>
        </Head>
      </>
    )
  }
}


export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}

