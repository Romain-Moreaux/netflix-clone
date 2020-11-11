import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Home, Browse, SignIn, SignUp } from './pages'
import * as ROUTES from './contants/routes'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { theme } from './theme'
import { FirebaseProvider } from './context'

export const App = () => {
  return (
    <FirebaseProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Route exact path={ROUTES.SIGN_IN}>
            <SignIn />
          </Route>
          <Route exact path={ROUTES.SIGN_UP}>
            <SignUp />
          </Route>
          <Route exact path={ROUTES.BROWSE}>
            <Browse />
          </Route>
          <Route exact path={ROUTES.HOME}>
            <Home />
          </Route>
        </Router>
      </ThemeProvider>
    </FirebaseProvider>
  )
}
