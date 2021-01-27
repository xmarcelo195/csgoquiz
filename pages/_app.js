import { createGlobalStyle, ThemeProvider } from 'styled-components'
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #232323;
  }
`

const theme = {
  colors: {
    primary: '#466490',
    secondary: '#C8D2EB',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
