import React, { ReactElement } from 'react'
import { Header } from '../components'
import { DefaultComponentProps } from '../interfaces'
import * as ROUTES from '../contants/routes'
import logo from '../logo.svg'

export default function headerContainer({
  children,
}: DefaultComponentProps): ReactElement {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign in</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  )
}
