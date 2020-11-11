import React, { ReactElement } from 'react'
import { DefaultComponentProps, LinkProps } from '../../interfaces'
import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break,
} from './styles/footer'

export default function Footer({
  children,
  ...restProps
}: DefaultComponentProps): ReactElement {
  return <Container {...restProps}> {children}</Container>
}

Footer.Row = ({ children, ...restProps }: DefaultComponentProps) => (
  <Row {...restProps}>{children}</Row>
)

Footer.Column = ({ children, ...restProps }: DefaultComponentProps) => (
  <Column {...restProps}>{children}</Column>
)

Footer.Link = ({ children, ...restProps }: LinkProps) => (
  <Link {...restProps}>{children}</Link>
)

Footer.Title = ({ children, ...restProps }: DefaultComponentProps) => (
  <Title {...restProps}>{children}</Title>
)

Footer.Text = ({ children, ...restProps }: DefaultComponentProps) => (
  <Text {...restProps}>{children}</Text>
)

Footer.Break = () => <Break />
