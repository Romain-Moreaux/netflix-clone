import React, { ReactElement } from 'react'
import { Link as ReachRouterLink } from 'react-router-dom'
import {
  DefaultComponentProps,
  HeaderLogoProps,
  HeaderProps,
  RouterLinkProps,
} from '../../interfaces'
import { Container, Background, ButtonLink, Logo } from './styles/header'

export default function Header({
  background = true,
  children,
  ...restProps
}: HeaderProps): ReactElement {
  return background ? (
    <Background {...restProps}>{children}</Background>
  ) : (
    <>{children}</>
  )
}

Header.Frame = ({ children, ...restProps }: DefaultComponentProps) => (
  <Container {...restProps}>{children}</Container>
)

Header.Logo = ({ to, ...restProps }: HeaderLogoProps) => (
  <ReachRouterLink to={to}>
    <Logo {...restProps} />
  </ReachRouterLink>
)

Header.ButtonLink = ({ children, ...restProps }: RouterLinkProps) => (
  <ButtonLink {...restProps}>{children}</ButtonLink>
)
