import Head from 'next/head'

function IndexPage() {
  return (
        <>
          <Head>
            <title>Counter Strike Global Offensive  - Quiz</title>
            <meta name="title" content="Counter Strike Global Offensive  - Quiz" key="title"/>
            <meta name="description" content="Teste os seus conhecimentos sobre CSGO e vamos ver o quanto você sabe sobre o jogo"/>
  
            <meta property="og:type" content="website" key="type"/>
            <meta property="og:url" content="https://csgoquiz.vercel.app/" key="url"/>
            <meta property="og:title" content="Counter Strike Global Offensive  - Quiz" key="ogtitle"/>
            <meta property="og:description" content="Teste os seus conhecimentos sobre CSGO e vamos ver o quanto você sabe sobre o jogo" key="ogdesc"/>
            <meta property="og:image" content="https://raw.githubusercontent.com/xmarcelo195/csgoquiz/main/public/og_img.png" key="ogimg"/>
  
            <meta property="twitter:card" content="summary_large_image" key="twcard"/>
            <meta property="twitter:url" content="https://csgoquiz.vercel.app/" key="twurl"/>
            <meta property="twitter:title" content="Counter Strike Global Offensive  - Quiz" key="twtittle"/>
            <meta property="twitter:description" content="Teste os seus conhecimentos sobre CSGO e vamos ver o quanto você sabe sobre o jogo" key="twdesc"/>
            <meta property="twitter:image" content="https://raw.githubusercontent.com/xmarcelo195/csgoquiz/main/public/og_img.png" key="twimg"/>
  
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

export default IndexPage
