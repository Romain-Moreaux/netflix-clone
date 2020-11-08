import React, { ReactElement } from 'react'
import { JumbotronProps, ImageProps } from '../../interfaces'
import {
  Container,
  Inner,
  Pane,
  Title,
  SubTitle,
  Image,
  Item,
} from './styles/jumbotron'

export default function Jumbotron({
  children,
  direction = 'row',
  ...restProps
}: JumbotronProps): ReactElement {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  )
}

Jumbotron.Container = ({ children, ...restProps }: JumbotronProps) => {
  return <Container {...restProps}>{children}</Container>
}
Jumbotron.Pane = ({ children, ...restProps }: JumbotronProps) => {
  return <Pane {...restProps}>{children}</Pane>
}
Jumbotron.Title = ({ children, ...restProps }: JumbotronProps) => {
  return <Title {...restProps}>{children}</Title>
}
Jumbotron.SubTitle = ({ children, ...restProps }: JumbotronProps) => {
  return <SubTitle {...restProps}>{children}</SubTitle>
}
Jumbotron.Image = ({ ...restProps }: ImageProps) => {
  return <Image {...restProps} />
}
