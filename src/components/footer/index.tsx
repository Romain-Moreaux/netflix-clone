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

Footer.Row = ({ children, ...restProps }: DefaultComponentProps) => {
  return <Row {...restProps}>{children}</Row>
}
Footer.Column = ({ children, ...restProps }: DefaultComponentProps) => {
  return <Column {...restProps}>{children}</Column>
}
Footer.Link = ({ children, ...restProps }: LinkProps) => {
  return <Link {...restProps}>{children}</Link>
}
Footer.Title = ({ children, ...restProps }: DefaultComponentProps) => {
  return <Title {...restProps}>{children}</Title>
}
Footer.Text = ({ children, ...restProps }: DefaultComponentProps) => {
  return <Text {...restProps}>{children}</Text>
}
Footer.Break = ({ ...restProps }: Partial<DefaultComponentProps>) => {
  return <Break {...restProps} />
}
