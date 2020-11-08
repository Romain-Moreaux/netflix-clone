import React from 'react'
import { ThemeProvider } from 'styled-components'
import { FooterContainer } from './containers/footer'
import { JumbotronContainer } from './containers/jumbotron'
import { theme } from './theme'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <JumbotronContainer />
      <FooterContainer />
    </ThemeProvider>
  )
}
