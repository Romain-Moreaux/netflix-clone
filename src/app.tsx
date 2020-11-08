import React from 'react'
import { ThemeProvider } from 'styled-components'
import { JumbotronContainer } from './containers/jumbotron'
import { theme } from './theme'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <JumbotronContainer />
    </ThemeProvider>
  )
}
